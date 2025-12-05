'use server'

import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

interface FacebookPost {
  id: string
  message: string
  full_picture?: string
  created_time: string
  permalink_url: string
}

export async function savePostsToFile(posts: FacebookPost[]) {
  try {
    // Validate posts
    if (!Array.isArray(posts)) {
      return { success: false, error: 'Posts must be an array' }
    }

    for (const post of posts) {
      if (!post.id || !post.message || !post.created_time || !post.permalink_url) {
        return { 
          success: false, 
          error: `Post missing required fields: ${!post.id ? 'id ' : ''}${!post.message ? 'message ' : ''}${!post.created_time ? 'created_time ' : ''}${!post.permalink_url ? 'permalink_url' : ''}`
        }
      }
    }

    // Ensure public/data directory exists
    const dataDir = join(process.cwd(), 'public', 'data')
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true })
    }

    // Write to file
    const filePath = join(process.cwd(), 'public', 'data', 'facebook-posts.json')
    await writeFile(filePath, JSON.stringify(posts, null, 2), 'utf-8')

    return { success: true, message: 'Posts saved successfully!' }
  } catch (error) {
    console.error('Error saving posts:', error)
    return { success: false, error: 'Failed to save posts to file' }
  }
}
