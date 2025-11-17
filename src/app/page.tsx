import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import CallToActionSection from '@/components/CallToActionSection'
import { generateSEOMetadata, seoConfigs } from '@/lib/seo'

// Lazy load below-the-fold components to improve initial page load
const WhyChooseSERVE = dynamic(() => import('@/components/WhyChooseSERVE'), {
  loading: () => <div className="min-h-[400px]" />
})
const Events = dynamic(() => import('@/components/Events'), {
  loading: () => <div className="min-h-[600px]" />
})
const FacebookFeed = dynamic(() => import('@/components/FacebookFeed'), {
  loading: () => <div className="min-h-[500px]" />
})

export const metadata = generateSEOMetadata(seoConfigs.home)

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <CallToActionSection />
      <Events />
      <FacebookFeed />
      <WhyChooseSERVE />
    </>
  )
}