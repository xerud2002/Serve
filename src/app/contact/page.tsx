import type { Metadata } from 'next'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Contact Us - SERVE',
  description: 'Get in touch with SERVE for care services, volunteering opportunities, or general inquiries. Call 01933 315555 or use our online contact form.',
  keywords: ['contact SERVE', 'care services Northamptonshire', 'volunteer opportunities', 'charity contact', 'Rushden care services'],
  openGraph: {
    title: 'Contact Us - SERVE',
    description: 'Get in touch with SERVE for care services, volunteering opportunities, or general inquiries.',
    type: 'website',
    locale: 'en_GB',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Contact />
    </div>
  )
}