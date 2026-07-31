import { useEffect, useRef, useState } from 'react'

const TESTIMONIALS = [
  {
    image: '/image/testimonial_user_1_1777098315822.png',
    name: 'Arjun Mehta',
    role: 'CTO at TechFlow',
    rating: 5,
    text: "Shivani took a vague RAG requirement and turned it into a production-grade AI system in weeks, not months. Sharp technically, but she never loses sight of the business outcome.",
  },
  {
    image: '/image/testimonial_user_2_1777098333865.png',
    name: 'Sarah Johnson',
    role: 'Product Manager',
    rating: 5,
    text: 'Every screen she ships matches the design file pixel for pixel. It\'s rare to find a developer who cares this much about the details users actually notice.',
  },
  {
    image: '/image/testimonial_user_3_1777098354959.png',
    name: 'Rahul Verma',
    role: 'CEO of RealEdge',
    rating: 5,
    text: "The automation Shivani built now saves our team 15+ hours a week. She didn't just write code — she understood the problem and solved it.",
  },
  {
    image: '/image/users-avatar.png',
    name: 'Priya Nair',
    role: 'Engineering Lead at Vortex Labs',
    rating: 5,
    text: "I stopped double-checking her PRs after the first sprint. Clean architecture, proactive communication, and she always ships on time.",
  },
]

const AUTO_ADVANCE_DELAY = 5000

function Testimonials() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const goTo = (index) => {
    setActive((index + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  const resumeTimer = useRef(null)
  const pauseThenResume = () => {
    setPaused(true)
    clearTimeout(resumeTimer.current)
    resumeTimer.current = setTimeout(() => setPaused(false), AUTO_ADVANCE_DELAY)
  }

  useEffect(() => {
    if (paused) return undefined
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length)
    }, AUTO_ADVANCE_DELAY)
    return () => clearInterval(id)
  }, [paused])

  useEffect(() => () => clearTimeout(resumeTimer.current), [])

  const current = TESTIMONIALS[active]

  return (
    <section className="relative flex flex-col items-center overflow-hidden bg-black py-12" id="testimonials">
      <div className="animate-pulse-glow pointer-events-none absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/8 blur-3xl"></div>

      <div className="relative">
        <h1
          className="mx-auto max-w-2xl text-center text-4xl leading-tight font-bold text-white max-[800px]:text-2xl"
          data-aos="fade-up"
        >
          Don't Just Take My Word For It
        </h1>
      </div>

      <div
        className="relative mx-auto mt-12 flex w-[90%] max-w-6xl flex-col items-center text-white"
        data-aos="zoom-in"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative flex w-full items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => {
              goTo(active - 1)
              pauseThenResume()
            }}
            aria-label="Previous testimonial"
            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary sm:flex"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <div
            key={active}
            className="animate-fade-slide relative overflow-hidden rounded-3xl border border-white/5 bg-white/2 p-10 text-center backdrop-blur-sm"
          >
            <i className="fas fa-quote-right pointer-events-none absolute top-4 right-6 text-7xl text-primary/5 select-none"></i>
            <img
              src={current.image}
              alt=""
              className="mx-auto mb-5 h-25 w-25 rounded-full border-3 border-primary object-cover shadow-[0_0_20px_rgba(0,204,255,0.3)]"
            />
            <h5 className="text-lg text-white">{current.name}</h5>
            <h6 className="mb-2 text-sm text-primary">{current.role}</h6>
            <div className="mb-3 flex items-center justify-center gap-1 text-xs text-primary">
              {Array.from({ length: current.rating }).map((_, index) => (
                <i key={index} className="fas fa-star"></i>
              ))}
            </div>
            <p className="relative mx-0 my-5 text-lg leading-loose text-white/80 italic">
              <i className="fas fa-quote-left mr-2.5 text-2xl text-primary/50"></i>
              {current.text}
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              goTo(active + 1)
              pauseThenResume()
            }}
            aria-label="Next testimonial"
            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary sm:flex"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="mt-6 flex gap-2 sm:hidden">
          <button
            type="button"
            onClick={() => {
              goTo(active - 1)
              pauseThenResume()
            }}
            aria-label="Previous testimonial"
            className="text-white"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            type="button"
            onClick={() => {
              goTo(active + 1)
              pauseThenResume()
            }}
            aria-label="Next testimonial"
            className="text-white"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
