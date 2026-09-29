'use client'

import Link from 'next/link'
import { useEffect, useId, useState } from 'react'

const SECTIONS = [
  { id: 'Experience', label: 'Experience' },
  { id: 'Projects', label: 'Projects' },
  { id: 'Contact', label: 'Contact' },
] as const

const navLinkBase =
  'relative inline-flex min-h-[44px] cursor-pointer items-center px-1 py-2 text-[15px] tracking-wide text-white/70 transition-colors duration-200 hover:text-white active:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orbit'

const resumeClass =
  'inline-flex min-h-[44px] cursor-pointer items-center justify-center rounded-full bg-orbit px-5 py-2.5 text-sm font-semibold tracking-wide text-black transition-[background-color,transform] duration-200 ease-out hover:bg-[#ffb84d] motion-safe:hover:-translate-y-px active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orbit'

function ResumeLink({
  className = '',
  onClick,
}: {
  className?: string
  onClick?: () => void
}) {
  return (
    <a
      href="/Muhammad%20Zaeem%20Chaudhary%20Resume%20.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={onClick}
      aria-label="Open resume PDF in a new tab"
    >
      Resume
    </a>
  )
}

function HamburgerGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="18"
      viewBox="0 0 24 18"
      aria-hidden
    >
      <rect x="10" y="0" width="14" height="2" rx="1" fill="currentColor" />
      <rect x="0" y="8" width="24" height="2" rx="1" fill="currentColor" />
      <rect x="0" y="16" width="24" height="2" rx="1" fill="currentColor" />
    </svg>
  )
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      aria-hidden
    >
      <path
        d="M4 4l14 14M18 4L4 18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function HeaderNav({ title }: { title: string }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('')
  const menuId = useId()

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onResize = () => {
      if (mq.matches) setOpen(false)
    }
    mq.addEventListener('change', onResize)
    return () => mq.removeEventListener('change', onResize)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = SECTIONS.map((s) => s.id)
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))
    if (!nodes.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target.id) setActive(visible[0].target.id)
      },
      { rootMargin: '-28% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] }
    )

    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [])

  const close = () => setOpen(false)

  const linkClass = (id: string) =>
    `${navLinkBase} ${
      active === id
        ? 'text-white after:absolute after:inset-x-1 after:bottom-1 after:h-0.5 after:rounded-full after:bg-orbit'
        : 'after:absolute after:inset-x-1 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-orbit after:transition-transform after:duration-200 hover:after:scale-x-100'
    }`

  return (
    <>
      <header
        className={`sticky top-0 z-40 -mx-6 px-6 transition-[background-color,backdrop-filter,border-color] duration-300 sm:-mx-10 sm:px-10 md:-mx-12 md:px-12 lg:-mx-20 lg:px-20 ${
          scrolled
            ? 'border-b border-white/15 bg-black/70 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="flex flex-nowrap items-center justify-between gap-3 py-3 md:gap-6 md:py-4"
        >
          <a
            href="#About"
            className="min-w-0 flex-1 pr-1 font-display text-[18px] font-semibold leading-tight tracking-tight text-white transition-colors duration-200 hover:text-orbit focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orbit xs:text-[22px] sm:text-[26px] md:text-[32px]"
          >
            {title}
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-lg text-white transition-colors duration-200 hover:bg-white/10 hover:text-orbit active:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orbit md:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <HamburgerGlyph className="text-current" />
          </button>

          <ul className="m-0 hidden list-none flex-nowrap items-center gap-x-7 p-0 md:flex">
            {SECTIONS.map(({ id, label }) => (
              <li key={id}>
                <Link
                  className={linkClass(id)}
                  href={`#${id}`}
                  aria-current={active === id ? 'true' : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pl-1">
              <ResumeLink className={resumeClass} />
            </li>
          </ul>
        </nav>
      </header>

      {open ? (
        <div
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-sm pt-[max(0.75rem,env(safe-area-inset-top))] md:hidden"
        >
          <div className="flex items-center justify-between border-b border-white/15 pb-4 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]">
            <span className="font-display text-lg font-semibold text-white">Menu</span>
            <button
              type="button"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 hover:text-orbit focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orbit"
              onClick={close}
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>

          <ul className="flex flex-1 flex-col gap-1 py-6 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]">
            {SECTIONS.map(({ id, label }) => (
              <li key={id}>
                <Link
                  className={`${navLinkBase} w-full justify-center py-4 text-lg ${
                    active === id ? 'text-orbit' : 'text-white'
                  }`}
                  href={`#${id}`}
                  onClick={close}
                  aria-current={active === id ? 'true' : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-6">
              <ResumeLink
                className={`${resumeClass} w-full py-4 text-base`}
                onClick={close}
              />
            </li>
          </ul>
        </div>
      ) : null}
    </>
  )
}
