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
        title="Designers, engineers, and media folks in one lane."
        lead="We build growth systems for teams that already ship—then we smooth the handoffs between marketing, product, and revenue ops."
      />

      <PageSection className="mt-8 sm:mt-10">
        <PageReadGuide
          eyebrow="About · orientation"
          title="How we laid out this page"
          lead="You are picking a partner, not a keyword list. Skim principles first, then how we embed with teams—the tiles show what working together actually feels like."
          items={[
            {
              title: 'Principles are our guardrails',
              description:
                'If they feel obvious, good—they are filters. If they feel uncomfortable, that is a useful signal to talk before we scope.',
            },
            {
              title: 'Model cards are the day-to-day',
              description:
                'How meetings, async updates, and exec summaries work—so you can picture your calendar, not ours.',
            },
            {
              title: 'Bento tiles are doorways',
              description:
                'Benchmarks, clinics, artifacts—pick the depth that matches where you are right now.',
            },
          ]}
        />
      </PageSection>

      <PageSection className="mt-10 sm:mt-14">
        <PageJourneyStrip
          title="Partnership in three chapters"
          subtitle="No black-box phases—just the story we repeat with teams who want a real partnership."
          steps={[
            {
              phase: 'Chapter 1',
              title: 'Alignment sprint',
              body: 'Goals, constraints, tracking, and creative risk—written down so sales, product, and marketing share one vocabulary.',
            },
            {
              phase: 'Chapter 2',
              title: 'Build together',
              body: 'Designers, engineers, and media folks ship in the open: shared boards, preview links, and weekly “decide something” reviews instead of deck theater.',
            },
            {
              phase: 'Chapter 3',
              title: 'Playbooks you can keep',
              body: 'Runbooks, naming, and QA habits your team can own—we have done our job when you do not need us for every small tweak.',
            },
          ]}
        />
      </PageSection>

      <PageSection className="mt-10 sm:mt-12">
        <PageInsightRow
          cards={[
            {
              eyebrow: 'People first',
              title: 'We design for the next person on call',
              body: 'Every deliverable answers “what would a new teammate need on day 30?”—labels, links, and owners included.',
            },
            {
              eyebrow: 'Decisions over decks',
              title: 'Artifacts exist to reduce ambiguity',
              body: 'If a Figma file or dashboard does not change a decision, we cut it.',
            },
            {
              eyebrow: 'Calm interfaces',
              title: 'Visual hierarchy follows cognitive load',
              body: 'Dense information gets chunked, contrast is intentional, and motion signals state—not decoration for its own sake.',
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
              Measure first—creative and code ship with telemetry you can read.
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-cyan-400/80">02</span>
              Fewer one-off templates, more reusable pieces: UI and campaign modules you can remix.
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-cyan-400/80">03</span>
              Security and privacy treated like product features, not fine print.
            </li>
          </ul>
        </GlassPanel>
        <div className="space-y-4">
          <GlassPanel className="p-6" hover>
            <p className="font-mono text-xs uppercase text-slate-500">Model</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Embedded sprints with your team, async by default, and weekly summaries leadership can skim—not decks for their
              own sake.
            </p>
          </GlassPanel>
          <GlassPanel className="p-6" hover>
            <p className="font-mono text-xs uppercase text-slate-500">Stack fluency</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Modern JavaScript stacks, headless CMS, GA4 and Ads data layers, HubSpot and Salesforce patterns, and custom
              edge workers when off-the-shelf tools run out of road.
            </p>
          </GlassPanel>
        </div>
      </PageSection>

      <BentoShowcase
        items={bentoAboutItems}
        idPrefix="about-bento"
        heading="What it feels like to work with us"
        subheading="Short tiles with honest next steps—same rhythm as the home page, dialed for trust."
        className="mt-14 sm:mt-20"
      />
    </PageShell>
  )
}
