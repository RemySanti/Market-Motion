import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GlassPanel } from '../../components/GlassPanel'
import { PageSection } from '../../components/PageSection'
import { PageShell } from '../../components/PageShell'
import { SectionHeading } from '../../components/SectionHeading'
import { fadeUpItem, staggerContainer } from '../../motion/variants'
import { usePageTitle } from '../../hooks/usePageTitle'
import {
  client,
  services,
  tiers,
  tradeFramework,
  trustPoints,
  websiteScope,
} from '../../site/bulfranoGonzalezPitch'

function ScopeList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-3 list-none space-y-2 pl-0">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-slate-300 sm:text-[15px]">
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function BulfranoGonzalezPitchPage() {
  usePageTitle('Proposal · Bulfrano Gonzalez Lawn Service')
  const reduceMotion = useReducedMotion()
  const heroStagger = reduceMotion ? undefined : staggerContainer(0.06, 0.06)
  const heroItem = reduceMotion ? undefined : fadeUpItem

  return (
    <PageShell className="pt-[5.5rem] sm:pt-32">
      <section
        aria-labelledby="pitch-hero"
        className="relative overflow-hidden rounded-3xl border border-emerald-500/25 bg-gradient-to-br from-[#0a1628] via-[#071018] to-[#0d1f14] p-6 shadow-[0_40px_100px_-40px_rgba(16,185,129,0.35)] sm:p-10"
      >
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-sky-900/40 blur-3xl"
          aria-hidden
        />

        <motion.div
          variants={heroStagger}
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
        >
          <motion.p
            variants={heroItem}
            className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300/90"
          >
            Work-for-trade proposal · written scope for contract review
          </motion.p>
          <motion.h1
            id="pitch-hero"
            variants={heroItem}
            className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl"
          >
            {client.businessName}
          </motion.h1>
          <motion.p variants={heroItem} className="mt-3 text-lg text-emerald-100/90 sm:text-xl">
            {client.tagline}
          </motion.p>
          <motion.p variants={heroItem} className="mt-2 text-base text-slate-300">
            {client.headline}
          </motion.p>

          <motion.div
            variants={heroItem}
            className="mt-8 flex flex-wrap gap-3 text-sm"
          >
            <a
              href={client.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 font-medium text-emerald-50 transition hover:border-emerald-300/50"
            >
              {client.phone}
            </a>
            <a
              href={client.emailHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-slate-200 transition hover:border-white/25"
            >
              {client.email}
            </a>
          </motion.div>

          <motion.ul
            variants={heroItem}
            className="mt-6 flex flex-wrap gap-2"
            aria-label="Trust highlights"
          >
            {trustPoints.map((point) => (
              <li
                key={point}
                className="rounded-full border border-sky-400/20 bg-sky-950/50 px-3 py-1 text-xs text-sky-100"
              >
                {point}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </section>

      <PageSection className="mt-14 sm:mt-20">
        <SectionHeading
          id="greeting"
          title="Good morning — here is the breakdown you asked for"
          description={
            <p>
              You asked for a written list of exactly what we would build before we sign a
              contract. Below is that scope. Tier 1 is a{' '}
              <strong className="font-medium text-white">$1,500 company credit</strong> trade for
              the build (enhancements on request). Tier 2 is a{' '}
              <strong className="font-medium text-white">lifetime 1:1 trade</strong> with
              unlimited website updates, advanced build strategy, and up to{' '}
              <strong className="font-medium text-white">$1,500 in landscaping enhancements</strong>{' '}
              included.
            </p>
          }
        />
      </PageSection>

      <PageSection className="mt-12" data-reveal>
        <SectionHeading
          id="services-match"
          title="Your services (what the site will sell)"
          description="The site will mirror the five areas on your flyer so visitors immediately see a full-service landscape partner."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <GlassPanel key={service.title} className="p-5" hover>
              <h3 className="text-base font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{service.description}</p>
            </GlassPanel>
          ))}
        </div>
      </PageSection>

      <PageSection className="mt-16" data-reveal>
        <SectionHeading
          id="tiers"
          title="Two options"
          description="Same core website in both tiers. Tier 1 is a fixed $1,500 credit trade. Tier 2 is an ongoing 1:1 partnership with unlimited updates and a $1,500 enhancement allowance on the landscaping side."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {tiers.map((tier) => (
            <GlassPanel
              key={tier.id}
              className={[
                'flex h-full flex-col p-6 sm:p-8',
                tier.highlighted
                  ? 'border-emerald-400/40 ring-1 ring-emerald-400/20'
                  : '',
              ].join(' ')}
              hover
            >
              {tier.highlighted ? (
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  Recommended for busy owners
                </p>
              ) : null}
              <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-emerald-200">
                {tier.tradeHeadline}
              </p>
              <p className="mt-2 text-sm text-slate-300">{tier.summary}</p>
              <p className="mt-4 text-xs font-medium uppercase tracking-wide text-slate-500">
                {tier.tradeLabel}
              </p>
              <p className="mt-1 text-sm text-slate-400">{tier.tradeNote}</p>
              <div className="mt-6 flex-1">
                <p className="text-sm font-medium text-emerald-200/90">Includes</p>
                <ScopeList items={tier.includes} />
                <p className="mt-5 text-sm font-medium text-slate-400">Not included</p>
                <ScopeList items={tier.excludes} />
              </div>
            </GlassPanel>
          ))}
        </div>
      </PageSection>

      <PageSection className="mt-16" data-reveal>
        <SectionHeading
          id="scope-overview"
          title="Written website scope (attach to contract)"
          description="This section is the detailed deliverable list—what we will do on the site."
        />
        <GlassPanel className="mt-8 p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-white">1. Overview</h3>
          <ScopeList items={websiteScope.overview} />

          <h3 className="mt-8 text-lg font-semibold text-white">2. Pages & content</h3>
          <div className="mt-4 space-y-6">
            {websiteScope.pages.map((page) => (
              <div key={page.name}>
                <h4 className="font-medium text-emerald-100">{page.name}</h4>
                <ScopeList items={page.bullets} />
              </div>
            ))}
          </div>

          <h3 className="mt-8 text-lg font-semibold text-white">3. Design & branding</h3>
          <ScopeList items={websiteScope.design} />

          <h3 className="mt-8 text-lg font-semibold text-white">4. Functionality</h3>
          <ScopeList items={websiteScope.functionality} />

          <h3 className="mt-8 text-lg font-semibold text-white">5. SEO & local discovery</h3>
          <ScopeList items={websiteScope.seo} />

          <h3 className="mt-8 text-lg font-semibold text-white">6. Performance & accessibility</h3>
          <ScopeList items={websiteScope.performance} />

          <h3 className="mt-8 text-lg font-semibold text-white">7. Launch & handoff</h3>
          <ScopeList items={websiteScope.launch} />
        </GlassPanel>
      </PageSection>

      <PageSection className="mt-12 grid gap-6 lg:grid-cols-2" data-reveal>
        <GlassPanel className="p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-white">Out of scope</h3>
          <ScopeList items={websiteScope.outOfScope} />
        </GlassPanel>
        <GlassPanel className="p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-white">What we need from you</h3>
          <ScopeList items={websiteScope.clientProvides} />
        </GlassPanel>
      </PageSection>

      <PageSection className="mt-12" data-reveal>
        <GlassPanel className="p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-white">Acceptance (done means done)</h3>
          <ScopeList items={websiteScope.acceptance} />
        </GlassPanel>
      </PageSection>

      <PageSection className="mt-16" data-reveal>
        <SectionHeading
          id="trade"
          title="Trade arrangement (mirror in your contract)"
          description="Fair trades spell out both sides. Use this as a checklist when you send the agreement."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <GlassPanel className="p-6">
            <h3 className="font-semibold text-emerald-100">You provide</h3>
            <ScopeList items={tradeFramework.youProvide} />
          </GlassPanel>
          <GlassPanel className="p-6">
            <h3 className="font-semibold text-emerald-100">We provide</h3>
            <ScopeList items={tradeFramework.weProvide} />
          </GlassPanel>
          <GlassPanel className="p-6">
            <h3 className="font-semibold text-emerald-100">Contract should specify</h3>
            <ScopeList items={tradeFramework.contractHooks} />
          </GlassPanel>
        </div>
      </PageSection>

      <PageSection className="mt-16 mb-8" data-reveal>
        <SectionHeading
          id="next"
          title="Next steps"
          description={
            <ol className="list-decimal space-y-2 pl-5 text-slate-300">
              <li>Review this page and choose Tier 1 or Tier 2.</li>
              <li>Reply with any changes to scope (extra pages, bilingual copy, etc.).</li>
              <li>
                You send the contract with Tier 1 credits or Tier 2 1:1 terms (and the $1,500
                enhancement list) filled in.
              </li>
              <li>We confirm the website scope above matches the contract, then begin build.</li>
            </ol>
          }
        />
        <p className="mt-6 text-sm text-slate-500">
          Questions?{' '}
          <Link to="/contact" className="text-emerald-300 underline-offset-2 hover:underline">
            Contact us
          </Link>{' '}
          or reply on the thread where you received this link.
        </p>
      </PageSection>
    </PageShell>
  )
}
