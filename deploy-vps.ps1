# SERVE Website - VPS Deployment Script
# This script deploys the latest changes to your VPS

param(
    [string]$VPS_IP = "92.205.108.255",
    [string]$VPS_USER = "root",
    [string]$DEPLOY_PATH = "/var/www/serve",
    [switch]$SkipTests = $false
)

Write-Host "`n🚀 SERVE VPS Deployment Script" -ForegroundColor Cyan
Write-Host "================================`n" -Foreground Color Cyan

# Step 1: Pre-deployment checks
Write-Host "📋 Step 1: Running pre-deployment checks..." -ForegroundColor Yellow

if (-not $SkipTests) {
    Write-Host "`n✓ Running lint..." -ForegroundColor Green
    npm run lint
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Lint failed! Fix errors before deploying." -ForegroundColor Red
        exit 1
    }

    Write-Host "`n✓ Running tests..." -ForegroundColor Green
    npm run test:all
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Tests failed! Fix errors before deploying." -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "⚠️  Skipping tests (not recommended)" -ForegroundColor Yellow
}

# Step 2: Build locally to verify
Write-Host "`n📦 Step 2: Building project locally to verify..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed! Fix errors before deploying." -ForegroundColor Red
    exit 1
}

Write-Host "`n✅ Local build successful!" -ForegroundColor Green

# Step 3: Commit and push changes (if using Git)
Write-Host "`n📤 Step 3: Committing and pushing changes to Git..." -ForegroundColor Yellow
Write-Host "Current git status:" -ForegroundColor Gray
git status --short

$continue = Read-Host "`nDo you want to commit and push these changes? (y/n)"
if ($continue -eq 'y' -or $continue -eq 'Y') {
    $commitMessage = Read-Host "Enter commit message"
    if ([string]::IsNullOrWhiteSpace($commitMessage)) {
        $commitMessage = "Deploy: Update website $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
    }
    
    git add .
    git commit -m "$commitMessage"
    git push origin main
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Git push failed!" -ForegroundColor Red
        exit 1
    }
    Write-Host "✅ Changes pushed to Git" -ForegroundColor Green
} else {
    Write-Host "⚠️  Skipping Git commit/push" -ForegroundColor Yellow
}

# Step 4: Deploy to VPS
Write-Host "`n🌐 Step 4: Deploying to VPS ($VPS_IP)..." -ForegroundColor Yellow

Write-Host "`nChoose deployment method:" -ForegroundColor Cyan
Write-Host "1. Git Pull (recommended if VPS has Git repo)" -ForegroundColor White
Write-Host "2. SSH Commands (manual commands)" -ForegroundColor White
Write-Host "3. Show deployment instructions only" -ForegroundColor White
$method = Read-Host "`nEnter choice (1-3)"

