import { NextResponse } from 'next/server'

interface FacebookPost {
  id: string
  message?: string
  story?: string
  created_time: string
  picture?: string
  full_picture?: string
  permalink_url?: string
  likes?: {
    summary: {
      total_count: number
    }
  }
  comments?: {
    summary: {
      total_count: number
    }
  }
  shares?: {
    count: number
  }
}

export async function GET() {
  try {
    // Facebook Graph API configuration
    const pageId = process.env.FACEBOOK_PAGE_ID || '239416516576684'
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN
    
    if (!accessToken) {
      return NextResponse.json({ 
        posts: getFallbackPosts(),
        fallback: true 
      })
    }

    // Facebook Graph API endpoint to get page posts (sorted by created_time desc)
    // Using /posts endpoint for published posts only
    const fields = 'id,message,story,created_time,picture,full_picture,permalink_url'
    const url = `https://graph.facebook.com/v24.0/${pageId}/posts?fields=${fields}&limit=4&access_token=${accessToken}`

    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
      },
      // Cache for 1 hour - updates hourly
      next: { revalidate: 3600 }
    })

    if (!response.ok) {
      throw new Error(`Facebook API error: ${response.status}`)
    }

    const data = await response.json()

    // Get the latest 4 posts (already sorted by created_time desc from Facebook)
    const latestPosts = (data.data || []).slice(0, 4)

    return NextResponse.json({ 
      posts: latestPosts,
      fallback: false 
    })
    
  } catch {
    // Return fallback content on error
    return NextResponse.json({ 
      posts: getFallbackPosts(),
      fallback: true,
      error: 'Unable to fetch live Facebook posts'
    })
  }
}

// Fallback posts to show when Facebook API is unavailable
function getFallbackPosts() {
  const now = Date.now()
  return [
    {
      id: 'fallback-1',
      message: 'A wonderful start to the week at Ron Manning Day Centre! 🌟 Today our members enjoyed gentle exercises, creative crafts, and sharing stories over a delicious hot lunch. The laughter and friendship in our centre always brightens our day. #CommunitySupport #DayCare',
      created_time: new Date(now - 3 * 60 * 60 * 1000).toISOString(), // 3 hours ago
      picture: '/images/community/bigchat1.webp',
      permalink_url: 'https://www.facebook.com/SERVE234',
      likes: { summary: { total_count: 28 } },
      comments: { summary: { total_count: 6 } }
    },
    {
      id: 'fallback-2',
      message: 'Thank you to our amazing transport volunteers! 🚐 Today alone we helped 15 people get to medical appointments, shopping trips, and family visits. Your dedication means independence for so many in our community.',
      created_time: new Date(now - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
      picture: '/images/transport/bus.webp',
      permalink_url: 'https://www.facebook.com/SERVE234',
      likes: { summary: { total_count: 42 } },
      comments: { summary: { total_count: 11 } },
      shares: { count: 5 }
    },
    {
      id: 'fallback-3',
      message: '💙 Heartwarming feedback received today: "My SERVE carer has become like family. She helps me stay independent in my own home and always has time for a chat." This is exactly why we do what we do. #PersonalCare #Compassion',
      created_time: new Date(now - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
      picture: '/images/care/care1.webp',
      permalink_url: 'https://www.facebook.com/SERVE234',
      likes: { summary: { total_count: 56 } },
      comments: { summary: { total_count: 14 } }
    },
    {
      id: 'fallback-4',
      message: 'Exciting news! 🏆 We\'re still celebrating our Great British Care Awards win - Best Homecare Team East Midlands 2024! This recognition belongs to our entire team and the wonderful community we serve.',
      created_time: new Date(now - 4 * 24 * 60 * 60 * 1000).toISOString(), // 4 days ago
      picture: '/images/awards/regional-winner.webp', 
      permalink_url: 'https://www.facebook.com/SERVE234',
      likes: { summary: { total_count: 89 } },
      comments: { summary: { total_count: 23 } },
      shares: { count: 12 }
    }
  ]
}