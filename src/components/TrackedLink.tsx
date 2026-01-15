'use client'

import { analytics } from '@/components/GoogleAnalytics'

interface TrackedLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  trackAs: 'donate' | 'external' | 'phone'
  label?: string
  ariaLabel?: string
}

/**
 * Client component for tracking external link clicks
 * Used in server components that need analytics tracking
 */
export default function TrackedLink({ 
  href, 
  children, 
  className = '', 
  trackAs,
  label,
  ariaLabel
}: TrackedLinkProps) {
  const handleClick = () => {
    switch (trackAs) {
      case 'donate':
        analytics.trackDonateClick()
        analytics.trackExternalLink(label || 'JustGiving', href)
        break
      case 'external':
        analytics.trackExternalLink(label || href, href)
        break
      case 'phone':
        analytics.trackPhoneClick(href.replace('tel:', ''), label || 'page')
        break
    }
  }

  const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')
  
  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
      {...(isExternal && !href.startsWith('tel:') && !href.startsWith('mailto:') ? {
        target: '_blank',
        rel: 'noopener noreferrer'
      } : {})}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  )
}
