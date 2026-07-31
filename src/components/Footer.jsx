import { Link } from 'react-router-dom'

const SOCIAL_LINKS = [
  { href: 'https://github.com/Shivanijai1201', icon: 'fa-brands fa-github', accent: '#ff9800' },
  { href: 'https://linkedin.com/in/shivani-jayshwal', icon: 'fa-brands fa-linkedin', accent: '#0081c2' },
  { href: 'mailto:shivanijai1201@gmail.com', icon: 'fas fa-envelope', accent: '#00ccff' },
]

function Footer() {
  return (
    <footer>
      <div className="relative flex w-full items-center justify-center overflow-hidden border-t border-primary/15 bg-black px-0 py-12">
        <div className="pointer-events-none absolute -top-35 left-1/2 h-70 w-125 -translate-x-1/2 rounded-full bg-primary/12 blur-2xl"></div>

        <div className="relative flex w-[90%] max-w-6xl flex-col items-center gap-8">
          <div className="flex w-full flex-wrap items-center justify-between gap-8 max-[800px]:flex-col max-[800px]:text-center">
            <div className="flex flex-col items-start gap-1.5 text-left max-[800px]:items-center max-[800px]:text-center">
              <Link to="/" className="inline-flex items-center text-2xl font-bold text-white no-underline">
                <span className="text-3xl font-extrabold text-primary">S</span>hivani Jayshwal
              </Link>
              <p className="text-sm text-white/50">Building fast, reliable software — one feature at a time.</p>
              <p className="flex items-center gap-1.5 text-sm text-white/45">
                <i className="fas fa-map-marker-alt text-primary"></i> Noida, India
              </p>
            </div>

            <div className="flex flex-col items-end gap-3.5 max-[800px]:items-center">
              <p className="text-xs font-bold tracking-[2px] text-white/50 uppercase">Stay Connected</p>
              <div className="flex items-center gap-5">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.icon}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="flex h-11.5 w-11.5 items-center justify-center rounded-full border border-white/8 bg-white/4 text-xl transition-all hover:-translate-y-1 hover:border-primary hover:shadow-[0_8px_20px_rgba(0,204,255,0.2)]"
                  >
                    <i className={social.icon} style={{ color: social.accent }}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full border-t border-white/8 pt-6 text-center text-white">
            <p className="m-0 flex items-center justify-center gap-1.5 text-sm">
              Designed & Developed By Shivani Jayshwal
              <img src="/image/flag.png" alt="" width="20" height="20" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
