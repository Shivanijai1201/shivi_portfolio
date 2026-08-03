import { useEffect, useRef, useState } from 'react'

const PROJECTS = [
  {
    title: 'Broker Gully',
    description: 'Real estate platform available on Android and web — brokers and buyers connect through geo-spatial search and live lead analytics.',
    image: '/image/project_real_estate_1777098275562.png',
    stack: ['React Native', 'Next.js', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Shivanijai1201',
  },
  {
    title: 'AI Browser Agent',
    description: 'A browser companion that automates workflows and summarizes pages using Groq-powered RAG.',
    image: '/image/project_ai_automation_1777098293427.png',
    stack: ['JavaScript', 'React', 'Node.js'],
    github: 'https://github.com/Shivanijai1201',
  },
  {
    title: 'WhatsApp Extension',
    description: 'A Chrome extension that automates bulk messaging and contact workflows inside WhatsApp Web.',
    icon: 'fa-brands fa-whatsapp',
    accent: '#25d366',
    stack: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Shivanijai1201',
  },
  {
    title: 'Facebook Extension',
    description: 'Browser extension for scheduling posts and tracking engagement directly from the news feed.',
    icon: 'fa-brands fa-facebook',
    accent: '#1877f2',
    stack: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Shivanijai1201',
  },
  {
    title: 'AI Chatbot',
    description: 'A conversational assistant that handles support queries with context-aware, human-like responses.',
    icon: 'fas fa-robot',
    accent: '#c084fc',
    stack: ['HTML', 'CSS', 'JavaScript', 'LLM', 'Vector DB'],
    github: 'https://github.com/Shivanijai1201',
  },
  {
    title: 'RAG Knowledge Assistant',
    description: 'Retrieval-augmented search over private documents, returning cited, accurate answers instantly.',
    icon: 'fas fa-brain',
    accent: '#ff9e0f',
    stack: ['HTML', 'CSS', 'JavaScript', 'LLM', 'Vector DB'],
    github: 'https://github.com/Shivanijai1201',
  },
  {
    title: 'Padhai247',
    description: 'An ed-tech app delivering bite-sized lessons and progress tracking for students on the go.',
    icon: 'fas fa-graduation-cap',
    accent: '#2ecc71',
    stack: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Shivanijai1201',
  },
  {
    title: 'Portfolio Website',
    description: 'This very site — a React + Vite portfolio with an animated UI and a live contact form backend.',
    icon: 'fas fa-laptop-code',
    accent: '#00ccff',
    stack: ['React', 'Vite', 'Node.js'],
    github: 'https://github.com/Shivanijai1201',
  },
]

const AUTO_SCROLL_SPEED = 0.6
const RESUME_DELAY = 2500

function Projects() {
  const scrollRef = useRef(null)
  const resumeTimer = useRef(null)
  const [paused, setPaused] = useState(false)
  const [dragging, setDragging] = useState(false)

  const pauseThenResume = () => {
    setPaused(true)
    clearTimeout(resumeTimer.current)
    resumeTimer.current = setTimeout(() => setPaused(false), RESUME_DELAY)
  }

  useEffect(() => {
    if (paused) return undefined
    const el = scrollRef.current
    if (!el) return undefined

    const id = setInterval(() => {
      const singleSetWidth = el.scrollWidth / 2
      if (singleSetWidth <= 0) return
      el.scrollLeft += AUTO_SCROLL_SPEED
      if (el.scrollLeft >= singleSetWidth) {
        el.scrollLeft -= singleSetWidth
      }
    }, 16)

    return () => clearInterval(id)
  }, [paused])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return undefined

    let isDown = false
    let startX = 0
    let startScroll = 0

    const onPointerDown = (event) => {
      isDown = true
      setDragging(true)
      startX = event.pageX
      startScroll = el.scrollLeft
      pauseThenResume()
    }
    const onPointerMove = (event) => {
      if (!isDown) return
      el.scrollLeft = startScroll - (event.pageX - startX)
    }
    const onPointerUp = () => {
      isDown = false
      setDragging(false)
    }
    const onWheel = () => pauseThenResume()
    const onTouchStart = () => pauseThenResume()

    el.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
    el.addEventListener('wheel', onWheel, { passive: true })
    el.addEventListener('touchstart', onTouchStart, { passive: true })

    return () => {
      el.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
      el.removeEventListener('wheel', onWheel)
      el.removeEventListener('touchstart', onTouchStart)
      clearTimeout(resumeTimer.current)
    }
  }, [])

  return (
    <section className="bg-paper py-12" id="projects">
      <div>
        <h1 className="text-center text-5xl font-semibold text-ink" data-aos="fade-up">
          Projects
        </h1>
      </div>
      <div
        ref={scrollRef}
        className={`scrollbar-hide mx-auto mt-12 flex w-[90%] max-w-6xl items-start gap-7.5 overflow-x-auto py-10 select-none ${
          dragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{ scrollBehavior: 'auto' }}
      >
        {[...PROJECTS, ...PROJECTS].map((project, index) => (
          <div
            key={`${project.title}-${index}`}
            data-aos="fade-up"
            data-aos-delay={(index % 4) * 100}
            className={`animate-float w-70 shrink-0 overflow-hidden rounded-2xl border border-ink/8 bg-ink/3 backdrop-blur-sm transition-transform duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-3 hover:scale-103 hover:border-primary hover:shadow-[0_20px_40px_rgba(0,204,255,0.15)] ${
              index % 2 === 0 ? 'mt-0' : 'mt-15'
            } ${dragging ? '[animation-play-state:paused]' : ''}`}
            style={{ animationDelay: index % 2 === 0 ? '0s' : '0.6s' }}
          >
            <div className="h-40 w-full overflow-hidden bg-well">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  draggable="false"
                  className="h-full w-full object-cover transition-transform duration-600 group-hover:scale-110"
                />
              ) : (
                <div
                  style={{ '--icon-accent': project.accent }}
                  className="flex h-full w-full items-center justify-center text-4xl"
                >
                  <i className={project.icon} style={{ color: 'var(--icon-accent)' }}></i>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2.5 p-5">
              <h3 className="text-lg font-bold text-ink">{project.title}</h3>
              <p className="text-sm leading-relaxed text-ink/55">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-primary/20 bg-primary/8 px-2.5 py-0.5 text-xs font-semibold text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-ink no-underline transition-colors hover:text-primary"
              >
                <i className="fa-brands fa-github"></i> View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
