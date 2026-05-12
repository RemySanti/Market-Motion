import { motion, useReducedMotion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import { transitionHoverSpring, transitionTapSpring } from '../motion/variants'
import { serviceHubItems } from '../site/servicesHub'

const MotionLink = motion(Link)
const MotionNavLink = motion(NavLink)

function megaTriggerClass(isActive: boolean) {
  return [
    'inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-1.5 rounded-xl px-3.5 py-2 text-[13px] font-medium tracking-wide text-slate-300 touch-manipulation transition-[colors,background-color,box-shadow] duration-200 ease-out motion-reduce:transition-colors',
    isActive
      ? 'bg-cyan-500/15 text-white ring-1 ring-cyan-400/35 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_0_28px_-12px_rgba(34,211,238,0.25)] backdrop-blur-md'
      : 'text-slate-300 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_6px_24px_-12px_rgba(0,0,0,0.35)]',
  ].join(' ')
}

/**
 * Desktop-only services mega menu: hub link + focus/hover panel with scannable service cards.
 */
export function ServicesMegaNav() {
  const reduceMotion = useReducedMotion()
  const cardHover = reduceMotion
    ? undefined
    : { y: -3, scale: 1.02, transition: transitionHoverSpring }
  const cardTap = reduceMotion ? undefined : { scale: 0.98, transition: transitionTapSpring }

  return (
    <div className="group/mega relative hidden lg:block">
      <MotionNavLink
        to="/services"
        className={({ isActive }) => megaTriggerClass(isActive)}
        whileHover={reduceMotion ? undefined : { y: -2, scale: 1.03, transition: transitionHoverSpring }}
        whileTap={reduceMotion ? undefined : { scale: 0.97, transition: transitionTapSpring }}
      >
        Services
        <svg
          className="h-3.5 w-3.5 shrink-0 text-slate-500 transition duration-200 group-hover/mega:-rotate-180 group-hover/mega:text-cyan-200/90"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 7l5 5 5-5" />
        </svg>
      </MotionNavLink>

      <div
        className="pointer-events-none invisible absolute left-1/2 top-[calc(100%+0.4rem)] z-[60] w-[min(94vw,42rem)] -translate-x-1/2 opacity-0 transition-[opacity,visibility] duration-200 ease-out group-hover/mega:pointer-events-auto group-hover/mega:visible group-hover/mega:opacity-100 group-focus-within/mega:pointer-events-auto group-focus-within/mega:visible group-focus-within/mega:opacity-100"
        role="region"
        aria-label="Service offerings"
      >
        <div className="rounded-2xl border border-white/14 bg-[rgba(5,8,18,0.96)] p-4 shadow-[0_28px_72px_-28px_rgba(0,0,0,0.75),0_0_0_1px_rgba(34,211,238,0.06)_inset] ring-1 ring-inset ring-white/[0.06] backdrop-blur-3xl backdrop-saturate-150">
          <div className="mb-3 flex flex-wrap items-start justify-between gap-3 border-b border-white/10 pb-3">
            <div className="min-w-0">
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-cyan-400/85">Offerings</p>
              <p className="mt-1 max-w-md text-xs leading-relaxed text-slate-500">
                Each card opens a scope page with the same layout: outcomes first, then delivery map and fit.
              </p>
            </div>
            <MotionLink
              to="/services"
              className="shrink-0 rounded-lg px-2 py-1 text-xs font-semibold text-cyan-200/95 underline decoration-cyan-500/30 underline-offset-4 transition-colors hover:text-cyan-100 hover:decoration-cyan-400/50"
              whileHover={reduceMotion ? undefined : { x: 2, scale: 1.04, transition: transitionHoverSpring }}
              whileTap={cardTap}
            >
              Service hub →
            </MotionLink>
          </div>
          <div className="grid max-h-[min(70vh,20rem)] grid-cols-2 gap-2 overflow-y-auto overscroll-contain pr-0.5 xl:grid-cols-3">
            {serviceHubItems.map((item) => (
              <MotionLink
                key={item.to}
                to={item.to}
                className="group/item rounded-xl border border-white/[0.07] bg-white/[0.025] p-3 transition-colors duration-200 hover:border-cyan-400/30 hover:bg-[rgba(34,211,238,0.07)]"
                whileHover={cardHover}
                whileTap={cardTap}
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500 transition-colors duration-200 group-hover/item:text-cyan-300/85">
                  {item.eyebrow}
                </p>
                <p className="mt-1 flex items-center justify-between gap-2 text-sm font-semibold text-white">
                  {item.label}
                  <span
                    className="text-cyan-300/0 transition duration-200 group-hover/item:translate-x-0.5 group-hover/item:text-cyan-300/90"
                    aria-hidden
                  >
                    →
                  </span>
                </p>
                <p className="mt-1.5 line-clamp-2 text-[11px] leading-snug text-slate-500 transition-colors duration-200 group-hover/item:text-slate-400">
                  {item.description}
                </p>
              </MotionLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
