# Firebase Admin User Setup - REQUIRED

## ⚠️ CRITICAL: Create Admin User in Firebase Console

You're seeing the login error because **you haven't created an admin user yet** in Firebase Authentication.

## Steps to Create Admin User (2 minutes)

### 1. Open Firebase Console
Go to: https://console.firebase.google.com/

### 2. Select Your Project
Click on **"serve-bb1fb"**

### 3. Go to Authentication
- Click **"Authentication"** in left sidebar
- Click **"Users"** tab at the top

### 4. Add Your First User
- Click **"Add user"** button
- **Email**: `admin@serve.org.uk` (or your preferred admin email)
- **Password**: Choose a strong password (min 6 characters)
- Click **"Add user"**

### 5. Test Login
- Go to: `localhost:3001/admin/posts` (note: using port 3001)
- Login with the email and password you just created
- You should now have access to the admin panel

## What Just Got Fixed

✅ **Content Security Policy** - Updated `next.config.js` to allow Firebase domains:
- `https://*.googleapis.com` - Firebase Auth API
- `https://*.firebaseio.com` - Realtime Database
- `https://firestore.googleapis.com` - Firestore Database
- `https://identitytoolkit.googleapis.com` - Authentication
- `https://*.firebaseapp.com` - Firebase Hosting

✅ **Dev Server** - Restarted with new configuration on port 3001

## Current Status

- Firebase Configuration: ✅ Complete
- Content Security Policy: ✅ Fixed
- Dev Server: ✅ Running on port 3001
- Admin User: ⏳ **YOU NEED TO CREATE THIS NOW**

## After Creating Admin User

1. Refresh the browser tab at `localhost:3001/admin/posts`
2. Enter the email and password you created
3. Click "Sign In"
4. You should see the posts management interface

## Troubleshooting

**Still seeing CSP errors?**
- Hard refresh browser: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Clear browser cache
- Close all localhost tabs and reopen

**"Invalid email or password" error?**
- Double-check you're using the exact email/password from Firebase Console
- Make sure user was created successfully (check Users tab in Firebase)

**Firebase errors in console?**
- Make sure all 6 environment variables are correct in `.env.local`
- Check Firebase project ID matches: `serve-bb1fb`
- Verify authentication is enabled (Email/Password provider)

---
**Next Step**: Create admin user in Firebase Console → Test login at localhost:3001/admin/posts
