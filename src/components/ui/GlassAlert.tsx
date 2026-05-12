import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

export type GlassAlertVariant = 'critical' | 'warning' | 'success' | 'info' | 'loading'

type VariantConfig = {
  border: string
  panel: string
  glow: string
  accent: string
  accentShadow: string
  titleClass: string
}

const variants: Record<GlassAlertVariant, VariantConfig> = {
  critical: {
    border: 'border-rose-400/35',
    panel: 'bg-[rgba(12,6,10,0.55)]',
    glow: 'shadow-[0_0_0_1px_rgba(251,113,133,0.12)_inset,0_12px_48px_-16px_rgba(244,63,94,0.28)]',
    accent: 'bg-gradient-to-b from-rose-400 via-orange-400 to-orange-600',
    accentShadow: 'shadow-[0_0_18px_rgba(251,113,133,0.55)]',
    titleClass: 'text-rose-100',
  },
  warning: {
    border: 'border-amber-400/35',
    panel: 'bg-[rgba(12,10,6,0.55)]',
    glow: 'shadow-[0_0_0_1px_rgba(251,191,36,0.12)_inset,0_12px_48px_-16px_rgba(245,158,11,0.22)]',
    accent: 'bg-gradient-to-b from-amber-300 via-amber-400 to-amber-700',
    accentShadow: 'shadow-[0_0_18px_rgba(251,191,36,0.45)]',
    titleClass: 'text-amber-100',
  },
  success: {
    border: 'border-emerald-400/35',
    panel: 'bg-[rgba(6,14,12,0.55)]',
    glow: 'shadow-[0_0_0_1px_rgba(52,211,153,0.12)_inset,0_12px_48px_-16px_rgba(16,185,129,0.25)]',
    accent: 'bg-gradient-to-b from-emerald-400 to-teal-600',
    accentShadow: 'shadow-[0_0_18px_rgba(52,211,153,0.5)]',
    titleClass: 'text-emerald-100',
  },
  info: {
    border: 'border-cyan-400/35',
    panel: 'bg-[rgba(6,12,18,0.55)]',
    glow: 'shadow-[0_0_0_1px_rgba(34,211,238,0.12)_inset,0_12px_48px_-16px_rgba(14,165,233,0.28)]',
    accent: 'bg-gradient-to-b from-cyan-400 to-sky-600',
    accentShadow: 'shadow-[0_0_18px_rgba(34,211,238,0.45)]',
    titleClass: 'text-cyan-100',
  },
  loading: {
    border: 'border-white/18',
    panel: 'bg-[rgba(8,10,16,0.55)]',
    glow: 'shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_12px_40px_-18px_rgba(148,163,184,0.2)]',
    accent: 'bg-gradient-to-b from-slate-200 via-slate-400 to-slate-600',
    accentShadow: 'shadow-[0_0_14px_rgba(226,232,240,0.35)]',
    titleClass: 'text-slate-100',
  },
}

type Props = {
  variant: GlassAlertVariant
  /** Shown in bold before the body (a colon is appended automatically). */
  title: string
  children: ReactNode
  className?: string
  /** `alert` for destructive / time-sensitive; default maps from variant. */
  role?: 'status' | 'alert'
} & Omit<HTMLMotionProps<'div'>, 'children' | 'role'>

export function GlassAlert({
  variant,
  title,
  children,
  className = '',
  role,
  ...motionProps
}: Props) {
  const reduceMotion = useReducedMotion()
  const v = variants[variant]
  const implicitRole = role ?? (variant === 'critical' ? 'alert' : 'status')

  return (
    <motion.div
      role={implicitRole}
      whileHover={
        reduceMotion
          ? undefined
          : { scale: 1.012, transition: { type: 'spring', stiffness: 460, damping: 28 } }
      }
      className={[
        'relative flex w-full max-w-full touch-manipulation overflow-hidden rounded-2xl border backdrop-blur-3xl backdrop-saturate-125 sm:rounded-[1.1rem]',
        v.border,
        v.panel,
        v.glow,
        className,
      ].join(' ')}
      {...motionProps}
    >
      <div className="relative flex min-h-[3.25rem] w-full min-w-0">
        {variant === 'loading' && !reduceMotion ? (
          <motion.div
            className={['relative w-1.5 shrink-0 self-stretch', v.accent, v.accentShadow].join(' ')}
            aria-hidden
            animate={{ opacity: [0.55, 1, 0.55] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          />
        ) : (
          <div
            className={['relative w-1.5 shrink-0 self-stretch', v.accent, v.accentShadow].join(' ')}
            aria-hidden
          />
        )}
        <div className="flex min-w-0 flex-1 flex-col gap-1 px-4 py-3.5 sm:px-5 sm:py-4">
          <p className={`text-sm font-semibold tracking-tight ${v.titleClass}`}>
            {title}
            <span className="font-semibold text-white/90">:</span>
          </p>
          <div className="text-sm leading-relaxed text-slate-200/92 [&_strong]:font-semibold [&_strong]:text-white">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
