import Hero from '@/components/Hero'
import Services from '@/components/Services'
import CallToActionSection from '@/components/CallToActionSection'
import WhyChooseSERVE from '@/components/WhyChooseSERVE'
import Events from '@/components/Events'
import FacebookFeed from '@/components/FacebookFeed'

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