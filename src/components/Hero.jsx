import { useEffect, useMemo, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Particles, ParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import Typed from 'typed.js'
import { useTheme } from '../ThemeContext.jsx'

const initParticles = async (engine) => {
  await loadSlim(engine)
}

function getParticlesOptions(theme) {
  const isLight = theme === 'light'
  return {
    fullScreen: { enable: false },
    background: { color: 'transparent' },
    particles: {
      number: { value: 120, density: { enable: true, area: 800 } },
      paint: {
        color: { value: isLight ? '#00ccff' : '#0081c2' },
        fill: { enable: true },
      },
      shape: { type: 'circle' },
      opacity: { value: isLight ? 0.9 : 0.5 },
      size: { value: { min: 1, max: 5 } },
      links: {
        enable: true,
        distance: 100,
        color: isLight ? '#000000' : '#eaeaea',
        opacity: isLight ? 0.5 : 0.4,
        width: isLight ? 1.5 : 1,
      },
      move: { enable: true, speed: 4, direction: 'none', random: false, straight: false, outModes: 'out' },
    },
    interactivity: {
      detectsOn: 'canvas',
      events: {
        onHover: { enable: true, mode: 'repulse' },
        onClick: { enable: true, mode: 'push' },
        resize: { enable: true, delay: 0.5 },
      },
      modes: {
        repulse: { distance: 200, duration: 0.6 },
        push: { quantity: 3 },
      },
    },
  }
}

const SOCIAL_LINKS = [
  { href: 'https://github.com/Shivanijai1201', icon: 'fa-brands fa-github', accent: 'var(--ink)' },
  { href: 'https://linkedin.com/in/shivani-jayshwal', icon: 'fa-brands fa-linkedin', accent: '#0a66c2' },
  { href: 'mailto:shivanijai1201@gmail.com', icon: 'fas fa-envelope', accent: '#00ccff' },
]

function Hero() {
  const typedRef = useRef(null)
  const { theme } = useTheme()
  const particlesOptions = useMemo(() => getParticlesOptions(theme), [theme])

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Software Engineer',
        'Backend Developer',
        'Full Stack Developer',
        'React Developer',
        'Android Developer',
        'Problem Solver',
        'AI Developer',
        'Coder',
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    })

    return () => typed.destroy()
  }, [])

  return (
    <section className="relative flex justify-center overflow-hidden bg-paper px-0 pt-32 pb-12" id="home">
      <ParticlesProvider init={initParticles}>
        <Particles id="particles-js" options={particlesOptions} />
      </ParticlesProvider>

      <div className="relative z-10 flex w-[90%] max-w-6xl flex-col-reverse items-center justify-between gap-16 md:flex-row md:items-end">
        <div className="flex w-full flex-col items-start gap-8 md:w-auto" data-aos="fade-up">
          <div className="text-2xl font-medium text-ink">Hi!</div>
          <div className="text-3xl leading-tight text-ink md:text-4xl">
            I'm <span className="font-extrabold text-primary" ref={typedRef}></span>
          </div>
          <div className="max-w-xl text-lg font-medium text-ink">
            Full Stack Developer with 2+ years of experience building production-grade web and
            Android applications. Skilled in end-to-end feature delivery — from design to
            deployment — with a strong focus on clean architecture, performance, and
            high-quality, maintainable code.
          </div>
          <Link
            to="/contact"
            className="inline-block w-max rounded-full bg-primary px-8 py-2 text-sm tracking-widest text-ink uppercase transition-all hover:-translate-y-1 hover:bg-primary-dark hover:text-black hover:shadow-[0_10px_25px_rgba(0,204,255,0.35)]"
          >
            Hire me
          </Link>
          <div className="mt-1 flex items-center gap-2">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.icon}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                style={{ '--icon-accent': social.accent }}
                className="icon-badge flex h-11 w-11 items-center justify-center rounded-full text-xl backdrop-blur-sm transition-all hover:-translate-y-1 hover:icon-badge-active"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center md:mb-10">
          <div className="px-8">
            <img src="/image/shivani.png" alt="" loading="lazy" className="block w-72 md:w-[380px]" />
          </div>
          <div className="h-1 w-full bg-[#0087ca]"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
