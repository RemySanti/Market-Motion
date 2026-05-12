import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { easeOutExpo } from '../motion/variants'

type Props = {
  /** Sets `id` on the `h2` for `aria-labelledby`. */
  id: string
  title: string
  description?: ReactNode
  /** Extra top margin for stacking sections (mobile-first spacing). */
  className?: string
}

/**
 * Consistent section title + supporting copy for long-form pages.
 */
export function SectionHeading({ id, title, description, className = '' }: Props) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-6%' }}
      transition={
        reduceMotion ? { duration: 0 } : { duration: 0.45, ease: easeOutExpo }
      }
    >
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {description ? <div className="section-desc mt-3">{description}</div> : null}
    </motion.div>
  )
}
