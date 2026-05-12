import { ServiceFrame } from '../../components/ServiceFrame'
import { usePageTitle } from '../../hooks/usePageTitle'
import { websiteNarrative } from '../../site/serviceNarratives'

export function WebsiteServicePage() {
  usePageTitle('Website creation')

  return (
    <ServiceFrame
      narrative={websiteNarrative}
      kicker="Service / Website"
      title="High-performance marketing surfaces—not generic themes."
      lede="We ship composable frontends with editor-friendly content models, edge caching, and CWV budgets enforced in CI."
      bullets={[
        'Design systems in code: tokens, variants, accessibility baked in—not bolted on.',
        'Headless CMS with preview, role-based workflows, and migration playbooks.',
        'Analytics schema + consent layer wired before launch day traffic hits.',
      ]}
      metrics={[
        { label: 'Typical TTFB', value: '<120ms' },
        { label: 'A11y target', value: 'WCAG 2.2 AA' },
      ]}
    />
  )
}
