import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { easeOutExpo, transitionHoverSpring, transitionTapSpring } from '../motion/variants'
import { primaryLinks, serviceLinks } from '../site/nav'

const MotionLink = motion(Link)
const MotionA = motion.a

export function SiteFooter() {
  const reduceMotion = useReducedMotion()
  const linkHover = reduceMotion ? undefined : { x: 5, transition: transitionHoverSpring }
  const linkTap = reduceMotion ? undefined : { scale: 0.98, transition: transitionTapSpring }
  const telHover = reduceMotion ? undefined : { y: -2, scale: 1.02, transition: transitionHoverSpring }

  return (
    <motion.footer
      className="relative z-10 border-t border-white/14 bg-[rgba(3,4,10,0.55)] py-12 pb-[max(3rem,calc(2.25rem+env(safe-area-inset-bottom,0px)))] shadow-[0_-12px_48px_-28px_rgba(0,0,0,0.45)] backdrop-blur-2xl backdrop-saturate-150 sm:py-14 sm:pb-[max(3.5rem,calc(2.75rem+env(safe-area-inset-bottom,0px)))]"
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12%' }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.45, ease: easeOutExpo }}
    >
      <div className="mx-auto grid min-w-0 max-w-6xl gap-8 px-4 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] sm:grid-cols-2 sm:gap-10 sm:pl-[max(1.5rem,env(safe-area-inset-left,0px))] sm:pr-[max(1.5rem,env(safe-area-inset-right,0px))] md:pl-[max(2rem,env(safe-area-inset-left,0px))] md:pr-[max(2rem,env(safe-area-inset-right,0px))] lg:grid-cols-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400/80">
            Market Motion
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
            Digital growth for teams who want clear signal over noise—measured, modular, and built to scale with you.
          </p>
        </div>
        <nav aria-labelledby="footer-services-heading">
          <h2
            id="footer-services-heading"
            className="font-mono text-xs uppercase tracking-widest text-slate-500"
          >
            Services
          </h2>
          <ul className="mt-4 space-y-1 sm:space-y-2">
            {serviceLinks.map((l) => (
              <li key={l.to}>
                <MotionLink
                  to={l.to}
                  className="inline-flex min-h-[44px] items-center rounded-md px-1.5 text-sm text-slate-300 transition-colors duration-200 ease-out hover:text-white"
                  whileHover={linkHover}
                  whileTap={linkTap}
                >
                  {l.label}
                </MotionLink>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-labelledby="footer-company-heading">
          <h2
            id="footer-company-heading"
            className="font-mono text-xs uppercase tracking-widest text-slate-500"
          >
            Company
          </h2>
          <ul className="mt-4 space-y-1 sm:space-y-2">
            {primaryLinks.map((l) => (
              <li key={l.to}>
                <MotionLink
                  to={l.to}
                  className="inline-flex min-h-[44px] items-center rounded-md px-1.5 text-sm text-slate-300 transition-colors duration-200 ease-out hover:text-white"
                  whileHover={linkHover}
                  whileTap={linkTap}
                >
                  {l.label}
                </MotionLink>
              </li>
            ))}
            <li>
              <MotionLink
                to="/legal/privacy"
                className="inline-flex min-h-[44px] items-center rounded-md px-1.5 text-sm text-slate-300 transition-colors duration-200 ease-out hover:text-white"
                whileHover={linkHover}
                whileTap={linkTap}
              >
                Privacy
              </MotionLink>
            </li>
            <li>
              <MotionLink
                to="/legal/terms"
                className="inline-flex min-h-[44px] items-center rounded-md px-1.5 text-sm text-slate-300 transition-colors duration-200 ease-out hover:text-white"
                whileHover={linkHover}
                whileTap={linkTap}
              >
                Terms
              </MotionLink>
            </li>
          </ul>
        </nav>
        <div>
          <h2 className="font-mono text-xs uppercase tracking-widest text-slate-500">Signal</h2>
          <MotionA
            href="tel:+14842419067"
            className="mt-4 inline-flex min-h-[44px] items-center rounded-md px-1.5 text-sm font-medium text-white transition-colors duration-200 hover:text-cyan-200"
            whileHover={telHover}
            whileTap={linkTap}
          >
            +1 (484) 241-9067
          </MotionA>
          <p className="mt-2 text-sm text-slate-400">Remote-first · US Eastern</p>
          <p className="mt-6 font-mono text-xs text-slate-600">
            © {new Date().getFullYear()} Market Motion Agency
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
