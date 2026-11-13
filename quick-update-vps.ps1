# Direct deploy to the VPS: build here, upload the build, switch the server to it.
# Run from the project folder:   npm run deploy:vps
#
# Pushing to main does the same thing automatically through GitHub Actions
# (.github/workflows/deploy.yml). Use this script when you want to deploy
# without pushing, or when GitHub is unavailable.
param(
    [string]$VpsHost = '92.205.108.255',
    [string]$VpsUser = 'webadmin',
    [switch]$SkipChecks
)

$target = "$VpsUser@$VpsHost"

Write-Host ""
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "SERVE VPS - Direct Deploy" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

if (-not $SkipChecks) {
    Write-Host "Running lint and tests..." -ForegroundColor Yellow
    npm run lint
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Lint failed!" -ForegroundColor Red
        exit 1
    }
    npm run test:all
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Tests failed!" -ForegroundColor Red
        exit 1
    }
    Write-Host ""
}

# Ensure we have a fresh local build
Write-Host "Building locally..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "Build successful!" -ForegroundColor Green
Write-Host ""

# Create archive. .next/dev holds Turbopack dev-server artifacts (~430 MB) that are
# useless in production, and .next/cache is build cache - excluding both keeps the upload small.
Write-Host "Creating archive of .next folder (excluding dev and build cache)..." -ForegroundColor Yellow
if (Test-Path "next-build.tar.gz") {
    Remove-Item "next-build.tar.gz"
}
tar --exclude=.next/dev --exclude=.next/cache -czf next-build.tar.gz .next package.json package-lock.json next.config.js public

$archiveSize = [math]::Round((Get-Item next-build.tar.gz).Length / 1MB, 1)
Write-Host "Archive created! Size: ${archiveSize} MB" -ForegroundColor Green
Write-Host ""

# Upload via SCP with keepalive + bandwidth limit to survive flaky connections
Write-Host "Uploading to VPS (enter the VPS password if asked)..." -ForegroundColor Yellow
scp -o ServerAliveInterval=30 -o ServerAliveCountMax=20 -o TCPKeepAlive=yes -o ConnectTimeout=30 -o Compression=no -l 8000 next-build.tar.gz scripts/vps-activate.sh "${target}:/tmp/"

if ($LASTEXITCODE -eq 0) {
    Write-Host "Upload successful!" -ForegroundColor Green
    Write-Host ""
    
    # vps-activate.sh installs dependencies, switches to the new build, restarts pm2,
    # checks the site answers and rolls back if it does not. sed strips Windows line endings.
    Write-Host "Switching the VPS to the new build..." -ForegroundColor Yellow
    ssh $target "sed -i 's/\r`$//' /tmp/vps-activate.sh && bash /tmp/vps-activate.sh /tmp/next-build.tar.gz"
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "=====================================" -ForegroundColor Green
        Write-Host "Deployment Successful!" -ForegroundColor Green  
        Write-Host "=====================================" -ForegroundColor Green
        Write-Host ""
        Write-Host "Website updated at: https://serve.org.uk" -ForegroundColor Cyan
    } else {
        Write-Host "Deployment failed. The messages above say whether the previous build was restored." -ForegroundColor Red
        Write-Host "Logs: ssh $target 'pm2 logs serve-website --lines 50'" -ForegroundColor Yellow
        exit 1
    }
} else {
    Write-Host "Upload failed!" -ForegroundColor Red
    Write-Host "Make sure you can connect: ssh $target" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
