import { motion, useReducedMotion } from 'framer-motion'
import flyer from '../../assets/proposals/bulfrano-gonzalez-flyer.jpg'
import { GlassPanel } from '../../components/GlassPanel'
import { PageJourneyStrip, PageReadGuide } from '../../components/PageExplainer'
import { PageIntro } from '../../components/PageIntro'
import { PageSection } from '../../components/PageSection'
import { PageShell } from '../../components/PageShell'
import { SectionHeading } from '../../components/SectionHeading'
import { usePageTitle } from '../../hooks/usePageTitle'
import { easeOutExpo } from '../../motion/variants'
import {
  clientServices,
  clientTrustBadges,
  faq,
  proposalMeta,
  sitePages,
  technicalScope,
  tierFeatures,
  tiers,
  timeline,
  tradeTerms,
  type Tier,
  type TierFeature,
} from '../../site/proposals/bulfranoGonzalezLawn'

const viewSoft = { once: true as const, amount: 0.2 as const }

const jumpLinks = [
  { label: 'What we would build', href: '#proposal-scope' },
  { label: 'Two options', href: '#proposal-options' },
  { label: 'Timeline', href: '#proposal-timeline' },
  { label: 'Trade & contract', href: '#proposal-trade' },
]

function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className={`h-4 w-4 ${className}`}>
      <path
        d="M4.5 10.5l3.5 3.5 7.5-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DashIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className={`h-4 w-4 ${className}`}>
      <path d="M5 10h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function FeatureCell({ value, emphasis }: { value: TierFeature['build']; emphasis?: boolean }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-200">
        <CheckIcon className="text-emerald-300" />
        <span className="sr-only">Included</span>
      </span>
    )
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center text-slate-600">
        <DashIcon />
        <span className="sr-only">Not included</span>
      </span>
    )
  }
  return (
    <span
      className={`text-xs font-medium sm:text-sm ${emphasis ? 'text-emerald-100' : 'text-slate-300'}`}
    >
      {value}
    </span>
  )
}

function TierCard({ tier, index }: { tier: Tier; index: number }) {
  const reduceMotion = useReducedMotion()
  const recommended = Boolean(tier.recommended)

  return (
    <motion.div
      initial={reduceMotion ? false : { y: 22, opacity: 0 }}
      whileInView={reduceMotion ? undefined : { y: 0, opacity: 1 }}
      viewport={viewSoft}
      transition={{ duration: 0.5, ease: easeOutExpo, delay: reduceMotion ? 0 : index * 0.08 }}
      className="flex"
    >
      <GlassPanel
        className={`flex w-full flex-col p-6 sm:p-8 ${
          recommended ? 'border-emerald-400/40 shadow-[0_0_64px_-24px_rgba(52,211,153,0.35)]' : ''
        }`}
        hover
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span
            className={
              recommended
                ? 'mm-phase-pill mm-phase-pill--foundation border-emerald-400/45 text-emerald-200'
                : 'mm-phase-pill mm-phase-pill--default'
            }
          >
            {tier.kicker}
          </span>
          {recommended ? (
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-300/80">
              Best long-term value
            </span>
          ) : null}
        </div>
        <h3 className="mt-4 text-xl font-semibold leading-snug text-white text-balance sm:text-2xl">{tier.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{tier.summary}</p>

        <div
          className={`mt-6 rounded-xl border px-4 py-3 ${
            recommended ? 'border-emerald-400/25 bg-emerald-500/[0.08]' : 'border-white/10 bg-black/25'
          }`}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Trade basis</p>
          <p className={`mt-1 text-sm font-medium ${recommended ? 'text-emerald-100' : 'text-slate-200'}`}>
            {tier.tradeNote}
          </p>
        </div>

        <ul className="mt-6 flex-1 space-y-3">
          {tier.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-sm leading-relaxed text-slate-300">
              <span
                className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                  recommended
                    ? 'border-emerald-400/40 bg-emerald-500/15 text-emerald-200'
                    : 'border-cyan-400/30 bg-cyan-500/10 text-cyan-200'
                }`}
                aria-hidden
              >
                <CheckIcon className="h-3 w-3" />
              </span>
              {h}
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${proposalMeta.preparedByEmail}?subject=${encodeURIComponent(
            `Website proposal — ${tier.name}`,
          )}`}
          className={`mt-8 w-full text-center ${recommended ? 'btn-primary border-emerald-400/50 bg-emerald-500/20 hover:border-emerald-300/60 hover:bg-emerald-500/30' : 'btn-secondary'}`}
        >
          Choose this option
        </a>
      </GlassPanel>
    </motion.div>
  )
}

