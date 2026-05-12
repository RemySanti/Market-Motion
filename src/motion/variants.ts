import type { Transition } from 'framer-motion'

/** Shared easing — calm, product-like deceleration */
export const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const transitionSnappy: Transition = {
  duration: 0.38,
  ease: easeOutExpo,
}

export const transitionMedium: Transition = {
  duration: 0.5,
  ease: easeOutExpo,
}

/** Snappy spring for pointer hover feedback */
export const transitionHoverSpring: Transition = {
  type: 'spring',
  stiffness: 440,
  damping: 26,
  mass: 0.82,
}

/** Quick press-in */
export const transitionTapSpring: Transition = {
  type: 'spring',
  stiffness: 520,
  damping: 32,
}

export const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
}

export const staggerContainer = (stagger = 0.07, delayChildren = 0.06) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: stagger, delayChildren },
  },
})

export const fadeUpItem = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionSnappy,
  },
}

/** Viewport-triggered stagger (use with `whileInView` on the container). */
export const staggerInViewContainer = (stagger = 0.07, delayChildren = 0.05) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren, when: 'beforeChildren' },
  },
})

export const staggerInViewItem = {
  hidden: { opacity: 0, y: 22, scale: 0.98, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { ...transitionSnappy, duration: 0.42 },
  },
}
