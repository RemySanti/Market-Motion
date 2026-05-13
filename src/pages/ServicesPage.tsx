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
          title="One growth system, six ways we can help."
          lead="Start where your bottleneck is; every lane uses the same vocabulary for measurement, the same design tokens, and the same weekly rhythm. This hub shows how the pieces fit before you open a single service page."
        />
      </ScrollParallax>

      <PageSection className="mt-8 sm:mt-10">
        <ScrollParallax amount={20}>
          <PageReadGuide
            eyebrow="Services · orientation"
            title="How to use this hub"
            lead="Skim the grid for what is hurting most, then open the detail page for plain-language scope, targets, and fit. If you are not sure, start at Contact—we will map the shortest path."
            items={[
              {
                title: 'Each card opens a full service page',
                description:
                  'The eyebrow is the discipline; the line below is the outcome we care about—not a feature list.',
              },
              {
                title: 'Order is flexible',
                description:
                  'Site, demand, and creative often move together; automations usually come once data paths behave.',
              },
              {
                title: 'Same way of working everywhere',
                description:
                  'Weekly decision time, async artifacts, and readouts leadership can skim—whichever lane you start with.',
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
                What we offer
              </h2>
              <p className="section-desc mt-3 max-w-2xl">
                Tap a card for scope, the numbers we aim at, how delivery usually goes, and candid fit notes—same layout on
                every page so your team only learns the pattern once.
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
                    <span className="mt-5 inline-flex text-xs font-semibold text-cyan-200/90">Open the full page</span>
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
                    <span className="mt-5 inline-flex text-xs font-semibold text-cyan-200/90">Open the full page</span>
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
            title="How work usually stacks"
            subtitle="Not a waterfall pitch—just how teams tend to ship when web, media, and ops move together."
            steps={[
              {
                phase: 'Foundation',
                title: 'Measure and show up online',
                body: 'Sites, tagging, and consent so every channel reports the same story—before we lean hard on spend or creative.',
              },
              {
                phase: 'Acceleration',
                title: 'Demand and creative in sync',
                body: 'SEO and PPC, social, and photo or video reinforce each other: modular assets, matched messaging, and weekly learning.',
              },
              {
                phase: 'Scale',
                title: 'Commerce and automation',
                body: 'Checkout that holds up, promos that match inventory, and pipes between CRM, ads, and finance—so growth does not break ops.',
              },
            ]}
          />
        </ScrollParallax>
      </PageSection>

      <PageSection className="mt-12 sm:mt-16">
        <ScrollParallax amount={10}>
          <div className="mb-8 max-w-2xl">
            <h2 className="section-title">Why we built this hub</h2>
            <p className="section-desc mt-3">
              People tune out when every service page feels like a different company. We keep the story, visuals, and page
              shape consistent—so your stakeholders get comfortable faster.
            </p>
          </div>
        </ScrollParallax>
        <PageInsightRow
          cards={[
            {
              eyebrow: 'Easy scanning',
              title: 'Pages that feel familiar',
              body: 'Delivery on the left, targets on the right, journey and fit below—same rhythm on every service so skimming is cheap.',
            },
            {
              eyebrow: 'Inclusive UX',
              title: 'Nav that works with keyboard and screen readers',
              body: 'Desktop mega-menu keeps focus in order; mobile keeps a simple list with a clear “overview” link.',
            },
            {
              eyebrow: 'Honest pairing',
              title: 'Fit notes to avoid misfires',
              body: 'We say where we shine and where we slow down—so procurement and practitioners agree before hours disappear.',
            },
          ]}
        />
      </PageSection>

      <PageSection className="mt-12 sm:mt-16">
        <div className="mb-8 max-w-2xl">
          <h2 className="section-title">Engagement fit</h2>
          <p className="section-desc mt-3">
            We do our best work with teams that want clear signal, good documentation, and shared ownership—not one-off heroics.
          </p>
        </div>
        <PageFitCallout
          title="Services engagements"
          idealTitle="We move fastest when"
          ideal={[
            'You can name the main metric and the quarter you need it to move.',
            'Marketing, product, and rev ops share one place for decisions (Slack, Teams, etc.).',
            'You are open to parallel work instead of “wait for the PDF” serial reviews.',
          ]}
          caveatTitle="We push pause when"
          caveats={[
            'No clear owner for analytics, consent, or brand approvals—those stalls become everyone’s problem.',
            'Success is only “more traffic” with no story about what should convert afterward.',
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
              <h2 className="text-xl font-semibold text-white sm:text-2xl">Want to talk scope?</h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400">
                Send constraints, links, and the number you need to move—we will answer with the smallest useful next step.
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
