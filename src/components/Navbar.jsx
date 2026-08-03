import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'

const NAV_ITEMS = [
  { path: '/', id: 'home', label: 'Home' },
  { path: '/about', id: 'about', label: 'About' },
  { path: '/services', id: 'services', label: 'Services' },
  { path: '/projects', id: 'projects', label: 'Projects' },
  { path: '/testimonials', id: 'testimonials', label: 'Testimonials' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const handleScroll = () => {
      const currentScroll = window.scrollY

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80
        const sectionBottom = sectionTop + section.offsetHeight

        if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const logo = (
    <p className="m-0 flex items-end text-lg font-bold">
      <span className="mr-0.5 text-4xl font-extrabold text-primary">S</span>hivani Jayshwal
    </p>
  )

  return (
    <>
      {/* Mobile bar */}
      <div className="fixed top-0 z-50 hidden w-full items-center justify-between bg-paper max-[800px]:flex">
        <div className="flex items-center gap-3">
          <Link to="/" className="px-4 py-3 text-ink no-underline">
            {logo}
          </Link>
          <ThemeToggle />
        </div>
        <div
          className="absolute top-full left-0 w-full bg-paper"
          style={{ display: menuOpen ? 'block' : 'none' }}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-[#0087ca] no-underline hover:bg-ink/10 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-3 text-[#0087ca] no-underline hover:bg-ink/10 hover:text-primary"
          >
            Contact
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="px-6 py-3 text-ink"
          aria-label="Toggle menu"
        >
          <i className="fa fa-bars"></i>
        </button>
      </div>

      {/* Desktop nav */}
      <nav className="fixed top-0 z-50 hidden w-full justify-center bg-paper py-2.5 min-[801px]:flex">
        <div className="flex w-[90%] max-w-6xl items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center text-ink no-underline">
              {logo}
            </Link>
            <ThemeToggle />
          </div>
          <ul className="m-0 flex list-none p-0">
            {NAV_ITEMS.map((item) => (
              <li key={item.path} className="mx-4 inline-block">
                <Link
                  to={item.path}
                  className={`no-underline transition-colors ${
                    activeSection === item.id ? 'font-bold text-primary' : 'text-ink'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="inline-block rounded-full bg-primary px-6 py-2 text-sm font-bold tracking-wider text-ink uppercase transition-all hover:-translate-y-1 hover:bg-primary-dark hover:text-black hover:shadow-[0_10px_25px_rgba(0,204,255,0.35)]"
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
