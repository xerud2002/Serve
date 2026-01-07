import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/StructuredData'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import AhrefsAnalytics from '@/components/AhrefsAnalytics'
import LayoutWrapper from '@/components/LayoutWrapper'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
  adjustFontFallback: true,
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
})

export const metadata: Metadata = {
  title: {
    default: 'SERVE | Supporting Independence in Northamptonshire',
    template: '%s | SERVE Charity'
  },
  description: 'SERVE is an award-winning charity providing care services to older people and adults with disabilities in Northamptonshire. Winner of Best Homecare Team, East Midlands 2024. CQC registered with 40+ years of trusted service.',
  keywords: [
    'charity',
    'homecare',
    'Northamptonshire',
    'elderly care',
    'disability support',
    'community services',
    'CQC registered',
    'Great British Care Awards',
    'personal care',
    'day care',
    'community transport',
    'befriending',
    'volunteers',
    'Rushden',
    'East Midlands'
  ],
  authors: [{ name: 'SERVE Charity', url: 'https://serve.org.uk' }],
  creator: 'SERVE Charity',
  publisher: 'SERVE Charity',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'SERVE Charity',
  },
  metadataBase: new URL('https://serve.org.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://serve.org.uk',
    siteName: 'SERVE - Supporting Independence',
    title: 'SERVE | Supporting Independence in Northamptonshire',
    description: 'Award-winning charity providing care services to older people and adults with disabilities in Northamptonshire. Winner Best Homecare Team 2024.',
    images: [
      {
        url: '/images/serve.webp',
        width: 800,
        height: 400,
        alt: 'SERVE Charity Logo - Supporting Independence',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@serve_charity',
    creator: '@serve_charity',
    title: 'SERVE | Supporting Independence in Northamptonshire',
    description: 'Award-winning charity providing care services to older people and adults with disabilities in Northamptonshire. Winner Best Homecare Team 2024.',
    images: ['/images/serve.webp'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'dc1d40cc239cfa22',
  },
  category: 'Healthcare & Social Services',
  classification: 'Charity',
  other: {
    'charity-number': '1043321',
    'cqc-registered': 'true',
    'area-served': 'Northamptonshire, East Midlands, UK',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <head>
        {/* Critical CSS - Inline for faster render */}
        <style dangerouslySetInnerHTML={{__html: `
          body { margin: 0; font-family: system-ui, -apple-system, sans-serif; }
          .antialiased { -webkit-font-smoothing: antialiased; }
        `}} />
        
        {/* Performance optimizations - Preconnect to required origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://graph.facebook.com" />
        <link rel="dns-prefetch" href="https://scontent.flhr4-3.fna.fbcdn.net" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://analytics.ahrefs.com" />
        
        {/* Ahrefs Web Analytics */}
        <script 
          src="https://analytics.ahrefs.com/analytics.js" 
          data-key="8k73rflY1LOF0LFR29DDcg" 
          async 
        />
        
        {/* Preload critical hero images for faster LCP */}
        <link 
          rel="preload" 
          href="/images/awards/regional-winner1.webp" 
          as="image" 
          type="image/webp"
        />
        
        {/* PWA Meta Tags */}
        <meta name="application-name" content="SERVE Charity" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SERVE" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#1664de" />
        
        <StructuredData type="local-business" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        <AhrefsAnalytics dataKey={process.env.NEXT_PUBLIC_AHREFS_DATA_KEY} />
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
        <CookieConsent />
      </body>
    </html>
  )
}