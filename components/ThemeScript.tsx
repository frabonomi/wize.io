'use client'

const themeScript = `
  (() => {
    try {
      const savedTheme = localStorage.getItem('wize-theme');
      const theme = savedTheme === 'dark' || savedTheme === 'light'
        ? savedTheme
        : matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    } catch {}
  })();
`

export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: themeScript }}
      suppressHydrationWarning
      type={typeof window === 'undefined' ? 'text/javascript' : 'text/plain'}
    />
  )
}
