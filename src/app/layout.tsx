import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

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
        url: '/images/serve.png',
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
    images: ['/images/serve.png'],
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
    google: 'ADD_GOOGLE_SITE_VERIFICATION_CODE',
    yandex: 'ADD_YANDEX_VERIFICATION_CODE',
    yahoo: 'ADD_YAHOO_VERIFICATION_CODE',
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#1664de" />
        <StructuredData type="local-business" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}