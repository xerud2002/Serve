import Contact from '@/components/Contact'
import { generateSEOMetadata, seoConfigs } from '@/lib/seo'
import { Metadata } from 'next'

export const metadata: Metadata = {
  ...generateSEOMetadata(seoConfigs.contact),
  title: 'Contact SERVE | Get in Touch - Care Services in Northamptonshire',
  description: 'Contact SERVE for care services, volunteering, or inquiries. Call 01933 315555 or visit our offices in Rushden and Higham Ferrers, Northamptonshire.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Contact />
    </div>
  )
}