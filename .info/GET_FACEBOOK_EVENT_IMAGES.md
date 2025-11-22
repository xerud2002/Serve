# How to Get Facebook Access Token with Event Permissions

## Step 1: Go to Facebook Graph API Explorer
Visit: https://developers.facebook.com/tools/explorer/

## Step 2: Select Your App (or Create One)
1. In the top right, click on "Meta App" dropdown
2. If you don't have an app, click "Create App"
   - Choose "Business" type
   - Give it a name like "SERVE Website Events"
   - Click "Create App"

## Step 3: Get Page Access Token with Event Permissions
1. In Graph API Explorer, click on "User or Page" dropdown
2. Select your SERVE page (should show "SERVE" with followers count)
3. Click on "Permissions" (under "Get Token")
4. **Add these permissions** (CRITICAL - these are what you're missing):
   - ✅ `pages_show_list` - To list your pages
   - ✅ `pages_read_engagement` - To read page content
   - ✅ `pages_manage_metadata` - To access page metadata
   - ✅ `pages_read_user_content` - To read page events
   - ✅ `public_profile` - Basic permission

5. Click "Generate Access Token"
6. Facebook will ask you to authorize - click "Continue" and approve all permissions

## Step 4: Get Long-Lived Token
The token from Step 3 expires in 1-2 hours. To get a 60-day token:

1. Go to: https://developers.facebook.com/tools/debug/accesstoken/
2. Paste the token from Step 3
3. Click "Extend Access Token"
4. Copy the new long-lived token

## Step 5: Update Your .env.local File
Replace the token in `.env.local`:
```
FACEBOOK_PAGE_ID=239416516576684
FACEBOOK_ACCESS_TOKEN=YOUR_NEW_LONG_LIVED_TOKEN_HERE
```

## Step 6: Test Event Image Access
After updating the token, run this PowerShell command to test:

```powershell
$env:FACEBOOK_ACCESS_TOKEN = "YOUR_NEW_TOKEN_HERE"
curl "https://graph.facebook.com/v19.0/505353872514098?fields=id,name,cover&access_token=$env:FACEBOOK_ACCESS_TOKEN"
```

If successful, you should see:
```json
{
  "id": "505353872514098",
  "name": "An Evening with Graeme Duffin of Wet, Wet, Wet",
  "cover": {
    "offset_x": 0,
    "offset_y": 0,
    "source": "https://scontent.xx.fbcdn.net/...",
    "id": "..."
  }
}
```

## Common Issues

### "Invalid OAuth access token"
- Token expired - generate a new one
- Token doesn't belong to the app - make sure you selected the right app

### "Requires extended permission: pages_read_engagement"
- Go back to Step 3 and make sure you checked ALL the permissions listed
- Regenerate the token with all permissions

### "Application does not have permission for this action"
- Your app needs to be reviewed by Facebook for some permissions
- For basic page events, you shouldn't need review
- Make sure you're using a Page Access Token, not a User Access Token

## Alternative: Use Page Token Directly

If the above doesn't work, try getting the Page Access Token directly:

1. Go to: https://developers.facebook.com/tools/explorer/
2. Select your app
3. Click "Get Token" → "Get Page Access Token"
4. Select your SERVE page
5. This gives you a Page Access Token that should have all necessary permissions
6. Use the Access Token Debugger to extend it to 60 days

---

Once you have a working token with the right permissions, I can create a script to automatically download all event images!
