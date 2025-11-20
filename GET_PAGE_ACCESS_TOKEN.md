# How to Get a Facebook Page Access Token

## Problem
The current token is a **User Access Token**, but Facebook requires a **Page Access Token** for the new Pages experience.

Error: `"User access token is not supported. A Page access token is required for this call for the new Pages experience."`

## Solution: Get a Long-Lived Page Access Token

### Method 1: Using Facebook Graph API Explorer (Recommended)

1. **Go to Graph API Explorer**
   - Visit: https://developers.facebook.com/tools/explorer/

2. **Select Your App**
   - In the top right, select your Facebook App from the dropdown
   - If you don't have an app, create one at https://developers.facebook.com/apps/

3. **Get User Access Token with Page Permissions**
   - Click "Generate Access Token"
   - Grant these permissions:
     - `pages_show_list` - To list your pages
     - `pages_read_engagement` - To read posts
     - `pages_read_user_content` - To read page content
     - `pages_manage_posts` - To access posts (may be required)

4. **Get Your Page ID**
   - In Graph API Explorer, run this query:
     ```
     GET /me/accounts
     ```
   - This will list all pages you manage
   - Find your SERVE page and copy the `id` and `access_token`
   - **The `access_token` in each page object is your Page Access Token!**

5. **Make it Long-Lived (90 days instead of 1 hour)**
   - Copy the Page Access Token from step 4
   - Use the Access Token Debugger: https://developers.facebook.com/tools/debug/accesstoken/
   - Click "Extend Access Token"
   - Copy the new long-lived token

### Method 2: Direct API Call

If you have a user access token with page permissions, you can convert it to a Page Access Token:

```bash
# Step 1: Get your User Access Token (with page permissions)
# Use Graph API Explorer as described above

# Step 2: Get Page Access Token
curl -X GET "https://graph.facebook.com/v24.0/me/accounts?access_token=YOUR_USER_TOKEN"

# Step 3: From the response, find your page and use its access_token field

# Step 4: Make it long-lived (optional but recommended)
curl -X GET "https://graph.facebook.com/v24.0/oauth/access_token?grant_type=fb_exchange_token&client_id=YOUR_APP_ID&client_secret=YOUR_APP_SECRET&fb_exchange_token=YOUR_PAGE_TOKEN"
```

### Method 3: Using Meta Business Suite Settings (Easiest for Non-Developers)

1. **Go to Meta Business Suite**
   - Visit: https://business.facebook.com/settings/

2. **System Users** (if available)
   - Navigate to: Business Settings → System Users
   - Create a system user or select existing one
   - Add your page to the system user
   - Generate a token with page permissions
   - This token doesn't expire!

## Quick Test: Verify Your Page Access Token

Once you have a Page Access Token, test it:

```bash
# Replace YOUR_PAGE_TOKEN with your actual Page Access Token
curl "https://graph.facebook.com/v24.0/239416516576684/posts?fields=id,message,created_time&limit=3&access_token=YOUR_PAGE_TOKEN"
```

If successful, you should see your latest posts in JSON format.

## Update the .env.local File

Once you have the Page Access Token:

1. Open `.env.local`
2. Replace the current token with your Page Access Token:
   ```
   FACEBOOK_ACCESS_TOKEN=YOUR_NEW_PAGE_ACCESS_TOKEN
   FACEBOOK_PAGE_ID=239416516576684
   ```
3. Restart the development server: `npm run dev`

## Token Expiration

- **Short-lived User Token**: 1 hour
- **Long-lived User Token**: 60 days
- **Short-lived Page Token**: Never expires (as long as the app exists)
- **Long-lived Page Token**: Never expires (recommended)

## Current Status

- ✅ Token detected in .env.local
- ❌ Token is User Access Token (not Page Access Token)
- ❌ Facebook API returns 400 error: "User access token is not supported"
- 📋 Page ID: 239416516576684 (correct)

## Need Help?

If you're having trouble, you can:
1. Share your Facebook App ID (not the secret)
2. Confirm you have admin access to the SERVE Facebook page
3. I can provide more specific guidance based on your setup
