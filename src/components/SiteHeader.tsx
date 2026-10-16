import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useId, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { easeOutExpo, transitionHoverSpring, transitionTapSpring } from '../motion/variants'
import { primaryLinks, serviceLinks } from '../site/nav'
import { ServicesMegaNav } from './ServicesMegaNav'

const MotionLink = motion(Link)
const MotionNavLink = motion(NavLink)

function linkClass(isActive: boolean) {
  return [
    'inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl px-3.5 py-2 text-[13px] font-medium tracking-wide text-slate-300 touch-manipulation transition-[colors,background-color,box-shadow] duration-200 ease-out motion-reduce:transition-colors hover:text-white',
    isActive
      ? 'bg-white/[0.14] text-white ring-1 ring-white/16 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] backdrop-blur-md'
      : 'hover:bg-white/[0.08] hover:shadow-[0_6px_24px_-12px_rgba(0,0,0,0.35)] active:bg-white/10',
  ].join(' ')
}

export function SiteHeader() {
  const [workNav, ...primaryTail] = primaryLinks
  const [open, setOpen] = useState(false)
  const reduceMotion = useReducedMotion()
  const menuId = useId()
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        setOpen(false)
        closeBtnRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pt-[max(0.75rem,env(safe-area-inset-top,0px))] sm:pl-6 sm:pr-6 sm:pt-4">
      <motion.div
        initial={reduceMotion ? false : { y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={
          reduceMotion ? { duration: 0 } : { duration: 0.45, ease: easeOutExpo }
        }
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl border border-white/16 bg-[rgba(6,8,18,0.52)] px-3 py-2.5 shadow-[0_16px_56px_-24px_rgba(0,0,0,0.62),0_0_40px_-20px_rgba(34,211,238,0.06)] ring-1 ring-inset ring-white/[0.08] backdrop-blur-3xl backdrop-saturate-150 supports-[backdrop-filter]:bg-[rgba(6,8,18,0.42)] sm:gap-4 sm:px-5 sm:py-3"
      >
        <MotionLink
          to="/"
          className="group flex min-h-[44px] min-w-[44px] items-center gap-2.5 rounded-xl px-1 py-0.5 touch-manipulation transition-[background-color] duration-200 ease-out hover:bg-white/[0.06]"
          aria-label="Market Motion Agency home"
          whileHover={reduceMotion ? undefined : { scale: 1.02, y: -1, transition: transitionHoverSpring }}
          whileTap={reduceMotion ? undefined : { scale: 0.98, transition: transitionTapSpring }}
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/40 bg-gradient-to-br from-cyan-400/26 to-violet-500/22 font-mono text-xs font-semibold text-cyan-100 shadow-[0_0_28px_-8px_rgba(34,211,238,0.45)] ring-1 ring-inset ring-white/10 transition-[transform,box-shadow] duration-300 ease-out group-hover:scale-105 group-hover:shadow-[0_0_36px_-6px_rgba(34,211,238,0.55)] motion-reduce:group-hover:scale-100"
            aria-hidden
          >
            M
          </span>
          <span className="text-left text-sm font-semibold tracking-tight text-white sm:text-base">
            Market Motion
            <span className="hidden font-normal text-slate-500 sm:inline">
              {' '}
              / Agency
            </span>
          </span>
        </MotionLink>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          <MotionNavLink
            key={workNav.to}
            to={workNav.to}
            className={({ isActive }) => linkClass(isActive)}
            whileHover={reduceMotion ? undefined : { y: -2, scale: 1.03, transition: transitionHoverSpring }}
            whileTap={reduceMotion ? undefined : { scale: 0.97, transition: transitionTapSpring }}
          >
            {workNav.label}
          </MotionNavLink>
          <span
            className="mx-1.5 h-5 w-px shrink-0 bg-gradient-to-b from-transparent via-white/15 to-transparent"
            aria-hidden
            role="presentation"
          />
          <ServicesMegaNav />
          <span
            className="mx-1.5 h-5 w-px shrink-0 bg-gradient-to-b from-transparent via-white/15 to-transparent"
            aria-hidden
            role="presentation"
          />
          {primaryTail.map((l) => (
            <MotionNavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => linkClass(isActive)}
              whileHover={reduceMotion ? undefined : { y: -2, scale: 1.03, transition: transitionHoverSpring }}
              whileTap={reduceMotion ? undefined : { scale: 0.97, transition: transitionTapSpring }}
            >
              {l.label}
            </MotionNavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <MotionLink
            to="/proposals/bulfrano-lawn-service"
            className="btn-primary hidden px-3.5 py-1.5 text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 shadow-[0_0_24px_-10px_rgba(34,197,94,0.35)] sm:inline-flex"
            whileHover={reduceMotion ? undefined : { y: -2, scale: 1.03, transition: transitionHoverSpring }}
            whileTap={reduceMotion ? undefined : { scale: 0.97, transition: transitionTapSpring }}
          >
            Proposal: Bulfrano
          </MotionLink>
          <MotionLink
            to="/contact"
            className="btn-primary hidden px-4 shadow-[0_0_24px_-10px_rgba(34,211,238,0.35)] md:inline-flex"
            whileHover={reduceMotion ? undefined : { y: -2, scale: 1.03, transition: transitionHoverSpring }}
            whileTap={reduceMotion ? undefined : { scale: 0.97, transition: transitionTapSpring }}
          >
            Start project
          </MotionLink>
          <motion.button
            ref={closeBtnRef}
            type="button"
            className="relative inline-flex h-11 w-11 touch-manipulation flex-col items-center justify-center gap-1.5 rounded-xl border border-white/16 bg-white/[0.09] text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-md transition-[background-color,box-shadow] duration-200 hover:bg-white/12 hover:shadow-[0_8px_28px_-14px_rgba(34,211,238,0.15)] motion-reduce:hover:shadow-none lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setOpen((v) => !v)}
            whileHover={reduceMotion ? undefined : { scale: 1.05, transition: transitionHoverSpring }}
            whileTap={reduceMotion ? undefined : { scale: 0.92, transition: transitionTapSpring }}
          >
            <motion.span
              animate={
                open
                  ? { rotate: 45, y: 6 }
                  : { rotate: 0, y: 0 }
              }
              transition={reduceMotion ? { duration: 0 } : { duration: 0.2 }}
              className="block h-0.5 w-5 origin-center rounded-full bg-white"
              aria-hidden
            />
            <motion.span
              animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.2 }}
              className="block h-0.5 w-5 rounded-full bg-white"
              aria-hidden
            />
            <motion.span
              animate={
                open
                  ? { rotate: -45, y: -6 }
                  : { rotate: 0, y: 0 }
              }
              transition={reduceMotion ? { duration: 0 } : { duration: 0.2 }}
              className="block h-0.5 w-5 origin-center rounded-full bg-white"
              aria-hidden
            />
          </motion.button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id={menuId}
            initial={reduceMotion ? false : { opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8, scale: 0.98 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.22 }}
            className="mx-auto mt-2 max-h-[min(70vh,calc(100dvh-7rem))] max-w-6xl overflow-y-auto overscroll-contain rounded-2xl border border-white/18 bg-[rgba(6,8,18,0.88)] p-3 shadow-2xl ring-1 ring-inset ring-white/[0.08] backdrop-blur-3xl backdrop-saturate-150 sm:mt-3 sm:p-4 lg:hidden"
            aria-label="Mobile primary"
          >
            <p className="px-3 pb-1 pt-1 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-slate-500">
              Company
            </p>
            <div className="grid gap-0.5">
              {primaryLinks.map((l) => (
                <MotionLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="min-h-[48px] rounded-xl px-3 py-3 text-sm text-slate-100 transition-colors duration-150 hover:bg-white/[0.08]"
                  whileHover={reduceMotion ? undefined : { x: 4, transition: transitionHoverSpring }}
                  whileTap={reduceMotion ? undefined : { scale: 0.99, transition: transitionTapSpring }}
                >
                  {l.label}
                </MotionLink>
              ))}
            </div>
            <p className="px-3 pb-1 pt-4 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-slate-500">
              Proposals
            </p>
            <div className="grid gap-0.5">
              <MotionLink
                to="/proposals/bulfrano-lawn-service"
                onClick={() => setOpen(false)}
                className="min-h-[48px] rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-3 py-3 text-sm font-semibold text-emerald-200 transition-[background-color,border-color] duration-150 hover:border-emerald-400/40 hover:bg-emerald-500/15"
                whileHover={reduceMotion ? undefined : { x: 4, scale: 1.01, transition: transitionHoverSpring }}
                whileTap={reduceMotion ? undefined : { scale: 0.99, transition: transitionTapSpring }}
              >
                Client Pitch: Bulfrano Gonzalez Lawn Service
              </MotionLink>
            </div>
            <p className="px-3 pb-1 pt-4 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-slate-500">
              Services
            </p>
            <div className="grid gap-0.5">
              <MotionLink
                to="/services"
                onClick={() => setOpen(false)}
                className="min-h-[48px] rounded-xl border border-cyan-500/25 bg-cyan-500/10 px-3 py-3 text-sm font-semibold text-cyan-100 transition-[background-color,border-color] duration-150 hover:border-cyan-400/40 hover:bg-cyan-500/15"
                whileHover={reduceMotion ? undefined : { x: 4, scale: 1.01, transition: transitionHoverSpring }}
                whileTap={reduceMotion ? undefined : { scale: 0.99, transition: transitionTapSpring }}
              >
                Services hub — overview & how we work
              </MotionLink>
              {serviceLinks.map((l) => (
                <MotionLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="min-h-[48px] rounded-xl px-3 py-3 text-sm text-slate-100 transition-colors duration-150 hover:bg-white/[0.08]"
                  whileHover={reduceMotion ? undefined : { x: 4, transition: transitionHoverSpring }}
                  whileTap={reduceMotion ? undefined : { scale: 0.99, transition: transitionTapSpring }}
                >
                  {l.label}
                </MotionLink>
              ))}
            </div>
            <MotionLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 w-full justify-center py-3.5 text-center"
              whileHover={reduceMotion ? undefined : { scale: 1.02, transition: transitionHoverSpring }}
              whileTap={reduceMotion ? undefined : { scale: 0.98, transition: transitionTapSpring }}
            >
              Start project
            </MotionLink>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
