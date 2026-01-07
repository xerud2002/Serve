'use client'

import Script from 'next/script'

interface AhrefsAnalyticsProps {
  dataKey?: string
}

export default function AhrefsAnalytics({ dataKey }: AhrefsAnalyticsProps) {
  // Don't load analytics in development or if no data key
  if (!dataKey || process.env.NODE_ENV === 'development') {
    return null
  }

  return (
    <Script
      src="https://analytics.ahrefs.com/analytics.js"
      data-key={dataKey}
      strategy="afterInteractive"
      async
    />
  )
}
