import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { BentoItem, BentoTone } from '../site/bentoContent'
import { bentoHomeItems } from '../site/bentoContent'
import { transitionHoverSpring, transitionTapSpring } from '../motion/variants'

const MotionLink = motion(Link)

const defaultChips = [
  { k: 'Conv. lift', v: '+186%' },
  { k: 'Cycle', v: '−42%' },
  { k: 'CPA', v: '−28%' },
]

const toneSurface: Record<BentoTone, string> = {
  cyan: 'from-sky-300/15 via-cyan-500/[0.08] to-transparent',
  violet: 'from-violet-300/12 via-violet-500/[0.08] to-transparent',
  amber: 'from-amber-100/10 via-amber-400/[0.08] to-transparent',
}

const tonePastelWash: Record<BentoTone, string> = {
  cyan: 'bg-sky-400/[0.06]',
  violet: 'bg-violet-400/[0.06]',
  amber: 'bg-amber-200/[0.05]',
}

const toneGlow: Record<BentoTone, string> = {
  cyan: 'bg-sky-400/30',
  violet: 'bg-violet-400/30',
  amber: 'bg-amber-300/25',
}

const toneBorder: Record<BentoTone, string> = {
  cyan: 'border-sky-200/15 hover:border-sky-200/25',
  violet: 'border-violet-200/15 hover:border-violet-200/25',
  amber: 'border-amber-200/12 hover:border-amber-200/22',
}

const toneCta: Record<BentoTone, string> = {
  cyan: 'text-sky-100 group-hover/cta:text-white',
  violet: 'text-violet-100 group-hover/cta:text-white',
  amber: 'text-amber-50 group-hover/cta:text-white',
}

function DecorationSocial({ tone }: { tone: BentoTone }) {
  const glow = toneGlow[tone]
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 flex h-36 items-end justify-center gap-2 overflow-hidden pb-2 opacity-90"
      aria-hidden
    >
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="flex h-16 w-14 flex-col items-center justify-end rounded-2xl border border-white/10 bg-black/30 p-1.5 shadow-lg backdrop-blur-md"
          style={{ transform: `translateY(${6 + i * 4}px) rotate(${(i - 1.5) * 4}deg)` }}
        >
          <div className={`mb-1 h-6 w-6 rounded-full ${glow} opacity-80`} />
          <div className="h-1 w-8 rounded-full bg-white/15" />
          <div className="mt-1 h-1 w-5 rounded-full bg-white/10" />
        </div>
      ))}
    </div>
  )
}

function DecorationLive({ tone }: { tone: BentoTone }) {
  const glow = toneGlow[tone]
  return (
    <div
      className="pointer-events-none absolute inset-x-4 bottom-0 h-40 overflow-hidden rounded-t-2xl border border-white/10 bg-black/40 shadow-inner backdrop-blur-md"
      aria-hidden
    >
      <div className="flex items-center justify-between border-b border-white/5 px-3 py-2">
        <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 font-mono text-[9px] font-medium uppercase tracking-wider text-emerald-200">
          ● WEBINAR
        </span>
        <div className="flex gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        </div>
      </div>
      <div className="flex gap-2 p-3">
        <div className={`h-20 w-24 shrink-0 rounded-xl ${glow} opacity-40 blur-xl`} />
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-2">
          <div className="h-2 w-full rounded bg-white/10" />
          <div className="h-2 w-[80%] rounded bg-white/5" />
          <div className="h-2 w-[60%] rounded bg-white/5" />
        </div>
      </div>
    </div>
  )
}

function AcademyPeekMobile() {
  return (
    <div
      className="pointer-events-none relative mt-8 h-44 overflow-visible rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur-md lg:hidden"
      aria-hidden
    >
      <div className="relative mx-auto max-w-[240px] rounded-xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950 p-2 shadow-xl">
        <div className="aspect-video rounded-lg bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-inner">
            <span className="text-sm text-white">▶</span>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-3 right-4 flex h-11 w-11 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-500/15 text-[10px] font-bold text-amber-100"
        style={{ transform: 'rotate(8deg)' }}
      >
        MVP
      </div>
    </div>
  )
}

function AcademyPeekDesktop() {
  return (
    <div className="pointer-events-none relative hidden h-full min-h-[240px] lg:block" aria-hidden>
      <div
        className="absolute right-0 top-0 w-[95%] rounded-2xl border border-white/10 bg-black/35 p-3 shadow-2xl backdrop-blur-md"
        style={{ transform: 'rotate(-2deg)' }}
      >
        <div className="aspect-video rounded-lg bg-gradient-to-br from-slate-800 to-slate-950" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10">
            <span className="text-lg text-white">▶</span>
          </div>
        </div>
      </div>
      <div
        className="absolute -right-1 bottom-12 flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-400/30 bg-amber-500/10 text-xs font-bold text-amber-100 shadow-lg"
        style={{ transform: 'rotate(8deg)' }}
      >
        MVP
      </div>
      <div
        className="absolute bottom-2 left-0 w-[68%] rounded-xl border border-dashed border-white/15 bg-white/[0.03] p-3 backdrop-blur-sm"
        style={{ transform: 'rotate(3deg)' }}
      >
        <div className="h-1.5 w-1/3 rounded bg-white/20" />
        <div className="mt-2 space-y-1">
          <div className="h-1 w-full rounded bg-white/10" />
          <div className="h-1 w-[85%] rounded bg-white/5" />
        </div>
      </div>
    </div>
  )
}

