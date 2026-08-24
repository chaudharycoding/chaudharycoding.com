'use client'

import { useEffect, useRef } from 'react'

const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label, summary'

/** Desktop astronaut cursor. Touch / reduced-motion → system cursor. */
export function AstronautCursor() {
  const cursorRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const fineMq = window.matchMedia('(pointer: fine)')
    const reduceMq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const coarseMq = window.matchMedia('(pointer: coarse)')

    const allowed = () => fineMq.matches && !reduceMq.matches && !coarseMq.matches

    let raf = 0
    let active = false
    let hovering = false
    let pulsing = false
    let pulseUntil = 0
    let pointerInside = false

    let px = 0
    let py = 0
    let scale = 1
    let rot = 0
    let opacity = 0
    let vx = 0
    let lastX = 0
    let lastY = 0
    let lastT = 0

    const MAX_ROT = 8

    const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v))

    /** Clamp pointer so centered SVG stays fully on-screen */
    const clampPoint = (x: number, y: number) => {
      const half = Math.max(cursor.offsetWidth / 2, 40)
      return {
        x: clamp(x, half, window.innerWidth - half),
        y: clamp(y, half, window.innerHeight - half),
      }
    }

    const setEnabled = (on: boolean) => {
      if (on === active) return
      active = on

      if (on) {
        document.documentElement.classList.add('astronaut-cursor')
        cursor.style.display = 'block'
        if (!raf) raf = requestAnimationFrame(tick)
      } else {
        document.documentElement.classList.remove('astronaut-cursor')
        cursor.style.display = 'none'
        cursor.style.opacity = '0'
        opacity = 0
        pointerInside = false
        if (raf) {
          cancelAnimationFrame(raf)
          raf = 0
        }
      }
    }

    const tick = (now: number) => {
      if (!active) {
        raf = 0
        return
      }

      const targetOpacity = pointerInside ? 1 : 0
      const targetScale = pulsing ? 1.15 : hovering ? 1.08 : 1
      const speed = Math.abs(vx)
      const targetRot = speed < 30 ? 0 : clamp((vx / 700) * MAX_ROT, -MAX_ROT, MAX_ROT)

      // Snappy position — updated in pointermove; only polish scale/rot/opacity here
      scale += (targetScale - scale) * 0.28
      rot += (targetRot - rot) * 0.2
      opacity += (targetOpacity - opacity) * 0.22
      vx *= 0.82

      cursor.style.opacity = String(opacity)
      cursor.style.transform = `translate3d(${px}px, ${py}px, 0) translate(-50%, -50%) scale(${scale}) rotate(${rot}deg)`

      if (pulsing && now > pulseUntil) pulsing = false

      raf = requestAnimationFrame(tick)
    }

    const onPointerMove = (e: PointerEvent) => {
      if (!active || e.pointerType !== 'mouse') return

      const now = performance.now()
      if (lastT) {
        const dt = Math.max(1, now - lastT)
        vx = ((e.clientX - lastX) / dt) * 16
      }
      lastX = e.clientX
      lastY = e.clientY
      lastT = now

      const { x, y } = clampPoint(e.clientX, e.clientY)
      px = x
      py = y

      if (!pointerInside) {
        pointerInside = true
        opacity = 0.85
      }
    }

    const onOver = (e: MouseEvent) => {
      if (!active) return
      const t = e.target
      if (!(t instanceof Element)) return
      hovering = Boolean(t.closest(INTERACTIVE))
    }

    const onDown = (e: PointerEvent) => {
      if (!active || e.pointerType !== 'mouse') return
      pulsing = true
      pulseUntil = performance.now() + 220
    }

    const onEnter = () => {
      pointerInside = true
    }

    const onLeave = () => {
      pointerInside = false
      hovering = false
      pulsing = false
      lastT = 0
    }

    const sync = () => setEnabled(allowed())

    sync()
    fineMq.addEventListener('change', sync)
    reduceMq.addEventListener('change', sync)
    coarseMq.addEventListener('change', sync)

    document.addEventListener('pointermove', onPointerMove, { passive: true })
    document.documentElement.addEventListener('mouseenter', onEnter)
    document.documentElement.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseover', onOver, { passive: true })
    window.addEventListener('pointerdown', onDown, { passive: true })

    return () => {
      setEnabled(false)
      fineMq.removeEventListener('change', sync)
      reduceMq.removeEventListener('change', sync)
      coarseMq.removeEventListener('change', sync)
      document.removeEventListener('pointermove', onPointerMove)
      document.documentElement.removeEventListener('mouseenter', onEnter)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseover', onOver)
      window.removeEventListener('pointerdown', onDown)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <img
      ref={cursorRef}
      src="/astronaut.svg"
      alt=""
      width={112}
      height={112}
      decoding="async"
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-20 w-20 select-none opacity-0 sm:h-28 sm:w-28"
      style={{ willChange: 'transform, opacity' }}
    />
  )
}
