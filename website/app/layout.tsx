import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const siteDescription =
  'Discover computer science and machine learning projects by Zaeem Chaudhary.'

export const metadata: Metadata = {
  title: {
    default: 'Zaeem Chaudhary',
    template: '%s | Zaeem Chaudhary',
  },
  description: siteDescription,
  metadataBase: new URL('https://chaudharycoding.com'),
  openGraph: {
    title: 'Zaeem Chaudhary',
    description: siteDescription,
    url: 'https://chaudharycoding.com',
    siteName: 'Zaeem Chaudhary',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Zaeem Chaudhary — portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zaeem Chaudhary',
    description: siteDescription,
    images: ['/og.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-x-hidden bg-[#003049] antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
