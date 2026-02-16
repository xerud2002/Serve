# SERVE Website - VPS Deployment Script
param(
    [string]$VPS_IP = "92.205.108.255",
    [string]$VPS_USER = "webadmin",
    [string]$DEPLOY_PATH = "/var/www/serve",
    [switch]$SkipTests = $false
)

Write-Host ""
Write-Host "================================" -ForegroundColor Cyan
Write-Host "SERVE VPS Deployment Script" -ForegroundColor Cyan  
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Pre-deployment checks
Write-Host "Step 1: Running pre-deployment checks..." -ForegroundColor Yellow
Write-Host ""

if (-not $SkipTests) {
    Write-Host "Running lint..." -ForegroundColor Green
    npm run lint
    if ($LASTEXITCODE -ne 0) {
        Write-Host "ERROR: Lint failed!" -ForegroundColor Red
        exit 1
    }

    Write-Host ""
    Write-Host "Running tests..." -ForegroundColor Green
    npm run test:all
    if ($LASTEXITCODE -ne 0) {
        Write-Host "ERROR: Tests failed!" -ForegroundColor Red
        exit 1
    }
}

# Step 2: Build
Write-Host ""
Write-Host "Step 2: Building project..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Build failed!" -ForegroundColor Red
    exit 1
}
Write-Host "Build successful!" -ForegroundColor Green

# Step 3: Git push
Write-Host ""
Write-Host "Step 3: Committing changes to Git..." -ForegroundColor Yellow
git status --short
Write-Host ""
$continue = Read-Host "Commit and push changes? (y/n)"

if ($continue -eq 'y') {
    $commitMessage = Read-Host "Enter commit message (or press Enter for default)"
    if ([string]::IsNullOrWhiteSpace($commitMessage)) {
        $commitMessage = "Deploy: Update website $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
    }
    
    git add .
    git commit -m "$commitMessage"
    git push origin main
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "ERROR: Git push failed!" -ForegroundColor Red
        exit 1
    }
    Write-Host "Changes pushed successfully!" -ForegroundColor Green
}

# Step 4: Deploy to VPS
Write-Host ""
Write-Host "Step 4: Deploying to VPS..." -ForegroundColor Yellow
Write-Host ""
Write-Host "Choose deployment method:" -ForegroundColor Cyan
Write-Host "1. Automated Git Pull (recommended)" -ForegroundColor White
Write-Host "2. Manual SSH" -ForegroundColor White
Write-Host "3. Show instructions" -ForegroundColor White
Write-Host ""
$method = Read-Host "Enter choice (1-3)"

if ($method -eq "1") {
    Write-Host ""
    Write-Host "Deploying via Git Pull..." -ForegroundColor Cyan
    
    $cmd = "cd $DEPLOY_PATH && git pull origin main && npm ci --production && npm run build && pm2 restart serve-website"
    
    Write-Host "Connecting to $VPS_USER@$VPS_IP..." -ForegroundColor Gray
    ssh "$VPS_USER@$VPS_IP" $cmd
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "Deployment successful!" -ForegroundColor Green
        Write-Host "Website updated at: http://$VPS_IP" -ForegroundColor Cyan
    } else {
        Write-Host "Deployment failed!" -ForegroundColor Red
        exit 1
    }
}
elseif ($method -eq "2") {
    Write-Host ""
    Write-Host "Manual SSH Commands:" -ForegroundColor Cyan
    Write-Host  ""
    Write-Host "ssh $VPS_USER@$VPS_IP" -ForegroundColor White
    Write-Host "cd $DEPLOY_PATH" -ForegroundColor Gray
    Write-Host "git pull origin main" -ForegroundColor Gray
    Write-Host "npm ci --production" -ForegroundColor Gray
    Write-Host "npm run build" -ForegroundColor Gray
    Write-Host "pm2 restart serve-website" -ForegroundColor Gray
    Write-Host ""
    
    $openSSH = Read-Host "Open SSH connection? (y/n)"
    if ($openSSH -eq 'y') {
        ssh "$VPS_USER@$VPS_IP"
    }
}
elseif ($method -eq "3") {
    Write-Host ""
    Write-Host "Deployment Instructions:" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "1. SSH: ssh $VPS_USER@$VPS_IP" -ForegroundColor White
    Write-Host "2. Navigate: cd $DEPLOY_PATH" -ForegroundColor White
    Write-Host "3. Pull: git pull origin main" -ForegroundColor White
    Write-Host "4. Install: npm ci --production" -ForegroundColor White
    Write-Host "5. Build: npm run build" -ForegroundColor White
    Write-Host "6. Restart: pm2 restart serve-website" -ForegroundColor White
    Write-Host ""
    Write-Host "See DEPLOY.md for more details" -ForegroundColor Gray
}
else {
    Write-Host "Invalid choice!" -ForegroundColor Red
    exit 1
}

# Step 5: Verification
Write-Host ""
Write-Host "Step 5: Verifying deployment..." -ForegroundColor Yellow
Write-Host "Checking website..." -ForegroundColor Gray

try {
    $response = Invoke-WebRequest -Uri "http://$VPS_IP" -TimeoutSec 10 -UseBasicParsing
    if ($response.StatusCode -eq 200) {
        Write-Host "Website is responding! (HTTP 200)" -ForegroundColor Green
    }
} catch {
    Write-Host "Website not responding. Check VPS logs." -ForegroundColor Red
    Write-Host "Run: ssh $VPS_USER@$VPS_IP 'pm2 logs serve-website'" -ForegroundColor Gray
}

Write-Host ""
Write-Host "================================" -ForegroundColor Cyan
Write-Host "Deployment Complete!" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Useful commands:" -ForegroundColor Yellow
Write-Host "- Check status: ssh $VPS_USER@$VPS_IP 'pm2 status'" -ForegroundColor White
Write-Host "- View logs: ssh $VPS_USER@$VPS_IP 'pm2 logs serve-website'" -ForegroundColor White
Write-Host "- Restart: ssh $VPS_USER@$VPS_IP 'pm2 restart serve-website'" -ForegroundColor White
Write-Host ""
