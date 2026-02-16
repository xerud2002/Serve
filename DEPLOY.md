# VPS Deployment Guide

This guide explains how to deploy updates to the SERVE website VPS at `92.205.108.255`.

## Quick Deploy

Run the automated deployment script:

```bash
npm run deploy:vps
```

Or skip tests (not recommended):

```bash
npm run deploy:vps:skip-tests
```

## What the Script Does

1. **Pre-deployment Checks**:
   - Runs ESLint to check code quality
   - Runs all test suites (forms, compatibility, booking)
   - Builds project locally to verify no errors

2. **Git Commit & Push**:
   - Shows current changes
   - Prompts for commit message
   - Pushes to `main` branch

3. **VPS Deployment** (choose one method):
   - **Git Pull**: Automatically pulls changes on VPS and rebuilds
   - **Manual SSH**: Provides commands to run manually
   - **Instructions**: Shows full deployment guide

4. **Post-deployment**:
   - Verifies website is responding
   - Shows useful monitoring commands

## Manual Deployment Steps

If you prefer to deploy manually:

### 1. SSH into VPS

```bash
ssh root@92.205.108.255
```

### 2. Navigate to Project

```bash
cd /var/www/serve
```

### 3. Pull Latest Changes

```bash
git pull origin main
```

### 4. Install Dependencies

```bash
npm ci --production
```

### 5. Build Next.js

```bash
npm run build
```

### 6. Restart Service

If using PM2:
```bash
pm2 restart serve-website
```

If using systemd:
```bash
sudo systemctl restart serve-website
```

Manual restart:
```bash
pkill -f 'next start'
nohup npm run start > /dev/null 2>&1 &
```

## PM2 Setup (Recommended)

### Initial Setup

1. Copy `ecosystem.config.js` to VPS:

```bash
scp ecosystem.config.js root@92.205.108.255:/var/www/serve/
```

2. Start with PM2 on VPS:

```bash
ssh root@92.205.108.255
cd /var/www/serve
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### PM2 Commands

```bash
# Check status
pm2 status

# View logs
pm2 logs serve-website

# View last 50 lines
pm2 logs serve-website --lines 50

# Real-time monitoring
pm2 monit

# Restart application
pm2 restart serve-website

# Stop application
pm2 stop serve-website

# Delete from PM2
pm2 delete serve-website
```

## Systemd Service Setup (Alternative)

Create `/etc/systemd/system/serve-website.service`:

```ini
[Unit]
Description=SERVE Next.js Website
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/serve
ExecStart=/usr/bin/npm start
Restart=on-failure
Environment=NODE_ENV=production
Environment=PORT=3000

[Install]
WantedBy=multi-user.target
```

Enable and start:

```bash
sudo systemctl daemon-reload
sudo systemctl enable serve-website
sudo systemctl start serve-website
```

## Nginx Configuration

The nginx config at `/etc/nginx/sites-available/default` should already be configured to proxy to port 3000.

If you need to update it:

```bash
sudo nano /etc/nginx/sites-available/default
sudo nginx -t
sudo systemctl reload nginx
```

## Troubleshooting

### Website not responding after deployment

1. Check if Next.js is running:
```bash
ssh root@92.205.108.255
pm2 status
# OR
ps aux | grep 'next start'
```

2. View logs for errors:
```bash
pm2 logs serve-website --lines 100
# OR
tail -f /var/www/serve/logs/err.log
```

3. Check port 3000:
```bash
curl http://localhost:3000
```

4. Check nginx:
```bash
sudo systemctl status nginx
sudo nginx -t
```

### Build fails on VPS

If VPS has limited RAM, build locally and deploy the `.next` folder:

```bash
# On local machine
npm run build
scp -r .next root@92.205.108.255:/var/www/serve/

# On VPS
ssh root@92.205.108.255
cd /var/www/serve
pm2 restart serve-website
```

### Permission issues

```bash
ssh root@92.205.108.255
cd /var/www/serve
sudo chown -R www-data:www-data .
sudo chmod -R 755 .
```

## Environment Variables

Ensure `.env.local` is properly configured on VPS:

```bash
ssh root@92.205.108.255
cd /var/www/serve
nano .env.local
```

Required variables:
- `NEXT_PUBLIC_FIREBASE_*` (Firebase config)
- `RESEND_API_KEY` (Email service)
- `CONTACT_EMAIL` (Contact form recipient)

After updating `.env.local`, restart the service:
```bash
pm2 restart serve-website
```

## Monitoring & Logs

### View real-time logs
```bash
ssh root@92.205.108.255 "pm2 logs serve-website"
```

### Check memory usage
```bash
ssh root@92.205.108.255 "pm2 monit"
```

### Check website response time
```bash
curl -o /dev/null -s -w 'Response time: %{time_total}s\n' http://92.205.108.255
```

## Automated Deployments (Future)

Consider setting up GitHub Actions for automatic deployments:

1. Add VPS SSH key to GitHub Secrets
2. Create `.github/workflows/deploy.yml`
3. Auto-deploy on push to `main` branch

Would you like me to create a GitHub Actions workflow for this?

## Support

If deployment fails:
1. Check the error message in the script output
2. View VPS logs: `ssh root@92.205.108.255 "pm2 logs serve-website --lines 50"`
3. Verify VPS has enough disk space: `ssh root@92.205.108.255 "df -h"`
4. Check if all services are running: `ssh root@92.205.108.255 "systemctl status nginx"`
