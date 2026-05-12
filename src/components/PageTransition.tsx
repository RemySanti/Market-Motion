import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import { easeOutExpo } from '../motion/variants'

export function PageTransition() {
  const { pathname } = useLocation()
  const reduceMotion = useReducedMotion()

  return (
    <AnimatePresence mode={reduceMotion ? 'sync' : 'wait'}>
      <motion.div
        key={pathname}
        initial={
          reduceMotion
            ? false
            : { opacity: 0, y: 14, scale: 0.988, filter: 'blur(5px)' }
        }
        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
        exit={
          reduceMotion
            ? undefined
            : { opacity: 0, y: -10, scale: 0.992, filter: 'blur(4px)' }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 0.38, ease: easeOutExpo, opacity: { duration: 0.28 } }
        }
        className="min-h-[60vh]"
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  )
}
