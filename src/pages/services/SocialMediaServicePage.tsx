import { ServiceFrame } from '../../components/ServiceFrame'
import { usePageTitle } from '../../hooks/usePageTitle'
import { socialMediaNarrative } from '../../site/serviceNarratives'

export function SocialMediaServicePage() {
  usePageTitle('Social media')

  return (
    <ServiceFrame
      narrative={socialMediaNarrative}
      kicker="Service / Social"
      title="Social calendars that stay human when volume spikes."
      lede="Editorial rhythm, approvals, and community care—connected to your asset library and what performance data says."
      bullets={[
        'Channel plans with a close eye on creative fatigue.',
        'Community workflows with clear escalation paths and a steady voice.',
        'Partner and influencer programs with simple contracts and clean tracking links.',
      ]}
      metrics={[
        { label: 'Cadence', value: 'Daily+' },
        { label: 'SLA', value: '<2h' },
      ]}
    />
  )
}
