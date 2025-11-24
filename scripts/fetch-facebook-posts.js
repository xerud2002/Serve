#!/usr/bin/env node

/**
 * Fetch real Facebook posts from SERVE page
 */

import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load environment variables
dotenv.config({ path: join(__dirname, '..', '.env.local') })

async function fetchFacebookPosts() {
  const pageId = process.env.FACEBOOK_PAGE_ID || '239416516576684'
  const accessToken = process.env.FACEBOOK_ACCESS_TOKEN

  if (!accessToken) {
    console.error('❌ FACEBOOK_ACCESS_TOKEN not found in .env.local')
    process.exit(1)
  }

  console.log('🔍 Step 1: Getting Page Access Token from User Admin Token...')
  console.log(`🔑 User Token: ${accessToken.substring(0, 20)}...`)
  
  try {
    // First, get the page access token using the user admin token
    const accountsUrl = `https://graph.facebook.com/v24.0/me/accounts?access_token=${accessToken}`
    console.log(`\n📡 Fetching accounts: ${accountsUrl.replace(accessToken, 'TOKEN_HIDDEN')}\n`)
    
    const accountsResponse = await fetch(accountsUrl)
    
    if (!accountsResponse.ok) {
      const errorData = await accountsResponse.json()
      console.error('❌ Failed to fetch accounts:', JSON.stringify(errorData, null, 2))
      process.exit(1)
    }

    const accountsData = await accountsResponse.json()
    console.log('📋 Accounts response:', JSON.stringify(accountsData, null, 2))
    
    // Find the SERVE page
    const servePage = accountsData.data?.find(page => page.id === pageId)
    
    if (!servePage || !servePage.access_token) {
      console.error('❌ Could not find SERVE page or access token in accounts')
      console.log('Available pages:', accountsData.data?.map(p => ({ id: p.id, name: p.name })))
      process.exit(1)
    }

    const pageAccessToken = servePage.access_token
    console.log(`\n✅ Got Page Access Token for: ${servePage.name}`)
    console.log(`🔑 Page Token: ${pageAccessToken.substring(0, 20)}...\n`)
    
    // Now fetch the posts using the page access token
    console.log('🔍 Step 2: Fetching posts with Page Access Token...')
    const fields = 'id,message,story,created_time,picture,full_picture,permalink_url'
    const postsUrl = `https://graph.facebook.com/v24.0/${pageId}/feed?fields=${fields}&limit=3&access_token=${pageAccessToken}`

    console.log(`📡 API URL: ${postsUrl.replace(pageAccessToken, 'PAGE_TOKEN_HIDDEN')}\n`)

    const response = await fetch(postsUrl)
    
    if (!response.ok) {
      const error = await response.json()
      console.error('❌ Facebook API Error:', JSON.stringify(error, null, 2))
      process.exit(1)
    }

    const data = await response.json()
    const posts = data.data || []

    console.log(`\n✅ Successfully fetched ${posts.length} posts!\n`)
    
    posts.forEach((post, index) => {
      console.log(`\n📝 Post ${index + 1}:`)
      console.log('─'.repeat(80))
      console.log(`ID: ${post.id}`)
      console.log(`Created: ${post.created_time}`)
      console.log(`Message: ${(post.message || post.story || '').substring(0, 150)}...`)
      console.log(`Permalink: ${post.permalink_url}`)
      console.log(`Picture: ${post.full_picture || post.picture || 'No image'}`)
      console.log('─'.repeat(80))
    })

    console.log('\n\n📋 Copy this data to update FacebookFeed.tsx:\n')
    console.log(JSON.stringify(posts, null, 2))

  } catch (error) {
    console.error('❌ Error:', error.message)
    process.exit(1)
  }
}

fetchFacebookPosts()
