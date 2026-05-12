import { ServiceFrame } from '../../components/ServiceFrame'
import { usePageTitle } from '../../hooks/usePageTitle'
import { socialMediaNarrative } from '../../site/serviceNarratives'

export function SocialMediaServicePage() {
  usePageTitle('Social media')

  return (
    <ServiceFrame
      narrative={socialMediaNarrative}
      kicker="Service / Social"
      title="Editorial systems that keep feeds coherent under velocity."
      lede="Playbooks, approvals, and UGC ingestion—wired to your DAM and performance feedback loops."
      bullets={[
        'Channel strategy with creative fatigue monitoring.',
        'Community workflows with escalation paths and brand voice rubrics.',
        'Influencer / partner programs with contract templates and tracking links.',
      ]}
      metrics={[
        { label: 'Cadence', value: 'Daily+' },
        { label: 'SLA', value: '<2h' },
      ]}
    />
  )
}
