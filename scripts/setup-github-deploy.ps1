# One-time setup for automatic deploys from GitHub to the VPS.
#
# Run it yourself from the project folder:   npm run deploy:setup
#
# What it does:
#   1. Creates an SSH key used only for deployments. It is stored in your user
#      profile (never in the repository).
#   2. Adds the public half of that key to the VPS. You type the VPS password once.
#   3. Stores the private half as an encrypted GitHub Actions secret.
#   4. Copies the NEXT_PUBLIC_* build settings from .env.local to GitHub Actions
#      variables. Server-only values such as RESEND_API_KEY are NOT uploaded;
#      they stay in /var/www/serve/.env.local on the VPS.
#   5. Switches the deploy workflow on.
#
# Use -DryRun to see every step without contacting the VPS or GitHub.
param(
    [string]$VpsHost = '92.205.108.255',
    [string]$VpsUser = 'webadmin',
    [string]$AppDir = '/var/www/serve',
    [string]$KeyPath = (Join-Path $HOME '.ssh\serve_deploy_ed25519'),
    [switch]$DryRun
)

function Write-Step($text) { Write-Host ''; Write-Host "==> $text" -ForegroundColor Cyan }
function Stop-Setup($text) { Write-Host "ERROR: $text" -ForegroundColor Red; exit 1 }

