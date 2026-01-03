# Firebase Storage CORS Configuration

## Problem
Firebase Storage is blocking image requests due to CORS policy.

## Solution - Quick Fix (Recommended)

### Option 1: Using Firebase CLI (Easiest)

1. **Deploy Storage Rules**:
   ```bash
   firebase deploy --only storage:rules
   ```

2. **Verify in Firebase Console**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Select project: **serve-bb1fb**
   - Go to **Storage** → **Rules**
   - Verify the rules are deployed

### Option 2: Using Google Cloud SDK (For CORS)

⚠️ **Important**: Run PowerShell as Administrator (Right-click → "Run as Administrator")

1. **Authenticate with Google Cloud**:
   ```bash
   gcloud auth login
   ```

2. **Set your Firebase project**:
   ```bash
   gcloud config set project serve-bb1fb
   ```

3. **Apply CORS configuration**:
   ```bash
   gsutil cors set cors.json gs://serve-bb1fb.appspot.com
   ```

4. **Verify CORS configuration**:
   ```bash
   gsutil cors get gs://serve-bb1fb.appspot.com
   ```

### Option 3: Manual Configuration via Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **serve-bb1fb**
3. Go to **Storage** → **Rules**
4. Copy the content from `storage.rules` file and paste it
5. Click **Publish**

## After Configuration:
- Restart your development server: `npm run dev`
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh the page (Ctrl+Shift+R)
- Test image upload in admin panel

The CORS errors should be resolved and images will load properly.

