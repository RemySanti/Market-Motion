import { ServiceFrame } from '../../components/ServiceFrame'
import { usePageTitle } from '../../hooks/usePageTitle'
import { websiteNarrative } from '../../site/serviceNarratives'

export function WebsiteServicePage() {
  usePageTitle('Website creation')

  return (
    <ServiceFrame
      narrative={websiteNarrative}
      kicker="Service / Website"
      title="Fast marketing sites your team can run—not cookie-cutter themes."
      lede="Composable front ends editors can live in, edge caching, and real budgets for speed and accessibility checked in CI."
      bullets={[
        'Design systems in code: tokens, variants, and accessibility baked in from day one.',
        'Headless CMS with previews, sensible roles, and migration notes you can follow.',
        'Analytics events and consent wired before launch traffic arrives.',
      ]}
      metrics={[
        { label: 'Typical TTFB', value: '<120ms' },
        { label: 'A11y target', value: 'WCAG 2.2 AA' },
      ]}
    />
  )
}
