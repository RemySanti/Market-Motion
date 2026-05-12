import { ServiceFrame } from '../../components/ServiceFrame'
import { usePageTitle } from '../../hooks/usePageTitle'
import { automationsNarrative } from '../../site/serviceNarratives'

export function AutomationsServicePage() {
  usePageTitle('Automations')

  return (
    <ServiceFrame
      narrative={automationsNarrative}
      kicker="Service / Automations"
      title="Workflow glue between marketing, sales, and finance."
      lede="Idempotent integrations, observability, and rollback-friendly deploys—so ops does not fear the next Zap."
      bullets={[
        'Event contracts between CRM, warehouse, and ad platforms.',
        'Human-in-the-loop steps where AI drafts but humans approve.',
        'Runbooks + alerting: Pager-friendly, not mystery cron jobs.',
      ]}
      metrics={[
        { label: 'Mean sync latency', value: '<60s' },
        { label: 'Audit trail', value: 'Full' },
      ]}
    />
  )
}
