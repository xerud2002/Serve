import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Community Transport - SERVE | Door-to-Door Transport in Northamptonshire',
  description: 'Safe, reliable door-to-door community transport for medical appointments, shopping trips and social visits. Wheelchair accessible vehicles with trained drivers. Call 01933 315555.',
  keywords: 'community transport, medical transport, wheelchair accessible transport, Northamptonshire transport, hospital transport, door to door transport, Rushden transport service',
  alternates: {
    canonical: '/services/transport/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://serve.org.uk/services/transport/',
    siteName: 'SERVE - Supporting Independence',
    title: 'Community Transport - SERVE | Door-to-Door Transport in Northamptonshire',
    description: 'Safe, reliable door-to-door community transport for medical appointments, shopping trips and social visits. Wheelchair accessible vehicles with trained drivers.',
    images: [{
      url: '/images/transport/community-transport1.webp',
      width: 1200,
      height: 630,
      alt: 'SERVE Community Transport Service',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@serve_charity',
    title: 'Community Transport - SERVE | Door-to-Door Transport in Northamptonshire',
    description: 'Safe, reliable door-to-door community transport for medical appointments, shopping trips and social visits.',
    images: ['/images/transport/community-transport1.webp'],
  },
}

export default function TransportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
