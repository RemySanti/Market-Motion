import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { transitionHoverSpring, transitionTapSpring } from '../../motion/variants'

export type StatusPillVariant =
  | 'in-progress'
  | 'todo'
  | 'in-review'
  | 'design-review'
  | 'rework'
  | 'done'
  | 'not-started'
  | 'blocked'
  | 'on-hold'
  | 'archived'

const styles: Record<
  StatusPillVariant,
  { ring: string; text: string; iconBg: string; glow: string }
> = {
  'in-progress': {
    ring: 'border-cyan-400/45 bg-cyan-500/10',
    text: 'text-cyan-200',
    iconBg: 'bg-cyan-500/25',
    glow: 'shadow-[0_0_20px_-4px_rgba(34,211,238,0.45)]',
  },
  todo: {
    ring: 'border-violet-400/40 bg-violet-500/10',
    text: 'text-violet-200',
    iconBg: 'bg-violet-500/25',
    glow: 'shadow-[0_0_18px_-4px_rgba(167,139,250,0.4)]',
  },
  'in-review': {
    ring: 'border-amber-400/45 bg-amber-500/10',
    text: 'text-amber-100',
    iconBg: 'bg-amber-500/25',
    glow: 'shadow-[0_0_18px_-4px_rgba(251,191,36,0.35)]',
  },
  'design-review': {
    ring: 'border-purple-400/45 bg-purple-500/10',
    text: 'text-purple-100',
    iconBg: 'bg-purple-500/25',
    glow: 'shadow-[0_0_18px_-4px_rgba(192,132,252,0.4)]',
  },
  rework: {
    ring: 'border-orange-400/45 bg-orange-950/40',
    text: 'text-orange-200',
    iconBg: 'bg-orange-500/25',
    glow: 'shadow-[0_0_18px_-4px_rgba(251,146,60,0.35)]',
  },
  done: {
    ring: 'border-emerald-400/45 bg-emerald-500/10',
    text: 'text-emerald-100',
    iconBg: 'bg-emerald-500/25',
    glow: 'shadow-[0_0_18px_-4px_rgba(52,211,153,0.4)]',
  },
  'not-started': {
    ring: 'border-pink-400/40 bg-pink-950/35',
    text: 'text-pink-100',
    iconBg: 'bg-pink-500/25',
    glow: 'shadow-[0_0_16px_-4px_rgba(244,114,182,0.35)]',
  },
  blocked: {
    ring: 'border-rose-500/50 bg-rose-950/40',
    text: 'text-rose-100',
    iconBg: 'bg-rose-500/25',
    glow: 'shadow-[0_0_18px_-4px_rgba(251,113,133,0.4)]',
  },
  'on-hold': {
    ring: 'border-sky-400/45 bg-sky-950/35',
    text: 'text-sky-100',
    iconBg: 'bg-sky-500/25',
    glow: 'shadow-[0_0_16px_-4px_rgba(56,189,248,0.35)]',
  },
  archived: {
    ring: 'border-slate-400/35 bg-slate-800/60',
    text: 'text-slate-200',
    iconBg: 'bg-slate-600/30',
    glow: 'shadow-[0_0_12px_-4px_rgba(148,163,184,0.25)]',
  },
}

function PillIcon({ variant }: { variant: StatusPillVariant }) {
  const c = 'h-3.5 w-3.5 text-current'
  switch (variant) {
    case 'in-progress':
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" opacity="0.35" />
          <path
            d="M12 3a9 9 0 0 1 9 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'todo':
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 7v10M7 12h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'in-review':
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="5" y="4" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M8 8h8M8 12h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    case 'design-review':
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M8 8h8M8 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    case 'rework':
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M9 4H5v4M15 20h4v-4M5 15v4h4M19 9V5h-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'done':
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M6 12l4 4 8-8"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'not-started':
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M7 12h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'blocked':
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M8 8l8 8M16 8l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'on-hold':
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="7" y="7" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    case 'archived':
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M7 17l10-10M17 17H7v-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    default:
      return null
  }
}

const pillMicroClass: Partial<Record<StatusPillVariant, string>> = {
  'in-progress': 'mm-pill-live-signal mm-pill-shimmer-host',
  'in-review': 'mm-pill-soft-pulse',
  'design-review': 'mm-pill-soft-pulse',
  blocked: 'mm-pill-blocked',
}

export function StatusPill({
  variant,
  children,
  className = '',
}: {
  variant: StatusPillVariant
  children: ReactNode
  className?: string
}) {
  const s = styles[variant]
  const reduceMotion = useReducedMotion()
  return (
    <motion.span
      className={[
        'inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-lg transition-[filter,colors] duration-200 ease-out touch-manipulation hover:brightness-110',
        s.ring,
        s.text,
        s.glow,
        pillMicroClass[variant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      whileHover={reduceMotion ? undefined : { y: -3, scale: 1.04, transition: transitionHoverSpring }}
      whileTap={reduceMotion ? undefined : { scale: 0.96, transition: transitionTapSpring }}
    >
      <span
        className={[
          'flex h-7 w-7 items-center justify-center rounded-full border border-white/10',
          s.iconBg,
        ].join(' ')}
      >
        <PillIcon variant={variant} />
      </span>
      {children}
    </motion.span>
  )
}
