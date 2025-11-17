'use client'

import { useEffect } from 'react'

/**
 * Web Vitals Reporter
 * Monitors Core Web Vitals (LCP, FID, CLS) and logs them for performance tracking
 * In production, you'd send these to an analytics service
 */
export default function WebVitals() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Only run in production or when explicitly enabled
    if (process.env.NODE_ENV !== 'production' && !process.env.NEXT_PUBLIC_ENABLE_WEB_VITALS) {
      return
    }

    // Dynamic import to avoid bloating the bundle
    import('web-vitals').then(({ onCLS, onLCP, onFCP, onTTFB, onINP }) => {
      const logMetric = (metric: any) => {
        // In production, send to your analytics service:
        // analytics.track('web-vitals', metric)
        
        if (process.env.NODE_ENV === 'development') {
          console.log(`[Web Vitals] ${metric.name}:`, {
            value: metric.value,
            rating: metric.rating,
            delta: metric.delta,
          })
        }
      }

      // Monitor all Core Web Vitals
      onCLS(logMetric)  // Cumulative Layout Shift
      onLCP(logMetric)  // Largest Contentful Paint
      onFCP(logMetric)  // First Contentful Paint
      onTTFB(logMetric) // Time to First Byte
      onINP(logMetric)  // Interaction to Next Paint (replaces FID)
    })
  }, [])

  return null // This component renders nothing
}
