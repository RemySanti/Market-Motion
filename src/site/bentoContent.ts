export type BentoTone = 'cyan' | 'violet' | 'amber'

export type BentoDecoration = 'social' | 'live' | 'academy'

export type BentoItem = {
  id: string
  title: string
  description: string
  cta: string
  href: string
  tone: BentoTone
  layout: 'compact' | 'wide'
  decoration: BentoDecoration
  /** Optional metric chips for wide layout */
  chips?: { k: string; v: string }[]
}

/** Home — roundtable, clinic, shop / playbooks */
export const bentoHomeItems: BentoItem[] = [
  {
    id: 'community',
    title: 'Market Motion roundtable',
    description:
      'A place for operators to swap real teardowns: messy attribution, Core Web Vitals wins, and creative systems that survived busy seasons.',
    cta: 'Browse the case library',
    href: '/case-studies',
    tone: 'cyan',
    layout: 'compact',
    decoration: 'social',
  },
  {
    id: 'live',
    title: 'Weekly growth clinic',
    description:
      'Mostly async, with a standing live block to unblock ads, funnels, and tracking—no slide-only theater.',
    cta: 'Grab a free spot',
    href: '/contact',
    tone: 'violet',
    layout: 'compact',
    decoration: 'live',
  },
  {
    id: 'academy',
    title: 'Playbooks, merch lab, and launch kits',
    description:
      'Checklists you can reuse, creative modules that travel, and the Motion Carry experiment—things your team keeps after we leave.',
    cta: 'Peek at the lab',
    href: '/shop',
    tone: 'amber',
    layout: 'wide',
    decoration: 'academy',
  },
]

/** About — how we work */
export const bentoAboutItems: BentoItem[] = [
  {
    id: 'embed',
    title: 'We sit with you like a product team',
    description:
      'Shared channels, weekly readouts leadership can skim, and pull requests you can review—so the work lives in your org.',
    cta: 'How we engage',
    href: '/contact',
    tone: 'cyan',
    layout: 'compact',
    decoration: 'social',
  },
  {
    id: 'principles',
    title: 'Principles you can actually check',
    description:
      'Measure before you polish, ship building blocks instead of one-offs, and treat privacy like part of the product—documented every time.',
    cta: 'See how we ship',
    href: '/case-studies',
    tone: 'violet',
    layout: 'compact',
    decoration: 'live',
  },
  {
    id: 'handoff',
    title: 'From first workshop to confident spend',
    description:
      'A steady arc: figure out what is broken, ship composable surfaces, then run experiments with clear stop rules—so growth does not reset every quarter.',
    cta: 'Explore services',
    href: '/services/website',
    tone: 'amber',
    layout: 'wide',
    decoration: 'academy',
  },
]

/** Case studies — next steps */
export const bentoWorkItems: BentoItem[] = [
  {
    id: 'dossier',
    title: 'Ask for the full dossier',
    description:
      'Redacted timelines, simple stack sketches, and before/after numbers for work closest to your world.',
    cta: 'Send a short brief',
    href: '/contact',
    tone: 'cyan',
    layout: 'compact',
    decoration: 'social',
  },
  {
    id: 'workshop',
    title: 'Benchmark workshop',
    description:
      'A working session to pressure-test your funnel, tagging plan, and creative pace against programs we have seen at scale.',
    cta: 'Book a session',
    href: '/contact',
    tone: 'violet',
    layout: 'compact',
    decoration: 'live',
  },
  {
    id: 'patterns',
    title: 'Three patterns we keep coming back to',
    description:
      'Instrumentation before redesign. Creative systems paired with paid. Automation with human checkpoints—patterns you can lift into your roadmap this quarter.',
    cta: 'Follow the playbook path',
    href: '/services/seo-ppc',
    tone: 'amber',
    layout: 'wide',
    decoration: 'academy',
    chips: [
      { k: 'HelioFleet', v: '+214%' },
      { k: 'Northline', v: '−31%' },
      { k: 'Lattice', v: '4.2×' },
    ],
  },
]
