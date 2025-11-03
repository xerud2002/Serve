import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SERVE | Supporting Independence in Northamptonshire',
  description: 'SERVE is an award-winning charity providing care services to older people and adults with disabilities in Northamptonshire. Winner of Best Homecare Team, East Midlands 2024.',
  keywords: 'charity, homecare, Northamptonshire, elderly care, disability support, community services',
  authors: [{ name: 'SERVE Charity' }],
  creator: 'SERVE Charity',
  publisher: 'SERVE Charity',
  openGraph: {
    title: 'SERVE | Supporting Independence in Northamptonshire',
    description: 'Award-winning charity providing care services to older people and adults with disabilities',
    url: 'https://serve.org.uk',
    siteName: 'SERVE Charity',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SERVE | Supporting Independence in Northamptonshire',
    description: 'Award-winning charity providing care services to older people and adults with disabilities',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}