# Quick VPS Update - Upload Pre-Built Files
# Run this from PowerShell in the project directory

Write-Host ""
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "SERVE VPS - Quick Update (Pre-Built)" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Ensure we have a fresh local build
Write-Host "Building locally..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "Build successful!" -ForegroundColor Green
Write-Host ""

# Create archive
Write-Host "Creating archive of .next folder..." -ForegroundColor Yellow
if (Test-Path "next-build.tar.gz") {
    Remove-Item "next-build.tar.gz"
}
tar -czf next-build.tar.gz .next package.json package-lock.json next.config.js public

Write-Host "Archive created!" -ForegroundColor Green
Write-Host ""

# Upload via SCP
Write-Host "Uploading to VPS (you'll need to enter password)..." -ForegroundColor Yellow
scp next-build.tar.gz webadmin@92.205.108.255:/tmp/

if ($LASTEXITCODE -eq 0) {
    Write-Host "Upload successful!" -ForegroundColor Green
    Write-Host ""
    
    # Extract and restart on VPS
    Write-Host "Extracting and restarting on VPS..." -ForegroundColor Yellow
    ssh webadmin@92.205.108.255 "cd /var/www/serve && rm -rf .next && tar -xzf /tmp/next-build.tar.gz && rm /tmp/next-build.tar.gz && npm install --omit=dev --legacy-peer-deps && pm2 restart serve-website && echo 'Deployment complete!'"
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "=====================================" -ForegroundColor Green
        Write-Host "Deployment Successful!" -ForegroundColor Green  
        Write-Host "=====================================" -ForegroundColor Green
        Write-Host ""
        Write-Host "Website updated at: http://92.205.108.255" -ForegroundColor Cyan
    } else {
        Write-Host "Restart failed. Check PM2 logs." -ForegroundColor Red
    }
} else {
    Write-Host "Upload failed!" -ForegroundColor Red
    Write-Host "Make sure you can connect: ssh webadmin@92.205.108.255" -ForegroundColor Yellow
}

Write-Host ""