export function BulfranoGonzalezProposalPage() {
  usePageTitle(`Website proposal · ${proposalMeta.clientShortName}`)
  const reduceMotion = useReducedMotion()

  return (
    <PageShell>
      <PageIntro
        kicker={`Proposal · ${proposalMeta.clientName}`}
        title="A website that books lawn and landscape jobs while you are out on the mower."
        lead="This is the written breakdown you asked for: exactly what we would build, page by page, two ways to work together, and how the trade for gardening services is structured so the contract can reference it directly."
      />

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
        <span className="font-mono uppercase tracking-[0.18em]">Prepared by {proposalMeta.preparedBy}</span>
        <span aria-hidden className="hidden h-1 w-1 rounded-full bg-slate-600 sm:inline-block" />
        <span className="font-mono uppercase tracking-[0.18em]">{proposalMeta.version}</span>
      </div>

      <nav aria-label="Jump to section" className="mt-6 flex flex-wrap gap-2">
        {jumpLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="inline-flex min-h-[40px] items-center rounded-full border border-white/12 bg-white/[0.04] px-4 text-xs font-medium text-slate-300 transition-colors hover:border-cyan-400/35 hover:text-white"
          >
            {l.label}
          </a>
        ))}
      </nav>

      {/* Client snapshot */}
      <PageSection className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-5 lg:gap-8" aria-labelledby="proposal-client">
        <GlassPanel className="overflow-hidden p-0 lg:col-span-2" hover>
          <img
            src={flyer}
            alt="Bulfrano Gonzalez Lawn Service, LLC flyer showing the GG palm logo, five services, phone 941-718-6278, and the tagline Professional, Reliable, Quality."
            className="h-full w-full object-cover"
            width={923}
            height={936}
            loading="eager"
          />
        </GlassPanel>
        <GlassPanel className="p-6 sm:p-8 lg:col-span-3" hover>
          <p className="eyebrow">Who this is for</p>
          <h2 id="proposal-client" className="mt-2 text-xl font-semibold text-white sm:text-2xl">
            {proposalMeta.clientName}
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            {proposalMeta.tagline} · {proposalMeta.subTagline}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            Everything on your flyer already works: the logo is strong, the five services are clear, and the trust
            badges answer the questions homeowners actually ask. The website simply gives that flyer a permanent
            address on Google, a tap-to-call button, and a free-estimate form that works at 9pm when people are
            finally thinking about their yard.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Services we will feature</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {clientServices.map((s) => (
                  <li key={s} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/80" aria-hidden />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Trust badges</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {clientTrustBadges.map((b) => (
                    <li
                      key={b}
                      className="rounded-full border border-emerald-400/25 bg-emerald-500/[0.08] px-3 py-1 text-xs font-medium text-emerald-100"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Contact on the site</p>
                <a
                  href={proposalMeta.phoneHref}
                  className="mt-2 flex min-h-[44px] items-center text-sm font-medium text-white hover:text-cyan-200"
                >
                  {proposalMeta.phone}
                </a>
                <a
                  href={proposalMeta.emailHref}
                  className="flex min-h-[44px] items-center break-all text-sm text-slate-400 hover:text-white"
                >
                  {proposalMeta.email}
                </a>
                <p className="mt-1 text-xs text-slate-500">{proposalMeta.serviceArea}</p>
              </div>
            </div>
          </div>
        </GlassPanel>
      </PageSection>

      <PageSection className="mt-10 sm:mt-12">
        <PageReadGuide
          eyebrow="Proposal · how to read it"
          title="Four things to review before the contract"
          lead="Read top to bottom or jump straight to the part you care about. Every item here is written so it can be pasted into the contract as the scope of work."
          items={[
            {
              title: 'What we would build',
              description: 'Six pages, described one at a time, plus the technical work behind the scenes.',
            },
            {
              title: 'Two options',
              description: 'A one-time build, or the build plus lifetime support with free updates. Side-by-side comparison.',
            },
            {
              title: 'Timeline',
              description: 'Four weeks from kickoff to launch, with what we need from you each week.',
            },
            {
              title: 'Trade & contract',
              description: 'What each side provides, what is not included, and how we handle the paperwork.',
            },
          ]}
        />
      </PageSection>

      {/* Scope: page by page */}
      <PageSection id="proposal-scope" className="mt-14 scroll-mt-28 sm:mt-20" aria-labelledby="proposal-scope-heading">
        <SectionHeading
          id="proposal-scope-heading"
          title="Exactly what we would build, page by page"
          description="Six pages. Each one has a single job. Nothing here is a placeholder — if it is on this list, it ships."
          className="mb-8"
        />
        <ol className="grid list-none gap-4 p-0 md:grid-cols-2">
          {sitePages.map((page, i) => (
            <motion.li
              key={page.name}
              initial={reduceMotion ? false : { y: 16, opacity: 0 }}
              whileInView={reduceMotion ? undefined : { y: 0, opacity: 1 }}
              viewport={viewSoft}
              transition={{ duration: 0.45, ease: easeOutExpo, delay: reduceMotion ? 0 : (i % 2) * 0.06 }}
              className="flex"
            >
              <GlassPanel className="flex w-full flex-col p-5 sm:p-6" hover>
                <div className="flex items-start gap-3">
                  <span className="mm-read-index-pill shrink-0 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-white sm:text-lg">{page.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{page.purpose}</p>
                  </div>
                </div>
                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Includes</p>
                <ul className="mt-2 space-y-2">
                  {page.includes.map((line) => (
                    <li key={line} className="flex gap-2.5 text-sm leading-relaxed text-slate-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/80" aria-hidden />
                      {line}
                    </li>
                  ))}
                </ul>
              </GlassPanel>
            </motion.li>
          ))}
        </ol>
      </PageSection>

      {/* Scope: technical */}
      <PageSection className="mt-12 sm:mt-16" aria-labelledby="proposal-technical-heading">
        <SectionHeading
          id="proposal-technical-heading"
          title="The work you will not see, but Google will"
          description="Included in both options. This is what separates a site that gets calls from one that just exists."
          className="mb-8"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {technicalScope.map((group) => (
            <GlassPanel key={group.title} className="p-5 sm:p-6" hover>
              <h3 className="text-base font-semibold text-white">{group.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-slate-300">
                    <span className="mt-0.5 text-emerald-300" aria-hidden>
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </GlassPanel>
          ))}
        </div>
      </PageSection>

      {/* Tiers */}
      <PageSection id="proposal-options" className="mt-14 scroll-mt-28 sm:mt-20" aria-labelledby="proposal-options-heading">
        <SectionHeading
          id="proposal-options-heading"
          title="Two ways to work together"
          description="Both options deliver the same finished website. The difference is what happens after launch."
          className="mb-8"
        />
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          {tiers.map((tier, i) => (
            <TierCard key={tier.id} tier={tier} index={i} />
          ))}
        </div>

        <GlassPanel className="mt-8 overflow-hidden p-0" hover={false}>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <caption className="sr-only">Side-by-side comparison of the Website Build and Build + Lifetime Support options</caption>
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th scope="col" className="px-5 py-4 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500 sm:px-6">
                    What is included
                  </th>
                  <th scope="col" className="w-[22%] px-4 py-4 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
                    Option 1 · Build
                  </th>
                  <th scope="col" className="w-[22%] px-4 py-4 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-300/90">
                    Option 2 · Lifetime
                  </th>
                </tr>
              </thead>
              <tbody>
                {tierFeatures.map((f, i) => (
                  <tr
                    key={f.label}
                    className={`border-b border-white/[0.06] ${i % 2 === 1 ? 'bg-white/[0.015]' : ''}`}
                  >
                    <th scope="row" className="px-5 py-3.5 text-sm font-normal leading-relaxed text-slate-300 sm:px-6">
                      {f.label}
                    </th>
                    <td className="px-4 py-3.5 align-middle">
                      <FeatureCell value={f.build} />
                    </td>
                    <td className="bg-emerald-500/[0.04] px-4 py-3.5 align-middle">
                      <FeatureCell value={f.lifetime} emphasis />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassPanel>
      </PageSection>

      {/* Timeline */}
      <PageSection id="proposal-timeline" className="mt-14 scroll-mt-28 sm:mt-20">
        <PageJourneyStrip
          title="Four weeks from kickoff to live"
          subtitle="Each week has one clear deliverable from us and one small ask from you. If you are slower to review, the timeline simply slides — nothing is lost."
          steps={timeline}
        />
      </PageSection>

      {/* Trade & contract */}
      <PageSection id="proposal-trade" className="mt-14 scroll-mt-28 sm:mt-20" aria-labelledby="proposal-trade-heading">
        <SectionHeading
          id="proposal-trade-heading"
          title="How the trade works"
          description="You provide the gardening services, we provide the website work. Here is what each side is committing to, in plain language, so the contract you send can reference it line by line."
          className="mb-8"
        />
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
          <GlassPanel className="border border-cyan-400/15 p-5 sm:p-6" hover>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-300/80">
              {proposalMeta.preparedBy} provides
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
              {tradeTerms.weProvide.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/80" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
          </GlassPanel>
          <GlassPanel className="border border-emerald-500/15 p-5 sm:p-6" hover>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-300/80">
              {proposalMeta.clientShortName} provides
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
              {tradeTerms.youProvide.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/80" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
          </GlassPanel>
          <GlassPanel className="border border-amber-500/15 p-5 sm:p-6" hover>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-amber-200/80">
              Not included (so there are no surprises)
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
              {tradeTerms.notIncluded.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400/70" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
          </GlassPanel>
          <GlassPanel className="p-5 sm:p-6" hover>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Contract and paperwork
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
              {tradeTerms.contractNotes.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400/70" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
          </GlassPanel>
        </div>
      </PageSection>

      {/* FAQ */}
      <PageSection className="mt-12 sm:mt-16" aria-labelledby="proposal-faq-heading">
        <SectionHeading id="proposal-faq-heading" title="Questions you might have" className="mb-6" />
        <div className="grid gap-4 md:grid-cols-2">
          {faq.map((item) => (
            <GlassPanel key={item.q} className="p-5 sm:p-6" hover>
              <h3 className="text-base font-semibold text-white">{item.q}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.a}</p>
            </GlassPanel>
          ))}
        </div>
      </PageSection>

      {/* Next steps */}
      <PageSection className="mt-14 sm:mt-20">
        <GlassPanel className="border border-emerald-400/20 p-6 sm:p-10" hover>
          <div className="grid gap-8 lg:grid-cols-5 lg:items-center">
            <div className="lg:col-span-3">
              <p className="eyebrow">Next steps</p>
              <h2 className="mt-2 text-2xl font-semibold leading-tight text-white text-balance sm:text-3xl">
                Pick an option, send the contract, and we attach this page as the scope.
              </h2>
              <ol className="mt-5 space-y-3 text-sm leading-relaxed text-slate-300">
                <li className="flex gap-3">
                  <span className="mm-read-index-pill shrink-0">1</span>
                  <span>Reply with Option 1 or Option 2 and any lines you want changed.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mm-read-index-pill shrink-0">2</span>
                  <span>Send over the contract with the gardening services, value and schedule spelled out.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mm-read-index-pill shrink-0">3</span>
                  <span>We sign within three business days and book the kickoff call. Four weeks later the site is live.</span>
                </li>
              </ol>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-2">
              <a
                href={`mailto:${proposalMeta.preparedByEmail}?subject=${encodeURIComponent(
                  `Website proposal — ${proposalMeta.clientShortName}`,
                )}`}
                className="btn-primary w-full border-emerald-400/50 bg-emerald-500/20 hover:border-emerald-300/60 hover:bg-emerald-500/30"
              >
                Email us your choice
              </a>
              <a href={proposalMeta.preparedByPhoneHref} className="btn-secondary w-full">
                Call {proposalMeta.preparedByPhone}
              </a>
              <p className="text-center text-xs leading-relaxed text-slate-500">
                Prefer to talk in person? We are happy to walk through this page together on site.
              </p>
            </div>
          </div>
        </GlassPanel>
      </PageSection>
    </PageShell>
  )
}
