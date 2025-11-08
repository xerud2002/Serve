import Image from 'next/image'
import Hero from '@/components/Hero'
import CallToActionSection from '@/components/CallToActionSection'
import Services from '@/components/Services'
import About from '@/components/About'
import Awards from '@/components/Awards'
import News from '@/components/News'
import SocialPhotosCarousel from '@/components/SocialPhotosCarousel'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
        
        {/* SERVE Winner Badge - Below Hero */}
        <section className="bg-white py-8 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="inline-block relative group">
                <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-lg transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-100 group-hover:border-blue-200 transition-all duration-300">
                  <Image 
                    src="/images/servewinner .png" 
                    alt="SERVE Winner - Great British Care Awards"
                    className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain hover:scale-105 transition-transform duration-300"
                    width={288}
                    height={288}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <CallToActionSection />
        <Services />
        <About />
        <Awards />
        <News />
        <SocialPhotosCarousel />
        <Contact />
    </>
  )
}