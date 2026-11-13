# Deploying SERVE to the VPS

The site runs as `next start` under pm2 (process `serve-website`) in `/var/www/serve`
on the VPS (`webadmin@92.205.108.255`), behind nginx. The server never builds the
site: a finished build is uploaded and switched in.

There are two ways to deploy. Both end with the same script on the server,
`scripts/vps-activate.sh`.

## 1. Automatic: push to `main`

Every push to `main` runs `.github/workflows/deploy.yml` on GitHub: install, lint,
test, build, upload to the VPS, activate, then check <https://serve.org.uk> responds.
Pushes that only change Markdown files do not deploy.

### One-time setup

```powershell
npm run deploy:setup
```

Run this yourself on your own machine. It:

1. creates an SSH key used only for deploys (`~/.ssh/serve_deploy_ed25519`, outside the repo),
2. adds the public half to the VPS (you type the VPS password once),
3. stores the private half as the GitHub Actions secret `VPS_SSH_KEY`,
4. copies the `NEXT_PUBLIC_*` values from `.env.local` to GitHub Actions variables
   (they are compiled into the build, so GitHub needs them),
5. sets `VPS_DEPLOY_ENABLED=true`, which switches the workflow on.

`npm run deploy:setup -- -DryRun` shows each step without changing anything.
Until setup has been run, the workflow is skipped.

### Day to day

```powershell
git push origin main          # deploys
gh run watch                  # follow the deploy
gh workflow run deploy.yml    # deploy again without pushing
gh variable set VPS_DEPLOY_ENABLED --body false   # pause automatic deploys
```

## 2. Direct: from your machine

```powershell
npm run deploy:vps               # lint, test, build, upload, activate
npm run deploy:vps:skip-checks   # same, without lint and tests
```

This builds locally using `.env.local` and asks for the VPS password (or uses your
SSH key). Use it to deploy without pushing, or if GitHub is unavailable.

## What happens on the server

`scripts/vps-activate.sh`:

1. unpacks the upload into a staging folder and checks it is complete,
2. runs `npm install --omit=dev` only if `package.json` or `package-lock.json` changed,
3. swaps in `.next`, `public` and `next.config.js`, then restarts pm2,
4. waits for the site to answer on port 3000,
5. if it does not answer, puts the previous build back and reports failure.

The previous build is kept in `/var/www/serve/.release-previous` until the next deploy.
`public` is replaced as a whole, so files deleted from the repo disappear from the server.

### Manual rollback

```bash
ssh webadmin@92.205.108.255
cd /var/www/serve
rm -rf .next public next.config.js
mv .release-previous/.next .release-previous/public .release-previous/next.config.js .
pm2 restart serve-website
```

If the failed release also changed dependencies, copy `package.json` and
`package-lock.json` back from `.release-previous` and run
`npm install --omit=dev --legacy-peer-deps` before restarting.

## Environment variables

| Where | What |
|-------|------|
| GitHub Actions variables (or local `.env.local` for direct deploys) | `NEXT_PUBLIC_FIREBASE_*`, `NEXT_PUBLIC_GA_MEASUREMENT_ID` - compiled into the build |
| `/var/www/serve/.env.local` on the VPS | `RESEND_API_KEY` - read at runtime, never uploaded by a deploy |

After editing `.env.local` on the VPS, run `pm2 restart serve-website --update-env`.

## Server reference

```bash
pm2 status
pm2 logs serve-website --lines 100
pm2 restart serve-website
sudo nginx -t && sudo systemctl reload nginx
```

`ecosystem.config.cjs` is the pm2 definition (`pm2 start ecosystem.config.cjs && pm2 save`).
`nginx-default.conf` is a reference copy of the proxy configuration.
