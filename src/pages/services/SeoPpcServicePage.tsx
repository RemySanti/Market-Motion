import { ServiceFrame } from '../../components/ServiceFrame'
import { usePageTitle } from '../../hooks/usePageTitle'
import { seoPpcNarrative } from '../../site/serviceNarratives'

export function SeoPpcServicePage() {
  usePageTitle('SEO & PPC')

  return (
    <ServiceFrame
      narrative={seoPpcNarrative}
      kicker="Service / SEO & PPC"
      title="Search and paid that respect your unit economics."
      lede="Structured data, intent clusters, and honest tagging so dashboards reflect revenue—not mirages."
      bullets={[
        'Technical SEO that covers crawl health, indexation, Core Web Vitals, and log patterns when it helps.',
        'Google Ads, Microsoft, and paid social with experiment discipline and clear guardrails.',
        'Attribution you can explain: GA4, offline imports, and CRM backfills when the story needs them.',
      ]}
      metrics={[
        { label: 'Experiment cadence', value: 'Biweekly' },
        { label: 'QA depth', value: 'Multi-touch' },
      ]}
    />
  )
}
