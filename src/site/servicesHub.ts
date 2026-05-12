export type ServiceHubItem = {
  to: string
  label: string
  eyebrow: string
  description: string
}

/**
 * Full service catalog for the `/services` hub and desktop mega navigation.
 * Keep blurbs scannable: one line of outcome-focused context per line of business.
 */
export const serviceHubItems: ServiceHubItem[] = [
  {
    to: '/services/website',
    label: 'Website',
    eyebrow: 'Engineering',
    description:
      'Composable frontends, headless CMS, CWV + a11y budgets in CI, and editor workflows that stay fast at scale.',
  },
  {
    to: '/services/seo-ppc',
    label: 'SEO & PPC',
    eyebrow: 'Demand',
    description:
      'Intent maps, experiment discipline, server-side tagging, and dashboards wired to decisions—not vanity charts.',
  },
  {
    to: '/services/photo-video',
    label: 'Photo / Video',
    eyebrow: 'Creative ops',
    description:
      'Modular shoots, channel-native ratios, captions-first motion, and DAM-ready packaging for campaigns.',
  },
  {
    to: '/services/social-media',
    label: 'Social',
    eyebrow: 'Editorial',
    description:
      'Cadence, approvals, fatigue monitoring, and community care—so feeds stay coherent under velocity.',
  },
  {
    to: '/services/ecommerce',
    label: 'Ecommerce',
    eyebrow: 'Commerce UX',
    description:
      'Checkout resilience, promos + inventory truth, and merchandising patterns that reduce support drag.',
  },
  {
    to: '/services/automations',
    label: 'Automations',
    eyebrow: 'Systems',
    description:
      'Observable pipelines between CRM, ads, and finance—with runbooks humans can trust when things spike.',
  },
]
