import { motion, useReducedMotion } from 'framer-motion'
import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { GlassPanel } from '../components/GlassPanel'
import { PageJourneyStrip, PageReadGuide } from '../components/PageExplainer'
import { PageIntro } from '../components/PageIntro'
import { PageSection } from '../components/PageSection'
import { PageShell } from '../components/PageShell'
import { SectionHeading } from '../components/SectionHeading'
import { StatusPill } from '../components/ui/StatusPill'
import { useNoIndex } from '../hooks/useNoIndex'
import { usePageTitle } from '../hooks/usePageTitle'
import { fadeUpItem, staggerContainer } from '../motion/variants'
import {
  agencyContact,
  comparisonRows,
  gonzalezClient,
  lifetimeFairUse,
  pitchMailto,
  pitchTiers,
  scopeAlwaysOn,
  scopeNotIncluded,
  scopePages,
  timeline,
  weProvide,
  youProvide,
  type PitchTierId,
} from '../site/gonzalezPitch'

function isPitchTier(value: string | null): value is PitchTierId {
  return value === 'build' || value === 'lifetime'
}

function CheckItem({ children }: { children: string }) {
  return (
    <li className="flex gap-3 text-sm leading-relaxed text-slate-300">
      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/80" aria-hidden />
      <span>{children}</span>
    </li>
  )
}

