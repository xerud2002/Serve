import { NextRequest, NextResponse } from 'next/server'
import { writeFile, readFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

const POSTS_FILE = join(process.cwd(), 'public', 'data', 'facebook-posts.json')

export async function GET() {
  try {
    const data = await readFile(POSTS_FILE, 'utf-8')
    const posts = JSON.parse(data)
    return NextResponse.json({ posts })
  } catch {
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
          { error: `Post missing required fields. Has: id=${!!post.id}, message=${!!post.message}, created_time=${!!post.created_time}, permalink_url=${!!post.permalink_url}` },
          { status: 400 }
        )
      }
    }

    // Ensure public/data directory exists
    const dataDir = join(process.cwd(), 'public', 'data')
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true })
    }

    await writeFile(POSTS_FILE, JSON.stringify(posts, null, 2), 'utf-8')
    return NextResponse.json({ success: true, posts })
  } catch (error) {
    console.error('Error saving posts:', error)
    return NextResponse.json({ error: 'Failed to save posts' }, { status: 500 })
  }
}
