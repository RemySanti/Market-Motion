import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { GlassPanel } from '../components/GlassPanel'
import { PageSection } from '../components/PageSection'
import { PageShell } from '../components/PageShell'
import { SectionHeading } from '../components/SectionHeading'
import { usePageTitle } from '../hooks/usePageTitle'

const CLIENT_FACTS = [
  { label: 'Phone', value: '941-718-6278', href: 'tel:+19417186278' },
  { label: 'Email', value: 'BulfranoGonzalez@icloud.com', href: 'mailto:BulfranoGonzalez@icloud.com' },
  { label: 'Estimates', value: 'Free · Estimados gratis' },
  { label: 'Trust', value: 'Insured · Veteran discounts' },
]

const CLIENT_SERVICES = [
  'Lawn maintenance',
  'Landscape design & installation',
  'Tree & palm care',
  'Irrigation systems',
  'Stone, mulch & clean ups',
]

const BREAKDOWN_GROUPS: { title: string; items: string[] }[] = [
  {
    title: 'Pages we build for you (8 pages, mobile-first)',
    items: [
      'Home — services, proof, reviews, service areas, and a sticky Call + Free Estimate button.',
      'Services hub + 5 service pages: lawn maintenance, landscape design & install, tree & palm care, irrigation, stone / mulch / clean ups.',
      'Service areas page — towns and ZIPs you actually serve, wired to Google Maps.',
      'Reviews page — pulls in your Google reviews and makes it easy to ask for new ones.',
      'Before / after gallery — photo layout built for lawn, hedge, mulch, and clean-up shots.',
      'About — your story: professional, reliable, quality + complete landscape solutions.',
      'Free estimate page — short form (name, phone, service, photos, ZIP) that texts and emails you.',
      'Contact + thank-you pages — click-to-call, click-to-text, email, hours, and what happens next.',
    ],
  },
  {
    title: 'Calls, quotes, and new jobs',
    items: [
      'Sticky tap-to-call and Free Estimates buttons on every page — built for thumbs, not desktops.',
      'Quote form with photo upload, service picker, and service-area check so you get qualified leads.',
      'Instant email + optional SMS alert to 941-718-6278 so no lead sits overnight.',
      'Bilingual EN / ES support for headings and the quote form (“Free Estimates / Estimados Gratis”).',
      'Missed-call safety net: after-hours form tells customers when you will call back.',
    ],
  },
  {
    title: 'Look, words, and photos',
    items: [
      'Design matched to your flyer: deep green + navy + gold, GG monogram, palm motif, clean type.',
      'Logo cleanup for web (crisp on phones, no blurry edges) — you keep full ownership.',
      'We write every page in plain, friendly English (+ Spanish for key sections) — no lorem ipsum.',
      'Photo plan: we lay out your best jobs, add captions, and mark the 10 shots that win the most calls.',
      'Trust strip on every page: Insured · Free Estimates · Veteran Discounts.',
    ],
  },
  {
    title: 'Google, maps, and local SEO',
    items: [
      'Google Business Profile check and link-up: hours, services, areas, phone, and review link.',
      'Local SEO: title tags, service-area pages, and schema markup so “lawn service near me” can find you.',
      'Map embed + driving-directions link for each service area.',
      'Review engine: QR code + text link you can hand to happy customers.',
      'Analytics: calls, form fills, and direction taps tracked — you see what the site earns.',
    ],
  },
  {
    title: 'Speed, phones, and accessibility',
    items: [
      'Fast on 5G and slow connections: compressed images, lazy gallery, under-2s target on phones.',
      'Readable for everyone: large tap targets, high contrast, alt text, keyboard-friendly forms.',
      'Works on iPhone, Android, and desktop — tested before launch, not after.',
    ],
  },
  {
    title: 'Ownership, hosting, and launch',
    items: [
      'You own the domain, site, copy, and photos — 100%. We hand over all logins in writing.',
      'We set up fast, low-cost hosting + SSL (you pay the provider directly, roughly the price of lunch per month).',
      'Launch checklist: domain, email deliverability, backups, and a 30-minute walkthrough video.',
      'Launch proof: we show the site live on your own phone before we call it done.',
    ],
  },
]

