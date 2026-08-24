import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-white/20 pt-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
      <div className="flex flex-wrap items-center justify-center gap-6 text-white/80">
        <a
          href="mailto:muhammadzaee@umass.edu"
          className="text-sm transition-colors duration-200 hover:text-white sm:text-base"
        >
          muhammadzaee@umass.edu
        </a>
        <a
          href="https://github.com/chaudharycoding"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Zaeem Chaudhary on GitHub"
          className="inline-flex h-10 w-10 items-center justify-center text-white/70 transition-colors duration-200 hover:text-orbit"
        >
          <AiFillGithub className="h-7 w-7" aria-hidden />
        </a>
        <a
          href="https://www.linkedin.com/in/zaeem-chaudhary/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Zaeem Chaudhary on LinkedIn"
          className="inline-flex h-10 w-10 items-center justify-center text-white/70 transition-colors duration-200 hover:text-orbit"
        >
          <AiFillLinkedin className="h-7 w-7" aria-hidden />
        </a>
      </div>
    </footer>
  )
}
