# Facebook Integration Setup - SERVE Website

## Current Status
The website is configured to display the latest 6 posts from your Facebook page (SERVE234) on the homepage.

## Quick Setup Guide

### Step 1: Get Your Access Token (Daily)

1. **Visit the Graph API Explorer**
   - Go to: https://developers.facebook.com/tools/explorer/

2. **Configure the Explorer**
   - App: Select "Serve Website" (your app)
   - Token Type: Select "User Token"

3. **Add Required Permissions**
   Click "Add a Permission" and select:
   - `pages_show_list`
   - `pages_read_engagement`
   - `pages_manage_metadata`
   - `pages_read_user_content`

4. **Generate Token**
   - Click "Generate Access Token"
   - Copy the token that appears (starts with "EAAZC...")

### Step 2: Update Environment Variable

1. Open the `.env.local` file in your project
2. Update the token:
   ```
   FACEBOOK_ACCESS_TOKEN=EAAZCjQ2LcG8BO3...your_token_here
   ```
3. Save the file

### Step 3: Test the Integration

Run the test script:
```bash
node scripts/test-facebook-token.js
```

This will verify your token works and show you the 6 latest posts that will appear on the website.

### Step 4: Deploy Changes

**For Local Development:**
```bash
npm run dev
```
Visit http://localhost:3000 to see the Facebook posts

**For Production (VPS):**
1. SSH into your server
2. Navigate to the project: `cd /var/www/serve`
3. Update the `.env.local` file with the new token
4. Restart PM2: `pm2 restart serve-website`

---

## Long-Lived Token (Optional - 60 Days)

If you don't want to update the token daily, you can generate a long-lived token:

### Get Long-Lived Token

1. First, get a short-lived token (follow Step 1 above)

2. Get your App Credentials:
   - Visit: https://developers.facebook.com/apps/
   - Select your "Serve Website" app
   - Go to Settings > Basic
   - Copy your **App ID** and **App Secret**

3. Exchange for long-lived token:
   - Use this URL (replace YOUR_APP_ID, YOUR_APP_SECRET, and SHORT_TOKEN):
   ```
   https://graph.facebook.com/v24.0/oauth/access_token?grant_type=fb_exchange_token&client_id=YOUR_APP_ID&client_secret=YOUR_APP_SECRET&fb_exchange_token=SHORT_TOKEN
   ```

4. Visit that URL in your browser
   - You'll get a response like: `{"access_token":"LONG_TOKEN_HERE","token_type":"bearer","expires_in":5183944}`
   - Copy the `access_token` value

5. Update `.env.local` with the long-lived token

6. This token will last approximately 60 days

---

## Troubleshooting

### "Token expired or invalid"
- Generate a new token following Step 1
- Make sure all 4 permissions are selected

### "No posts found"
- Verify your page ID is correct: `239416516576684`
- Check that your page has published posts
- Ensure you have the correct permissions

### "Permission denied"
- Make sure you're an admin of the SERVE Facebook page
- Verify all 4 required permissions are added

### Posts not showing on website
- Check `.env.local` file has the correct token
- Run the test script: `node scripts/test-facebook-token.js`
- Restart your development server or PM2 on production

---

## File Locations

- **Environment Variables**: `.env.local`
- **API Route**: `src/app/api/facebook-posts/route.ts`
- **Homepage Display**: `src/components/FacebookFeed.tsx`
- **Test Script**: `scripts/test-facebook-token.js`
- **Example Config**: `.env.local.example`

---

## Current Configuration

- **Page ID**: 239416516576684 (SERVE234)
- **API Version**: v24.0
- **Posts Fetched**: 6 (latest)
- **Cache Duration**: 1 hour
- **Fallback**: Yes (shows placeholder posts if API fails)

---

## Support

If you need help:
1. Run the test script first: `node scripts/test-facebook-token.js`
2. Check the error message it provides
3. Follow the troubleshooting guide above
4. Ensure you're using a recent token (generated within last 60 days)
