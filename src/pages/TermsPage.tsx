import { GlassPanel } from '../components/GlassPanel'
import { PageReadGuide } from '../components/PageExplainer'
import { PageIntro } from '../components/PageIntro'
import { PageSection } from '../components/PageSection'
import { PageShell } from '../components/PageShell'
import { usePageTitle } from '../hooks/usePageTitle'

export function TermsPage() {
  usePageTitle('Terms of Service')

  return (
    <PageShell>
      <PageIntro
        kicker="Legal"
        title="Terms of service"
        lead="Plain-language scaffolding for how engagements work: what is binding here, what lives in your statement of work, and where liability caps live. Have counsel review before you rely on it in production."
      />
      <p className="mt-3 text-sm text-slate-500">Last updated: May 11, 2026</p>

      <PageSection className="mt-8 sm:mt-10">
        <PageReadGuide
          eyebrow="Legal · orientation"
          title="How to use these terms"
          lead="Each section lines up with what executives usually ask before signing: what is covered, how delivery works, where risk is capped, and which law applies."
          items={[
            {
              title: 'Agreement',
              description: 'Separates this marketing demo from a signed statement of work—fewer “but the site said” moments.',
            },
            {
              title: 'Services',
              description: 'Points to the SOW as the real source of truth for deliverables and timelines.',
            },
            {
              title: 'Liability and law',
              description: 'Caps and venue in one place so finance and legal can skim it once.',
            },
          ]}
        />
      </PageSection>

      <PageSection className="mt-8 sm:mt-10">
        <GlassPanel className="p-6 text-left sm:p-8" hover>
          <div className="max-w-none space-y-8 text-sm leading-relaxed text-slate-300">
            <section id="terms-agreement" className="scroll-mt-28">
              <h2 className="text-lg font-semibold text-white">Agreement</h2>
              <p className="mt-3">
                Using this demo means you understand the copy and checkout flows are placeholders. Real work belongs in a
                signed statement of work with signatures, countersigns, and a clear change-order path.
              </p>
            </section>
            <section id="terms-services" className="scroll-mt-28">
              <h2 className="text-lg font-semibold text-white">Services</h2>
              <p className="mt-3">
                Deliverables, milestones, and acceptance criteria live in each engagement’s SOW. SLAs for media or
                automation attach to that document—not to marketing pages alone.
              </p>
            </section>
            <section id="terms-liability" className="scroll-mt-28">
              <h2 className="text-lg font-semibold text-white">Liability</h2>
              <p className="mt-3">
                Where the law allows, liability is capped at fees paid in the twelve months before a claim, except where
                you negotiate different terms for IP indemnity. Put the same cap language in procurement FAQs so it is not a
                late surprise.
              </p>
            </section>
            <section id="terms-law" className="scroll-mt-28">
              <h2 className="text-lg font-semibold text-white">Governing law</h2>
              <p className="mt-3">
                Add your jurisdiction in the production document. This version leaves the legal venue blank on purpose so
                your counsel can pick the right state or country and dispute process.
              </p>
            </section>
          </div>
        </GlassPanel>
      </PageSection>
    </PageShell>
  )
}
