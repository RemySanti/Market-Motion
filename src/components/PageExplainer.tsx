import { motion, useReducedMotion } from 'framer-motion'
import { GlassPanel } from './GlassPanel'
import { easeOutExpo } from '../motion/variants'

const viewSoft = { once: true as const, amount: 0.28 as const }

function journeyPhaseToneClass(phase: string) {
  const p = phase.toLowerCase()
  if (p.includes('found')) return 'mm-phase-pill mm-phase-pill--foundation'
  if (p.includes('accel') || p.includes('demand') || p.includes('speed')) return 'mm-phase-pill mm-phase-pill--acceleration'
  if (p.includes('scale') || p.includes('commerce') || p.includes('automation')) return 'mm-phase-pill mm-phase-pill--scale'
  return 'mm-phase-pill mm-phase-pill--default'
}

function journeyNodeDelayClass(index: number) {
  if (index === 1) return 'mm-journey-node--d1'
  if (index === 2) return 'mm-journey-node--d2'
  if (index === 3) return 'mm-journey-node--d3'
  if (index >= 4) return 'mm-journey-node--d4'
  return ''
}

function insightEyebrowToneClass(eyebrow: string) {
  const e = eyebrow.toLowerCase()
  if (e.includes('information') || e.includes('scent')) return 'mm-insight-eyebrow-pill mm-insight-eyebrow-pill--signal'
  if (e.includes('inclusive') || e.includes('ux') || e.includes('keyboard')) return 'mm-insight-eyebrow-pill mm-insight-eyebrow-pill--ux'
  if (e.includes('decision') || e.includes('support') || e.includes('fit')) return 'mm-insight-eyebrow-pill mm-insight-eyebrow-pill--decision'
  return 'mm-insight-eyebrow-pill'
}

export type ReadGuideItem = {
  title: string
  description: string
}

type PageReadGuideProps = {
  id?: string
  eyebrow?: string
  title: string
  lead?: string
  items: ReadGuideItem[]
}

/**
 * Scannable “how to read this page” strip — strategic UX pattern for dense marketing sites.
 */
