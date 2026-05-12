import { Link } from 'react-router-dom'
import { BentoShowcase } from '../components/BentoShowcase'
import { GlassPanel } from '../components/GlassPanel'
import { PageInsightRow, PageJourneyStrip, PageReadGuide } from '../components/PageExplainer'
import { PageIntro } from '../components/PageIntro'
import { PageSection } from '../components/PageSection'
import { PageShell } from '../components/PageShell'
import { bentoWorkItems } from '../site/bentoContent'
import { usePageTitle } from '../hooks/usePageTitle'

const studies = [
  {
    name: 'HelioFleet',
    sector: 'B2B SaaS',
    headline: 'Pipeline velocity without headcount spike',
    stat: '+214% qualified demos',
    detail:
      'Revamped ICP narrative, rebuilt funnel instrumentation, and paired LinkedIn ABM with product-led trials.',
  },
  {
    name: 'Northline Retail',
    sector: 'Ecommerce',
    headline: 'Margin-positive scale on paid social',
    stat: '−31% CPA',
    detail:
      'Creative system + catalog automation; server-side tagging for Meta and GA4 parity.',
  },
  {
    name: 'Lattice Clinic',
    sector: 'Health',
    headline: 'Local dominance with compliant creative',
    stat: '+4.2× impression share',
    detail:
      'HIPAA-aware landing architecture, localized video modules, and search intent clustering.',
  },
]

export function CaseStudiesPage() {
  usePageTitle('Case studies')

  return (
    <PageShell>
      <PageIntro
        kicker="Case studies"
        title="Outcomes over aesthetics—though we deliver both."
        lead="Selected programs where measurement, creative, and engineering shipped as a single surface area."
      />

      <PageSection className="mt-8 sm:mt-10">
        <PageReadGuide
          eyebrow="Case studies · orientation"
          title="How to read the stories below"
          lead="Each row is a compressed program narrative: who we helped, the headline outcome, and the lever we pulled. Use them to sanity-check fit—not as a promise your numbers will match 1:1."
          items={[
            {
              title: 'Sector pill',
              description: 'Gives you instant context for regulatory, sales-cycle, or creative constraints we navigated.',
            },
            {
              title: 'North-star delta',
              description: 'One bold metric we optimized toward—usually pipeline, efficiency, or coverage—not vanity reach.',
            },
            {
              title: 'Detail copy',
              description: 'Plain-language mechanics: what we changed in instrumentation, creative, or ops—not buzzwords.',
            },
          ]}
        />
      </PageSection>

      <PageSection className="mt-10 sm:mt-12">
        <PageInsightRow
          cards={[
            {
              eyebrow: 'Evidence design',
              title: 'We show levers, not logos',
              body: 'Logos age; the thinking behind experiments transfers. That is why each story names systems and decisions.',
            },
            {
              eyebrow: 'UX of trust',
              title: 'Honest ranges beat fake precision',
              body: 'Growth work is noisy. We write deltas you can interrogate—and we welcome a live walkthrough.',
            },
            {
              eyebrow: 'Next step',
              title: 'Stories end with a door',
              body: 'Use the bento below to go deeper: dossiers, clinics, or a working session with your data.',
            },
          ]}
        />
      </PageSection>

      <PageSection className="mt-10 sm:mt-12">
        <PageJourneyStrip
          title="If you want the long version"
          subtitle="What requesting a dossier feels like—no pressure, no mystery inbox."
          steps={[
            {
              phase: 'You send context',
              title: '15-minute async brief',
              body: 'Sector, stack, and the metric that keeps leadership up at night—so we route you to the right strategist.',
            },
            {
              phase: 'We respond',
              title: 'Curated walkthrough',
              body: 'A Loom or live session on the closest analog, redacted where needed, with risks called out explicitly.',
            },
            {
              phase: 'You decide',
              title: 'Scope or no-scope',
              body: 'Clear next step: pilot, audit, or a polite pass with a referral—never a vague “circle back”.',
            },
          ]}
        />
      </PageSection>

      <PageSection className="mt-10 space-y-4 sm:mt-14 sm:space-y-5">
        {studies.map((s) => (
          <GlassPanel key={s.name} className="p-5 sm:p-8" hover>
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-violet-300/90">
                    {s.name}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-slate-400">
                    {s.sector}
                  </span>
                </div>
                <h2 className="mt-4 text-xl font-semibold text-white sm:text-2xl">{s.headline}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">{s.detail}</p>
              </div>
              <div className="shrink-0 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 px-5 py-4 text-left lg:text-right">
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                  North-star delta
                </p>
                <p className="mt-2 text-2xl font-semibold text-cyan-200">{s.stat}</p>
              </div>
            </div>
          </GlassPanel>
        ))}
      </PageSection>

      <BentoShowcase
        items={bentoWorkItems}
        idPrefix="work-bento"
        heading="What happens after you read a story"
        subheading="Pick a next step—dossier, live benchmark session, or the three patterns we repeat for compound growth."
        className="mt-14 sm:mt-20"
      />

      <div className="mt-10 sm:mt-12">
        <Link to="/contact" className="btn-secondary px-6">
          Request the full dossier
        </Link>
      </div>
    </PageShell>
  )
}
