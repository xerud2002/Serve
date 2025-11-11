# Facebook Photos API Setup Guide

## Overview
This guide will help you get a Facebook Access Token to display your SERVE Facebook page photos on the website carousel.

## Prerequisites
- Admin access to the SERVE Facebook page
- A Facebook account with page admin privileges

---

## Step-by-Step Instructions

### 1. Find Your Facebook Page ID

**Option A: From Your Page URL**
- Go to your Facebook page: https://www.facebook.com/SERVE234/
- Look at the URL or page source
- The Page ID is usually visible in the "About" section

**Option B: Using Graph API Explorer**
1. Go to https://developers.facebook.com/tools/explorer/
2. In the search box, type: `me/accounts`
3. Click "Submit"
4. Find "SERVE234" in the results - the `id` field is your Page ID

---

### 2. Get a Page Access Token

#### Method 1: Using Graph API Explorer (Quick - 1 hour token)

1. **Go to Graph API Explorer**
   - Visit: https://developers.facebook.com/tools/explorer/

2. **Generate User Token**
   - Click "Generate Access Token" button
   - Login with your Facebook account if prompted
   - Grant permissions when asked

3. **Get Required Permissions**
   - Click "Add a Permission" or "Permissions"
   - Search for and add: `pages_read_engagement`
   - Search for and add: `pages_show_list`
   - Click "Generate Access Token" again

4. **Get Page Token**
   - In the query field, enter: `me/accounts`
   - Click "Submit"
   - Find your SERVE page in the results
   - Copy the `access_token` value (this is your Page Access Token)

**Note**: This token expires in 1-2 hours - good for testing only!

---

#### Method 2: Long-Lived Token (Recommended - 60 days)

1. **Follow Method 1** to get a short-lived Page Access Token

2. **Exchange for Long-Lived Token**
   - Go to: https://developers.facebook.com/tools/debug/accesstoken/
   - Paste your token
   - Click "Debug"
   - Click "Extend Access Token" button
   - Copy the new long-lived token

**Note**: This token lasts ~60 days. You'll need to refresh it every 2 months.

---

#### Method 3: Never-Expiring Token (Best for Production)

**A. Create a Facebook App**

1. Go to https://developers.facebook.com/apps/
2. Click "Create App"
3. Choose "Business" type
4. Fill in details:
   - App Name: "SERVE Website"
   - Contact Email: info@serve.org.uk
5. Click "Create App"

**B. Configure the App**

1. In your new app dashboard, go to "Settings" → "Basic"
2. Note your **App ID** and **App Secret** (keep these secure!)

3. Go to "Add Products"
4. Find "Facebook Login" and click "Set Up"
5. Choose "Web" platform
6. Enter your website URL: `https://yourdomain.com`

**C. Get Page Access Token**

1. Go to Graph API Explorer: https://developers.facebook.com/tools/explorer/
2. Select your app from the dropdown (top right)
3. Click "Generate Access Token"
4. Add permissions: `pages_read_engagement`, `pages_show_list`
5. Authorize and login
6. In query field, enter: `me/accounts`
7. Click "Submit"
8. Find your page and copy the `access_token`

**D. Exchange for Never-Expiring Token**

Use this Graph API call (replace the values):

```
https://graph.facebook.com/v19.0/oauth/access_token?grant_type=fb_exchange_token&client_id=YOUR_APP_ID&client_secret=YOUR_APP_SECRET&fb_exchange_token=YOUR_SHORT_LIVED_TOKEN
```

Or use the Access Token Debugger:
1. Go to: https://developers.facebook.com/tools/debug/accesstoken/
2. Paste your Page Access Token
3. Click "Extend Access Token"
4. Copy the new token

**This token never expires unless:**
- You change your Facebook password
- You revoke app permissions
- Facebook detects suspicious activity

---

### 3. Add to Your Environment Variables

1. **Create or edit `.env.local` file** in your project root:

```env
# Facebook Photos API
FACEBOOK_PAGE_ID=YOUR_PAGE_ID_HERE
FACEBOOK_ACCESS_TOKEN=YOUR_ACCESS_TOKEN_HERE
```

2. **Example:**

```env
FACEBOOK_PAGE_ID=123456789012345
FACEBOOK_ACCESS_TOKEN=EAABsbCS1iHgBO7ZC9HZCqL8ZBkxKZCZC...
```

3. **Restart your development server:**

```bash
npm run dev
```

---

### 4. Test the Integration

1. Go to: http://localhost:3000/
2. Scroll to the "Latest from Facebook" carousel
3. You should see your recent Facebook photos!

---

## Troubleshooting

### "Invalid OAuth access token"
- Your token may have expired
- Regenerate using Method 2 or 3 above

### "This endpoint requires the 'pages_read_engagement' permission"
- Go back to Graph API Explorer
- Add the missing permission
- Generate a new token

### No photos showing (but no errors)
- Check that your page has uploaded photos (not just shared posts)
- The API only returns photos uploaded directly to your page
- Make sure photos are public (not restricted to specific audiences)

### Still seeing fallback images
- Check your `.env.local` file exists in the project root
- Verify variable names match exactly: `FACEBOOK_PAGE_ID` and `FACEBOOK_ACCESS_TOKEN`
- Restart your dev server after adding variables
- Check browser console for any error messages

---

## Security Best Practices

⚠️ **IMPORTANT**: Never commit your `.env.local` file to Git!

The `.gitignore` file already excludes it, but double-check:

```bash
# Verify .env.local is ignored
git status
```

You should NOT see `.env.local` in the list of files to commit.

---

## For Production Deployment

When deploying to Vercel/Netlify/etc:

1. Go to your hosting dashboard
2. Find "Environment Variables" settings
3. Add:
   - `FACEBOOK_PAGE_ID` = your page ID
   - `FACEBOOK_ACCESS_TOKEN` = your access token
4. Redeploy your site

---

## Token Expiration Schedule

| Method | Duration | Best For |
|--------|----------|----------|
| Short-lived (Method 1) | 1-2 hours | Testing only |
| Long-lived (Method 2) | ~60 days | Development |
| Never-expiring (Method 3) | Permanent* | Production |

*Permanent unless password changes or permissions revoked

---

## Quick Reference Links

- **Graph API Explorer**: https://developers.facebook.com/tools/explorer/
- **Access Token Debugger**: https://developers.facebook.com/tools/debug/accesstoken/
- **Facebook Apps**: https://developers.facebook.com/apps/
- **Your Page**: https://www.facebook.com/SERVE234/

---

## Need Help?

If you encounter issues:

1. Check the browser console for error messages
2. Test your token at: https://developers.facebook.com/tools/debug/accesstoken/
3. Verify your page has public photos uploaded
4. Ensure environment variables are set correctly

The carousel will gracefully fall back to static images if the API isn't configured, so your site will always work!
