import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

async function fetchFacebookEvents() {
  const pageId = process.env.FACEBOOK_PAGE_ID || '239416516576684'
  const userAccessToken = process.env.FACEBOOK_ACCESS_TOKEN

  if (!userAccessToken) {
    console.error('❌ FACEBOOK_ACCESS_TOKEN not found in .env.local')
    process.exit(1)
  }

  console.log('🔍 Step 1: Getting Page Access Token from User Admin Token...')
  console.log(`🔑 User Token: ${userAccessToken.substring(0, 20)}...`)
  
  try {
    // First, get the page access token using the user admin token
    const accountsUrl = `https://graph.facebook.com/v24.0/me/accounts?access_token=${userAccessToken}`
    console.log(`\n📡 Fetching accounts: ${accountsUrl.replace(userAccessToken, 'TOKEN_HIDDEN')}\n`)
    
    const accountsResponse = await fetch(accountsUrl)
    
    if (!accountsResponse.ok) {
      const errorData = await accountsResponse.json()
      console.error('❌ Failed to fetch accounts:', JSON.stringify(errorData, null, 2))
      process.exit(1)
    }

    const accountsData = await accountsResponse.json()
    
    // Find the SERVE page
    const servePage = accountsData.data?.find(page => page.id === pageId)
    
    if (!servePage || !servePage.access_token) {
      console.error('❌ Could not find SERVE page or access token in accounts')
      console.log('Available pages:', accountsData.data?.map(p => ({ id: p.id, name: p.name })))
      process.exit(1)
    }

    const pageAccessToken = servePage.access_token
    console.log(`✅ Got Page Access Token for: ${servePage.name}`)
    console.log(`🔑 Page Token: ${pageAccessToken.substring(0, 20)}...\n`)
    
    // Now fetch both upcoming and past events
    console.log('🔍 Step 2: Fetching events with Page Access Token...')
    
    // Fetch upcoming events
    const upcomingUrl = new URL(`https://graph.facebook.com/v24.0/${pageId}/events`)
    upcomingUrl.searchParams.set('fields', 'id,name,description,start_time,end_time,place,cover')
    upcomingUrl.searchParams.set('time_filter', 'upcoming')
    upcomingUrl.searchParams.set('limit', '10')
    upcomingUrl.searchParams.set('access_token', pageAccessToken)

    console.log(`📡 Upcoming events URL: ${upcomingUrl.toString().replace(pageAccessToken, 'PAGE_TOKEN_HIDDEN')}\n`)
    
    const upcomingResponse = await fetch(upcomingUrl.toString())
    
    if (!upcomingResponse.ok) {
      const errorData = await upcomingResponse.json()
      console.error('❌ Facebook API Error (Upcoming):', JSON.stringify(errorData, null, 2))
    } else {
      const upcomingData = await upcomingResponse.json()
      console.log(`✅ Successfully fetched ${upcomingData.data?.length || 0} upcoming events!\n`)
      
      if (upcomingData.data && upcomingData.data.length > 0) {
        upcomingData.data.forEach((event, index) => {
          console.log(`📅 Upcoming Event ${index + 1}:`)
          console.log('─'.repeat(80))
          console.log(`ID: ${event.id}`)
          console.log(`Name: ${event.name}`)
          console.log(`Start: ${event.start_time}`)
          console.log(`End: ${event.end_time || 'N/A'}`)
          console.log(`Location: ${event.place?.name || 'N/A'}`)
          console.log(`Cover: ${event.cover?.source || 'No image'}`)
          console.log('─'.repeat(80))
          console.log()
        })
      } else {
        console.log('ℹ️  No upcoming events found.\n')
      }
    }

    // Fetch past events
    const pastUrl = new URL(`https://graph.facebook.com/v24.0/${pageId}/events`)
    pastUrl.searchParams.set('fields', 'id,name,description,start_time,end_time,place,cover')
    pastUrl.searchParams.set('time_filter', 'past')
    pastUrl.searchParams.set('limit', '10')
    pastUrl.searchParams.set('access_token', pageAccessToken)

    console.log(`📡 Past events URL: ${pastUrl.toString().replace(pageAccessToken, 'PAGE_TOKEN_HIDDEN')}\n`)
    
    const pastResponse = await fetch(pastUrl.toString())
    
    if (!pastResponse.ok) {
      const errorData = await pastResponse.json()
      console.error('❌ Facebook API Error (Past):', JSON.stringify(errorData, null, 2))
    } else {
      const pastData = await pastResponse.json()
      console.log(`✅ Successfully fetched ${pastData.data?.length || 0} past events!\n`)
      
      if (pastData.data && pastData.data.length > 0) {
        pastData.data.slice(0, 3).forEach((event, index) => {
          console.log(`📅 Past Event ${index + 1}:`)
          console.log('─'.repeat(80))
          console.log(`ID: ${event.id}`)
          console.log(`Name: ${event.name}`)
          console.log(`Start: ${event.start_time}`)
          console.log(`End: ${event.end_time || 'N/A'}`)
          console.log(`Location: ${event.place?.name || 'N/A'}`)
          console.log(`Cover: ${event.cover?.source || 'No image'}`)
          console.log('─'.repeat(80))
          console.log()
        })
      } else {
        console.log('ℹ️  No past events found.\n')
      }
    }

  } catch (error) {
    console.error('❌ Unexpected error:', error.message)
    process.exit(1)
  }
}

fetchFacebookEvents()
