# Firebase Quick Start Guide

## ✅ What's Been Set Up

1. **Firebase SDK** - Installed and configured
2. **Authentication** - Secure email/password login
3. **Firestore Database** - Cloud storage for posts
4. **Admin Panel** - `/admin/posts` with real-time sync
5. **Homepage** - Auto-updates when posts change

## 🚀 Getting Started (5 minutes)

### 1. Create Firebase Project
- Go to https://console.firebase.google.com/
- Click "Add project" → Name it "serve-charity"
- Disable Analytics → Create

### 2. Enable Email Authentication
- Click "Authentication" → "Get started"
- Enable "Email/Password" → Save

### 3. Add Your Admin Account
- Click "Users" tab → "Add user"
- Email: `admin@serve.org.uk` (or your choice)
- Password: Choose a strong password
- **SAVE THESE CREDENTIALS!**

### 4. Create Firestore Database
- Click "Firestore Database" → "Create database"
- Production mode → Location: `europe-west2`
- Enable

### 5. Set Security Rules
In Firestore → Rules tab, paste:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /posts/{postId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```
Click "Publish"

### 6. Get Your Config
- Click ⚙️ → Project settings
- Scroll to "Your apps" → Click web icon `</>`
- Register app: "serve-website"
- Copy the config values

### 7. Add to .env.local
```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123:web:abc
```

### 8. Restart Dev Server
```bash
npm run dev
```

### 9. Test It!
- Go to `localhost:3000/admin/posts`
- Login with your admin email/password
- Add a post → Save
- Go to homepage → See it appear instantly!

## 🌐 Deploy to Vercel

1. Vercel Dashboard → Your project → Settings
2. Environment Variables → Add all `NEXT_PUBLIC_FIREBASE_*` vars
3. Save → Redeploy

## 💡 How It Works

- **Admin Panel**: Login → Add/Edit posts → Save
- **Database**: Posts stored in Firestore (cloud)
- **Homepage**: Automatically fetches latest 3 posts
- **No Deployment**: Posts update instantly without redeploying!

## 🔒 Security

✅ Credentials never in code
✅ Firebase handles authentication
✅ Only authenticated users can add/edit posts
✅ Anyone can read posts (they're public on your site anyway)

## 📝 Usage

1. Login at `/admin/posts`
2. Click "Add Post"
3. Fill in message, image URL (optional), etc.
4. Click "Save All Posts"
5. Done! Homepage updates automatically

## Need Help?

Check `FIREBASE_SETUP.md` for detailed instructions.
