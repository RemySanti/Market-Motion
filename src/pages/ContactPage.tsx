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
        title="Tell us what winning looks like on paper—not just in a mood board."
        lead="We reply within one business day with a clear next step: a short call, a focused audit, or an intro elsewhere if we are not the right fit."
      />

      <PageSection className="mt-8 sm:mt-10">
        <PageReadGuide
          eyebrow="Contact · orientation"
          title="What you will find here"
          lead="The form gathers what we need to respond well. The column on the right is for anyone who prefers email or phone—or wants to check hours before writing."
          items={[
            {
              title: 'Short fields, clear routing',
              description:
                'Name and email tell us who you are; the objective field tells us who should read first. Bullets are perfect—no essay required.',
            },
            {
              title: 'A real read, even on a demo form',
              description:
                'We look for constraints, risk, and timing so your first reply is useful, not a mail-merge template.',
            },
            {
              title: 'Keep sensitive details out of the box',
              description:
                'Please do not paste passwords, keys, or customer personal data here—we will move you to a secure channel when needed.',
            },
          ]}
        />
      </PageSection>

      <PageSection className="mt-10 sm:mt-12">
        <PageJourneyStrip
          title="What happens after you hit send"
          subtitle="Lightweight, predictable, and kind to your inbox."
          steps={[
            {
              phase: 'Hour 0–24',
              title: 'Someone reads it carefully',
              body: 'We confirm fit, note anything missing, and line up the right follow-up—a call, a small audit, or an intro to another shop.',
            },
            {
              phase: 'Day 1–2',
              title: 'You get a concrete next step',
              body: 'A short note with a few time options, a couple of async questions, or a quick Loom—whatever is fastest for your team.',
            },
            {
              phase: 'If we are not a fit',
              title: 'We still try to help',
              body: 'You will get a straight answer with why, plus a referral or reading list when we can—relationships beat pipeline theater.',
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
                What you are trying to do
              </label>
              <textarea
                id={objectiveId}
                rows={4}
                className="field-input resize-none"
                placeholder="For example: rebuild our marketing site with GA4 and CRM in sync, or bring down cost per lead on branded search."
                name="objective"
              />
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto">
              Send message
            </button>
            <p id={hintId} className="text-xs text-slate-500">
              Demo only: this form does not post anywhere yet—hook up your API or form tool when you are ready.
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
              Monday–Friday, 9:00–14:00 Eastern for live calls. We collaborate async across U.S. time zones the rest of the
              day.
            </p>
          </GlassPanel>
        </div>
      </PageSection>
    </PageShell>
  )
}
