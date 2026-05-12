import { GlassPanel } from '../components/GlassPanel'
import { PageReadGuide } from '../components/PageExplainer'
import { PageIntro } from '../components/PageIntro'
import { PageSection } from '../components/PageSection'
import { PageShell } from '../components/PageShell'
import { usePageTitle } from '../hooks/usePageTitle'

export function PrivacyPage() {
  usePageTitle('Privacy Policy')

  return (
    <PageShell>
      <PageIntro
        kicker="Legal"
        title="Privacy policy"
        lead="This page explains what data this demo experience touches, how long it might live, and who to contact. Legal pages deserve the same scannability as product UI—dense text hides risk."
      />
      <p className="mt-3 text-sm text-slate-500">Last updated: May 11, 2026</p>

      <PageSection className="mt-8 sm:mt-10">
        <PageReadGuide
          eyebrow="Legal · orientation"
          title="How to read this policy"
          lead="Jump to any section below. Each block answers one stakeholder question: what, how long, and who owns follow-ups."
          items={[
            {
              title: 'Overview',
              description: 'High-level framing—what this site does and does not collect in its demo state.',
            },
            {
              title: 'Data we may process',
              description: 'Forward-looking list for when you connect forms, analytics, or client workspaces.',
            },
            {
              title: 'Retention & contact',
              description: 'How long things live and where to email if you need a human—no maze of legalese links.',
            },
          ]}
        />
      </PageSection>

      <PageSection className="mt-8 sm:mt-10">
        <GlassPanel className="p-6 text-left sm:p-8" hover>
          <div className="max-w-none space-y-8 text-sm leading-relaxed text-slate-300">
            <section id="privacy-overview" className="scroll-mt-28">
              <h2 className="text-lg font-semibold text-white">Overview</h2>
              <p className="mt-3">
                This demo site does not collect personal data beyond what your browser normally shares with static hosting.
                When you connect analytics or forms, document those processors here—and surface a short summary on the
                contact page so users see the same story twice, consistently.
              </p>
            </section>
            <section id="privacy-data" className="scroll-mt-28">
              <h2 className="text-lg font-semibold text-white">Data we may process</h2>
              <p className="mt-3">
                Contact submissions, client workspace activity, billing identifiers, and advertising identifiers when you opt
                in to measurement. Pair each bullet with a “why we need it” sentence in production to satisfy informed
                consent patterns.
              </p>
            </section>
            <section id="privacy-retention" className="scroll-mt-28">
              <h2 className="text-lg font-semibold text-white">Retention</h2>
              <p className="mt-3">
                Operational logs and CRM records follow your master agreement. Analytics retention should match your GA4 /
                Ads settings—state the default and how to request deletion.
              </p>
            </section>
            <section id="privacy-contact" className="scroll-mt-28">
              <h2 className="text-lg font-semibold text-white">Contact</h2>
              <p className="mt-3">
                Privacy inquiries:{' '}
                <a className="text-cyan-300 hover:underline" href="mailto:privacy@marketmotionagency.com">
                  privacy@marketmotionagency.com
                </a>
              </p>
            </section>
          </div>
        </GlassPanel>
      </PageSection>
    </PageShell>
  )
}