const OUT_OF_SCOPE = [
  'Logo redesign from scratch (we clean up your GG mark; a full rebrand is separate).',
  'Paid ads management or social-media posting (we can add later).',
  'E-commerce or online payments (quote-only site keeps costs and upkeep down).',
]

const NEED_FROM_YOU = [
  'High-res GG logo file (or a clear photo of the flyer — we will rebuild it clean).',
  '10–20 job photos (phone photos are fine) + the 3 jobs you are proudest of.',
  'Town / ZIP list you serve, hours, and how you price estimates.',
  '2–3 past customers we can quote — or permission to use your Google reviews.',
]

type TierFeature = { label: string; tier1: string; tier2: string }

const COMPARISON: TierFeature[] = [
  { label: 'Full 8-page website as itemized above', tier1: 'Included', tier2: 'Included' },
  { label: 'Copywriting (EN + key ES sections)', tier1: 'Included', tier2: 'Included' },
  { label: 'Quote form + call buttons + maps', tier1: 'Included', tier2: 'Included' },
  { label: 'Google Business + local SEO setup', tier1: 'Included', tier2: 'Included' },
  { label: 'Launch training video + logins', tier1: 'Included', tier2: 'Included' },
  { label: 'Fix window after launch', tier1: '30 days', tier2: 'Lifetime priority fixes' },
  { label: 'Text, price, photo, and hours updates', tier1: '1 round in first 30 days', tier2: 'Free, unlimited, lifetime' },
  { label: 'New pages (new service, new town)', tier1: 'Quoted separately', tier2: 'Free, lifetime' },
  { label: 'Seasonal banners + promos', tier1: 'Not included', tier2: 'Free, lifetime' },
  { label: 'Annual refresh & check-up', tier1: 'Not included', tier2: 'Free every year' },
  { label: 'Trade structure', tier1: 'One-time garden work, agreed in contract', tier2: 'Ongoing garden cadence, agreed in contract' },
]

function buildPlainTextBreakdown(): string {
  const lines: string[] = []
  lines.push('BULFRANO GONZALEZ LAWN SERVICE, LLC — WEBSITE SCOPE (TRADE PROPOSAL)')
  lines.push('Prepared by Market Motion Agency for review and contract attachment.')
  lines.push('')
  BREAKDOWN_GROUPS.forEach((g, gi) => {
    lines.push(`${gi + 1}. ${g.title}`)
    g.items.forEach((item) => lines.push(`   - ${item}`))
    lines.push('')
  })
  lines.push('WHAT WE NEED FROM YOU:')
  NEED_FROM_YOU.forEach((n) => lines.push(`   - ${n}`))
  lines.push('')
  lines.push('OUT OF SCOPE (unless Tier 2 or separately agreed):')
  OUT_OF_SCOPE.forEach((o) => lines.push(`   - ${o}`))
  lines.push('')
  lines.push('TIER 1 — WEBSITE BUILD: everything above, 30-day fix window, 1 revision round, training video, full handover. One-time garden-services trade to be listed in the contract.')
  lines.push('TIER 2 — BUILD + LIFETIME SUPPORT: everything in Tier 1 plus lifetime free updates (text, photos, prices, hours, new service/town pages, seasonal banners), priority fixes, and a free annual refresh. Ongoing garden-services cadence to be listed in the contract.')
  lines.push('')
  lines.push('Ownership: client owns domain, site, copy, and photos. Hosting/SSL paid by client directly to provider. Contract to be sent by client for both parties to sign.')
  return lines.join('\n')
}

