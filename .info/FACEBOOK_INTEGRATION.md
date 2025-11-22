# Facebook Integration Setup

## Environment Variables

To enable live Facebook posts integration, add the following to your `.env.local` file:

```
FACEBOOK_ACCESS_TOKEN=your_facebook_access_token_here
```

## Getting a Facebook Access Token

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app or use existing app
3. Add "Pages" permission to your app
4. Generate a Page Access Token for the SERVE234 page
5. For production, convert to a long-lived token

## Fallback Behavior

The system is designed to work with or without the Facebook API:
- **With token**: Shows live Facebook posts from SERVE234 page
- **Without token**: Shows curated fallback content that represents typical SERVE posts

## Features Included

- ✅ Real-time Facebook post integration
- ✅ Automatic fallback to curated content
- ✅ Post engagement metrics (likes, comments, shares)
- ✅ Image display with error handling
- ✅ Responsive design
- ✅ Graceful error handling
- ✅ 30-minute caching for performance

## Page Features

The new "How we help" page includes:
- Hero section with impact statistics
- Facebook feed integration
- Call-to-action to follow SERVE on Facebook
- Links to contact and services pages