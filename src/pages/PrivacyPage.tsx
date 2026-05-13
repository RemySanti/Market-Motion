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
        lead="What data this demo might touch, how long it could stick around, and how to reach a human. Legal should be as easy to scan as the rest of the site—walls of text hide risk."
      />
      <p className="mt-3 text-sm text-slate-500">Last updated: May 11, 2026</p>

      <PageSection className="mt-8 sm:mt-10">
        <PageReadGuide
          eyebrow="Legal · orientation"
          title="How to use this page"
          lead="Jump to any section. Each one answers a simple question: what we collect, how long we keep it, and who to email."
          items={[
            {
              title: 'Overview',
              description: 'What this demo does today—and what it does not collect while it stays static.',
            },
            {
              title: 'Data we may handle later',
              description: 'A forward-looking list for when you connect forms, analytics, or client workspaces.',
            },
            {
              title: 'Retention and contact',
              description: 'How long things live and where to write if you need help—without hunting through footnotes.',
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
                This demo mostly behaves like a static site: we do not intentionally collect personal data beyond what
                your browser shares with hosting. When you add analytics or forms, list those vendors here and mirror a
                short summary on the contact page so the story stays consistent.
              </p>
            </section>
            <section id="privacy-data" className="scroll-mt-28">
              <h2 className="text-lg font-semibold text-white">Data we may process</h2>
              <p className="mt-3">
                Examples include contact submissions, client workspace activity, billing identifiers, and ad identifiers when
                someone opts in to measurement. In production, pair each type with a short “why we need it” line so consent
                stays informed and readable.
              </p>
            </section>
            <section id="privacy-retention" className="scroll-mt-28">
              <h2 className="text-lg font-semibold text-white">Retention</h2>
              <p className="mt-3">
                Day-to-day logs and CRM records should follow your master agreement. For analytics, match retention to your
                GA4 or Ads settings—say the default plainly and explain how someone can request deletion.
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
