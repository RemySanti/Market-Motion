import { useId } from 'react'
import { GlassPanel } from '../components/GlassPanel'
import { PageJourneyStrip, PageReadGuide } from '../components/PageExplainer'
import { PageIntro } from '../components/PageIntro'
import { PageSection } from '../components/PageSection'
import { PageShell } from '../components/PageShell'
import { usePageTitle } from '../hooks/usePageTitle'

export function ContactPage() {
  usePageTitle('Contact')
  const nameId = useId()
  const emailId = useId()
  const objectiveId = useId()
  const hintId = useId()

  return (
    <PageShell>
      <PageIntro
        kicker="Contact"
        title="Tell us what “good” looks like in metrics—not mood boards."
        lead="We reply within one business day with a concise next step: scoping call, audit, or referral if we are not the right fit."
      />

      <PageSection className="mt-8 sm:mt-10">
        <PageReadGuide
          eyebrow="Contact · orientation"
          title="How this page is laid out (on purpose)"
          lead="The form captures what we need to route you quickly. The column on the right is for humans who prefer direct lines—or want to sanity-check availability before typing."
          items={[
            {
              title: 'Fields map to triage',
              description:
                'Name + email identify you; objective is the signal for which strategist reads first—no essay required, bullets welcome.',
            },
            {
              title: 'Submit = start of service design',
              description:
                'We read for constraints, risk, and urgency—even in a demo form—so you get a useful reply, not a template.',
            },
            {
              title: 'Privacy first',
              description:
                'Do not paste secrets, credentials, or customer PII here; we will invite a secure channel if needed.',
            },
          ]}
        />
      </PageSection>

      <PageSection className="mt-10 sm:mt-12">
        <PageJourneyStrip
          title="What happens after you hit send"
          subtitle="Predictable, lightweight, and respectful of your inbox."
          steps={[
            {
              phase: 'Hour 0–24',
              title: 'Routing + first read',
              body: 'A strategist confirms fit, flags missing context, and assigns the right follow-up—audit, call, or intro to a partner.',
            },
            {
              phase: 'Day 1–2',
              title: 'Concrete next step',
              body: 'You receive a short note with options: time slots, async questions, or a Loom if that is faster for your team.',
            },
            {
              phase: 'If we are not a fit',
              title: 'We still leave you better off',
              body: 'Expect a candid “no” with why, plus a referral or reading list—relationships matter more than pipeline theater.',
            },
          ]}
        />
      </PageSection>

      <PageSection className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-5 lg:gap-8">
        <GlassPanel className="p-5 sm:p-8 lg:col-span-3" hover>
          <form
            className="space-y-5"
            aria-describedby={hintId}
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="text-left">
                <label htmlFor={nameId} className="field-label">
                  Name
                </label>
                <input
                  id={nameId}
                  className="field-input"
                  placeholder="Alex Rivera"
                  autoComplete="name"
                  name="name"
                />
              </div>
              <div className="text-left">
                <label htmlFor={emailId} className="field-label">
                  Work email
                </label>
                <input
                  id={emailId}
                  type="email"
                  className="field-input"
                  placeholder="you@company.com"
                  autoComplete="email"
                  name="email"
                  inputMode="email"
                />
              </div>
            </div>
            <div className="text-left">
              <label htmlFor={objectiveId} className="field-label">
                Objective
              </label>
              <textarea
                id={objectiveId}
                rows={4}
                className="field-input resize-none"
                placeholder="e.g. Rebuild marketing site with GA4 + CRM sync; reduce CPL on branded search."
                name="objective"
              />
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto">
              Send message
            </button>
            <p id={hintId} className="text-xs text-slate-500">
              This demo form does not post to a server—wire your API or form provider here.
            </p>
          </form>
        </GlassPanel>

        <div className="space-y-4 lg:col-span-2">
          <GlassPanel className="p-5 sm:p-6" hover>
            <p className="font-mono text-xs uppercase text-slate-500">Direct</p>
            <a
              href="mailto:hello@marketmotionagency.com"
              className="mt-3 inline-flex min-h-[44px] max-w-full break-words text-sm font-medium text-white hover:text-cyan-200"
            >
              hello@marketmotionagency.com
            </a>
            <a
              href="tel:+14842419067"
              className="mt-2 inline-flex min-h-[44px] items-center text-sm text-slate-400 hover:text-white"
            >
              +1 (484) 241-9067
            </a>
          </GlassPanel>
          <GlassPanel className="p-5 sm:p-6" hover>
            <p className="font-mono text-xs uppercase text-slate-500">Availability</p>
            <p className="mt-3 text-sm text-slate-300">
              Mon–Fri · 9:00–14:00 ET for live calls. Async collaboration across US time zones.
            </p>
          </GlassPanel>
        </div>
      </PageSection>
    </PageShell>
  )
}
