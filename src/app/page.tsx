import Hero from '@/components/Hero'
import Services from '@/components/Services'
import CallToActionSection from '@/components/CallToActionSection'
import WhyChooseSERVE from '@/components/WhyChooseSERVE'
import News from '@/components/News'
import FacebookFeed from '@/components/FacebookFeed'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <CallToActionSection />
      <News />
      <FacebookFeed />
      <WhyChooseSERVE />
      <Contact />
    </>
  )
}