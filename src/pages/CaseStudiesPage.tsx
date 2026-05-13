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
    headline: 'More qualified demos without hiring a bigger outbound team',
    stat: '+214% qualified demos',
    detail:
      'Sharpened the ICP story, rebuilt funnel tracking end to end, and paired LinkedIn programs with product-led trials so sales had warmer conversations.',
  },
  {
    name: 'Northline Retail',
    sector: 'Ecommerce',
    headline: 'Paid social that scaled without eating margin',
    stat: '−31% CPA',
    detail:
      'Introduced a repeatable creative system and catalog automation, then aligned Meta and GA4 with server-side tagging so reporting finally matched the bank.',
  },
  {
    name: 'Lattice Clinic',
    sector: 'Health',
    headline: 'Local search visibility with creative that respects compliance',
    stat: '+4.2× impression share',
    detail:
      'HIPAA-aware landing patterns, localized video snippets, and search grouped by real patient intent—not generic clinic keywords.',
  },
]

export function CaseStudiesPage() {
  usePageTitle('Case studies')

  return (
    <PageShell>
      <PageIntro
        kicker="Case studies"
        title="Outcomes you can interrogate—creative included."
        lead="A few programs where measurement, storytelling, and engineering shipped as one effort, not three competing workstreams."
      />

      <PageSection className="mt-8 sm:mt-10">
        <PageReadGuide
          eyebrow="Case studies · orientation"
          title="How to read these stories"
          lead="Each card is a short program recap: who we helped, the headline result, and what we actually changed. Use them to see if we think the way you do—not as a promise your numbers will match exactly."
          items={[
            {
              title: 'Industry tag',
              description: 'Quick context for regulation, sales cycle length, or creative constraints we had to respect.',
            },
            {
              title: 'Headline result',
              description: 'One number we aimed at—usually pipeline, efficiency, or coverage—not vanity reach.',
            },
            {
              title: 'What we did',
              description: 'Plain language on tracking, creative, or ops—not a pile of acronyms.',
            },
          ]}
        />
      </PageSection>

      <PageSection className="mt-10 sm:mt-12">
        <PageInsightRow
          cards={[
            {
              eyebrow: 'Evidence',
              title: 'We show the levers, not just logos',
              body: 'Logos fade; the decisions behind experiments stick around. Each story names what we changed and why.',
            },
            {
              eyebrow: 'Honest numbers',
              title: 'Ranges you can ask us about',
              body: 'Growth is noisy. We write results you can poke at in a live walkthrough—no fake decimal precision.',
            },
            {
              eyebrow: 'What is next',
              title: 'Stories end with an open door',
              body: 'Use the tiles below for a deeper packet, a live benchmark session, or time with your actual data.',
            },
          ]}
        />
      </PageSection>

      <PageSection className="mt-10 sm:mt-12">
        <PageJourneyStrip
          title="Want the longer version?"
          subtitle="What asking for a deeper packet feels like—no pressure, no mystery inbox."
          steps={[
            {
              phase: 'You share context',
              title: 'A short async brief',
              body: 'Sector, stack, and the metric that keeps leadership up at night—so we connect you with the right person.',
            },
            {
              phase: 'We respond',
              title: 'A tailored walkthrough',
              body: 'A Loom or live session on the closest analog, redacted where it needs to be, with risks called out plainly.',
            },
            {
              phase: 'You choose',
              title: 'Pilot, audit, or a polite no',
              body: 'Clear next step either way—never a vague “let us circle back.”',
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
                  Key outcome
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
        heading="After you read a story"
        subheading="Pick a depth that matches your week—a written packet, a live benchmark session, or the three patterns we lean on most."
        className="mt-14 sm:mt-20"
      />

      <div className="mt-10 sm:mt-12">
        <Link to="/contact" className="btn-secondary px-6">
          Ask for the deeper packet
        </Link>
      </div>
    </PageShell>
  )
}
