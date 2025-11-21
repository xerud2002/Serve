/**
 * Facebook Token Update Guide
 * 
 * This script helps you manually test your Facebook access token
 * and import the latest posts to verify everything is working.
 * 
 * DAILY TOKEN UPDATE PROCESS:
 * ============================
 * 
 * 1. Go to: https://developers.facebook.com/tools/explorer/
 * 
 * 2. Select your app: "Serve Website"
 * 
 * 3. Select token type: "User Token"
 * 
 * 4. Add these permissions (click "Add a Permission"):
 *    - pages_show_list
 *    - pages_read_engagement
 *    - pages_manage_metadata
 *    - pages_read_user_content
 * 
 * 5. Click "Generate Access Token" button
 * 
 * 6. Copy the token that appears
 * 
 * 7. Update your .env.local file:
 *    FACEBOOK_ACCESS_TOKEN=EAAZCjQ2LcG8BO3...your_token_here
 * 
 * 8. Run this script to test: node scripts/test-facebook-token.js
 * 
 * 9. Restart your development server or rebuild for production
 * 
 * ============================================
 * OPTIONAL: Generate Long-Lived Token (60 days)
 * ============================================
 * 
 * If you want a token that lasts 60 days instead of updating daily:
 * 
 * 1. Get your short-lived token as above
 * 
 * 2. Get your App ID and App Secret from:
 *    https://developers.facebook.com/apps/YOUR_APP_ID/settings/basic/
 * 
 * 3. Use this URL (replace the values):
 *    https://graph.facebook.com/v24.0/oauth/access_token?grant_type=fb_exchange_token&client_id=YOUR_APP_ID&client_secret=YOUR_APP_SECRET&fb_exchange_token=YOUR_SHORT_TOKEN
 * 
 * 4. Visit that URL in your browser and copy the long-lived access_token
 * 
 * 5. Update .env.local with the long-lived token
 * 
 */

// Test script to verify your Facebook token works
async function testFacebookToken() {
  console.log('\n🔍 Testing Facebook Access Token...\n')
  
  // Load environment variables
  try {
    const dotenv = await import('dotenv')
    dotenv.config({ path: '.env.local' })
  } catch {
    // dotenv not available, will use existing env vars
  }
  
  const pageId = process.env.FACEBOOK_PAGE_ID || '239416516576684'
  const accessToken = process.env.FACEBOOK_ACCESS_TOKEN
  
  if (!accessToken) {
    console.error('❌ ERROR: FACEBOOK_ACCESS_TOKEN not found in .env.local')
    console.log('\n📝 Please add your token to .env.local:')
    console.log('   FACEBOOK_ACCESS_TOKEN=your_token_here\n')
    return
  }
  
  console.log(`📄 Page ID: ${pageId}`)
  console.log(`🔑 Token: ${accessToken.substring(0, 20)}...`)
  console.log('\n🌐 Fetching latest posts from Facebook...\n')
  
  try {
    const fields = 'id,message,story,created_time,picture,full_picture,permalink_url'
    const url = `https://graph.facebook.com/v24.0/${pageId}/posts?fields=${fields}&limit=6&access_token=${accessToken}`
    
    const response = await fetch(url)
    const data = await response.json()
    
    if (data.error) {
      console.error('❌ Facebook API Error:')
      console.error(`   Message: ${data.error.message}`)
      console.error(`   Type: ${data.error.type}`)
      console.error(`   Code: ${data.error.code}`)
      
      if (data.error.code === 190) {
        console.log('\n💡 Token expired or invalid. Please generate a new token.')
      }
      return
    }
    
    if (!data.data || data.data.length === 0) {
      console.log('⚠️  No posts found. Check your page ID and permissions.')
      return
    }
    
    console.log(`✅ SUCCESS! Found ${data.data.length} posts:\n`)
    
    data.data.forEach((post, index) => {
      const date = new Date(post.created_time)
      const message = post.message || post.story || 'No text'
      const preview = message.substring(0, 100) + (message.length > 100 ? '...' : '')
      
      console.log(`${index + 1}. Posted: ${date.toLocaleDateString('en-GB')} ${date.toLocaleTimeString('en-GB')}`)
      console.log(`   "${preview}"`)
      console.log(`   Link: ${post.permalink_url || 'N/A'}`)
      console.log(`   Image: ${post.picture ? 'Yes' : 'No'}`)
      console.log('')
    })
    
    console.log('✅ Your Facebook integration is working correctly!')
    console.log('   The website will now show these posts automatically.\n')
    
  } catch (error) {
    console.error('❌ Network Error:', error.message)
    console.log('\n💡 Check your internet connection and try again.\n')
  }
}

// Run the test
testFacebookToken()
