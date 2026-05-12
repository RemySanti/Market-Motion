import { motion, useReducedMotion } from 'framer-motion'
import { fadeUpItem, staggerContainer } from '../motion/variants'

type Props = {
  kicker: string
  title: string
  lead?: string
  className?: string
}

/**
 * Consistent page hero: eyebrow, display title, optional lead — mobile-first type scale.
 */
export function PageIntro({ kicker, title, lead, className = '' }: Props) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.header
      className={`max-w-3xl ${className}`}
      initial={reduceMotion ? false : 'hidden'}
      animate="visible"
      variants={reduceMotion ? undefined : staggerContainer(0.05, 0)}
    >
      <motion.p variants={reduceMotion ? undefined : fadeUpItem} className="m-0 p-0">
        <span className="mm-pill-kicker mm-pill-shimmer-host eyebrow inline-flex items-center">
          {kicker}
        </span>
      </motion.p>
      <motion.h1
        variants={reduceMotion ? undefined : fadeUpItem}
        className="mt-3 display-title"
      >
        {title}
      </motion.h1>
      {lead ? (
        <motion.p
          variants={reduceMotion ? undefined : fadeUpItem}
          className="mt-4 lead"
        >
          {lead}
        </motion.p>
      ) : null}
    </motion.header>
  )
}
