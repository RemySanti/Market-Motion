import { ServiceFrame } from '../../components/ServiceFrame'
import { usePageTitle } from '../../hooks/usePageTitle'
import { seoPpcNarrative } from '../../site/serviceNarratives'

export function SeoPpcServicePage() {
  usePageTitle('SEO & PPC')

  return (
    <ServiceFrame
      narrative={seoPpcNarrative}
      kicker="Service / SEO & PPC"
      title="Search and paid media that respect your unit economics."
      lede="Structured data, intent clustering, and server-side tagging so your dashboards reflect revenue—not mirages."
      bullets={[
        'Technical SEO: crawl budget, indexation, CWV, and log-file diagnostics.',
        'Google Ads + Microsoft + paid social with experiment discipline and guardrails.',
        'Attribution design: GA4, offline imports, and CRM backfills where needed.',
      ]}
      metrics={[
        { label: 'Experiment cadence', value: 'Biweekly' },
        { label: 'QA depth', value: 'Multi-touch' },
      ]}
    />
  )
}
