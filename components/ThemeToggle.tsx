'use client'

import { useState } from 'react'

import styles from './ThemeToggle.module.css'

type Theme = 'dark' | 'light'

const storageKey = 'wize-theme'

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() =>
    typeof document !== 'undefined' &&
    document.documentElement.dataset.theme === 'dark'
      ? 'dark'
      : 'light',
  )

  function toggleTheme() {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light'

    document.documentElement.dataset.theme = nextTheme
    document.documentElement.style.colorScheme = nextTheme
    localStorage.setItem(storageKey, nextTheme)
    setTheme(nextTheme)
  }

  const nextTheme = theme === 'light' ? 'dark' : 'light'

  return (
    <button
      aria-label={`Switch to ${nextTheme} theme`}
      className={styles.toggle}
      onClick={toggleTheme}
      suppressHydrationWarning
      type="button"
    >
      {nextTheme === 'dark' ? 'D' : 'L'}
    </button>
  )
}
