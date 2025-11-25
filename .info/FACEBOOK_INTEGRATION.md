# Facebook Integration Setup

## Current Status ✅

**Facebook Page**: https://www.facebook.com/SERVE234  
**Page ID**: 239416516576684  
**Access Token**: Page Access Token (long-lived, configured in Vercel)  
**Integration Status**: Active and deployed

## Environment Variables

Environment variables are configured in Vercel production:

```bash
FACEBOOK_ACCESS_TOKEN=EAAZADjQJDkC8BO... (Page Access Token)
FACEBOOK_PAGE_ID=239416516576684
```

**Local Development:**  
Add to `.env.local` file:
```
FACEBOOK_ACCESS_TOKEN=your_page_access_token_here
FACEBOOK_PAGE_ID=239416516576684
```

## API Configuration

### Posts Feed (`/api/facebook-posts`)
- **Endpoint**: `/${pageId}/posts`
- **Fields**: `id,message,created_time,full_picture,permalink_url,reactions.summary(total_count),comments.summary(total_count),shares`
- **Limit**: 6 posts
- **Revalidation**: 3600 seconds (1 hour)
- **Auto-refresh**: Client-side hourly refresh

### Events Feed (`/api/facebook-events`)
- **Endpoint**: `/${pageId}/events`
- **Fields**: `id,name,description,start_time,end_time,place,cover`
- **Limit**: 10 events
- **Revalidation**: 300 seconds (5 minutes)
- **Filter**: Future events only

## Fallback Behavior

The system is designed to work with or without the Facebook API:
- **With token**: Shows live Facebook posts and events from SERVE234 page
- **Without token**: Returns empty arrays (graceful degradation)
- **API errors**: Silent fallback to empty data without breaking UI

## Features Included

- ✅ Real-time Facebook posts integration (6 latest posts)
- ✅ Facebook events display with cover images
- ✅ Automatic fallback to empty state
- ✅ Post engagement metrics (likes, comments, shares)
- ✅ Event images with object-cover display
- ✅ Image display with error handling and unoptimized flag
- ✅ Responsive design
- ✅ Graceful error handling
- ✅ 1-hour caching for posts, 5-minute caching for events
- ✅ Client-side hourly auto-refresh

## Page Features

The new "How we help" page includes:
- Hero section with impact statistics
- Facebook feed integration
- Call-to-action to follow SERVE on Facebook
- Links to contact and services pages