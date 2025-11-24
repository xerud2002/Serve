import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

async function extendFacebookToken() {
  const currentToken = process.env.FACEBOOK_ACCESS_TOKEN
  const appId = process.env.FACEBOOK_APP_ID
  const appSecret = process.env.FACEBOOK_APP_SECRET

  if (!currentToken) {
    console.error('❌ FACEBOOK_ACCESS_TOKEN not found in .env.local')
    process.exit(1)
  }

  console.log('📋 Current token info:')
  console.log(`🔑 Current Token: ${currentToken.substring(0, 20)}...`)
  console.log()

  // Check current token info
  try {
    console.log('🔍 Checking current token status...')
    const debugUrl = `https://graph.facebook.com/v24.0/debug_token?input_token=${currentToken}&access_token=${currentToken}`
    const debugResponse = await fetch(debugUrl)
    const debugData = await debugResponse.json()

    if (debugData.data) {
      const { expires_at, is_valid, scopes, data_access_expires_at } = debugData.data
      console.log('✅ Token is valid:', is_valid)
      console.log('📅 Token expires at:', expires_at ? new Date(expires_at * 1000).toLocaleString() : 'Never (long-lived)')
      console.log('📊 Data access expires:', data_access_expires_at ? new Date(data_access_expires_at * 1000).toLocaleString() : 'N/A')
      console.log('🔐 Scopes:', scopes?.join(', ') || 'N/A')
      console.log()

      // If token expires in less than a day, try to extend it
      if (expires_at && expires_at < (Date.now() / 1000) + 86400) {
        console.log('⚠️  Token expires in less than 24 hours!')
      }
    }
  } catch (error) {
    console.error('❌ Failed to check token status:', error.message)
  }

  // Try to extend the token (requires App ID and App Secret)
  if (appId && appSecret) {
    try {
      console.log('🔄 Attempting to exchange for long-lived token...')
      const extendUrl = `https://graph.facebook.com/v24.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${appId}&client_secret=${appSecret}&fb_exchange_token=${currentToken}`
      
      const extendResponse = await fetch(extendUrl)
      const extendData = await extendResponse.json()

      if (extendData.access_token) {
        console.log('✅ Successfully generated long-lived token!')
        console.log()
        console.log('🔑 New Long-Lived Token:')
        console.log('─'.repeat(80))
        console.log(extendData.access_token)
        console.log('─'.repeat(80))
        console.log()
        console.log('📝 Update your .env.local file with this token:')
        console.log(`FACEBOOK_ACCESS_TOKEN=${extendData.access_token}`)
        console.log()
        console.log('⏰ This token will expire in:', extendData.expires_in ? `${extendData.expires_in / 86400} days` : '60 days (typical)')
      } else {
        console.error('❌ Failed to generate long-lived token:', extendData)
        console.log()
        console.log('💡 Tip: You need FACEBOOK_APP_ID and FACEBOOK_APP_SECRET in .env.local')
        console.log('   Get these from: https://developers.facebook.com/apps/')
      }
    } catch (error) {
      console.error('❌ Error extending token:', error.message)
    }
  } else {
    console.log('ℹ️  To extend token to 60 days, add to .env.local:')
    console.log('   FACEBOOK_APP_ID=your_app_id')
    console.log('   FACEBOOK_APP_SECRET=your_app_secret')
    console.log()
    console.log('   Get these from: https://developers.facebook.com/apps/')
    console.log()
    console.log('📘 Alternative: Generate a Page Access Token that never expires:')
    console.log('   1. Go to Graph API Explorer: https://developers.facebook.com/tools/explorer/')
    console.log('   2. Select your app')
    console.log('   3. Select "Get Page Access Token" under User Token')
    console.log('   4. Select your SERVE page')
    console.log('   5. Click "Generate Access Token"')
    console.log('   6. Copy the token and update .env.local')
  }

  console.log()
  console.log('🔐 Current approach: Using User Admin Token → Page Token conversion')
  console.log('   This works as long as:')
  console.log('   ✓ You remain an admin of the SERVE Facebook page')
  console.log('   ✓ The User Access Token is valid (refresh periodically)')
  console.log()
}

extendFacebookToken()
