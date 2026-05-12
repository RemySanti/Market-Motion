import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'

/**
 * Top-edge reading progress driven by vertical scroll. Springs soften the motion;
 * reduced motion uses a linear mapping without overshoot.
 */
export function ScrollProgressBar() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()

  const progress = useSpring(scrollYProgress, {
    stiffness: reduceMotion ? 500 : 120,
    damping: reduceMotion ? 60 : 26,
    restDelta: 0.0005,
  })

  const opacity = useTransform(scrollYProgress, [0, 0.04, 0.08, 1], [0, 0.45, 1, 1])

  return (
    <motion.div
      className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-cyan-400 via-cyan-300/90 to-violet-400/85 shadow-[0_0_24px_-4px_rgba(34,211,238,0.45)]"
      style={{
        scaleX: reduceMotion ? scrollYProgress : progress,
        opacity: reduceMotion ? 1 : opacity,
      }}
      aria-hidden
    />
  )
}
