import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BentoShowcase } from '../components/BentoShowcase'
import { GlassAlertShowcase } from '../components/GlassAlertShowcase'
import { GrowthWorkbench } from '../components/GrowthWorkbench'
import { SignalDesk } from '../components/SignalDesk'
import { GlassPanel } from '../components/GlassPanel'
import { PageReadGuide } from '../components/PageExplainer'
import { PageSection } from '../components/PageSection'
import { SectionHeading } from '../components/SectionHeading'
import { PageShell } from '../components/PageShell'
import { StatusPill } from '../components/ui/StatusPill'
import { fadeUpItem, staggerContainer } from '../motion/variants'
import { usePageTitle } from '../hooks/usePageTitle'

const pillars = [
  {
    title: 'Strategy',
    body: 'Positioning, IA, and measurement plans that align exec intent with field reality.',
  },
  {
    title: 'Systems',
    body: 'Composable stacks: CRM hooks, data pipelines, and automation that reduce drag.',
  },
  {
    title: 'Scale',
    body: 'Paid + organic loops tuned for CAC efficiency—not vanity dashboards.',
  },
]

const funnelSteps = [
  {
    title: 'Diagnose',
    body: 'Instrument the funnel, map journeys, and agree on success metrics before pixels move.',
  },
  {
    title: 'Build',
    body: 'Ship surfaces, creative systems, and integrations with accessibility and performance budgets.',
  },
  {
    title: 'Optimize',
    body: 'Experiment on cadence—search, paid, lifecycle—and roll wins into durable playbooks.',
  },
]

const headlineStats = [
  { value: '97%', label: 'Sessions start on mobile', hint: 'Design for thumb reach first.' },
  { value: '3×', label: 'Faster launch cycles', hint: 'Composable systems vs. one-off pages.' },
  { value: '60d', label: 'To measurable lift', hint: 'Typical window for first validated cohort.' },
]

