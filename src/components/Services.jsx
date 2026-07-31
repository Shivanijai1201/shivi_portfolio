const SERVICES = [
  {
    icon: 'fas fa-layer-group',
    accent: '#00ccff',
    title: 'Full Stack Web',
    text: 'Building scalable, production-ready web applications from database to UI — clean APIs, responsive interfaces, and code built to grow.',
    stack: ['React.js', 'Next.js', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    icon: 'fa-brands fa-android',
    accent: '#3ddc84',
    title: 'Android App Dev',
    text: 'Shipping high-performance, cross-platform mobile apps with native-feeling UX from a single codebase.',
    stack: ['React Native', 'Redux', 'REST APIs'],
  },
  {
    icon: 'fas fa-brain',
    accent: '#c084fc',
    title: 'AI & RAG Solutions',
    text: 'Embedding real AI capability into products — retrieval-augmented generation and LLM-powered workflows that actually ship.',
    stack: ['RAG', 'LangChain', 'LLM APIs'],
  },
  {
    icon: 'fas fa-wand-magic-sparkles',
    accent: '#ff9e0f',
    title: 'Browser Automation',
    text: 'Engineering browser extensions and automation scripts that turn manual, repetitive work into one click.',
    stack: ['Puppeteer', 'Chrome Extensions', 'JavaScript'],
  },
  {
    icon: 'fas fa-pen-ruler',
    accent: '#ff6ec7',
    title: 'UI/UX Design',
    text: 'Designing interfaces that are as functional as they are beautiful — accessible, responsive, and built around real usage.',
    stack: ['Figma', 'Responsive Design', 'Accessibility'],
  },
  {
    icon: 'fas fa-server',
    accent: '#2ecc71',
    title: 'Backend Systems',
    text: 'Architecting robust, secure server-side systems and database schemas that stay fast and reliable under real production load.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
  {
    icon: 'fas fa-cloud-arrow-up',
    accent: '#00ccff',
    title: 'Deployment & DevOps',
    text: 'Taking applications from local to live — CI/CD pipelines and cloud infrastructure that scales without drama.',
    stack: ['AWS', 'Render', 'Docker', 'Firebase', 'CI/CD'],
  },
]

function Services() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden bg-black px-0 py-12" id="services">
      <div className="animate-pulse-glow pointer-events-none absolute top-1/3 right-[-10%] h-96 w-96 rounded-full bg-primary/8 blur-3xl"></div>

      <h1 className="relative pb-4 text-5xl font-semibold text-white max-[800px]:text-3xl" data-aos="fade-up">
        Services
      </h1>
      <div className="relative mt-12 grid w-[90%] max-w-6xl grid-cols-3 gap-7.5 max-[769px]:grid-cols-1 min-[769px]:max-[992px]:grid-cols-2">
        {SERVICES.map((service, index) => (
          <div
            key={service.title}
            data-aos="fade-up"
            data-aos-delay={(index % 3) * 120}
            style={{
              '--accent': service.accent,
              '--accent-soft': `${service.accent}26`,
              '--accent-glow': `${service.accent}40`,
            }}
            className="group relative min-h-80 overflow-hidden rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2.5 hover:border-[var(--accent)] hover:bg-white/5 hover:shadow-[0_20px_45px_var(--accent-glow)]"
          >
            <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[var(--accent-soft)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"></div>
            <span className="absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[var(--accent)] to-transparent transition-all duration-500 group-hover:w-full"></span>

            <div className="relative flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
              <span className="relative flex h-16 w-16 items-center justify-center">
                <span className="absolute inset-0 rounded-full border-2 border-[var(--accent)] opacity-0 transition-opacity duration-300 group-hover:animate-node-pulse group-hover:opacity-100"></span>
                <span
                  style={{ '--icon-accent': service.accent }}
                  className="icon-badge relative flex h-16 w-16 items-center justify-center rounded-full text-2xl transition-all duration-400 group-hover:rotate-6 group-hover:scale-110 group-hover:icon-badge-active"
                >
                  <i className={service.icon}></i>
                </span>
              </span>
              <h5 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[var(--accent)]">
                {service.title}
              </h5>
              <p className="text-sm leading-relaxed text-white/70">{service.text}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {service.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-primary/25 bg-primary/8 px-3 py-1 text-xs font-semibold whitespace-nowrap text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
