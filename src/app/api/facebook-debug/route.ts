import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const pageId = process.env.FACEBOOK_PAGE_ID || '239416516576684'
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN
    
    if (!accessToken) {
      return NextResponse.json({ 
        error: 'No access token found',
        hasToken: false,
        pageId
      })
    }

    // Test the Facebook API with the token
    const fields = 'id,message,story,created_time,picture,full_picture,permalink_url'
    const url = `https://graph.facebook.com/v24.0/${pageId}/posts?fields=${fields}&limit=6&access_token=${accessToken}`

    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
      }
    })

    const data = await response.json()

    return NextResponse.json({ 
      hasToken: true,
      tokenLength: accessToken.length,
      tokenPrefix: accessToken.substring(0, 20) + '...',
      pageId,
      responseStatus: response.status,
      responseOk: response.ok,
      data,
      url: url.replace(accessToken, 'TOKEN_HIDDEN')
    })
    
  } catch (error) {
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    })
  }
}
