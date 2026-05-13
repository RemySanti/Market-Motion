import { ServiceFrame } from '../../components/ServiceFrame'
import { usePageTitle } from '../../hooks/usePageTitle'
import { automationsNarrative } from '../../site/serviceNarratives'

export function AutomationsServicePage() {
  usePageTitle('Automations')

  return (
    <ServiceFrame
      narrative={automationsNarrative}
      kicker="Service / Automations"
      title="Quiet glue between marketing, sales, and finance."
      lede="Reliable integrations you can observe and roll back—so ops is not afraid of the next automation."
      bullets={[
        'Shared event definitions between CRM, warehouse, and ad platforms.',
        'Human checkpoints where AI drafts and people approve for high-stakes steps.',
        'Runbooks and alerts that on-call teammates can follow—not mystery cron jobs.',
      ]}
      metrics={[
        { label: 'Mean sync latency', value: '<60s' },
        { label: 'Audit trail', value: 'Full' },
      ]}
    />
  )
}
