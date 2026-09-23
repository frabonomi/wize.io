import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'

import './globals.css'

const funnelSans = localFont({
  src: './FunnelSans.ttf',
  display: 'swap',
  style: 'normal',
  variable: '--font-funnel-sans',
  weight: '300 800',
})

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

export const metadata: Metadata = {
  metadataBase: new URL('https://wize.io'),
  title: 'Francesco Bonomi — Developer and designer',
  description:
    'Francesco Bonomi is a developer and designer building apps and websites for clients and independent projects.',
  openGraph: {
    title: 'Francesco Bonomi — Developer and designer',
    description: 'Apps and websites designed and built by Francesco Bonomi.',
    siteName: 'Wize.io',
    type: 'website',
    url: '/',
  },
  twitter: {
    card: 'summary',
    title: 'Francesco Bonomi — Developer and designer',
    description: 'Apps and websites designed and built by Francesco Bonomi.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#e7f0fe' },
    { media: '(prefers-color-scheme: dark)', color: '#14161f' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={funnelSans.variable} lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
