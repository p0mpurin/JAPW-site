import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.japw.lol'),
  title: 'JAPW - A Better Pinterest Desktop Experience',
  description: 'A Windows app that lets you browse Pinterest without the clutter. Bulk downloads, local collections, and a resolution filter.',
  generator: 'v0.app',
  openGraph: {
    title: 'JAPW - A Better Pinterest Desktop Experience',
    description: 'A Windows app that lets you browse Pinterest without the clutter. Bulk downloads, local collections, and a resolution filter.',
    url: 'https://www.japw.lol',
    siteName: 'JAPW',
    images: [
      {
        url: '/images/app-screenshot.png',
        width: 1200,
        alt: 'JAPW desktop app',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JAPW - A Better Pinterest Desktop Experience',
    description: 'A Windows app that lets you browse Pinterest without the clutter. Bulk downloads, local collections, and a resolution filter.',
    images: ['/images/app-screenshot.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