function BottomDecoration({ item }: { item: BentoItem }) {
  if (item.decoration === 'social') return <DecorationSocial tone={item.tone} />
  if (item.decoration === 'live') return <DecorationLive tone={item.tone} />
  return null
}

function CtaLink({ item }: { item: BentoItem }) {
  const reduceMotion = useReducedMotion()
  const tc = toneCta[item.tone]
  return (
    <MotionLink
      to={item.href}
      className={`group/cta inline-flex min-h-[44px] items-center gap-3 font-semibold transition-colors ${tc}`}
      whileHover={reduceMotion ? undefined : { x: 3, scale: 1.02, transition: transitionHoverSpring }}
      whileTap={reduceMotion ? undefined : { scale: 0.98, transition: transitionTapSpring }}
    >
      <span
        className="text-lg transition-transform duration-200 group-hover/cta:translate-x-0.5"
        aria-hidden
      >
        →
      </span>
      <span className="text-left">{item.cta}</span>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] text-lg text-white shadow-inner transition duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:border-white/25 group-hover/cta:bg-white/12">
        <span aria-hidden>↗</span>
      </span>
    </MotionLink>
  )
}

function BentoCard({ item, index }: { item: BentoItem; index: number }) {
  const reduceMotion = useReducedMotion()
  const wide = item.layout === 'wide'
  const chips = item.chips ?? defaultChips

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-48px' }}
      transition={
        reduceMotion ? { duration: 0 } : { duration: 0.48, delay: 0.07 * index, ease: [0.22, 1, 0.36, 1] }
      }
      whileHover={
        reduceMotion
          ? undefined
          : {
              scale: 1.012,
              y: -4,
              rotateZ: -0.35,
              transition: transitionHoverSpring,
            }
      }
      whileTap={reduceMotion ? undefined : { scale: 0.992, transition: transitionTapSpring }}
      className={[
        'group relative flex min-h-[260px] min-w-0 flex-col overflow-hidden rounded-[28px] border bg-white/[0.04] shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset,0_24px_80px_-40px_rgba(0,0,0,0.55)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset,0_36px_100px_-32px_rgba(255,255,255,0.06)] sm:min-h-[280px]',
        toneBorder[item.tone],
        wide ? 'md:col-span-2' : '',
      ].join(' ')}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${toneSurface[item.tone]}`}
        aria-hidden
      />
      <div
        className={`pointer-events-none absolute inset-0 ${tonePastelWash[item.tone]} mix-blend-soft-light`}
        aria-hidden
      />
      <div
        className={`pointer-events-none absolute -right-24 -top-24 h-60 w-60 rounded-full ${toneGlow[item.tone]} blur-[100px] opacity-45`}
        aria-hidden
      />

      {wide ? (
        <div className="relative z-10 grid min-w-0 flex-1 gap-6 p-5 sm:gap-8 sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-12 lg:p-10">
          <div className="flex min-w-0 flex-col">
            <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl lg:text-3xl">
              {item.title}
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              {item.description}
            </p>
            <ul className="mt-6 flex flex-wrap gap-3" aria-label="Highlights">
              {chips.map((m) => (
                <li key={m.k} className="mm-metric-chip">
                  <div className="relative z-[1]">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                    {m.k}
                  </p>
                  <p className="text-lg font-semibold text-white">{m.v}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CtaLink item={item} />
            </div>
            <AcademyPeekMobile />
          </div>
          <AcademyPeekDesktop />
        </div>
      ) : (
        <>
          <div className="relative z-10 flex min-w-0 flex-1 flex-col items-center px-5 pb-32 pt-8 text-center sm:px-8 sm:pb-36 sm:pt-10">
            <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
              {item.title}
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
              {item.description}
            </p>
            <div className="mt-10">
              <CtaLink item={item} />
            </div>
          </div>
          <BottomDecoration item={item} />
        </>
      )}
    </motion.article>
  )
}

export type { BentoDecoration, BentoItem, BentoTone } from '../site/bentoContent'

export type BentoShowcaseProps = {
  items?: BentoItem[]
  heading?: string
  subheading?: string
  /** Prefix for stable section id (a11y) */
  idPrefix?: string
  className?: string
}

export function BentoShowcase({
  items = bentoHomeItems,
  heading = 'Resources built like a product',
  subheading = 'Two focused entry points and a wide canvas for benchmarks, kits, and merch—bento layout, pastel glass, motion on hover.',
  idPrefix = 'bento-showcase',
  className = '',
}: BentoShowcaseProps) {
  return (
    <section
      className={['mt-16 sm:mt-24', className].filter(Boolean).join(' ')}
      aria-labelledby={`${idPrefix}-heading`}
    >
      <div className="mb-6 max-w-2xl sm:mb-8">
        <h2 id={`${idPrefix}-heading`} className="section-title">
          {heading}
        </h2>
        <p className="section-desc mt-3">{subheading}</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        {items.map((item, index) => (
          <BentoCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}
