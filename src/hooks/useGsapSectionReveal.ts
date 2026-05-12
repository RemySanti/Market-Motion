import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { RefObject } from 'react'
import { useLayoutEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

/**
 * Fades + lifts elements marked with `[data-reveal]` inside `containerRef`.
 * Skipped when `enabled` is false (e.g. prefers-reduced-motion).
 */
export function useGsapSectionReveal(
  containerRef: RefObject<HTMLElement | null>,
  enabled: boolean,
  routeKey: string,
) {
  useLayoutEffect(() => {
    if (!enabled) return
    const root = containerRef.current
    if (!root) return

    const targets = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (!targets.length) return

    const ctx = gsap.context(() => {
      targets.forEach((target) => {
        gsap.fromTo(
          target,
          { autoAlpha: 0, y: 18 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.52,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: target,
              start: 'top 92%',
              toggleActions: 'play none none none',
            },
          },
        )
      })
    }, root)

    let raf = 0
    const scheduleRefresh = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        ScrollTrigger.refresh()
      })
    }
    window.addEventListener('resize', scheduleRefresh)
    scheduleRefresh()

    return () => {
      window.removeEventListener('resize', scheduleRefresh)
      cancelAnimationFrame(raf)
      ctx.revert()
    }
  }, [enabled, routeKey, containerRef])
}
