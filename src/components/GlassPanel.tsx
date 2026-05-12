import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'
import { transitionHoverSpring, transitionTapSpring } from '../motion/variants'

type Props = {
  children: ReactNode
  className?: string
  hover?: boolean
} & Omit<HTMLMotionProps<'div'>, 'children'>

export function GlassPanel({
  children,
  className = '',
  hover = false,
  whileHover: whileHoverProp,
  ...motionProps
}: Props) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={[
        'group/glass relative overflow-hidden rounded-2xl border border-[color:var(--color-glass-border)] bg-[color:var(--color-glass)] shadow-[var(--shadow-glass)] ring-1 ring-inset ring-white/[0.07] backdrop-blur-3xl backdrop-saturate-150',
        hover
          ? 'transition-[box-shadow,border-color,background-color] duration-500 ease-out hover:border-cyan-400/35 hover:bg-[rgba(255,255,255,0.1)] hover:shadow-[var(--shadow-glass-hover)] motion-reduce:transition-colors'
          : '',
        className,
      ].join(' ')}
      {...motionProps}
      whileHover={
        hover && !reduceMotion
          ? {
              y: -6,
              scale: 1.012,
              rotateZ: 0.2,
              transition: transitionHoverSpring,
            }
          : whileHoverProp
      }
      whileTap={
        hover && !reduceMotion
          ? { scale: 0.988, rotateZ: 0, transition: transitionTapSpring }
          : undefined
      }
    >
      {hover ? (
        <span
          className="mm-glass-sheen mix-blend-soft-light opacity-35 transition-[opacity,transform] duration-300 ease-out group-hover/glass:opacity-55 motion-reduce:opacity-0 motion-reduce:group-hover/glass:opacity-0"
          aria-hidden
        />
      ) : null}
      {children}
    </motion.div>
  )
}
