# Manual CORS Configuration in Firebase Console

Since gsutil has permission issues, configure CORS manually through Google Cloud Console:

## Steps:

1. Go to: https://console.cloud.google.com/storage/browser/serve-bb1fb.appspot.com

2. Click on the **bucket name** (serve-bb1fb.appspot.com)

3. Go to the **"Permissions"** tab

4. Click **"CORS"** section

5. Click **"Edit CORS configuration"**

6. Paste this configuration:

```json
[
  {
    "origin": ["http://localhost:3000", "http://localhost:3001", "https://serve.org.uk", "https://*.vercel.app"],
    "method": ["GET", "HEAD", "PUT", "POST", "DELETE"],
    "maxAgeSeconds": 3600
  }
]
```

7. Click **Save**

## Quick Test:
After configuration, go back to http://localhost:3000/admin/posts/ and try uploading an image.
