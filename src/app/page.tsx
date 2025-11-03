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