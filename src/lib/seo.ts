import { Metadata } from 'next'

interface SEOConfig {
  title?: string
  description?: string
  keywords?: string[]
  canonicalUrl?: string
  images?: Array<{
    url: string
    width?: number
    height?: number
    alt?: string
  }>
  type?: 'website' | 'article' | 'service'
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
}

export function generateSEOMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonicalUrl,
    images = [],
    type = 'website',
    publishedTime,
    modifiedTime,
    section,
    tags = []
  } = config

  const baseUrl = 'https://serve.org.uk'
  const defaultImage = '/images/serve.webp'

  const seoImages = images.length > 0 ? images : [
    {
      url: defaultImage,
      width: 1200,
      height: 630,
      alt: 'SERVE Charity Logo - Supporting Independence',
    }
  ]

  const metadata: Metadata = {
    title,
    description,
    keywords: [...keywords, 'SERVE', 'charity', 'Northamptonshire', 'care services'],
    alternates: canonicalUrl ? { canonical: canonicalUrl } : undefined,
    openGraph: {
      type: type === 'article' ? 'article' : 'website',
      locale: 'en_GB',
      url: canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl,
      siteName: 'SERVE - Supporting Independence',
      title: title || 'SERVE | Supporting Independence in Northamptonshire',
      description: description || 'Award-winning charity providing care services to older people and adults with disabilities in Northamptonshire.',
      images: seoImages.map(img => ({
        url: img.url,
        width: img.width,
        height: img.height,
        alt: img.alt,
      })),
    },
    twitter: {
      card: 'summary_large_image',
      site: '@serve_charity',
      creator: '@serve_charity',
      title: title || 'SERVE | Supporting Independence in Northamptonshire',
      description: description || 'Award-winning charity providing care services to older people and adults with disabilities in Northamptonshire.',
      images: seoImages.map(img => img.url),
    },
  }

  // Add article-specific metadata
  if (type === 'article') {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      publishedTime,
      modifiedTime,
      section,
      tags,
      authors: ['SERVE Charity'],
    }
  }

  return metadata
}

// Predefined SEO configurations for common pages
export const seoConfigs = {
  home: {
    title: 'SERVE | Award-Winning Care Services in Northamptonshire',
    description: 'Award-winning charity providing care to older people and adults with disabilities. Winner Best Homecare Team 2024. Call 01933 315555.',
    keywords: ['homecare', 'charity', 'Northamptonshire', 'elderly care', 'disability support', 'Great British Care Awards', 'CQC registered'],
    canonicalUrl: '/',
  },
  services: {
    title: 'Our Services - Award-Winning Care Services | SERVE',
    description: 'Personal care, day care, transport, befriending, and volunteer programs. CQC registered and award-winning. Free assessment: 01933 315555.',
    keywords: ['care services', 'homecare', 'day care', 'community transport', 'befriending', 'volunteers', 'CQC registered'],
    canonicalUrl: '/services',
  },
  about: {
    title: 'About SERVE - 40+ Years Supporting Independence | SERVE Charity',
    description: '40+ years supporting older people and adults with disabilities in Northamptonshire. Award-winning team dedicated to independence. Learn more.',
    keywords: ['charity history', 'mission', 'vision', 'Northamptonshire charity', 'care team', 'Great British Care Awards'],
    canonicalUrl: '/about',
  },
  contact: {
    title: 'Contact SERVE - Get in Touch | Care Services Northamptonshire',
    description: 'Get in touch with SERVE. Call 01933 315555, email info@serve.org.uk, or visit 8 West Street, Rushden, NN10 0RT. We\'re here to help.',
    keywords: ['contact SERVE', 'care services enquiry', 'Rushden', 'Northamptonshire', 'phone', 'email'],
    canonicalUrl: '/contact',
  },
  volunteer: {
    title: 'Volunteer with SERVE - Make a Difference | SERVE Charity',
    description: 'Make a real difference in Northamptonshire. Volunteer opportunities in befriending, events, admin, and fundraising. Join us: 01933 315555.',
    keywords: ['volunteer opportunities', 'befriending', 'community support', 'charity volunteer', 'Northamptonshire'],
    canonicalUrl: '/volunteer',
  },
  news: {
    title: 'News & Events - Latest Updates | SERVE Charity',
    description: 'Latest news, award wins, and upcoming events from SERVE. See how we\'re making a difference in Northamptonshire communities every day.',
    keywords: ['charity news', 'events', 'Great British Care Awards', 'community news', 'Northamptonshire charity updates'],
    canonicalUrl: '/news',
  },
  donate: {
    title: 'Donate to SERVE - Support Care Services | SERVE Charity',
    description: 'Your donation transforms lives. Support vital care services for vulnerable adults in Northamptonshire. Donate securely via JustGiving today.',
    keywords: ['donate', 'charity donation', 'support SERVE', 'JustGiving', 'Friends of SERVE', 'gift aid', 'legacy giving'],
    canonicalUrl: '/donate',
  },
}