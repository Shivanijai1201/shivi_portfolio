import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import AOS from 'aos'
import { PATH_TO_ID } from './routes.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function Layout() {
  const location = useLocation()
  const isFirstRun = useRef(true)

  useEffect(() => {
    AOS.init()
  }, [])

  useEffect(() => {
    const id = PATH_TO_ID[location.pathname] ?? 'home'
    const el = document.getElementById(id)
    if (!el) return

    el.scrollIntoView({ behavior: isFirstRun.current ? 'instant' : 'smooth', block: 'start' })
    isFirstRun.current = false
  }, [location.pathname])

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default Layout
