import { useTheme } from '../ThemeContext.jsx'

function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme()
  const isLight = theme === 'light'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={isLight}
      aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
      className={`relative flex h-8 w-15 shrink-0 items-center rounded-full border border-ink/15 bg-ink/10 transition-colors ${className}`}
    >
      <span className="flex w-full items-center justify-between px-1.5 text-xs text-ink/40">
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
      </span>
      <span
        className={`absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm text-black shadow-[0_2px_8px_rgba(0,204,255,0.5)] transition-transform duration-300 ${
          isLight ? 'translate-x-7' : 'translate-x-0'
        }`}
      >
        <i className={isLight ? 'fas fa-sun' : 'fas fa-moon'}></i>
      </span>
    </button>
  )
}

export default ThemeToggle
