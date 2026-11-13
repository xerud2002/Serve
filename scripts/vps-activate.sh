#!/usr/bin/env bash
# Activates an uploaded release on the VPS.
#
# Used by .github/workflows/deploy.yml and quick-update-vps.ps1, which upload a
# release archive plus this script to /tmp and then run:
#   bash /tmp/vps-activate.sh /tmp/serve-release.tar.gz
#
# The live site is only touched after the archive has unpacked cleanly and
# dependencies have installed. If the new build does not answer on its port,
# the previous build is put back.
set -euo pipefail

ARCHIVE="${1:?usage: vps-activate.sh <release.tar.gz>}"
APP_DIR="${APP_DIR:-/var/www/serve}"
PM2_APP="${PM2_APP:-serve-website}"
PORT="${PORT:-3000}"
STAGE="$APP_DIR/.release-next"
PREVIOUS="$APP_DIR/.release-previous"
SWAPPED_ITEMS=(.next public next.config.js)
PACKAGE_FILES=(package.json package-lock.json)

install_dependencies() {
  (cd "$APP_DIR" && npm install --omit=dev --legacy-peer-deps --no-audit --no-fund)
}

site_is_up() {
  local attempt
  for attempt in $(seq 1 30); do
    if node -e "require('http').get('http://127.0.0.1:$PORT/', r => { r.resume(); process.exitCode = r.statusCode < 400 ? 0 : 1 }).on('error', () => { process.exitCode = 1 }).setTimeout(5000, function () { this.destroy(new Error('timeout')) })"; then
      return 0
    fi
    sleep 2
  done
  return 1
}

[ -f "$ARCHIVE" ] || { echo "Release archive $ARCHIVE not found." >&2; exit 1; }
[ -d "$APP_DIR" ] || { echo "App directory $APP_DIR not found." >&2; exit 1; }

echo "==> Unpacking release"
rm -rf "$STAGE"
mkdir -p "$STAGE"
tar -xzf "$ARCHIVE" -C "$STAGE"
for required in .next/BUILD_ID public next.config.js "${PACKAGE_FILES[@]}"; do
  if [ ! -e "$STAGE/$required" ]; then
    echo "Release is missing $required. The live site has not been changed." >&2
    rm -rf "$STAGE"
    exit 1
  fi
done

echo "==> Installing production dependencies"
rm -rf "$PREVIOUS"
mkdir -p "$PREVIOUS"
dependencies_changed=false
for file in "${PACKAGE_FILES[@]}"; do
  if ! cmp -s "$STAGE/$file" "$APP_DIR/$file"; then
    dependencies_changed=true
  fi
  if [ -e "$APP_DIR/$file" ]; then
    cp "$APP_DIR/$file" "$PREVIOUS/$file"
  fi
done
if [ "$dependencies_changed" = true ] || [ ! -d "$APP_DIR/node_modules" ]; then
  for file in "${PACKAGE_FILES[@]}"; do
    cp "$STAGE/$file" "$APP_DIR/$file"
  done
  if ! install_dependencies; then
    echo "Dependency install failed. Restoring the previous package files; the running site was not switched." >&2
    for file in "${PACKAGE_FILES[@]}"; do
      if [ -e "$PREVIOUS/$file" ]; then
        cp "$PREVIOUS/$file" "$APP_DIR/$file"
      fi
    done
    rm -rf "$STAGE"
    exit 1
  fi
else
  echo "    package files unchanged, skipping npm install"
fi

echo "==> Switching to the new build"
for item in "${SWAPPED_ITEMS[@]}"; do
  if [ -e "$APP_DIR/$item" ]; then
    mv "$APP_DIR/$item" "$PREVIOUS/$item"
  fi
  mv "$STAGE/$item" "$APP_DIR/$item"
done
restarted=true
pm2 restart "$PM2_APP" --update-env || restarted=false

if [ "$restarted" = true ]; then
  echo "==> Checking the site answers on port $PORT"
  if site_is_up; then
    rm -rf "$STAGE" "$ARCHIVE"
    echo "==> Release $(cat "$APP_DIR/.next/BUILD_ID") is live"
    exit 0
  fi
  echo "New build did not respond. Rolling back to the previous build." >&2
else
  echo "pm2 could not restart '$PM2_APP'. Rolling back to the previous build." >&2
fi

if [ ! -e "$PREVIOUS/.next" ]; then
  echo "No previous build to roll back to. Check: pm2 logs $PM2_APP" >&2
  exit 1
fi
for item in "${SWAPPED_ITEMS[@]}"; do
  rm -rf "${APP_DIR:?}/$item"
  if [ -e "$PREVIOUS/$item" ]; then
    mv "$PREVIOUS/$item" "$APP_DIR/$item"
  fi
done
if [ "$dependencies_changed" = true ]; then
  for file in "${PACKAGE_FILES[@]}"; do
    if [ -e "$PREVIOUS/$file" ]; then
      cp "$PREVIOUS/$file" "$APP_DIR/$file"
    fi
  done
  install_dependencies || echo "Warning: reinstalling the previous dependencies failed." >&2
fi
pm2 restart "$PM2_APP" --update-env || echo "Warning: pm2 restart failed during rollback." >&2
rm -rf "$STAGE"
if site_is_up; then
  echo "Rolled back: the previous build is serving again. The failed release was not kept." >&2
else
  echo "Rollback did not bring the site up either. Check: pm2 logs $PM2_APP" >&2
fi
exit 1
