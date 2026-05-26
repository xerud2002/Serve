import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/StructuredData'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import InstallPrompt from '@/components/InstallPrompt'

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
          *,::after,::before{box-sizing:border-box}
          body{margin:0;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;line-height:1.5;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
          img,video{max-width:100%;height:auto}
          .antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
          /* Critical hero styles */
          .min-h-\\[90vh\\]{min-height:90vh}
          .relative{position:relative}
          .absolute{position:absolute}
          .inset-0{inset:0}
          .overflow-hidden{overflow:hidden}
          .text-white{color:#fff}
          .text-center{text-align:center}
          .flex{display:-webkit-box;display:-ms-flexbox;display:flex}
          .grid{display:-ms-grid;display:grid}
          .items-center{-webkit-box-align:center;-ms-flex-align:center;align-items:center}
          .justify-center{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}
          .gap-4{gap:1rem}
          .px-4{padding-left:1rem;padding-right:1rem}
          .py-16{padding-top:4rem;padding-bottom:4rem}
          .max-w-7xl{max-width:80rem}
          .mx-auto{margin-left:auto;margin-right:auto}
          .font-black{font-weight:900}
          .font-bold{font-weight:700}
          .text-4xl{font-size:2.25rem;line-height:2.5rem}
          .leading-tight{line-height:1.25}
          .mb-2{margin-bottom:0.5rem}
          .mb-3{margin-bottom:0.75rem}
          .space-y-6>:not(:first-child){margin-top:1.5rem}
          @media(min-width:640px){.sm\\:text-5xl{font-size:3rem;line-height:1}}
          @media(min-width:1024px){.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr));}.lg\\:text-left{text-align:left}}
        `}} />
        
        {/* Browser Compatibility Meta Tags */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        
        {/* Performance optimizations - Preconnect to required origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://graph.facebook.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Preload critical hero image for faster LCP - smaller size for mobile */}
        <link 
          rel="preload" 
          href="/images/awards/regional-winner1.webp" 
          as="image" 
          type="image/webp"
          media="(min-width: 640px)"
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
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
        <CookieConsent />
        <InstallPrompt />
      </body>
    </html>
  )
}