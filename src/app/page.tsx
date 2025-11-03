import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Awards from '@/components/Awards'
import News from '@/components/News'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Awards />
        <News />
        <Contact />
      </main>
      <Footer />
    </>
  )
}