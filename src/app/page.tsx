import Hero from '@/components/Hero'
import CallToActionSection from '@/components/CallToActionSection'
import Services from '@/components/Services'
import About from '@/components/About'
import Awards from '@/components/Awards'
import News from '@/components/News'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TodoList from '@/components/TodoList'

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Regional Winner Badge - Below Header */}
      <section className="bg-white py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="inline-block relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl opacity-20 group-hover:opacity-30 blur transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-4 shadow-lg border border-gray-200 group-hover:border-blue-200 transition-all duration-300">
                <img 
                  src="/images/serve-regional-winner-badge.webp" 
                  alt="Great British Care Awards 2024 - Regional Winner - SERVE"
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain hover:scale-105 transition-transform duration-300"
                  width={192}
                  height={192}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <main>
        <Hero />
        <CallToActionSection />
        <Services />
        <About />
        <Awards />
        <News />
        <Contact />
      </main>
      <Footer />
      <TodoList />
    </>
  )
}