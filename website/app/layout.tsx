import './globals.css'
import type { Metadata } from 'next'
import { Archivo, Space_Grotesk } from 'next/font/google'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

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
    <html lang="en" className={`${archivo.variable} ${spaceGrotesk.variable}`}>
      <body className="overflow-x-hidden bg-black font-sans antialiased text-white">
        <a
          href="#Experience"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
