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
    keywords: ['homecare Northamptonshire', 'home care services', 'elderly care Rushden', 'disability support', 'domiciliary care', 'Great British Care Awards', 'CQC registered homecare', 'care at home', 'live-in care'],
    canonicalUrl: '/',
  },
  services: {
    title: 'Our Services - Award-Winning Care Services | SERVE',
    description: 'Personal care, day care, transport, befriending, and volunteer programs. CQC registered and award-winning. Free assessment: 01933 315555.',
    keywords: ['care services Northamptonshire', 'homecare services', 'day care services', 'community transport', 'befriending service', 'respite care', 'CQC registered care', 'care agency Rushden', 'domiciliary care services'],
    canonicalUrl: '/services',
  },
  about: {
    title: 'About SERVE - 40+ Years Supporting Independence | SERVE Charity',
    description: '40+ years supporting older people and adults with disabilities in Northamptonshire. Award-winning team dedicated to independence. Learn more.',
    keywords: ['charity Northamptonshire', 'care charity', 'local charity Rushden', 'nonprofit care services', 'registered charity 1043321', 'Great British Care Awards winner', 'award-winning care provider'],
    canonicalUrl: '/about',
  },
  contact: {
    title: 'Contact SERVE - Get in Touch | Care Services Northamptonshire',
    description: 'Get in touch with SERVE. Call 01933 315555, email info@serve.org.uk, or visit 8 West Street, Rushden, NN10 0RT. We\'re here to help.',
    keywords: ['contact SERVE', 'care services enquiry Northamptonshire', 'homecare consultation', 'care assessment Rushden', 'Wellingborough care services', 'Kettering homecare', 'Corby care services'],
    canonicalUrl: '/contact',
  },
  volunteer: {
    title: 'Volunteer with SERVE - Make a Difference | SERVE Charity',
    description: 'Make a real difference in Northamptonshire. Volunteer opportunities in befriending, events, admin, and fundraising. Join us: 01933 315555.',
    keywords: ['volunteer Northamptonshire', 'charity volunteering', 'befriending volunteers', 'community volunteer opportunities', 'volunteer with elderly', 'volunteering Rushden', 'charity volunteer roles'],
    canonicalUrl: '/volunteer',
  },
  news: {
    title: 'News & Events - Latest Updates | SERVE Charity',
    description: 'Latest news, award wins, and upcoming events from SERVE. See how we\'re making a difference in Northamptonshire communities every day.',
    keywords: ['charity news Northamptonshire', 'care industry news', 'Great British Care Awards', 'community events Rushden', 'charity events', 'homecare news UK', 'local charity updates'],
    canonicalUrl: '/news',
  },
  donate: {
    title: 'Donate to SERVE - Support Care Services | SERVE Charity',
    description: 'Your donation transforms lives. Support vital care services for vulnerable adults in Northamptonshire. Donate securely via JustGiving today.',
    keywords: ['donate to charity', 'charity donation Northamptonshire', 'support local charity', 'JustGiving SERVE', 'Friends of SERVE', 'gift aid donation', 'legacy giving', 'charitable giving', 'donate homecare charity'],
    canonicalUrl: '/donate',
  },
}