# gh reads the value from a file so quotes, spaces and line breaks survive unchanged
function Set-GitHubValue($kind, $name, $value) {
    if ($DryRun) { Write-Host "    [dry run] gh $kind set $name" -ForegroundColor DarkGray; return }
    $tmp = [IO.Path]::GetTempFileName()
    try {
        [IO.File]::WriteAllText($tmp, $value, (New-Object Text.UTF8Encoding $false))
        cmd /c "gh $kind set $name < `"$tmp`""
        if ($LASTEXITCODE -ne 0) { Stop-Setup "Could not set GitHub $kind $name." }
    } finally {
        Remove-Item $tmp -ErrorAction SilentlyContinue
    }
}

Write-Host ''
Write-Host 'SERVE - set up automatic deploys from GitHub to the VPS' -ForegroundColor Cyan
if ($DryRun) { Write-Host '(dry run: nothing will be changed)' -ForegroundColor Yellow }

# --- Checks -----------------------------------------------------------------
Write-Step 'Checking prerequisites'
foreach ($tool in 'gh', 'ssh', 'ssh-keygen', 'ssh-keyscan') {
    if (-not (Get-Command $tool -ErrorAction SilentlyContinue)) { Stop-Setup "'$tool' is not installed or not on PATH." }
}
if (-not (Test-Path '.env.local')) { Stop-Setup 'Run this from the project folder (no .env.local found here).' }
if (-not (Test-Path '.github\workflows\deploy.yml')) { Stop-Setup 'The deploy workflow (.github\workflows\deploy.yml) is missing.' }

gh auth status *> $null
if ($LASTEXITCODE -ne 0) { Stop-Setup "GitHub CLI is not signed in. Run 'gh auth login' first." }
$repo = gh repo view --json nameWithOwner --jq .nameWithOwner
if ($LASTEXITCODE -ne 0 -or -not $repo) { Stop-Setup 'Could not work out which GitHub repository this folder belongs to.' }

$buildSettings = [ordered]@{}
foreach ($line in Get-Content '.env.local') {
    if ($line -match '^\s*(NEXT_PUBLIC_[A-Z0-9_]+)\s*=\s*(.*?)\s*$') {
        $name = $Matches[1]
        $value = $Matches[2]
        if ($value -match '^"(.*)"$' -or $value -match "^'(.*)'$") { $value = $Matches[1] }
        if ($value) { $buildSettings[$name] = $value }
    }
}
foreach ($required in 'NEXT_PUBLIC_FIREBASE_API_KEY', 'NEXT_PUBLIC_FIREBASE_PROJECT_ID', 'NEXT_PUBLIC_FIREBASE_APP_ID') {
    if (-not $buildSettings.Contains($required)) { Stop-Setup "$required is missing from .env.local." }
}

Write-Host "    GitHub repository : $repo"
Write-Host "    VPS               : $VpsUser@$VpsHost ($AppDir)"
Write-Host "    Deploy key        : $KeyPath"
Write-Host "    Build settings    : $($buildSettings.Keys -join ', ')"
if (-not $DryRun) {
    $answer = Read-Host 'Continue? (y/n)'
    if ($answer -ne 'y') { Write-Host 'Cancelled. Nothing was changed.'; exit 0 }
}

# --- 1. Deploy key ----------------------------------------------------------
Write-Step 'Creating the deploy key'
if (Test-Path $KeyPath) {
    Write-Host '    Key already exists, reusing it.'
} elseif ($DryRun) {
    Write-Host '    [dry run] ssh-keygen -t ed25519 (no passphrase)' -ForegroundColor DarkGray
} else {
    New-Item -ItemType Directory -Path (Split-Path $KeyPath) -Force | Out-Null
    # cmd passes the empty passphrase correctly; PowerShell would drop the argument
    cmd /c "ssh-keygen -q -t ed25519 -N `"`" -C `"github-actions-serve-deploy`" -f `"$KeyPath`""
    if ($LASTEXITCODE -ne 0 -or -not (Test-Path "$KeyPath.pub")) { Stop-Setup 'ssh-keygen failed.' }
}

# --- 2. Authorise the key on the VPS ----------------------------------------
Write-Step 'Adding the public key to the VPS (enter the VPS password when asked)'
if ($DryRun) {
    Write-Host "    [dry run] append the public key to ~/.ssh/authorized_keys for $VpsUser" -ForegroundColor DarkGray
} else {
    $publicKey = (Get-Content "$KeyPath.pub" -Raw).Trim()
    $authorise = "umask 077; mkdir -p ~/.ssh; touch ~/.ssh/authorized_keys; grep -qxF '$publicKey' ~/.ssh/authorized_keys || echo '$publicKey' >> ~/.ssh/authorized_keys"
    ssh "$VpsUser@$VpsHost" $authorise
    if ($LASTEXITCODE -ne 0) { Stop-Setup 'Could not add the key to the VPS.' }

    Write-Step 'Checking the key works and the VPS is ready'
    $probe = "echo key-ok; test -w $AppDir && echo app-dir-ok; command -v node >/dev/null && echo node-`$(node -v); command -v npm >/dev/null && echo npm-ok; command -v pm2 >/dev/null && echo pm2-ok"
    $result = ssh -i $KeyPath -o BatchMode=yes -o IdentitiesOnly=yes "$VpsUser@$VpsHost" $probe
    if ($LASTEXITCODE -ne 0 -or ($result -notcontains 'key-ok')) { Stop-Setup 'Key login failed. The VPS may not allow key authentication for this user.' }
    $result | ForEach-Object { Write-Host "    $_" }
    foreach ($need in 'app-dir-ok', 'npm-ok', 'pm2-ok') {
        if ($result -notcontains $need) { Stop-Setup "The VPS check '$need' failed for a non-interactive login. Deploys run that way, so fix this first." }
    }
}

# --- 3. Host key ------------------------------------------------------------
Write-Step 'Recording the VPS host key'
$knownHosts = ''
if (-not $DryRun) {
    # Prefer the entry you already accepted when you first connected to the VPS
    $knownHosts = (ssh-keygen -F $VpsHost 2>$null | Where-Object { $_ -and $_ -notmatch '^#' }) -join "`n"
    if (-not $knownHosts) { $knownHosts = (ssh-keyscan -t ed25519 $VpsHost 2>$null | Where-Object { $_ -and $_ -notmatch '^#' }) -join "`n" }
    if (-not $knownHosts) { Stop-Setup 'Could not read the VPS host key.' }
}

# --- 4. GitHub secret and variables -----------------------------------------
Write-Step "Saving settings to GitHub ($repo)"
if ($DryRun) {
    Write-Host '    [dry run] gh secret set VPS_SSH_KEY' -ForegroundColor DarkGray
} else {
    cmd /c "gh secret set VPS_SSH_KEY < `"$KeyPath`""
    if ($LASTEXITCODE -ne 0) { Stop-Setup 'Could not store the deploy key as a GitHub secret.' }
}
Set-GitHubValue 'variable' 'VPS_HOST' $VpsHost
Set-GitHubValue 'variable' 'VPS_USER' $VpsUser
Set-GitHubValue 'variable' 'VPS_KNOWN_HOSTS' $knownHosts
foreach ($name in $buildSettings.Keys) { Set-GitHubValue 'variable' $name $buildSettings[$name] }

# --- 5. Switch the workflow on ----------------------------------------------
Write-Step 'Switching the deploy workflow on'
Set-GitHubValue 'variable' 'VPS_DEPLOY_ENABLED' 'true'

Write-Host ''
Write-Host 'Done.' -ForegroundColor Green
Write-Host 'Every push to main now builds on GitHub and deploys to the VPS.'
Write-Host 'Deploy without pushing:   gh workflow run deploy.yml'
Write-Host 'Watch a deploy:           gh run watch'
Write-Host 'Pause automatic deploys:  gh variable set VPS_DEPLOY_ENABLED --body false'
Write-Host ''
