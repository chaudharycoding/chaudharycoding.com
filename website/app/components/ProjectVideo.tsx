'use client'

import { useEffect, useRef, useState, useSyncExternalStore } from 'react'

export function ProjectVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const reduced = useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
      mq.addEventListener('change', onChange)
      return () => mq.removeEventListener('change', onChange)
    },
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    () => false
  )

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setLoaded(true)
        setInView(entry.isIntersecting)
      },
      { rootMargin: '150px 0px', threshold: 0 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const show = loaded && !reduced

  useEffect(() => {
    const el = videoRef.current
    if (!el || !show) return
    if (inView) void el.play().catch(() => {})
    else el.pause()
  }, [inView, show])

  return (
    <div ref={containerRef} className="relative h-full w-full">
      {show ? (
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
        <div className="h-full w-full rounded-2xl bg-white/[0.06]" aria-hidden />
      )}
    </div>
  )
}
