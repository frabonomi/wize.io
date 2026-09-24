import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';

import { ThemeScript } from '@/components/ThemeScript';

import './globals.css';

const funnelSans = localFont({
  src: '../public/fonts/FunnelSans.woff2',
  display: 'swap',
  style: 'normal',
  variable: '--font-funnel-sans',
  weight: '300 800',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://wize.io'),
  title: 'Francesco Bonomi — Developer and designer',
  description:
    'Francesco Bonomi is a developer and designer building apps and websites for clients and independent projects.',
  openGraph: {
    title: 'Francesco Bonomi — Developer and designer',
    description: 'Apps and websites designed and built by Francesco Bonomi.',
    images: [
      {
        url: '/images/opengraph-image.png',
        alt: 'Francesco Bonomi — Developer and designer',
        width: 1200,
        height: 630,
      },
    ],
    siteName: 'Wize.io',
    type: 'website',
    url: '/',
  },
  twitter: {
    card: 'summary',
    title: 'Francesco Bonomi — Developer and designer',
    description: 'Apps and websites designed and built by Francesco Bonomi.',
    images: [
      {
        url: '/images/twitter-image.png',
        alt: 'Francesco Bonomi — Developer and designer',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#e7f0fe' },
    { media: '(prefers-color-scheme: dark)', color: '#14161f' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={funnelSans.variable} lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
