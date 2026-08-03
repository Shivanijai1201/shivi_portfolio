import { useState } from 'react'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const WORKFLOW_STEPS = [
  { icon: 'fas fa-pen-ruler', label: 'Design UI', text: 'Turning ideas into clean, responsive interfaces.' },
  { icon: 'fas fa-plug', label: 'Bind API', text: 'Wiring the frontend to real backend services.' },
  { icon: 'fas fa-vial', label: 'Test', text: 'Validating every flow before it ships.' },
  { icon: 'fas fa-rocket', label: 'Deploy', text: 'Shipping to production with confidence.' },
]

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' }

function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ state: 'sending', message: '' })

    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Something went wrong. Please try again.')
      }

      setStatus({ state: 'success', message: data.message || 'Message sent successfully!' })
      setForm(INITIAL_FORM)
    } catch (error) {
      setStatus({ state: 'error', message: error.message || 'Could not send your message. Please try again.' })
    }
  }

  return (
    <section className="relative overflow-hidden bg-paper px-0 py-12" id="contactme">
      <div className="pointer-events-none absolute top-[10%] left-[-10%] h-120 w-120 rounded-full bg-primary/10 blur-3xl"></div>

      <div className="relative mx-auto flex w-[90%] max-w-6xl flex-col items-center">
        <h1 className="text-center text-5xl font-semibold text-ink" data-aos="fade-up">
          Contact
        </h1>

        <div className="mx-auto mt-12 flex w-full items-center gap-12.5 max-[992px]:flex-col">
          <div className="flex w-full flex-1 flex-col" data-aos="fade-right">
            <h2 className="relative mb-3.5 inline-block text-3xl font-extrabold text-ink after:absolute after:-bottom-2.5 after:left-0 after:h-1 after:w-15 after:rounded after:bg-gradient-to-r after:from-primary after:to-transparent">
              How I Build
            </h2>
            <p className="mt-6 mb-8 text-ink/55">
              Every project I ship moves through the same pipeline — from idea to production.
            </p>

            <div className="my-12 max-[576px]:px-10">
              <div className="relative mx-auto aspect-square w-85 max-w-full">
                <div className="workflow-ring animate-spin-slow"></div>
                <div className="workflow-ring animate-spin-reverse inset-5.5 opacity-50"></div>
                <span className="workflow-orbit-dot"></span>

                <div className="absolute top-1/2 left-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-0.5 rounded-full border border-primary/20 bg-well text-center max-[576px]:h-24 max-[576px]:w-24">
                  <span className="text-sm font-bold tracking-wide text-ink">Full Stack</span>
                  <span className="text-sm font-bold tracking-wide text-primary">Workflow</span>
                </div>

                {WORKFLOW_STEPS.map((step, index) => (
                  <div
                    key={step.label}
                    title={step.text}
                    className={`workflow-node-${index} group absolute flex w-21 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2.5 max-[576px]:w-16`}
                  >
                    <span className="animate-node-pulse absolute top-0 left-0 h-15 w-15 rounded-full border-2 border-primary opacity-0 max-[576px]:h-11 max-[576px]:w-11"></span>
                    <span className="relative z-10 flex h-15 w-15 items-center justify-center rounded-full border border-primary/30 bg-well text-xl text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-black group-hover:shadow-[0_0_25px_rgba(0,204,255,0.6)] max-[576px]:h-11 max-[576px]:w-11 max-[576px]:text-base">
                      <i className={step.icon}></i>
                    </span>
                    <p className="text-center text-sm font-semibold text-ink max-[576px]:text-xs">{step.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full flex-1" data-aos="fade-left">
            <form onSubmit={handleSubmit}>
              <div className="mb-7.5 flex flex-col gap-6.5">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border-0 border-b-2 border-ink/15 bg-transparent px-1 py-2.5 text-ink placeholder-ink/40 transition-all focus:border-primary focus:shadow-[0_4px_12px_-6px_rgba(0,204,255,0.6)] focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full border-0 border-b-2 border-ink/15 bg-transparent px-1 py-2.5 text-ink placeholder-ink/40 transition-all focus:border-primary focus:shadow-[0_4px_12px_-6px_rgba(0,204,255,0.6)] focus:outline-none"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full border-0 border-b-2 border-ink/15 bg-transparent px-1 py-2.5 text-ink placeholder-ink/40 transition-all focus:border-primary focus:shadow-[0_4px_12px_-6px_rgba(0,204,255,0.6)] focus:outline-none"
                />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full resize-y border-0 border-b-2 border-ink/15 bg-transparent px-1 py-2.5 text-ink placeholder-ink/40 transition-all focus:border-primary focus:shadow-[0_4px_12px_-6px_rgba(0,204,255,0.6)] focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status.state === 'sending'}
                className="flex w-full items-center justify-center gap-2.5 rounded-lg bg-primary py-3.5 text-sm font-bold tracking-wide text-black uppercase transition-all hover:-translate-y-1 hover:bg-primary-dark hover:shadow-[0_10px_25px_rgba(0,204,255,0.35)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status.state === 'sending' ? 'Sending…' : 'Send Message'} <i className="fas fa-paper-plane"></i>
              </button>
              {status.state === 'success' && (
                <p className="mt-4 text-center text-sm font-semibold text-green-500">{status.message}</p>
              )}
              {status.state === 'error' && (
                <p className="mt-4 text-center text-sm font-semibold text-red-400">{status.message}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
