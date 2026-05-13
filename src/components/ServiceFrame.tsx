import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import type { ServiceNarrative } from '../site/serviceNarratives'
import { GlassPanel } from './GlassPanel'
import { PageFitCallout, PageInsightRow, PageJourneyStrip, PageReadGuide } from './PageExplainer'
import { PageIntro } from './PageIntro'
import { PageSection } from './PageSection'
import { PageShell } from './PageShell'
import { fadeUpItem, staggerContainer, transitionMedium } from '../motion/variants'

export function ServiceFrame({
  kicker,
  title,
  lede,
  bullets,
  metrics,
  narrative,
  children,
}: {
  kicker: string
  title: string
  lede: string
  bullets: string[]
  metrics: { label: string; value: string }[]
  /** Rich UX context: how to read the page, delivery journey, insights, and fit callout. */
  narrative?: ServiceNarrative
  children?: ReactNode
}) {
  const reduceMotion = useReducedMotion()

  return (
    <PageShell>
      <PageIntro kicker={kicker} title={title} lead={lede} />

      {narrative ? (
        <PageSection className="mt-8 sm:mt-10">
          <PageReadGuide {...narrative.readGuide} />
        </PageSection>
      ) : null}

      <PageSection className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-3">
        <GlassPanel className="p-5 sm:p-6 lg:col-span-2" hover>
          <h2 className="font-mono text-xs uppercase tracking-widest text-slate-500">What we deliver</h2>
          <ul className="mt-5 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/80" />
                {b}
              </li>
            ))}
          </ul>
          {children}
        </GlassPanel>

        <motion.div
          className="space-y-4"
          initial={reduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
          animate={reduceMotion ? { opacity: 1, y: 0 } : 'visible'}
          variants={reduceMotion ? undefined : staggerContainer(0.08, 0.06)}
        >
          {metrics.map((m, i) => (
            <motion.div key={m.label} variants={reduceMotion ? undefined : fadeUpItem}>
              <GlassPanel className="p-5" hover>
                <p className="font-mono text-xs uppercase tracking-widest text-slate-500">{m.label}</p>
                <p className="mt-2 text-2xl font-semibold text-white">{m.value}</p>
                <motion.div
                  className="mt-4 h-px w-full origin-left bg-gradient-to-r from-cyan-400/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ ...transitionMedium, delay: 0.12 + i * 0.05 }}
                />
              </GlassPanel>
            </motion.div>
          ))}
          <motion.div variants={reduceMotion ? undefined : fadeUpItem}>
            <Link to="/contact" className="btn-primary block w-full py-3.5 text-center">
              Talk to us about this
            </Link>
          </motion.div>
        </motion.div>
      </PageSection>

      {narrative ? (
        <>
          <PageSection className="mt-12 sm:mt-16">
            <PageJourneyStrip {...narrative.journey} />
          </PageSection>
          <PageSection className="mt-12 sm:mt-16">
            <div className="mb-8 max-w-2xl">
              <h2 className="section-title">How we think about the work</h2>
              <p className="section-desc mt-3">
                A few things we keep front of mind—so you know how we push on briefs and look out for the people using
                what we ship.
              </p>
            </div>
            <PageInsightRow cards={narrative.insights} />
          </PageSection>
          <PageSection className="mt-12 sm:mt-16">
            <div className="mb-8 max-w-2xl">
              <h2 className="section-title">Fit and expectations</h2>
              <p className="section-desc mt-3">
                We would rather be upfront than surprise you later. Here is where we are a strong match—and where we
                slow down until we are aligned.
              </p>
            </div>
            <PageFitCallout {...narrative.fit} />
          </PageSection>
        </>
      ) : null}
    </PageShell>
  )
}
