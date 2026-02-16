@echo off
echo ========================================
echo SERVE VPS Manual Update Script
echo ========================================
echo.
echo This script will guide you through updating the VPS.
echo You will need to enter the webadmin password when prompted.
echo.
pause

echo.
echo Step 1: Checking VPS status...
ssh webadmin@92.205.108.255 "cd /var/www/serve && pm2 status"

echo.
echo Step 2: Checking if .next folder exists...
ssh webadmin@92.205.108.255 "cd /var/www/serve && ls -la .next | head -5"

echo.
echo Step 3: Cleaning node_modules...
ssh webadmin@92.205.108.255 "cd /var/www/serve && rm -rf node_modules"

echo.
echo Step 4: Installing core dependencies (this may take a few minutes)...
ssh webadmin@92.205.108.255 "cd /var/www/serve && npm install next@16.0.7 react@19.2.1 react-dom@19.2.1 --legacy-peer-deps"

echo.
echo Step 5: Installing runtime dependencies...
ssh webadmin@92.205.108.255 "cd /var/www/serve && npm install firebase@12.6.0 resend@6.5.2 clsx@2.1.1 web-vitals@5.1.0 --legacy-peer-deps"

echo.
echo Step 6: Installing PWA and icons...
ssh webadmin@92.205.108.255 "cd /var/www/serve && npm install @ducanh2912/next-pwa@10.2.9 @heroicons/react@2.2.0 --legacy-peer-deps"

echo.
echo Step 7: Installing Tailwind...
ssh webadmin@92.205.108.255 "cd /var/www/serve && npm install @tailwindcss/postcss@4.1.17 lightningcss@1.30.2 --legacy-peer-deps"

echo.
echo Step 8: Restarting PM2...
ssh webadmin@92.205.108.255 "cd /var/www/serve && pm2 restart serve-website"

echo.
echo Step 9: Saving PM2 configuration...
ssh webadmin@92.205.108.255 "pm2 save"

echo.
echo Step 10: Checking website status...
ssh webadmin@92.205.108.255 "pm2 status && pm2 logs serve-website --lines 10 --nostream"

echo.
echo ========================================
echo Deployment Complete!
echo ========================================
echo.
echo Website should be live at: http://92.205.108.255
echo.
echo To check logs: ssh webadmin@92.205.108.255 "pm2 logs serve-website"
echo.
pause
