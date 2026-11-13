import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import CallToActionSection from '@/components/CallToActionSection'
import ScrollReveal from '@/components/ScrollReveal'
import { generateSEOMetadata, seoConfigs } from '@/lib/seo'

// Lazy load below-the-fold components to improve initial page load
const WhyChooseSERVE = dynamic(() => import('@/components/WhyChooseSERVE'), {
  loading: () => <div className="min-h-100 bg-gray-50 animate-pulse" />
})
const Events = dynamic(() => import('@/components/Events'), {
  loading: () => <div className="min-h-150 bg-white animate-pulse" />
})

export const metadata = generateSEOMetadata(seoConfigs.home)

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollReveal>
        <Services />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <CallToActionSection />
      </ScrollReveal>
      <ScrollReveal delay={150}>
        <Events />
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <WhyChooseSERVE />
      </ScrollReveal>
    </>
  )
}