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
        lead="This scaffold explains how engagements work in plain language: what is binding, what varies per SOW, and where liability caps sit. Replace placeholders with counsel-approved copy before production."
      />
      <p className="mt-3 text-sm text-slate-500">Last updated: May 11, 2026</p>

      <PageSection className="mt-8 sm:mt-10">
        <PageReadGuide
          eyebrow="Legal · orientation"
          title="How to read these terms"
          lead="Each section maps to a question executives ask before signing: scope, delivery, risk, and jurisdiction. Use anchors internally when linking from checkout or proposals."
          items={[
            {
              title: 'Agreement',
              description: 'Sets expectations for this demo vs. a signed statement of work—reduces “but the website said…” drift.',
            },
            {
              title: 'Services',
              description: 'Where real work diverges per client—points readers to the SOW as the source of truth.',
            },
            {
              title: 'Liability & law',
              description: 'Caps and venue belong together—finance and legal can scan this block in one pass.',
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
                By using this demo experience you acknowledge placeholder copy and non-binding checkout flows. Production
                deployments require executed statements of work with signatures, countersigns, and change-order rules.
              </p>
            </section>
            <section id="terms-services" className="scroll-mt-28">
              <h2 className="text-lg font-semibold text-white">Services</h2>
              <p className="mt-3">
                Deliverables, milestones, and acceptance criteria are defined per engagement. SLAs for paid media and
                automation runbooks attach to the active SOW—never to marketing pages alone.
              </p>
            </section>
            <section id="terms-liability" className="scroll-mt-28">
              <h2 className="text-lg font-semibold text-white">Liability</h2>
              <p className="mt-3">
                To the maximum extent permitted by law, liability is capped at fees paid in the twelve months preceding the
                claim, excluding indemnities for IP infringement where negotiated. Surface this cap in procurement FAQs so
                it is not a late surprise.
              </p>
            </section>
            <section id="terms-law" className="scroll-mt-28">
              <h2 className="text-lg font-semibold text-white">Governing law</h2>
              <p className="mt-3">
                Specify your jurisdiction in the production document. This scaffold intentionally omits hard legal
                selection so your counsel can drop in the right venue and dispute path.
              </p>
            </section>
          </div>
        </GlassPanel>
      </PageSection>
    </PageShell>
  )
}
