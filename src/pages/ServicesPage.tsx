import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GlassPanel } from '../components/GlassPanel'
import { PageFitCallout, PageInsightRow, PageJourneyStrip, PageReadGuide } from '../components/PageExplainer'
import { PageIntro } from '../components/PageIntro'
import { PageSection } from '../components/PageSection'
import { PageShell } from '../components/PageShell'
import { ScrollParallax } from '../components/ScrollParallax'
import { usePageTitle } from '../hooks/usePageTitle'
import { staggerInViewContainer, staggerInViewItem } from '../motion/variants'
import { serviceHubItems } from '../site/servicesHub'

const inView = { once: true as const, amount: 0.22 as const, margin: '0px 0px -10% 0px' as const }

export function ServicesPage() {
  usePageTitle('Services')
  const reduceMotion = useReducedMotion()
  const catalogList = staggerInViewContainer(0.085, 0.06)

  return (
    <PageShell>
      <ScrollParallax amount={14}>
        <PageIntro
          kicker="Services"
          title="One growth system—six specialist lanes."
          lead="Pick the surface area you need first; every lane shares the same measurement language, design tokens, and delivery cadence. This hub explains how the pieces connect before you dive into a single scope page."
        />
      </ScrollParallax>

      <PageSection className="mt-8 sm:mt-10">
        <ScrollParallax amount={20}>
          <PageReadGuide
            eyebrow="Services · orientation"
            title="How to use this hub"
            lead="Skim the grid for the lane that matches your bottleneck, then open the detail page for bullets, metrics, and fit. If you are unsure, start with Contact—we map the shortest path."
            items={[
              {
                title: 'Each card = a scope page',
                description:
                  'Title + eyebrow tell you the discipline; the blurb is the outcome we optimize for—not a feature dump.',
              },
              {
                title: 'Sequence is flexible',
                description:
                  'Website, demand, and creative often run in parallel; automations usually follow once data paths exist.',
              },
              {
                title: 'Same delivery contract',
                description:
                  'Weekly decision reviews, async artifacts, and exec-ready readouts—no matter which lane kicks off first.',
              },
            ]}
          />
        </ScrollParallax>
      </PageSection>

      <PageSection className="mt-10 sm:mt-14" aria-labelledby="services-catalog-heading" reveal={false}>
        <ScrollParallax amount={12}>
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 id="services-catalog-heading" className="section-title">
                Service catalog
              </h2>
              <p className="section-desc mt-3 max-w-2xl">
                Tap a lane to see scope, KPI targets, delivery journey, and honest fit notes—structured the same way on every
                page so your team learns the pattern once.
              </p>
            </div>
            <Link to="/contact" className="btn-secondary shrink-0 self-start px-5 sm:self-auto">
              Not sure where to start?
            </Link>
          </div>
        </ScrollParallax>
        {reduceMotion ? (
          <ul className="mt-8 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {serviceHubItems.map((s) => (
              <li key={s.to} className="h-full">
                <Link to={s.to} className="block h-full">
                  <GlassPanel className="group/card flex h-full flex-col p-5 transition-[border-color,box-shadow] duration-300 hover:border-cyan-400/25 hover:shadow-[0_0_40px_-18px_rgba(34,211,238,0.18)] sm:p-6" hover>
                    <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500 transition-colors duration-200 group-hover/card:text-cyan-300/85">
                      {s.eyebrow}
                    </p>
                    <p className="mt-3 flex items-center justify-between gap-2 text-lg font-semibold text-white">
                      {s.label}
                      <span
                        className="text-lg text-cyan-300/0 transition duration-200 group-hover/card:translate-x-0.5 group-hover/card:text-cyan-300/90"
                        aria-hidden
                      >
                        →
                      </span>
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{s.description}</p>
                    <span className="mt-5 inline-flex text-xs font-semibold text-cyan-200/90">Open scope page</span>
                  </GlassPanel>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <motion.ul
            variants={catalogList}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="mt-8 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3"
          >
            {serviceHubItems.map((s) => (
              <motion.li key={s.to} variants={staggerInViewItem} className="h-full">
                <Link to={s.to} className="block h-full">
                  <GlassPanel className="group/card flex h-full flex-col p-5 transition-[border-color,box-shadow] duration-300 hover:border-cyan-400/25 hover:shadow-[0_0_40px_-18px_rgba(34,211,238,0.18)] sm:p-6" hover>
                    <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500 transition-colors duration-200 group-hover/card:text-cyan-300/85">
                      {s.eyebrow}
                    </p>
                    <p className="mt-3 flex items-center justify-between gap-2 text-lg font-semibold text-white">
                      {s.label}
                      <span
                        className="text-lg text-cyan-300/0 transition duration-200 group-hover/card:translate-x-0.5 group-hover/card:text-cyan-300/90"
                        aria-hidden
                      >
                        →
                      </span>
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{s.description}</p>
                    <span className="mt-5 inline-flex text-xs font-semibold text-cyan-200/90">Open scope page</span>
                  </GlassPanel>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </PageSection>

      <PageSection className="mt-12 sm:mt-16">
        <ScrollParallax amount={16}>
          <PageJourneyStrip
            title="How engagements usually layer"
            subtitle="Not a waterfall sales chart—a realistic map of how modern teams ship when web, media, and ops move together."
            steps={[
              {
                phase: 'Foundation',
                title: 'Instrument + surface',
                body: 'Websites, tagging, and consent so every downstream channel reports the same truth—before we scale spend or creative.',
              },
              {
                phase: 'Acceleration',
                title: 'Demand + creative systems',
                body: 'SEO/PPC, social, and photo/video feed each other: modular assets, message match, and weekly learning loops.',
              },
              {
                phase: 'Scale',
                title: 'Commerce + automation',
                body: 'Checkout hardening, promos, and pipelines between CRM, ads, and finance—so growth does not break ops.',
              },
            ]}
          />
        </ScrollParallax>
      </PageSection>

      <PageSection className="mt-12 sm:mt-16">
        <ScrollParallax amount={10}>
          <div className="mb-8 max-w-2xl">
            <h2 className="section-title">Why the hub exists</h2>
            <p className="section-desc mt-3">
              Buyers bounce when every service page feels like a different agency. We keep the narrative, visual system, and
              page anatomy consistent—so stakeholders build confidence faster.
            </p>
          </div>
        </ScrollParallax>
        <PageInsightRow
          cards={[
            {
              eyebrow: 'Information scent',
              title: 'Predictable page anatomy',
              body: 'Scope on the left, signals on the right, journey + fit below—same on every lane so scanning cost drops.',
            },
            {
              eyebrow: 'Inclusive UX',
              title: 'Keyboard + screen-reader friendly nav',
              body: 'Desktop mega-menu stays focusable; mobile keeps a flat list with an explicit “overview” entry point.',
            },
            {
              eyebrow: 'Decision support',
              title: 'Fit callouts reduce misfires',
              body: 'We name where we shine and where we pause—so procurement and practitioners align before hours burn.',
            },
          ]}
        />
      </PageSection>

      <PageSection className="mt-12 sm:mt-16">
        <div className="mb-8 max-w-2xl">
          <h2 className="section-title">Engagement fit</h2>
          <p className="section-desc mt-3">
            We do our best work with teams that want signal, documentation, and shared ownership—not one-off heroics.
          </p>
        </div>
        <PageFitCallout
          title="Services engagements"
          idealTitle="We move fastest when"
          ideal={[
            'You can name a north-star metric and the quarter it should move.',
            'Marketing, product, and rev ops share a channel for decisions (Slack, Teams, etc.).',
            'You are open to parallel workstreams instead of serial “wait for the PDF” reviews.',
          ]}
          caveatTitle="We push pause when"
          caveats={[
            'No DRI for analytics, consent, or brand approvals—those stalls become everyone’s problem.',
            'Success is defined only as “more traffic” without a downstream conversion story.',
          ]}
        />
      </PageSection>

      <PageSection className="mt-12 sm:mt-16">
        <motion.div
          initial={reduceMotion ? false : { y: 28, scale: 0.99 }}
          whileInView={reduceMotion ? undefined : { y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ type: 'spring', stiffness: 280, damping: 26 }}
        >
          <GlassPanel className="flex flex-col items-start gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8" hover>
            <div className="min-w-0">
              <h2 className="text-xl font-semibold text-white sm:text-2xl">Ready for a scoped conversation?</h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400">
                Send constraints, links, and the metric you need to move—we will reply with the smallest useful next step.
              </p>
            </div>
            <Link to="/contact" className="btn-primary w-full shrink-0 justify-center px-8 sm:w-auto">
              Talk with the team
            </Link>
          </GlassPanel>
        </motion.div>
      </PageSection>
    </PageShell>
  )
}