export function PageReadGuide({
  id = 'page-read-guide',
  eyebrow = 'On this page',
  title,
  lead,
  items,
}: PageReadGuideProps) {
  const reduceMotion = useReducedMotion()

  return (
    <GlassPanel id={id} className="border border-cyan-400/12 p-5 sm:p-7" hover>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-2 text-[1.2rem] font-semibold leading-snug tracking-tight text-white text-balance sm:text-2xl sm:leading-tight">
        {title}
      </h2>
      {lead ? <p className="section-desc mt-3 max-w-3xl">{lead}</p> : null}
      <ul className="mt-6 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <motion.li
            key={item.title}
            className="flex gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 sm:p-5"
            initial={reduceMotion ? false : { y: 14, scale: 0.985 }}
            whileInView={reduceMotion ? undefined : { y: 0, scale: 1 }}
            viewport={viewSoft}
            transition={{ type: 'spring', stiffness: 380, damping: 28, mass: 0.85, delay: reduceMotion ? 0 : i * 0.05 }}
          >
            <span
              className="mm-read-index-pill shrink-0 tabular-nums"
              style={reduceMotion ? undefined : { animationDelay: `${i * 0.22}s` }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{item.description}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </GlassPanel>
  )
}

export type JourneyStep = {
  phase: string
  title: string
  body: string
}

type PageJourneyStripProps = {
  title: string
  subtitle: string
  steps: JourneyStep[]
}

/**
 * Vertical journey with a soft rail — explains delivery without overwhelming prose.
 */
export function PageJourneyStrip({ title, subtitle, steps }: PageJourneyStripProps) {
  const reduceMotion = useReducedMotion()

  return (
    <>
      <motion.div
        className="mb-8 max-w-2xl"
        initial={reduceMotion ? false : { y: 16 }}
        whileInView={reduceMotion ? undefined : { y: 0 }}
        viewport={viewSoft}
        transition={{ type: 'spring', stiffness: 320, damping: 30 }}
      >
        <h2 className="section-title">{title}</h2>
        <p className="section-desc mt-3">{subtitle}</p>
      </motion.div>
      <div className="relative">
        <motion.div
          className="absolute bottom-3 left-[15px] top-3 w-px bg-gradient-to-b from-cyan-400/45 via-white/12 to-transparent sm:left-[19px]"
          aria-hidden
          initial={reduceMotion ? false : { scaleY: 0.08 }}
          whileInView={reduceMotion ? undefined : { scaleY: 1 }}
          viewport={viewSoft}
          style={{ transformOrigin: '0% 0%' }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
        />
        <ol className="relative m-0 list-none space-y-5 p-0 sm:space-y-6">
          {steps.map((step, i) => (
            <motion.li
              key={step.phase}
              className="flex gap-4 sm:gap-5"
              initial={reduceMotion ? false : { x: -14, y: 6 }}
              whileInView={reduceMotion ? undefined : { x: 0, y: 0 }}
              viewport={viewSoft}
              transition={{ type: 'spring', stiffness: 340, damping: 28, delay: reduceMotion ? 0 : 0.04 + i * 0.08 }}
            >
              <span
                className={`mm-journey-node ${journeyNodeDelayClass(i)}`}
                aria-hidden
              >
                {i + 1}
              </span>
              <GlassPanel className="min-w-0 flex-1 p-5 sm:p-6" hover>
                <span className={`${journeyPhaseToneClass(step.phase)} mb-2 inline-flex`}>{step.phase}</span>
                <h3 className="mt-2 text-base font-semibold text-white sm:text-lg">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.body}</p>
              </GlassPanel>
            </motion.li>
          ))}
        </ol>
      </div>
    </>
  )
}

export type InsightCard = {
  eyebrow: string
  title: string
  body: string
}

type PageInsightRowProps = {
  cards: InsightCard[]
}

/** Three-up (stacks on mobile) expert context cards — outcomes, guardrails, proof. */
export function PageInsightRow({ cards }: PageInsightRowProps) {
  const reduceMotion = useReducedMotion()

  return (
    <div className="grid gap-4 md:grid-cols-3 md:gap-5">
      {cards.map((c, i) => (
        <motion.div
          key={c.title}
          initial={reduceMotion ? false : { y: 20, rotate: -0.35 }}
          whileInView={reduceMotion ? undefined : { y: 0, rotate: 0 }}
          viewport={viewSoft}
          transition={{ type: 'spring', stiffness: 360, damping: 26, delay: reduceMotion ? 0 : i * 0.06 }}
        >
          <GlassPanel className="flex min-h-full flex-col p-5 sm:p-6" hover>
          <span className={`${insightEyebrowToneClass(c.eyebrow)} mb-2 inline-flex`}>{c.eyebrow}</span>
          <h3 className="mt-3 text-base font-semibold leading-snug text-white sm:text-lg">{c.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{c.body}</p>
        </GlassPanel>
        </motion.div>
      ))}
    </div>
  )
}

type PageFitCalloutProps = {
  title: string
  idealTitle: string
  ideal: string[]
  caveatTitle: string
  caveats: string[]
}

/** Honest “great fit / pause” split — builds trust through UX transparency. */
export function PageFitCallout({ title, idealTitle, ideal, caveatTitle, caveats }: PageFitCalloutProps) {
  const reduceMotion = useReducedMotion()

  return (
    <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
      <motion.div
        initial={reduceMotion ? false : { x: -18, y: 6 }}
        whileInView={reduceMotion ? undefined : { x: 0, y: 0 }}
        viewport={viewSoft}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
      >
        <GlassPanel className="border border-emerald-500/15 p-5 sm:p-6" hover>
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-300/80">
          {idealTitle}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-white">{title}</h3>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
          {ideal.map((line) => (
            <li key={line} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/80" aria-hidden />
              {line}
            </li>
          ))}
        </ul>
      </GlassPanel>
      </motion.div>
      <motion.div
        initial={reduceMotion ? false : { x: 18, y: 6 }}
        whileInView={reduceMotion ? undefined : { x: 0, y: 0 }}
        viewport={viewSoft}
        transition={{ type: 'spring', stiffness: 300, damping: 28, delay: reduceMotion ? 0 : 0.06 }}
      >
        <GlassPanel className="border border-amber-500/15 p-5 sm:p-6" hover>
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-amber-200/80">
          {caveatTitle}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-white">When we suggest a different path</h3>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
          {caveats.map((line) => (
            <li key={line} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400/70" aria-hidden />
              {line}
            </li>
          ))}
        </ul>
      </GlassPanel>
      </motion.div>
    </div>
  )
}
