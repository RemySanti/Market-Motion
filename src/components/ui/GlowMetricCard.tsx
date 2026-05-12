import { animate, motion, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const SPARK_PATH =
  'M 4 52 C 28 48 36 18 52 28 S 72 8 88 22 S 118 6 132 18 S 168 4 188 14 S 210 2 228 8'

type Props = {
  eyebrow?: string
  label: string
  value: number
  suffix?: string
  sublabel?: string
  className?: string
}

export function GlowMetricCard({
  eyebrow = 'Data updated 2h ago',
  label,
  value,
  suffix = '%',
  sublabel = 'Increase vs last month',
  className = '',
}: Props) {
  const reduceMotion = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20%' })
  const [animated, setAnimated] = useState(0)
  const display = reduceMotion && inView ? value : animated

  useEffect(() => {
    if (!inView || reduceMotion) return
    const ctrl = animate(0, value, {
      duration: 1.35,
      ease: [0.22, 1, 0.36, 1] as const,
      onUpdate: (v) => setAnimated(Math.round(v)),
    })
    return () => ctrl.stop()
  }, [inView, value, reduceMotion])

  return (
    <motion.article
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.45 }}
      className={[
        'relative flex min-h-[280px] min-w-0 flex-col overflow-hidden rounded-[28px] border border-cyan-400/20 bg-[rgba(6,10,22,0.55)] p-5 shadow-[0_0_0_1px_rgba(56,189,248,0.08)_inset,0_24px_80px_-40px_rgba(0,0,0,0.6)] backdrop-blur-2xl sm:min-h-[300px] sm:p-8',
        className,
      ].join(' ')}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(34,211,238,0.12),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent shadow-[0_-12px_40px_8px_rgba(34,211,238,0.15)]"
        aria-hidden
      />
      <p className="relative text-center text-[11px] font-medium tracking-wide text-slate-500">
        {eyebrow}
      </p>
      <p className="relative mt-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
        {label}
      </p>

      <div className="relative mt-4 flex flex-1 flex-col justify-center">
        <div
          className="relative mx-auto aspect-[2.4/1] w-full max-w-[280px] sm:max-w-[320px]"
          aria-hidden
        >
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 232 60"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="sparkStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            <pattern id="miniGrid" width="12" height="12" patternUnits="userSpaceOnUse">
              <path
                d="M 12 0 L 0 0 0 12"
                fill="none"
                stroke="rgba(56,189,248,0.08)"
                strokeWidth="0.5"
              />
            </pattern>
            <rect x="0" y="20" width="232" height="44" fill="url(#miniGrid)" />
            <motion.path
              d={SPARK_PATH}
              fill="none"
              stroke="url(#sparkStroke)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: reduceMotion ? 0 : 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.circle
              cx="228"
              cy="8"
              r="4"
              fill="#22d3ee"
              initial={reduceMotion ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: reduceMotion ? 0 : 0.85, duration: 0.35 }}
              className="drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]"
            />
          </svg>
        </div>
      </div>

      <div className="relative mt-4 text-center">
        <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {display}
          {suffix}
        </p>
        <p className="mt-2 text-xs text-slate-500">{sublabel}</p>
      </div>
    </motion.article>
  )
}
