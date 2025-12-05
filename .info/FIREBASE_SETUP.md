# Firebase Setup Instructions

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name: `serve-charity` (or your choice)
4. Disable Google Analytics (optional)
5. Click "Create project"

## Step 2: Enable Authentication

1. In Firebase Console, click "Authentication" in left sidebar
2. Click "Get started"
3. Click "Email/Password" in Sign-in providers
4. Toggle "Email/Password" to **Enabled**
5. Click "Save"

## Step 3: Add Admin User

1. In Authentication, click "Users" tab
2. Click "Add user"
3. Enter email: `admin@serve.org.uk` (or your choice)
4. Enter password: Choose a strong password
5. Click "Add user"

**Save these credentials - you'll use them to login!**

## Step 4: Create Firestore Database

1. Click "Firestore Database" in left sidebar
2. Click "Create database"
3. Select "Start in production mode"
4. Choose location: `europe-west2` (London)
5. Click "Enable"

## Step 5: Set Firestore Rules

1. In Firestore Database, click "Rules" tab
2. Replace the rules with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Anyone can read posts
    match /posts/{postId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

3. Click "Publish"

## Step 6: Get Firebase Config

1. Click the gear icon ⚙️ next to "Project Overview"
2. Click "Project settings"
3. Scroll down to "Your apps"
4. Click the web icon `</>`
5. Register app with nickname: `serve-website`
6. Copy the `firebaseConfig` values

## Step 7: Add to Environment Variables

1. Open `.env.local` file
2. Add these variables (use your values from step 6):

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=serve-charity.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=serve-charity
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=serve-charity.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123
```

3. Save the file

## Step 8: Add to Vercel

1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings > Environment Variables
4. Add each `NEXT_PUBLIC_FIREBASE_*` variable
5. Click "Save"
6. Redeploy your site

## Step 9: Test

1. Go to `/admin/posts`
2. Login with the email/password from Step 3
3. Add a post and click "Save All Posts"
4. Go to homepage - your post should appear!

## Features

✅ **Secure Authentication** - Firebase handles all security
✅ **Real-time Updates** - Posts sync automatically
✅ **No Redeployment** - Update posts instantly
✅ **Free Tier** - More than enough for a charity site

## Troubleshooting

**"Firebase not configured"**
- Make sure all environment variables are set
- Restart dev server after adding env vars

**"Permission denied"**
- Check Firestore rules are published
- Make sure you're logged in

**"Invalid email or password"**
- Verify user exists in Firebase Console > Authentication
- Check email/password are correct
