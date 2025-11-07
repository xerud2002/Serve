import { NextResponse } from 'next/server'

export const revalidate = 3600 // Revalidate every hour

type FBImage = {
  source: string
  height: number
  width: number
}

type FBPhoto = {
  id: string
  created_time?: string
  images?: FBImage[]
  link?: string
  name?: string
}

export async function GET() {
  const pageId = process.env.FACEBOOK_PAGE_ID
  const accessToken = process.env.FACEBOOK_ACCESS_TOKEN

  // If env vars are missing, return an empty list so the UI can fall back gracefully
  if (!pageId || !accessToken) {
    return NextResponse.json({ images: [] }, { status: 200 })
  }

  try {
    const url = new URL(`https://graph.facebook.com/v19.0/${pageId}/photos`)
    url.searchParams.set('type', 'uploaded')
    url.searchParams.set('fields', 'images,created_time,link,name')
    url.searchParams.set('limit', '12')
    url.searchParams.set('access_token', accessToken)

    const res = await fetch(url.toString(), { next: { revalidate } })

    if (!res.ok) {
      // Surface a safe response without leaking details
      return NextResponse.json({ images: [] }, { status: 200 })
    }

    const data = await res.json() as { data?: FBPhoto[] }
    const photos = (data.data || [])
      .map((p) => {
        const best = (p.images || []).sort((a, b) => (b.width * b.height) - (a.width * a.height))[0]
        return best ? {
          id: p.id,
          src: best.source,
          width: best.width,
          height: best.height,
          caption: p.name || 'Facebook photo',
          link: p.link || undefined,
          createdAt: p.created_time || undefined,
        } : null
      })
      .filter(Boolean)

    return NextResponse.json({ images: photos }, { status: 200 })
  } catch {
    // Fail soft with empty images to allow the UI to render
    return NextResponse.json({ images: [] }, { status: 200 })
  }
}
