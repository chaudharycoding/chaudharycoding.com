'use client'

import Link from 'next/link'
import { useEffect, useId, useState } from 'react'

const navLinkClass =
  'inline-flex min-h-[44px] cursor-pointer items-center rounded px-3 py-2 text-white/90 transition-colors duration-200 hover:text-white active:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'

const resumeClass =
  'inline-flex min-h-[44px] cursor-pointer items-center justify-center rounded-2xl border-2 border-white/40 bg-white/5 px-6 py-2.5 text-sm font-semibold tracking-wide text-white transition-all duration-200 ease-out hover:border-orbit hover:bg-orbit hover:text-black motion-safe:hover:-translate-y-px active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orbit'

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
      {/* Top: short bar, right-aligned (~58%), pill ends */}
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

  const close = () => setOpen(false)

  return (
    <>
      <nav
        aria-label="Main navigation"
        className="flex flex-nowrap items-center justify-between gap-3 pb-2 md:gap-4"
      >
        <h1 className="min-w-0 flex-1 pr-1 font-display text-[20px] font-semibold leading-tight tracking-tight text-white xs:text-[30px] sm:text-[30px] md:text-[40px]">
          {title}
        </h1>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded text-white transition-opacity duration-200 hover:opacity-90 active:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <HamburgerGlyph className="text-white" />
        </button>

        <ul className="m-0 hidden list-none flex-nowrap items-center gap-x-5 p-0 md:flex">
          <li>
            <Link className={navLinkClass} href="#Experience">
              Experience
            </Link>
          </li>
          <li>
            <Link className={navLinkClass} href="#Projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className={navLinkClass} href="#Contact">
              Contact
            </Link>
          </li>
          <li>
            <ResumeLink className={resumeClass} />
          </li>
        </ul>
      </nav>

      {open ? (
        <div
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 flex flex-col bg-black pt-[max(0.75rem,env(safe-area-inset-top))] md:hidden"
        >
          <div className="flex items-center justify-between border-b border-white/20 pb-4 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]">
            <span className="text-lg font-semibold text-white">Menu</span>
            <button
              type="button"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={close}
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>

          <ul className="flex flex-1 flex-col gap-1 py-6 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]">
            <li>
              <Link
                className={`${navLinkClass} w-full justify-center py-4 text-lg`}
                href="#Experience"
                onClick={close}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                className={`${navLinkClass} w-full justify-center py-4 text-lg`}
                href="#Projects"
                onClick={close}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className={`${navLinkClass} w-full justify-center py-4 text-lg`}
                href="#Contact"
                onClick={close}
              >
                Contact
              </Link>
            </li>
            <li className="pt-4">
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
