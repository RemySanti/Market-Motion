import { SectionHeading } from './SectionHeading'
import { GlowMetricCard } from './ui/GlowMetricCard'
import { GlassProgressCard } from './ui/GlassProgressCard'

export function SignalDesk() {
  return (
    <section className="mt-16 sm:mt-20" data-reveal aria-labelledby="signal-desk-heading">
      <SectionHeading
        className="mb-6 max-w-2xl"
        id="signal-desk-heading"
        title="Live signal desk"
        description="Neon-glass KPIs and a release-style readiness bar—so stakeholders see momentum the way product teams read a console, not a slide deck."
      />
      <div className="grid min-w-0 gap-4 sm:gap-5 lg:grid-cols-2 lg:items-stretch">
        <GlowMetricCard
          label="Conversion rate"
          value={400}
          suffix="%"
          sublabel="Increase vs last month"
        />
        <GlassProgressCard
          title="Launch readiness"
          description="Tagging, consent, creative ratios, and QA gates for your next paid wave—tracked like a release train."
          progress={0.684}
          progressLabel="Checklist completion"
          ctaLabel="Open runbook"
          ctaHref="/contact"
        />
      </div>
    </section>
  )
}
