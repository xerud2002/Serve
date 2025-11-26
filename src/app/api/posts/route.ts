import { NextRequest, NextResponse } from 'next/server'
import { writeFile, readFile } from 'fs/promises'
import { join } from 'path'

const POSTS_FILE = join(process.cwd(), 'data', 'facebook-posts.json')

export async function GET() {
  try {
    const data = await readFile(POSTS_FILE, 'utf-8')
    const posts = JSON.parse(data)
    return NextResponse.json({ posts })
  } catch (error) {
    // Return empty array if file doesn't exist yet
    return NextResponse.json({ posts: [] })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { posts } = await request.json()
    
    if (!Array.isArray(posts)) {
      return NextResponse.json({ error: 'Posts must be an array' }, { status: 400 })
    }

    // Validate post structure
    for (const post of posts) {
      if (!post.id || !post.message || !post.created_time || !post.permalink_url) {
        return NextResponse.json(
          { error: 'Each post must have id, message, created_time, and permalink_url' },
          { status: 400 }
        )
      }
    }

    await writeFile(POSTS_FILE, JSON.stringify(posts, null, 2), 'utf-8')
    return NextResponse.json({ success: true, posts })
  } catch (error) {
    console.error('Error saving posts:', error)
    return NextResponse.json({ error: 'Failed to save posts' }, { status: 500 })
  }
}
