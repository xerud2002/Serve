import Contact from '@/components/Contact'
import { generateSEOMetadata, seoConfigs } from '@/lib/seo'

export const metadata = generateSEOMetadata(seoConfigs.contact)

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Contact />
    </div>
  )
}