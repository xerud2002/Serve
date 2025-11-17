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
    description: 'SERVE is an award-winning charity providing care services to older people and adults with disabilities in Northamptonshire. Winner Best Homecare Team, East Midlands 2024. CQC registered with 40+ years of trusted service.',
    keywords: ['homecare', 'charity', 'Northamptonshire', 'elderly care', 'disability support', 'Great British Care Awards', 'CQC registered'],
    canonicalUrl: '/',
  },
  services: {
    title: 'Our Services - Award-Winning Care Services | SERVE',
    description: 'Discover SERVE\'s comprehensive care services: Personal & Domestic Care, Day Care, Community Transport, Befriending, and Volunteer Programs. CQC registered and award-winning.',
    keywords: ['care services', 'homecare', 'day care', 'community transport', 'befriending', 'volunteers', 'CQC registered'],
    canonicalUrl: '/services',
  },
  about: {
    title: 'About SERVE - 40+ Years Supporting Independence | SERVE Charity',
    description: 'Learn about SERVE\'s 40+ year history supporting older people and adults with disabilities in Northamptonshire. Our mission, vision, and award-winning team.',
    keywords: ['charity history', 'mission', 'vision', 'Northamptonshire charity', 'care team', 'Great British Care Awards'],
    canonicalUrl: '/about',
  },
  contact: {
    title: 'Contact SERVE - Get in Touch | Care Services Northamptonshire',
    description: 'Contact SERVE for care services information. Call 01933 315555, email info@serve.org.uk, or visit us at 8 West Street, Rushden, Northants NN10 0RT.',
    keywords: ['contact SERVE', 'care services enquiry', 'Rushden', 'Northamptonshire', 'phone', 'email'],
    canonicalUrl: '/contact',
  },
  volunteer: {
    title: 'Volunteer with SERVE - Make a Difference | SERVE Charity',
    description: 'Join our team of volunteers making a difference in Northamptonshire. Opportunities in befriending, community support, administration, and fundraising.',
    keywords: ['volunteer opportunities', 'befriending', 'community support', 'charity volunteer', 'Northamptonshire'],
    canonicalUrl: '/volunteer',
  },
  news: {
    title: 'News & Events - Latest Updates | SERVE Charity',
    description: 'Stay up to date with the latest news, events, and achievements from SERVE. Read about our award wins, community initiatives, and upcoming activities.',
    keywords: ['charity news', 'events', 'Great British Care Awards', 'community news', 'Northamptonshire charity updates'],
    canonicalUrl: '/news',
  },
  donate: {
    title: 'Donate to SERVE - Support Care Services | SERVE Charity',
    description: 'Make a difference by donating to SERVE. Your gift provides life-changing care, transport, and support to vulnerable adults across Northamptonshire. Every donation transforms lives.',
    keywords: ['donate', 'charity donation', 'support SERVE', 'JustGiving', 'Friends of SERVE', 'gift aid', 'legacy giving'],
    canonicalUrl: '/donate',
  },
}