import { BentoShowcase } from '../components/BentoShowcase'
import { GlassPanel } from '../components/GlassPanel'
import { PageInsightRow, PageJourneyStrip, PageReadGuide } from '../components/PageExplainer'
import { PageIntro } from '../components/PageIntro'
import { PageSection } from '../components/PageSection'
import { PageShell } from '../components/PageShell'
import { bentoAboutItems } from '../site/bentoContent'
import { usePageTitle } from '../hooks/usePageTitle'

export function AboutPage() {
  usePageTitle('About')

  return (
    <PageShell>
      <PageIntro
        kicker="About"
        title="Operators, designers, and engineers in one lane."
        lead="We build growth systems for teams that already ship—then remove friction between marketing, product, and revenue ops."
      />

      <PageSection className="mt-8 sm:mt-10">
        <PageReadGuide
          eyebrow="About · orientation"
          title="How we designed this page for you"
          lead="You are evaluating a partner, not buying a keyword list. Scan principles first, then how we embed with teams—finally the tiles show what “working together” feels like in practice."
          items={[
            {
              title: 'Principles = non-negotiables',
              description:
                'If these feel obvious, good—they are filters. If they feel uncomfortable, that is signal to talk before scopes.',
            },
            {
              title: 'Model cards = day-to-day reality',
              description:
                'How meetings, async updates, and exec readouts work—so you can picture your calendar, not ours.',
            },
            {
              title: 'Bento tiles = next moves',
              description:
                'Each tile is a doorway: benchmarks, clinics, artifacts—pick the depth that matches your stage.',
            },
          ]}
        />
      </PageSection>

      <PageSection className="mt-10 sm:mt-14">
        <PageJourneyStrip
          title="Partnership arc, simplified"
          subtitle="No black-box phases—just the three chapters we repeat with high-trust teams."
          steps={[
            {
              phase: 'Chapter 1',
              title: 'Alignment sprint',
              body: 'Goals, constraints, instrumentation, and creative risk budget—documented so sales, product, and marketing share one vocabulary.',
            },
            {
              phase: 'Chapter 2',
              title: 'Co-built delivery',
              body: 'Designers, engineers, and media specialists ship in the open: shared boards, preview links, and weekly “decision, not deck” reviews.',
            },
            {
              phase: 'Chapter 3',
              title: 'Transferable playbooks',
              body: 'Runbooks, naming, and QA patterns your team can own—we succeed when you do not need us for every tweak.',
            },
          ]}
        />
      </PageSection>

      <PageSection className="mt-10 sm:mt-12">
        <PageInsightRow
          cards={[
            {
              eyebrow: 'User-centric',
              title: 'We design for the next operator',
              body: 'Every deliverable answers “what would a new hire need on day 30?”—labels, links, and owners included.',
            },
            {
              eyebrow: 'Strategic',
              title: 'We privilege decisions over deliverables',
              body: 'Artifacts exist to reduce ambiguity. If a Figma file or dashboard does not change a decision, we cut it.',
            },
            {
              eyebrow: 'Expert UI/UX',
              title: 'Visual hierarchy mirrors cognitive load',
              body: 'Dense information is chunked, contrast is intentional, and motion signals state—never decoration for its own sake.',
            },
          ]}
        />
      </PageSection>

      <PageSection className="mt-10 grid gap-5 sm:mt-14 lg:grid-cols-2 lg:gap-6">
        <GlassPanel className="p-6 sm:p-8" hover>
          <h2 className="text-lg font-semibold text-white">Principles</h2>
          <ul className="mt-6 space-y-4 text-sm text-slate-300">
            <li className="flex gap-3">
              <span className="font-mono text-cyan-400/80">01</span>
              Instrument first—creative and code ship with telemetry.
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-cyan-400/80">02</span>
              Fewer templates, more primitives: reusable UI and campaign modules.
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-cyan-400/80">03</span>
              Security and privacy treated as product features, not footnotes.
            </li>
          </ul>
        </GlassPanel>
        <div className="space-y-4">
          <GlassPanel className="p-6" hover>
            <p className="font-mono text-xs uppercase text-slate-500">Model</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Embedded sprints with your team, async by default, with weekly exec-ready
              readouts—not slide decks for their own sake.
            </p>
          </GlassPanel>
          <GlassPanel className="p-6" hover>
            <p className="font-mono text-xs uppercase text-slate-500">Stack fluency</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Modern JS frameworks, headless CMS, GA4 / Ads data layer, HubSpot / SFDC
              patterns, and custom edge workers when off-the-shelf breaks.
            </p>
          </GlassPanel>
        </div>
      </PageSection>

      <BentoShowcase
        items={bentoAboutItems}
        idPrefix="about-bento"
        heading="How we show up on your roadmap"
        subheading="Focused tiles with clear next steps—same rhythm as the home experience, tuned for credibility."
        className="mt-14 sm:mt-20"
      />
    </PageShell>
  )
}
