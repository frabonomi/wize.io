'use client';

import { useState } from 'react';

import clsx from 'clsx';

import styles from './ThemeToggle.module.css';

type Theme = 'dark' | 'light';

const storageKey = 'wize-theme';

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() =>
    typeof document !== 'undefined' &&
    document.documentElement.dataset.theme === 'dark'
      ? 'dark'
      : 'light',
  );

  function toggleTheme() {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light';

    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem(storageKey, nextTheme);
    setTheme(nextTheme);
  }

  const nextTheme = theme === 'light' ? 'dark' : 'light';
  const isDark = theme === 'dark';

  return (
    <button
      aria-label={`Switch to ${nextTheme} theme`}
      className={clsx(styles.toggle, isDark && styles.isDark)}
      onClick={toggleTheme}
      suppressHydrationWarning
      type="button"
    >
      <svg
        aria-hidden="true"
        className={styles.icon}
        fill="none"
        viewBox="0 0 17 17"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.24264 12.7279C1.8995 10.3848 1.8995 6.58579 4.24264 4.24264C6.58579 1.89949 10.3848 1.89949 12.7279 4.24264L4.24264 12.7279Z"
          fill="white"
        />
        <path
          d="M12.7279 4.24264C15.0711 6.58579 15.0711 10.3848 12.7279 12.7279C10.3848 15.0711 6.58579 15.0711 4.24264 12.7279L12.7279 4.24264Z"
          fill="black"
        />
        <circle cx="8.485" cy="8.485" r="6" stroke="currentColor" />
      </svg>
    </button>
  );
}