export function HomePage() {
  usePageTitle('Digital growth systems')
  const reduceMotion = useReducedMotion()
  const heroStagger = reduceMotion ? undefined : staggerContainer(0.08, 0.08)
  const heroItem = reduceMotion ? undefined : fadeUpItem

  return (
    <PageShell className="pt-[6.25rem] sm:pt-36">
      <section aria-labelledby="hero-heading" className="max-w-4xl">
        <motion.div
          variants={heroStagger}
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
        >
          <motion.p
            variants={heroItem}
            className="mm-pill-kicker mm-pill-shimmer-host inline-flex items-center gap-2 sm:py-1"
          >
            <span
              className="motion-pulse h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 animate-pulse"
              aria-hidden
            />
            <span>Accepting Q2 engagements</span>
          </motion.p>
          <motion.h1
            id="hero-heading"
            variants={heroItem}
            className="mt-6 text-balance text-[clamp(1.65rem,5.2vw+0.55rem,2.35rem)] font-semibold leading-[1.1] tracking-tight text-white sm:mt-8 sm:text-6xl sm:leading-[1.08]"
          >
            Strategy. Systems.{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
              Scale.
            </span>
          </motion.h1>
          <motion.p
            variants={heroItem}
            className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:mt-6 sm:text-lg"
          >
            From business pages and ads to photography, video, and full SEO integration—one
            growth system so your market feels intentional, not improvised.
          </motion.p>
          <motion.div variants={heroItem} className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap">
            <Link
              to="/contact"
              className="btn-primary w-full justify-center px-6 shadow-[0_0_36px_-12px_rgba(34,211,238,0.4)] sm:w-auto"
            >
              Start your project
            </Link>
            <Link to="/case-studies" className="btn-secondary w-full justify-center px-6 backdrop-blur-md sm:w-auto">
              View our work
            </Link>
          </motion.div>
          <motion.ul
            variants={heroItem}
            className="mt-8 flex list-none flex-wrap gap-2 p-0 sm:mt-10"
            aria-label="Example delivery pipeline statuses"
          >
            <li>
              <StatusPill variant="in-progress">In progress</StatusPill>
            </li>
            <li>
              <StatusPill variant="in-review">In review</StatusPill>
            </li>
            <li>
              <StatusPill variant="design-review">Design review</StatusPill>
            </li>
            <li>
              <StatusPill variant="done">Done</StatusPill>
            </li>
            <li>
              <StatusPill variant="blocked">Blocked</StatusPill>
            </li>
          </motion.ul>
        </motion.div>
      </section>

      <PageSection className="mt-12 sm:mt-16" aria-label="Homepage orientation">
        <PageReadGuide
          id="home-orientation"
          eyebrow="Your first visit"
          title="How this homepage is structured"
          lead="We built the page like a product surface: scan the promise, validate with proof, then pick a depth—demo widgets, benchmarks, or a direct conversation."
          items={[
            {
              title: 'Hero → promise',
              description:
                'One sentence strategy and two CTAs—so visitors know what Market Motion does before scrolling on mobile.',
            },
            {
              title: 'Middle → evidence',
              description:
                'Workbench, signal desk, and alerts mirror how we work—interactive, glass, and honest about tradeoffs.',
            },
            {
              title: 'Bottom → action',
              description:
                'Bento tiles and the final CTA answer “what now?” without sending everyone to the same form.',
            },
          ]}
        />
      </PageSection>

      <PageSection className="mt-16 sm:mt-20" aria-labelledby="headline-stats-heading">
        <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <h2 id="headline-stats-heading" className="section-title max-w-[min(100%,22rem)] sm:max-w-xl">
            Built for the way people actually convert
          </h2>
          <p className="section-desc min-w-0 max-w-md sm:ml-auto sm:text-right">
            Funnel-native thinking: fewer dead ends, clearer next steps, and creative that
            survives mobile scrutiny—aligned with how teams ship at{' '}
            <a
              href="https://marketmotionagency.com/"
              className="link-quiet"
              rel="noreferrer"
              target="_blank"
            >
              Market Motion Agency
            </a>
            .
          </p>
        </div>
        <ul
          className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3"
          aria-label="Key performance indicators"
        >
          {headlineStats.map((s) => (
            <li key={s.label}>
              <GlassPanel className="p-5 sm:p-6" hover>
                <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                  {s.label}
                </p>
                <p className="mt-3 text-3xl font-semibold tabular-nums tracking-tight text-white sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-slate-400">{s.hint}</p>
              </GlassPanel>
            </li>
          ))}
        </ul>
      </PageSection>

      <GrowthWorkbench />

      <SignalDesk />

      <GlassAlertShowcase />

      <PageSection className="mt-16 sm:mt-24" aria-labelledby="funnel-path-heading">
        <SectionHeading
          id="funnel-path-heading"
          title="Your growth path—three deliberate stages"
          description="Modeled after high-converting funnels: one primary job per step, progressive depth, and a CTA that always answers “what now?”."
        />
        <ol className="mt-8 space-y-3 sm:mt-10 sm:space-y-4" aria-label="Engagement stages">
          {funnelSteps.map((step, index) => (
            <li key={step.title}>
              <GlassPanel className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6" hover>
                <div className="flex items-start gap-4">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-mono text-sm font-semibold text-cyan-200"
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
                      {step.body}
                    </p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="btn-primary self-stretch justify-center px-6 py-3 text-center shadow-[0_0_36px_-12px_rgba(34,211,238,0.4)] sm:self-center sm:min-w-[12.5rem]"
                >
                  {index === 2 ? 'Book optimization sprint' : 'Talk to us'}
                </Link>
              </GlassPanel>
            </li>
          ))}
        </ol>
      </PageSection>

      <PageSection className="mt-16 sm:mt-24" aria-labelledby="pillars-heading">
        <SectionHeading
          id="pillars-heading"
          title="Everything you need to dominate your market"
          description="Comprehensive digital solutions—structured like a product team, delivered like an agency partner."
        />
        <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-3 md:gap-5">
          {pillars.map((p, i) => (
            <GlassPanel key={p.title} className="p-5 sm:p-6" hover>
              <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                0{i + 1}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-white sm:text-xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.body}</p>
            </GlassPanel>
          ))}
        </div>
      </PageSection>

      <BentoShowcase />

      <PageSection className="mt-16 sm:mt-24" aria-labelledby="final-cta-heading">
        <GlassPanel className="flex min-w-0 flex-col items-start gap-6 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-8" hover>
          <div className="min-w-0">
            <h2
              id="final-cta-heading"
              className="section-title max-w-full sm:max-w-xl md:max-w-2xl"
            >
              Ready to launch your next measurable win?
            </h2>
            <p className="section-desc mt-2 max-w-full sm:max-w-xl">
              One conversation to align goals, constraints, and instrumentation—then we ship
              with the rigor your funnel deserves.
            </p>
          </div>
          <Link to="/contact" className="btn-primary w-full shrink-0 justify-center px-8 sm:w-auto">
            Schedule free consultation
          </Link>
        </GlassPanel>
      </PageSection>
    </PageShell>
  )
}
