import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  eyebrow?: string
  title: string
  description: string
  progress: number
  progressLabel?: string
  ctaLabel: string
  ctaHref: string
  className?: string
}

export function GlassProgressCard({
  eyebrow = 'Operations console',
  title,
  description,
  progress,
  progressLabel = 'Progress',
  ctaLabel,
  ctaHref,
  className = '',
}: Props) {
  const reduceMotion = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15%' })
  const [pct, setPct] = useState(0)
  const fillPct = reduceMotion && inView ? progress : pct

  useEffect(() => {
    if (!inView || reduceMotion) return
    let start: number | null = null
    const duration = 1100
    let frameId = 0
    const ease = (t: number) => 1 - (1 - t) ** 3

    const step = (ts: number) => {
      if (start === null) start = ts
      const t = Math.min(1, (ts - start) / duration)
      setPct(progress * ease(t))
      if (t < 1) frameId = requestAnimationFrame(step)
    }
    frameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frameId)
  }, [inView, progress, reduceMotion])

  const displayPct = (fillPct * 100).toFixed(2)

  return (
    <motion.article
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.45 }}
      className={[
        'relative flex min-w-0 flex-col overflow-hidden rounded-[28px] border border-sky-400/25 bg-[rgba(8,12,28,0.65)] p-5 shadow-[0_0_0_1px_rgba(56,189,248,0.12)_inset,0_32px_100px_-40px_rgba(14,165,233,0.2)] backdrop-blur-2xl sm:p-8 md:p-10',
        className,
      ].join(' ')}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-10%,rgba(56,189,248,0.14),transparent_50%),radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(59,130,246,0.12),transparent_45%)]"
        aria-hidden
      />
      <p className="relative text-center text-xs font-medium tracking-wide text-slate-400">
        {eyebrow}
      </p>
      <h3 className="relative mt-5 text-center text-xl font-semibold tracking-tight text-white sm:mt-6 sm:text-3xl">
        {title}
      </h3>
      <p className="relative mx-auto mt-4 max-w-md text-center text-sm leading-relaxed text-slate-300">
        {description}
      </p>

      <div className="relative mt-10">
        <div className="h-3 overflow-hidden rounded-full bg-white/[0.06] ring-1 ring-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_20px_rgba(34,211,238,0.45)] transition-[width] duration-75"
            style={{ width: `${fillPct * 100}%` }}
          />
        </div>
        <div className="mt-3 flex justify-between text-xs text-slate-500">
          <span>{progressLabel}</span>
          <span className="font-mono text-cyan-200/90">{displayPct}%</span>
        </div>
      </div>

      <div className="relative mt-10 flex justify-center">
        <Link
          to={ctaHref}
          className="inline-flex min-h-[48px] touch-manipulation items-center justify-center rounded-full bg-white px-10 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_40px_-8px_rgba(255,255,255,0.35)] transition duration-200 hover:bg-slate-100 hover:shadow-[0_0_48px_-6px_rgba(255,255,255,0.45)] active:scale-[0.98]"
        >
          {ctaLabel}
        </Link>
      </div>
    </motion.article>
  )
}
