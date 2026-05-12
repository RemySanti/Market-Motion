import { type ReactNode, useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

type ScrollParallaxProps = {
  children: ReactNode
  className?: string
  /** Peak vertical shift in px at the section’s entry/exit (scrubbed). */
  amount?: number
}

/**
 * Scrubs a gentle Y translation as the block crosses the viewport — adds depth
 * without fighting GSAP `[data-reveal]` on parent sections.
 */
export function ScrollParallax({ children, className, amount = 20 }: ScrollParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [0, 0, 0] : [amount * 0.6, 0, -amount * 0.6],
  )

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  )
}