switch ($method) {
    "1" {
        Write-Host "`n📥 Method 1: Git Pull Deployment`n" -ForegroundColor Cyan
        
        # SSH commands to run on VPS
        $sshCommands = @"
cd $DEPLOY_PATH &&
echo '🔄 Pulling latest changes...' &&
git pull origin main &&
echo '📦 Installing dependencies...' &&
npm ci --production &&
echo '🏗️ Building Next.js application...' &&
npm run build &&
echo '🔄 Restarting Next.js service...' &&
pm2 restart serve-website || npm run start &
echo '✅ Deployment complete!'
"@

        Write-Host "Executing deployment commands on VPS..." -ForegroundColor Yellow
        Write-Host "Command: ssh $VPS_USER@$VPS_IP" -ForegroundColor Gray
        
        # Execute SSH command
        ssh "$VPS_USER@$VPS_IP" $sshCommands
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "`n✅ VPS deployment successful!" -ForegroundColor Green
            Write-Host "`n🌍 Your website should now be updated at: http://$VPS_IP" -ForegroundColor Cyan
        } else {
            Write-Host "`n❌ VPS deployment failed! Check errors above." -ForegroundColor Red
            exit 1
        }
    }
    
    "2" {
        Write-Host "`n💻 Method 2: Manual SSH Commands`n" -ForegroundColor Cyan
        Write-Host "Connect to your VPS and run these commands:`n" -ForegroundColor Yellow
        
        Write-Host "ssh $VPS_USER@$VPS_IP`n" -ForegroundColor White
        Write-Host "cd $DEPLOY_PATH" -ForegroundColor Gray
        Write-Host "git pull origin main" -ForegroundColor Gray
        Write-Host "npm ci --production" -ForegroundColor Gray
        Write-Host "npm run build" -ForegroundColor Gray
        Write-Host "pm2 restart serve-website" -ForegroundColor Gray
        Write-Host "# OR if not using PM2:" -ForegroundColor DarkGray
        Write-Host "# pkill -f 'next start'" -ForegroundColor DarkGray
        Write-Host "# nohup npm run start > /dev/null 2>&1 &`n" -ForegroundColor DarkGray
        
        $openSSH = Read-Host "Open SSH connection now? (y/n)"
        if ($openSSH -eq 'y' -or $openSSH -eq 'Y') {
            ssh "$VPS_USER@$VPS_IP"
        }
    }
    
    "3" {
        Write-Host "`n📖 Deployment Instructions`n" -ForegroundColor Cyan
        Write-Host "=========================`n" -ForegroundColor Cyan
        
        Write-Host "Option A: Git-based Deployment (Recommended)" -ForegroundColor Yellow
        Write-Host "---------------------------------------------" -ForegroundColor Yellow
        Write-Host "1. SSH into your VPS: ssh $VPS_USER@$VPS_IP" -ForegroundColor White
        Write-Host "2. Navigate to project: cd $DEPLOY_PATH" -ForegroundColor White
        Write-Host "3. Pull changes: git pull origin main" -ForegroundColor White
        Write-Host "4. Install deps: npm ci --production" -ForegroundColor White
        Write-Host "5. Build: npm run build" -ForegroundColor White
        Write-Host "6. Restart: pm2 restart serve-website`n" -ForegroundColor White
        
        Write-Host "Option B: PM2 Ecosystem (if not set up)" -ForegroundColor Yellow
        Write-Host "---------------------------------------" -ForegroundColor Yellow
        Write-Host "Create ecosystem.config.js on VPS:" -ForegroundColor White
        Write-Host @"
module.exports = {
  apps: [{
    name: 'serve-website',
    script: 'npm',
    args: 'start',
    cwd: '$DEPLOY_PATH',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
"@ -ForegroundColor Gray
        Write-Host "`nThen run: pm2 start ecosystem.config.js`n" -ForegroundColor White
        
        Write-Host "Option C: Systemd Service (Alternative to PM2)" -ForegroundColor Yellow
        Write-Host "----------------------------------------------" -ForegroundColor Yellow
        Write-Host "Create /etc/systemd/system/serve-website.service:" -ForegroundColor White
        Write-Host @"
[Unit]
Description=SERVE Next.js Website
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=$DEPLOY_PATH
ExecStart=/usr/bin/npm start
Restart=on-failure
Environment=NODE_ENV=production
Environment=PORT=3000

[Install]
WantedBy=multi-user.target
"@ -ForegroundColor Gray
        Write-Host "`nThen run:" -ForegroundColor White
        Write-Host "sudo systemctl daemon-reload" -ForegroundColor Gray
        Write-Host "sudo systemctl enable serve-website" -ForegroundColor Gray
        Write-Host "sudo systemctl restart serve-website`n" -ForegroundColor Gray
    }
    
    default {
        Write-Host "❌ Invalid choice. Exiting." -ForegroundColor Red
        exit 1
    }
}

# Step 5: Post-deployment checks
Write-Host "`n🔍 Step 5: Post-deployment verification..." -ForegroundColor Yellow

Write-Host "`nChecking if website responds..." -ForegroundColor Gray
try {
    $response = Invoke-WebRequest -Uri "http://$VPS_IP" -TimeoutSec 10 -UseBasicParsing
    if ($response.StatusCode -eq 200) {
        Write-Host "✅ Website is responding (HTTP $($response.StatusCode))" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Website responded with HTTP $($response.StatusCode)" -ForegroundColor Yellow
    }
} catch {
    Write-Host "❌ Website is not responding. Check VPS logs:" -ForegroundColor Red
    Write-Host "   ssh $VPS_USER@$VPS_IP 'pm2 logs serve-website --lines 50'" -ForegroundColor Gray
}

Write-Host "`n🎉 Deployment process complete!" -ForegroundColor Green
Write-Host "================================`n" -ForegroundColor Cyan

Write-Host "Useful commands:" -ForegroundColor Yellow
Write-Host "• Check VPS status: ssh $VPS_USER@$VPS_IP 'pm2 status'" -ForegroundColor White
Write-Host "• View logs: ssh $VPS_USER@$VPS_IP 'pm2 logs serve-website'" -ForegroundColor White
Write-Host "• Restart service: ssh $VPS_USER@$VPS_IP 'pm2 restart serve-website'" -ForegroundColor White
Write-Host "• Monitor realtime: ssh $VPS_USER@$VPS_IP 'pm2 monit'`n" -ForegroundColor White
