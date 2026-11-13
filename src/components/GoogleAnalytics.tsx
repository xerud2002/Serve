'use client'

import Script from 'next/script'

interface GoogleAnalyticsProps {
  measurementId?: string
}

// Track conversion events
function trackEvent(eventName: string, eventParams?: Record<string, string | number | boolean | undefined>) {
  if (typeof window === 'undefined' || !window.gtag) return
  
  window.gtag('event', eventName, eventParams)
}

// Google Ads conversion tracking
function trackGoogleAdsConversion() {
  if (typeof window === 'undefined' || !window.gtag) return
  
  window.gtag('event', 'conversion_event_page_view', {
    'event_timeout': 2000,
  })
}

// Predefined event tracking functions
export const analytics = {
  // Contact form submission
  trackContactForm: (formType: 'contact' | 'volunteer') => {
    trackEvent('generate_lead', {
      category: 'Form',
      label: formType,
    })
    // Also fire Google Ads conversion
    trackGoogleAdsConversion()
  },

  // Phone number clicks
  trackPhoneClick: (phoneNumber: string, location: string) => {
    trackEvent('phone_call', {
      category: 'Contact',
      label: location, // e.g., 'header', 'footer', 'hero'
      phone_number: phoneNumber,
    })
    // Also fire Google Ads conversion
    trackGoogleAdsConversion()
  },

  // Newsletter signup
  trackNewsletterSignup: (location: string) => {
    trackEvent('newsletter_signup', {
      category: 'Engagement',
      label: location,
    })
  },

  // Donation clicks
  trackDonateClick: (amount?: number) => {
    trackEvent('donate_click', {
      category: 'Donation',
      value: amount,
    })
    // Also fire Google Ads conversion
    trackGoogleAdsConversion()
  },

  // Service page views
  trackServiceView: (serviceName: string) => {
    trackEvent('view_service', {
      category: 'Service',
      label: serviceName,
    })
  },

  // CTA button clicks
  trackCTAClick: (ctaName: string, destination: string) => {
    trackEvent('cta_click', {
      category: 'CTA',
      label: ctaName,
      destination: destination,
    })
  },

  // External link clicks
  trackExternalLink: (linkName: string, url: string) => {
    trackEvent('external_link', {
      category: 'Outbound',
      label: linkName,
      url: url,
    })
  },
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  // Don't load analytics if no measurement ID
  if (!measurementId) {
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
              anonymize_ip: true, // GDPR compliance
              cookie_flags: 'SameSite=None;Secure',
            });
          `,
        }}
      />
    </>
  )
}

// TypeScript declarations for gtag
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, string | number | boolean | undefined>
    ) => void
    dataLayer?: Array<Record<string, unknown>>
  }
}
