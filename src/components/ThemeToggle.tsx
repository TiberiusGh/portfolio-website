import { useEffect, useState } from 'react'
import { createThemeController, type Theme } from '../lib/theme'

export default function ThemeToggle() {
  const [controller] = useState(() => createThemeController())
  const [theme, setTheme] = useState<Theme>(() => controller.getResolved())

  useEffect(() => controller.subscribe(setTheme), [controller])

  const next: Theme = theme === 'dark' ? 'light' : 'dark'
  const label = `Switch to ${next} mode`

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={() => controller.setChoice(next)}
      className="theme-toggle"
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      <style>{`
        .theme-toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          background: transparent;
          color: var(--color-text);
          border: none;
          cursor: pointer;
          transition: color 120ms ease;
        }
        .theme-toggle:hover {
          color: var(--color-accent);
        }
        .theme-toggle svg {
          width: 1.5rem;
          height: 1.5rem;
        }
      `}</style>
    </button>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}
