import { NextResponse } from 'next/server'

export const revalidate = 3600 // Revalidate every hour

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
  const accessToken = process.env.FACEBOOK_ACCESS_TOKEN

  // If env vars are missing, return an empty list so the UI can fall back gracefully
  if (!pageId || !accessToken) {
    console.warn('Facebook access token not configured for events')
    return NextResponse.json({ events: [] }, { status: 200 })
  }

  try {
    const url = new URL(`https://graph.facebook.com/v19.0/${pageId}/events`)
    url.searchParams.set('fields', 'id,name,description,start_time,end_time,place,cover,is_canceled')
    url.searchParams.set('time_filter', 'upcoming')
    url.searchParams.set('limit', '10')
    url.searchParams.set('access_token', accessToken)

    const res = await fetch(url.toString(), { next: { revalidate } })

    if (!res.ok) {
      const errorText = await res.text()
      console.error(`Facebook Events API error: ${res.status}`, errorText)
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
        image: e.cover?.source || null,
      }))

    return NextResponse.json({ events }, { status: 200 })
  } catch (error) {
    console.error('Error fetching Facebook events:', error)
    // Fail soft with empty events to allow the UI to render
    return NextResponse.json({ events: [] }, { status: 200 })
  }
}
