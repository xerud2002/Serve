import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import CallToActionSection from '@/components/CallToActionSection'
import { generateSEOMetadata, seoConfigs } from '@/lib/seo'

// Lazy load below-the-fold components to improve initial page load
const WhyChooseSERVE = dynamic(() => import('@/components/WhyChooseSERVE'), {
  loading: () => <div className="min-h-[400px] bg-gray-50 animate-pulse" />
})
const Events = dynamic(() => import('@/components/Events'), {
  loading: () => <div className="min-h-[600px] bg-white animate-pulse" />
})
const FacebookFeed = dynamic(() => import('@/components/FacebookFeed'), {
  loading: () => <div className="min-h-[500px] bg-gray-50 animate-pulse" />
})
const WebVitals = dynamic(() => import('@/components/WebVitals'))

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
      <WebVitals />
    </>
  )
}