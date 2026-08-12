'use client'

import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { useInView } from 'react-intersection-observer'

type ProjectVideoProps = {
  /** Path under `/public`, e.g. `/leetdemo.mp4` */
  src: string
}

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
  mq.addEventListener('change', callback)
  return () => mq.removeEventListener('change', callback)
}

function getReducedMotionSnapshot() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function getServerReducedMotionSnapshot() {
  return false
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot
  )
}

/**
 * Loads and plays the clip only when near the viewport; pauses when scrolled away.
 * Keeps the element mounted after first load so the file is not re-fetched on scroll.
 * Respects prefers-reduced-motion: no video load or autoplay when reduced.
 */
export function ProjectVideo({ src }: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()
  const { ref: containerRef, inView } = useInView({
    rootMargin: '150px 0px',
    threshold: 0,
  })

  const loadVideo = shouldLoad && !prefersReducedMotion

  useEffect(() => {
    if (inView) setShouldLoad(true)
  }, [inView])

  useEffect(() => {
    const el = videoRef.current
    if (!el || !loadVideo) return
    if (inView) {
      void el.play().catch(() => {})
    } else {
      el.pause()
    }
  }, [inView, loadVideo])

  return (
    <div ref={containerRef} className="relative h-full w-full">
      {loadVideo ? (
        <video
          ref={videoRef}
          playsInline
          className="h-full w-full rounded-2xl object-cover"
          loop
          muted
          preload="none"
          autoPlay
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div
          className="h-full w-full rounded-2xl bg-[#2d3f52]"
          aria-hidden
        />
      )}
    </div>
  )
}
