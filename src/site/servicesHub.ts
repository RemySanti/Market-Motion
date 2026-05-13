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
      'Fast, flexible sites with a headless CMS, real speed and accessibility targets in CI, and editor workflows that stay pleasant as you grow.',
  },
  {
    to: '/services/seo-ppc',
    label: 'SEO & PPC',
    eyebrow: 'Demand',
    description:
      'Clear intent maps, disciplined experiments, honest tagging, and dashboards built around decisions—not vanity charts.',
  },
  {
    to: '/services/photo-video',
    label: 'Photo / Video',
    eyebrow: 'Creative ops',
    description:
      'Shoots planned for reuse, native aspect ratios, captions-first motion, and files your DAM and campaigns can actually use.',
  },
  {
    to: '/services/social-media',
    label: 'Social',
    eyebrow: 'Editorial',
    description:
      'Steady cadence, sane approvals, fatigue checks, and community care—so your feed stays human under pressure.',
  },
  {
    to: '/services/ecommerce',
    label: 'Ecommerce',
    eyebrow: 'Commerce UX',
    description:
      'Checkout that holds up in traffic spikes, promos tied to real inventory, and flows that mean fewer “where is my order?” tickets.',
  },
  {
    to: '/services/automations',
    label: 'Automations',
    eyebrow: 'Systems',
    description:
      'Visible connections between CRM, ads, and finance—with runbooks your team can follow when volume spikes.',
  },
]
