'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import { HeaderNav } from '@/app/components/HeaderNav'

/** Hero copy over the shared starfield (no second canvas). */
export function OrbitalPortfolioHero() {
  const [showScroll, setShowScroll] = useState(true)

  useEffect(() => {
    const update = () => setShowScroll(window.scrollY < window.innerHeight * 0.4)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <section id="About" className="relative w-full min-h-screen">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-transparent md:bg-gradient-to-r md:from-black md:via-black/75 md:to-transparent"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-screen flex-col px-6 pb-8 pt-[max(0.5rem,env(safe-area-inset-top))] sm:px-10 md:px-12 lg:px-20">
        <HeaderNav title="Muhammad Zaeem Chaudhary" />

        <div className="mt-6 flex flex-1 flex-col justify-center py-6 sm:mt-8">
          <div className="max-w-xl">
            <h1 className="font-display text-[2.5rem] font-medium leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.75rem]">
              Hey, I am Zaeem !
            </h1>

            <p className="mt-4 text-base text-white/70 sm:text-lg">
              AI Engineer at Marriott · UMass Amherst CS
            </p>

            <div className="mt-6 space-y-3 text-base leading-relaxed text-white/80 md:text-[1.05rem]">
              <p>
                CS grad from{' '}
                <strong className="font-semibold text-white">UMass Amherst</strong>. Interned at{' '}
                <strong className="font-semibold text-white">Microsoft</strong> (Health &amp; Life
                Sciences) and <strong className="font-semibold text-white">Marriott International</strong>{' '}
                (Enterprise Products). Worked with 2 research labs as an undergrad.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="/Muhammad%20Zaeem%20Chaudhary%20Resume%20.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] cursor-pointer items-center rounded-full bg-orbit px-6 py-3 text-sm font-medium text-black transition-colors duration-200 hover:bg-[#ffb84d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orbit"
                aria-label="Open resume PDF in a new tab"
              >
                Resume
              </a>
              <Link
                href="#Experience"
                className="inline-flex min-h-[44px] cursor-pointer items-center rounded-full border border-white/30 px-6 py-3 text-sm text-white transition-colors duration-200 hover:border-orbit hover:bg-orbit/15 hover:text-orbit focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orbit"
              >
                Experience
              </Link>
            </div>
          </div>
        </div>

        <Link
          href="#Experience"
          className={`hero-scroll group mx-auto mt-4 inline-flex flex-col items-center gap-3 rounded-full transition-opacity duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orbit ${
            showScroll ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          }`}
          aria-label="Scroll to experience"
          aria-hidden={!showScroll}
          tabIndex={showScroll ? undefined : -1}
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/45 transition-colors duration-200 group-hover:text-orbit">
            Scroll
          </span>
          <span className="hero-scroll-orbit relative flex h-14 w-8 items-start justify-center rounded-full border border-white/30 pt-2 transition-colors duration-200 group-hover:border-orbit">
            <span className="hero-scroll-bead block h-2 w-2 rounded-full bg-orbit shadow-[0_0_10px_rgba(255,166,46,0.85)]" />
          </span>
        </Link>
      </div>
    </section>
  )
}