export function GonzalezPitchPage() {
  usePageTitle(`Proposal for ${gonzalezClient.shortName}`)
  useNoIndex()
  const reduceMotion = useReducedMotion()
  const [params] = useSearchParams()
  const tierParam = params.get('tier')
  const selected: PitchTierId | null = isPitchTier(tierParam) ? tierParam : null
  const heroStagger = reduceMotion ? undefined : staggerContainer(0.06, 0.04)
  const heroItem = reduceMotion ? undefined : fadeUpItem

  useEffect(() => {
    const id = window.location.hash.replace('#', '')
    if (!id) return
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
  }, [selected, reduceMotion])

  return (
    <PageShell className="pt-[6.25rem] sm:pt-32">
      <PageIntro
        kicker="Private proposal"
        title="A written breakdown of the website—so we can trade fair and sign the same thing."
        lead={`${gonzalezClient.legalName} provides the gardening. Market Motion builds the site. You asked for exactly what we would put on the site before sending a contract. This page is that list, plus two ways to work together.`}
      />

      <motion.div
        className="mt-6 flex flex-wrap gap-2"
        variants={heroStagger}
        initial={reduceMotion ? false : 'hidden'}
        animate="visible"
      >
        <motion.div variants={heroItem}>
          <StatusPill variant="in-review">Awaiting your review</StatusPill>
        </motion.div>
        <motion.div variants={heroItem}>
          <StatusPill variant="todo">Trade: lawn work ↔ website</StatusPill>
        </motion.div>
        <motion.div variants={heroItem}>
          <StatusPill variant="design-review">You send the contract</StatusPill>
        </motion.div>
      </motion.div>

      <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
        <a href="#scope" className="btn-primary w-full justify-center px-6 sm:w-auto">
          Read the site plan
        </a>
        <a href="#tiers" className="btn-secondary w-full justify-center px-6 sm:w-auto">
          Compare the two tiers
        </a>
      </div>

      <PageSection className="mt-10 sm:mt-12" aria-label="How to read this proposal">
        <PageReadGuide
          id="pitch-orientation"
          eyebrow="Proposal · orientation"
          title="How to use this page"
          lead="Skim the trade, then the page-by-page plan. Pick a tier only after the list matches what you want in the contract."
          items={[
            {
              title: 'The site plan is the scope',
              description:
                'Pages, buttons, and launch items below are what we will actually build—not a mood board.',
            },
            {
              title: 'Two tiers, one launch',
              description:
                'Site build is the website. Lifetime keeps us on hosting, security, and free updates after launch.',
            },
            {
              title: 'You send the contract',
              description:
                'Once you pick a tier, send the gardening-services agreement. We will match this page in writing before work starts.',
            },
          ]}
        />
      </PageSection>

      <PageSection className="mt-12 sm:mt-16" aria-labelledby="client-heading">
        <SectionHeading
          id="client-heading"
          title="Built around the company you already are"
          description="We took this from your flyer—so the site sounds like Gonzalez Lawn, not a generic template."
        />
        <dl className="mt-8 grid gap-4 sm:grid-cols-2">
          <GlassPanel className="p-5 sm:p-6" hover>
            <dt className="font-mono text-xs uppercase tracking-widest text-slate-500">Company</dt>
            <dd className="mt-2 text-lg font-semibold text-white">{gonzalezClient.legalName}</dd>
            <dd className="mt-2 text-sm text-slate-400">{gonzalezClient.tagline}</dd>
            <dd className="mt-1 text-sm text-slate-400">{gonzalezClient.promise}</dd>
          </GlassPanel>
          <GlassPanel className="p-5 sm:p-6" hover>
            <dt className="font-mono text-xs uppercase tracking-widest text-slate-500">How customers reach you</dt>
            <dd className="mt-3">
              <a
                href={`tel:${gonzalezClient.phoneTel}`}
                className="inline-flex min-h-[44px] items-center text-sm font-medium text-white hover:text-cyan-200"
              >
                {gonzalezClient.phoneDisplay}
              </a>
            </dd>
            <dd>
              <a
                href={`mailto:${gonzalezClient.email}`}
                className="inline-flex min-h-[44px] max-w-full break-all items-center text-sm text-slate-300 hover:text-white"
              >
                {gonzalezClient.email}
              </a>
            </dd>
            <dd className="mt-2 text-sm text-slate-400">{gonzalezClient.proofs.join(' · ')}</dd>
          </GlassPanel>
        </dl>
      </PageSection>

      <PageSection
        className="mt-12 scroll-mt-[var(--header-offset)] sm:mt-16"
        id="scope"
        aria-labelledby="scope-heading"
      >
        <SectionHeading
          id="scope-heading"
          title="Exactly what we will do on the site"
          description="This is the written breakdown for the contract. Both tiers include this entire list."
        />
        <ol className="mt-8 space-y-4" aria-label="Pages we will build">
          {scopePages.map((page, index) => (
            <li key={page.title}>
              <GlassPanel className="flex flex-col gap-3 p-5 sm:flex-row sm:gap-6 sm:p-6" hover>
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-mono text-sm font-semibold text-cyan-200"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-white">{page.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{page.body}</p>
                </div>
              </GlassPanel>
            </li>
          ))}
        </ol>
      </PageSection>

      <PageSection className="mt-12 sm:mt-16" aria-labelledby="always-on-heading">
        <div className="grid gap-4 lg:grid-cols-2">
          <GlassPanel className="p-5 sm:p-6" hover>
            <h2 id="always-on-heading" className="text-lg font-semibold text-white">
              On every page
            </h2>
            <ul className="mt-5 space-y-3">
              {scopeAlwaysOn.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
          </GlassPanel>
          <GlassPanel className="border border-amber-500/15 p-5 sm:p-6" hover>
            <h2 className="text-lg font-semibold text-white">Not in this trade</h2>
            <p className="mt-2 text-sm text-slate-400">
              Called out so the contract does not surprise either of us later.
            </p>
            <ul className="mt-5 space-y-3">
              {scopeNotIncluded.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400/80" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassPanel>
        </div>
      </PageSection>

      <PageSection
        className="mt-12 scroll-mt-[var(--header-offset)] sm:mt-16"
        id="tiers"
        aria-labelledby="tiers-heading"
      >
        <SectionHeading
          id="tiers-heading"
          title="Two tiers"
          description="Same website. The difference is what happens after launch—and whether you want us on call for free updates."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-2 lg:gap-6">
          {(Object.keys(pitchTiers) as PitchTierId[]).map((id) => {
            const tier = pitchTiers[id]
            const isSelected = selected === id
            return (
              <GlassPanel
                key={id}
                hover
                className={[
                  'flex h-full flex-col p-5 sm:p-7',
                  tier.recommended ? 'border-cyan-400/35 ring-1 ring-cyan-400/20' : '',
                  isSelected ? 'border-emerald-400/40 ring-1 ring-emerald-400/25' : '',
                ].join(' ')}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-mono text-xs uppercase tracking-widest text-slate-500">{tier.kicker}</p>
                  {tier.recommended ? (
                    <span className="rounded-full border border-cyan-400/35 bg-cyan-500/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-100">
                      Recommended
                    </span>
                  ) : null}
                  {isSelected ? (
                    <span className="rounded-full border border-emerald-400/35 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-100">
                      You selected this
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">{tier.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{tier.blurb}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.includes.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3">
                  <Link
                    to={`/pitch/gonzalez?tier=${id}#next`}
                    className={
                      tier.recommended
                        ? 'btn-primary w-full justify-center'
                        : 'btn-secondary w-full justify-center'
                    }
                  >
                    Choose {tier.name}
                  </Link>
                  <a
                    href={pitchMailto(id)}
                    className="inline-flex min-h-[44px] items-center justify-center text-sm text-slate-400 underline decoration-white/15 underline-offset-4 hover:text-white"
                  >
                    Email this choice to {agencyContact.email}
                  </a>
                </div>
              </GlassPanel>
            )
          })}
        </div>
      </PageSection>

      <PageSection className="mt-12 sm:mt-16" aria-labelledby="compare-heading">
        <SectionHeading
          id="compare-heading"
          title="Side by side"
          description="Use this table in the contract if you want a one-page comparison."
        />
        <GlassPanel className="mt-8 overflow-hidden p-0" hover={false}>
          <div className="overflow-x-auto">
            <table className="min-w-[36rem] w-full border-collapse text-left text-sm">
              <caption className="sr-only">
                Comparison of Site build versus Build plus lifetime support
              </caption>
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.04] text-xs uppercase tracking-widest text-slate-500">
                  <th scope="col" className="px-5 py-4 font-medium sm:px-6">
                    Included
                  </th>
                  <th scope="col" className="px-5 py-4 font-medium sm:px-6">
                    Site build
                  </th>
                  <th scope="col" className="px-5 py-4 font-medium sm:px-6">
                    Lifetime support
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-b border-white/8 last:border-b-0">
                    <th scope="row" className="px-5 py-4 font-medium text-slate-200 sm:px-6">
                      {row.label}
                    </th>
                    <td className="px-5 py-4 text-slate-400 sm:px-6">{row.build}</td>
                    <td className="px-5 py-4 text-slate-300 sm:px-6">{row.lifetime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassPanel>
        <GlassPanel className="mt-4 p-5 sm:p-6" hover>
          <h3 className="text-base font-semibold text-white">What “free updates” means on lifetime</h3>
          <ul className="mt-4 space-y-3">
            {lifetimeFairUse.map((item) => (
              <CheckItem key={item}>{item}</CheckItem>
            ))}
          </ul>
        </GlassPanel>
      </PageSection>

      <PageSection className="mt-12 sm:mt-16">
        <PageJourneyStrip
          title="How the work actually ships"
          subtitle="Four weeks from a signed contract to a live site, assuming photos and the town list arrive in week one."
          steps={timeline.map((step) => ({
            phase: step.phase,
            title: step.title,
            body: step.body,
          }))}
        />
      </PageSection>

      <PageSection className="mt-12 sm:mt-16" aria-labelledby="trade-heading">
        <div className="mb-8 max-w-2xl">
          <h2 id="trade-heading" className="section-title">
            What each side brings
          </h2>
          <p className="section-desc mt-3">
            The gardening hours and schedule live in the contract you send. This page locks the website side so we are not
            arguing about pages later.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
          <GlassPanel className="border border-emerald-500/15 p-5 sm:p-6" hover>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-300/80">
              You provide
            </p>
            <h3 className="mt-2 text-lg font-semibold text-white">Gardening, photos, and the contract</h3>
            <ul className="mt-4 space-y-3">
              {youProvide.map((line) => (
                <li key={line} className="flex gap-2 text-sm leading-relaxed text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/80" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
          </GlassPanel>
          <GlassPanel className="border border-cyan-500/15 p-5 sm:p-6" hover>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-200/80">
              We provide
            </p>
            <h3 className="mt-2 text-lg font-semibold text-white">The website work in your tier</h3>
            <ul className="mt-4 space-y-3">
              {weProvide.map((line) => (
                <li key={line} className="flex gap-2 text-sm leading-relaxed text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/80" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
          </GlassPanel>
        </div>
      </PageSection>

      <PageSection
        className="mt-12 scroll-mt-[var(--header-offset)] sm:mt-16"
        id="next"
        aria-labelledby="next-heading"
      >
        <GlassPanel
          className={[
            'flex min-w-0 flex-col gap-6 p-5 sm:p-8',
            selected ? 'border-emerald-400/25' : '',
          ].join(' ')}
          hover
        >
          <div>
            <p className="eyebrow">Next step</p>
            <h2 id="next-heading" className="mt-3 section-title max-w-2xl">
              {selected
                ? `You are looking at ${pitchTiers[selected].name}. Send the contract when you are ready.`
                : 'Pick a tier, then send the contract.'}
            </h2>
            <p className="section-desc mt-3 max-w-2xl">
              Reply with Site build or Build + lifetime support. Attach the gardening-services agreement. We will confirm
              this page in writing so both sides are signing the same scope.
            </p>
          </div>
          <div className="flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
            <a
              href={pitchMailto(selected ?? 'lifetime')}
              className="btn-primary w-full justify-center px-6 sm:w-auto"
            >
              {selected ? `Email ${pitchTiers[selected].name}` : 'Email us to start'}
            </a>
            <a
              href={`tel:${agencyContact.phoneTel}`}
              className="btn-secondary w-full justify-center px-6 sm:w-auto"
            >
              Call {agencyContact.phoneDisplay}
            </a>
          </div>
          <p className="text-xs leading-relaxed text-slate-500">
            This page is a proposal, not a signed contract. Scope matches the lists above. The gardening trade, schedule,
            and any cash-equivalent language belong in the agreement you send.
          </p>
        </GlassPanel>
      </PageSection>
    </PageShell>
  )
}
