import { NextResponse } from 'next/server'

export const revalidate = 300 // Revalidate every 5 minutes

type FBEvent = {
  id: string
  name: string
  description?: string
  start_time: string
  end_time?: string
  place?: {
    name: string
    location?: {
      city?: string
      street?: string
    }
  }
  cover?: {
    source: string
  }
  is_canceled?: boolean
}

export async function GET() {
  const pageId = process.env.FACEBOOK_PAGE_ID || '239416516576684'
  const userAccessToken = process.env.FACEBOOK_ACCESS_TOKEN

  // If env vars are missing, return an empty list so the UI can fall back gracefully
  if (!pageId || !userAccessToken) {
    return NextResponse.json({ events: [] }, { status: 200 })
  }

  try {
    // Step 1: Convert User Admin Token to Page Access Token
    const accountsResponse = await fetch(
      `https://graph.facebook.com/v24.0/me/accounts?access_token=${userAccessToken}`,
      {
        headers: { 'Accept': 'application/json' },
        next: { revalidate }
      }
    )

    if (!accountsResponse.ok) {
      return NextResponse.json({ events: [] }, { status: 200 })
    }

    const accountsData = await accountsResponse.json()
    const servePage = accountsData.data?.find((page: { id: string; access_token?: string }) => page.id === pageId)
    
    if (!servePage || !servePage.access_token) {
      return NextResponse.json({ events: [] }, { status: 200 })
    }

    const pageAccessToken = servePage.access_token

    // Step 2: Fetch events using Page Access Token
    const url = new URL(`https://graph.facebook.com/v24.0/${pageId}/events`)
    url.searchParams.set('fields', 'id,name,description,start_time,end_time,place,cover,is_canceled')
    url.searchParams.set('time_filter', 'upcoming')
    url.searchParams.set('limit', '10')
    url.searchParams.set('access_token', pageAccessToken)

    const res = await fetch(url.toString(), { next: { revalidate } })

    if (!res.ok) {
      // Silently return empty events when token expires or API fails
      // This allows graceful degradation without build errors
      return NextResponse.json({ events: [] }, { status: 200 })
    }

    const data = await res.json() as { data?: FBEvent[] }
    const events = (data.data || [])
      .filter(e => !e.is_canceled) // Filter out canceled events
      .map((e) => ({
        id: e.id,
        name: e.name,
        description: e.description || '',
        startTime: e.start_time,
        endTime: e.end_time || null,
        location: e.place?.name || null,
        coverImage: e.cover?.source || null,
      }))

    return NextResponse.json({ events }, { status: 200 })
  } catch {
    // Silently fail - return empty events to allow the UI to render
    return NextResponse.json({ events: [] }, { status: 200 })
  }
}
