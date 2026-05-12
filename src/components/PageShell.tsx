import type { ReactNode } from 'react'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useReducedMotion } from 'framer-motion'
import { useGsapSectionReveal } from '../hooks/useGsapSectionReveal'

type PageShellProps = {
  children: ReactNode
  className?: string
  /** GSAP ScrollTrigger reveals for `[data-reveal]` sections. Respects reduced motion. */
  sectionReveal?: boolean
}

export function PageShell({
  children,
  className = '',
  sectionReveal = true,
}: PageShellProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()
  const reduceMotion = useReducedMotion()
  const enableScrollReveal = Boolean(sectionReveal && !reduceMotion)

  useGsapSectionReveal(rootRef, enableScrollReveal, pathname)

  return (
    <div
      ref={rootRef}
      className={`relative z-10 mx-auto w-full min-w-0 max-w-6xl pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pb-[max(7rem,calc(5.5rem+env(safe-area-inset-bottom,0px)))] pt-20 sm:pl-[max(1.5rem,env(safe-area-inset-left,0px))] sm:pr-[max(1.5rem,env(safe-area-inset-right,0px))] sm:pb-[max(7rem,calc(5.75rem+env(safe-area-inset-bottom,0px)))] sm:pt-24 md:pl-[max(2rem,env(safe-area-inset-left,0px))] md:pr-[max(2rem,env(safe-area-inset-right,0px))] md:pb-32 md:pt-28 ${className}`}
    >
      {children}
    </div>
  )
}