export function GonzalezPitchPage() {
  usePageTitle('Proposal — Bulfrano Gonzalez Lawn Service')
  const [copied, setCopied] = useState(false)
  const plainText = useMemo(() => buildPlainTextBreakdown(), [])

  const copyBreakdown = async () => {
    try {
      await navigator.clipboard.writeText(plainText)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2400)
    } catch {
      setCopied(false)
    }
  }

  return (
    <PageShell className="pt-[6.25rem] sm:pt-36">
      {/* Eyebrow + hero */}
      <section aria-labelledby="gonzalez-hero">
        <p className="mm-pill-kicker mm-pill-shimmer-host inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden />
          <span>Private trade proposal · For review + contract</span>
        </p>
        <h1
          id="gonzalez-hero"
          className="mt-6 max-w-3xl text-balance text-[clamp(1.7rem,5.4vw+0.55rem,2.6rem)] font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl"
        >
          A website that rings the phone — traded for the work you do best.
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
          Prepared for <strong className="font-semibold text-white">Bulfrano Gonzalez Lawn Service, LLC</strong> by
          Market Motion Agency. Below is the exact written breakdown you asked for: every page, every feature, and two
          clear trade tiers — <strong className="font-semibold text-white">Build only</strong> or{' '}
          <strong className="font-semibold text-white">Build + lifetime support with free updates</strong>. Pick a tier,
          paste this page into the contract you send over, and we both sign.
        </p>
        <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
          <a href="#tiers" className="btn-primary w-full justify-center px-6 sm:w-auto">
            Compare the 2 tiers
          </a>
          <a href="#breakdown" className="btn-secondary w-full justify-center px-6 sm:w-auto">
            Read the full breakdown
          </a>
          <button type="button" onClick={copyBreakdown} className="btn-secondary w-full justify-center px-6 sm:w-auto">
            {copied ? 'Copied — paste into contract' : 'Copy breakdown for contract'}
          </button>
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="Client contact facts">
          {CLIENT_FACTS.map((f) => (
            <li key={f.label}>
              <GlassPanel className="p-4" hover>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">{f.label}</p>
                {f.href ? (
                  <a href={f.href} className="mt-2 block break-words text-sm font-semibold text-white hover:text-emerald-200">
                    {f.value}
                  </a>
                ) : (
                  <p className="mt-2 text-sm font-semibold text-white">{f.value}</p>
                )}
              </GlassPanel>
            </li>
          ))}
        </ul>
      </section>

      {/* What you asked for */}
      <PageSection className="mt-12 sm:mt-16" aria-labelledby="asked-heading">
        <GlassPanel className="border-emerald-400/25 p-5 sm:p-8" hover>
          <p className="eyebrow">What you asked for</p>
          <h2 id="asked-heading" className="section-title mt-3">
            “Provide a written breakdown of exactly what you would do.”
          </h2>
          <blockquote className="mt-4 border-l-2 border-emerald-400/60 pl-4 text-sm leading-relaxed text-slate-300 sm:text-base">
            “Good morning. If we’re going to trade work for a website, please provide a written breakdown of exactly
            what you would do on the site so I can review it. We can then draw up a contract — which I’ll send over —
            to ensure we’re both in agreement: I’ll provide the gardening services, and you’ll handle the website work.”
          </blockquote>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              { t: 'You review', d: 'This page is the breakdown. Send back edits — nothing is final until you approve.' },
              { t: 'You send the contract', d: 'Attach this breakdown as the website scope; list the gardening services as your scope.' },
              { t: 'We both sign, work starts', d: 'Gardening on your side, website on ours — with dates and a done-definition.' },
            ].map((s, i) => (
              <div key={s.t} className="rounded-xl border border-white/10 bg-black/25 p-4">
                <p className="font-mono text-xs text-emerald-300/90">Step {i + 1}</p>
                <p className="mt-2 font-semibold text-white">{s.t}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">{s.d}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </PageSection>

      {/* Services we are building around */}
      <PageSection className="mt-12 sm:mt-16" aria-labelledby="services-around">
        <SectionHeading
          id="services-around"
          title="Built around the five jobs you already sell"
          description="Every service on your flyer gets its own page with photos, prices-on-request, and its own Free Estimate button."
        />
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Services covered">
          {CLIENT_SERVICES.map((s) => (
            <li
              key={s}
              className="rounded-full border border-emerald-400/25 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-100"
            >
              {s}
            </li>
          ))}
        </ul>
      </PageSection>

      {/* Full breakdown */}
      <PageSection className="mt-12 sm:mt-16" aria-labelledby="breakdown" >
        <span id="breakdown" className="block scroll-mt-28" aria-hidden />
        <SectionHeading
          id="breakdown-heading"
          title="The exact breakdown — attach this to the contract"
          description="This is the website scope. If it is not listed here, it is not promised — which keeps the trade fair for both sides."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {BREAKDOWN_GROUPS.map((g, gi) => (
            <GlassPanel key={g.title} className="p-5 sm:p-6" hover>
              <p className="font-mono text-xs uppercase tracking-widest text-emerald-300/80">
                Part {gi + 1} of {BREAKDOWN_GROUPS.length}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">{g.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {g.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/80" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassPanel>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <GlassPanel className="p-5 sm:p-6" hover>
            <h3 className="text-lg font-semibold text-white">What we need from you</h3>
            <p className="section-desc mt-2">Send anytime after you pick a tier — phone photos are fine to start.</p>
            <ul className="mt-4 space-y-2.5">
              {NEED_FROM_YOU.map((n) => (
                <li key={n} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/80" aria-hidden />
                  {n}
                </li>
              ))}
            </ul>
          </GlassPanel>
          <GlassPanel className="p-5 sm:p-6" hover>
            <h3 className="text-lg font-semibold text-white">Out of scope (so there are no surprises)</h3>
            <p className="section-desc mt-2">Available later as a separate agreement — never snuck into the trade.</p>
            <ul className="mt-4 space-y-2.5">
              {OUT_OF_SCOPE.map((o) => (
                <li key={o} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400/80" aria-hidden />
                  {o}
                </li>
              ))}
            </ul>
          </GlassPanel>
        </div>
      </PageSection>

      {/* Tiers */}
      <PageSection className="mt-12 sm:mt-16" aria-labelledby="tiers-heading">
        <span id="tiers" className="block scroll-mt-28" aria-hidden />
        <SectionHeading
          id="tiers-heading"
          title="Two trade tiers — same great site, different level of backup"
          description="Tier 1 is a clean one-time trade. Tier 2 is the same site plus lifetime support with free updates — you never pay for a text change again."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {/* Tier 1 */}
          <GlassPanel className="flex flex-col p-5 sm:p-7" hover>
            <p className="mm-phase-pill mm-phase-pill--foundation">Tier 1 · One-time trade</p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">Website Build</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Everything in the breakdown above, built, launched, and handed over — traded for a defined set of
              gardening services you list in the contract.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-slate-300">
              {[
                'Full 8-page site + quote form + maps + reviews',
                'Copywriting (EN + key ES) and flyer-matched design',
                'Google Business + local SEO + call tracking',
                '1 revision round + 30-day bug-fix window',
                'Training video + all logins in writing',
                'You own everything; hosting paid by you to provider',
              ].map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/80" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-5 rounded-xl border border-white/10 bg-black/25 p-3 text-xs leading-relaxed text-slate-400">
              Best if: you want a professional site now, and you are comfortable handling small text changes yourself
              after the first 30 days (we show you how).
            </p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <a
                href="mailto:hello@marketmotionagency.com?subject=Tier%201%20—%20Gonzalez%20Website%20Build%20(trade)&body=Hi%20—%20we%20pick%20Tier%201%20(Website%20Build).%20Our%20gardening-services%20offer%20for%20the%20trade%20is%3A%20___."
                className="btn-secondary flex-1 justify-center px-6 text-center"
              >
                Choose Tier 1
              </a>
              <Link to="/contact" className="btn-secondary flex-1 justify-center px-6 text-center">
                Discuss Tier 1
              </Link>
            </div>
          </GlassPanel>

          {/* Tier 2 */}
          <GlassPanel className="relative flex flex-col border-emerald-400/30 p-5 shadow-[0_0_48px_-16px_rgba(52,211,153,0.35)] sm:p-7" hover>
            <p className="mm-phase-pill mm-phase-pill--foundation border-emerald-400/40 text-emerald-100">
              Tier 2 · Recommended · Lifetime support
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">Build + Lifetime Support</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              The same site, plus <strong className="font-semibold text-white">free updates for life</strong> — text,
              photos, prices, hours, new pages, and seasonal promos. Traded for an ongoing gardening cadence you define
              in the contract.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-slate-200">
              {[
                'Everything in Tier 1, no exceptions',
                'Unlimited text / photo / price / hours updates — free, forever',
                'New service + new town pages free when you expand',
                'Seasonal banners (spring clean-ups, storm season, holidays) free',
                'Priority fixes for life + free annual refresh check',
                'We make the change — you just text or email it',
              ].map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-5 rounded-xl border border-emerald-400/25 bg-emerald-500/10 p-3 text-xs leading-relaxed text-emerald-100/90">
              Best if: you want to never think about the website again — send a text, we update the site, usually
              within 2 business days.
            </p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <a
                href="mailto:hello@marketmotionagency.com?subject=Tier%202%20—%20Gonzalez%20Build%20%2B%20Lifetime%20Support%20(trade)&body=Hi%20—%20we%20pick%20Tier%202%20(Build%20%2B%20Lifetime%20Support).%20Our%20ongoing%20gardening-services%20offer%20for%20the%20trade%20is%3A%20___."
                className="btn-primary flex-1 justify-center px-6 text-center"
              >
                Choose Tier 2
              </a>
              <Link to="/contact" className="btn-secondary flex-1 justify-center px-6 text-center">
                Discuss Tier 2
              </Link>
            </div>
          </GlassPanel>
        </div>

        {/* Comparison table */}
        <GlassPanel className="mt-4 overflow-x-auto p-0" hover>
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <caption className="px-5 pt-5 text-left font-mono text-xs uppercase tracking-widest text-slate-500">
              Side-by-side comparison
            </caption>
            <thead>
              <tr className="border-b border-white/10 text-slate-400">
                <th scope="col" className="px-5 py-4 font-medium">What is covered</th>
                <th scope="col" className="px-5 py-4 font-medium">Tier 1 · Build</th>
                <th scope="col" className="px-5 py-4 font-medium">Tier 2 · Build + Lifetime</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.label} className="border-b border-white/5 last:border-0">
                  <th scope="row" className="px-5 py-3 font-normal text-slate-300">{row.label}</th>
                  <td className="px-5 py-3 text-slate-400">{row.tier1}</td>
                  <td className="px-5 py-3 font-medium text-emerald-100">{row.tier2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </GlassPanel>
      </PageSection>

      {/* Timeline */}
      <PageSection className="mt-12 sm:mt-16" aria-labelledby="timeline-heading">
        <SectionHeading
          id="timeline-heading"
          title="How fast this moves once you send the contract"
          description="No dragged-out project. Two focused weeks from signed contract to a site live on your phone."
        />
        <ol className="mt-8 space-y-3" aria-label="Delivery timeline">
          {[
            { w: 'Day 0', t: 'You send the contract', d: 'You attach this breakdown as our scope and list your gardening scope + dates. We both sign.' },
            { w: 'Days 1–3', t: 'Kickoff + collect photos', d: '20-minute call, logo + photos + towns served. We write the copy and design the home page first.' },
            { w: 'Days 4–10', t: 'Build + review', d: 'All 8 pages on a private preview link. You tap through on your phone and send one punch-list.' },
            { w: 'Days 11–14', t: 'Launch + handover', d: 'Domain, hosting, Google links, training video, and the site live. Tier 2 lifetime support starts here.' },
          ].map((s, i) => (
            <li key={s.t}>
              <GlassPanel className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6" hover>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-500/10 font-mono text-sm font-semibold text-emerald-100" aria-hidden>
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-xs uppercase tracking-widest text-slate-500">{s.w}</p>
                  <h3 className="mt-1 font-semibold text-white">{s.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{s.d}</p>
                </div>
              </GlassPanel>
            </li>
          ))}
        </ol>
      </PageSection>

      {/* Trade + fair terms */}
      <PageSection className="mt-12 sm:mt-16" aria-labelledby="trade-heading">
        <SectionHeading
          id="trade-heading"
          title="Fair trade terms, in plain words"
          description="For the contract you send over — so both sides know exactly what done means."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <GlassPanel className="p-5 sm:p-6" hover>
            <h3 className="font-semibold text-white">Our promise (website side)</h3>
            <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-slate-300">
              <li>— Deliver every item in the breakdown above, working on your phone at launch.</li>
              <li>— Tier 1: fix anything we broke for 30 days free. Tier 2: priority fixes + free updates for life.</li>
              <li>— Hand over all logins, files, and the training video. You own everything.</li>
              <li>— Never hold the site hostage: if the trade ever ends, the site stays 100% yours.</li>
            </ul>
          </GlassPanel>
          <GlassPanel className="p-5 sm:p-6" hover>
            <h3 className="font-semibold text-white">Your side (garden-services side)</h3>
            <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-slate-300">
              <li>— List the gardening services, visit count / cadence, and dates in the contract you send.</li>
              <li>— Tier 1 maps to a defined one-time scope; Tier 2 maps to an ongoing cadence — your call.</li>
              <li>— Third-party costs stay separate: hosting/SSL (paid by you to the provider) is never part of the trade.</li>
              <li>— Either side can propose an end date in the contract; completed work stays completed.</li>
            </ul>
          </GlassPanel>
        </div>
      </PageSection>

      {/* FAQ */}
      <PageSection className="mt-12 sm:mt-16" aria-labelledby="faq-heading">
        <SectionHeading id="faq-heading" title="Quick answers before you sign" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            { q: 'Who owns the website?', a: 'You do — domain, pages, words, and photos. We deliver logins and files in writing at launch.' },
            { q: 'What does “lifetime support” actually mean?', a: 'Text, photo, price, and hours changes, plus new service/town pages and seasonal banners — free, usually within 2 business days, for as long as the site runs on our build.' },
            { q: 'Do you handle Spanish?', a: 'Yes. Key headings and the quote form ship in English + Spanish (“Free Estimates / Estimados Gratis”) so no customer is lost in translation.' },
            { q: 'What if we have no good photos yet?', a: 'Start with phone photos — we lay them out, caption them, and tell you the 10 shots that will win the most calls on the next job.' },
          ].map((f) => (
            <GlassPanel key={f.q} className="p-5 sm:p-6" hover>
              <h3 className="font-semibold text-white">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.a}</p>
            </GlassPanel>
          ))}
        </div>
      </PageSection>

      {/* Final CTA */}
      <PageSection className="mt-12 sm:mt-16" aria-labelledby="final-cta">
        <GlassPanel className="border-emerald-400/25 p-5 sm:p-8" hover>
          <h2 id="final-cta" className="section-title">
            Ready when you are — pick a tier and send the contract.
          </h2>
          <p className="section-desc mt-3">
            Reply with “Tier 1” or “Tier 2” plus your gardening-services scope and dates. Attach this page (or the
            copied text) as the website scope. We sign, and work starts within 3 business days.
          </p>
          <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="mailto:hello@marketmotionagency.com?subject=Gonzalez%20trade%20—%20we%20pick%20a%20tier&body=Hi%20—%20we%20pick%20Tier%20___.%20Attached%20is%20our%20contract%20draft%20with%20the%20gardening-services%20scope.%20Please%20confirm%20the%20website%20breakdown."
              className="btn-primary justify-center px-8"
            >
              Email your tier pick
            </a>
            <Link to="/contact" className="btn-secondary justify-center px-8">
              Ask a question first
            </Link>
            <a href="tel:+19417186278" className="btn-secondary justify-center px-8">
              Call Bulfrano: 941-718-6278
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            Private proposal for Bulfrano Gonzalez Lawn Service, LLC · Market Motion Agency · +1 (484) 241-9067
          </p>
        </GlassPanel>
      </PageSection>
    </PageShell>
  )
}
