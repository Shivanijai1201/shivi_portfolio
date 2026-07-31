const EDUCATION = [
  {
    institution: 'Galgotias University',
    location: 'Greater Noida, Uttar Pradesh',
    degree: 'Master of Computer Applications (MCA)',
    years: '2022 – 2024',
  },
  {
    institution: 'Swami Atulanand Hindu Mahavidyalaya',
    location: 'Varanasi, Uttar Pradesh',
    degree: 'Bachelor of Science (B.Sc)',
    years: '2019 – 2022',
  },
]

const EXPERIENCE_HIGHLIGHTS = [
  'Delivered production-ready features end-to-end — from requirement analysis and component design to API contracts and release — using React.js and Node.js.',
  'Built and shipped Android features in React Native, keeping the web and mobile experience consistent across platforms.',
  'Designed and automated browser workflows that eliminated repetitive manual work, improving team efficiency.',
]

const STATS = [
  { icon: 'fas fa-briefcase', value: '2+', label: 'Years Experience' },
  { icon: 'fas fa-diagram-project', value: '10+', label: 'Projects Shipped' },
  { icon: 'fas fa-code', value: '15+', label: 'Technologies' },
]

function ResumeBlock({ heading, icon, children }) {
  return (
    <section className="flex-1">
      <header className="mb-6 flex items-center gap-3" data-aos="fade-up">
        <span className="icon-badge flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-base">
          <i className={icon}></i>
        </span>
        <h2 className="border-b-2 border-primary/30 pb-2 text-sm font-bold tracking-[2px] text-primary uppercase">
          {heading}
        </h2>
      </header>
      <div className="flex flex-col gap-6 pl-1">{children}</div>
    </section>
  )
}

function About() {
  return (
    <section className="relative overflow-hidden bg-black px-0 py-12" id="about">
      <div className="animate-pulse-glow pointer-events-none absolute top-10 left-[-8%] h-80 w-80 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="pointer-events-none absolute right-[-10%] bottom-0 h-96 w-96 rounded-full bg-primary/8 blur-3xl"></div>

      <h1 className="relative text-center text-5xl font-semibold text-white max-[576px]:text-4xl" data-aos="fade-up">
        About Me
      </h1>

      <div className="relative mx-auto mt-12 mb-10 flex w-[90%] max-w-6xl flex-col items-center gap-8 text-center" data-aos="fade-up">
        <p className="max-w-2xl leading-8 text-gray-400">
          I'm Shivani Jayshwal, a Full Stack Developer based in Noida who turns real business
          problems into fast, reliable software. Over 2+ years at Algofolks Private Limited, I've
          built and shipped production web apps with the MERN stack, Android features with React
          Native, and AI-driven products using RAG and browser automation — always with a bias
          toward clean architecture and code my teammates actually want to work with.
        </p>
        <a
          href="/image/Shivani_Jayshwal_Resume.pdf"
          download=""
          data-aos="fade-up"
          className="group inline-flex w-max items-center gap-2.5 rounded-full bg-primary px-8 py-2 text-sm tracking-widest text-white uppercase transition-all hover:-translate-y-1 hover:bg-primary-dark hover:text-black hover:shadow-[0_10px_25px_rgba(0,204,255,0.35)]"
        >
          Download CV
          <i className="fas fa-download text-xs transition-transform group-hover:translate-y-0.5"></i>
        </a>

        <div className="grid w-full max-w-2xl grid-cols-3 gap-4" data-aos="fade-up" data-aos-delay="100">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="group flex flex-col items-center gap-2 rounded-2xl border border-white/5 bg-white/3 px-3 py-5 backdrop-blur-sm transition-all hover:-translate-y-1.5 hover:border-primary/40 hover:bg-white/5"
            >
              <span className="icon-badge flex h-11 w-11 items-center justify-center rounded-full text-lg transition-transform duration-300 group-hover:scale-110">
                <i className={stat.icon}></i>
              </span>
              <span className="text-2xl font-extrabold text-white">{stat.value}</span>
              <span className="text-center text-xs tracking-wide text-white/50 uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full bg-black" id="resume">
        <div className="mx-auto flex w-[90%] max-w-6xl flex-col gap-12 md:flex-row">
          <ResumeBlock heading="Experience" icon="fas fa-briefcase">
            <div
              className="relative rounded-2xl border border-white/5 border-l-3 border-l-primary bg-white/3 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/5 hover:shadow-[0_12px_30px_rgba(0,204,255,0.12)]"
              data-aos="fade-up"
            >
              <div className="flex items-start justify-between gap-2.5">
                <h3 className="min-w-0 flex-1 text-lg font-bold text-white">Software Engineer — Algofolks Private Limited</h3>
                <span className="shrink-0 rounded-full border border-primary/25 bg-primary/8 px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap text-primary">
                  Aug 2024 – Present
                </span>
              </div>
              <ul className="mt-3.5 flex flex-col gap-2">
                {EXPERIENCE_HIGHLIGHTS.map((point) => (
                  <li key={point} className="relative pl-5 text-sm leading-relaxed text-white/70">
                    <span className="absolute top-[9px] left-0 h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_6px_var(--color-primary)]"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </ResumeBlock>

          <ResumeBlock heading="Education" icon="fas fa-graduation-cap">
            {EDUCATION.map((item, index) => (
              <div
                key={item.institution}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="rounded-2xl border border-white/5 border-l-3 border-l-primary bg-white/3 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/5 hover:shadow-[0_12px_30px_rgba(0,204,255,0.12)]"
              >
                <div className="flex items-start justify-between gap-2.5">
                  <h3 className="min-w-0 flex-1 text-lg font-bold text-white">{item.institution}</h3>
                  <span className="shrink-0 rounded-full border border-primary/25 bg-primary/8 px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap text-primary">
                    {item.location}
                  </span>
                </div>
                <div className="mt-1.5 flex flex-wrap items-baseline justify-between gap-2.5">
                  <p className="text-sm text-white/70">{item.degree}</p>
                  <span className="text-sm font-medium text-primary italic whitespace-nowrap">{item.years}</span>
                </div>
              </div>
            ))}
          </ResumeBlock>
        </div>
      </div>
    </section>
  )
}

export default About
