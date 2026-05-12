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
      'Where operators share live teardowns: attribution edge cases, CWV wins, and creative systems that survived scale.',
    cta: 'Join the case library',
    href: '/case-studies',
    tone: 'cyan',
    layout: 'compact',
    decoration: 'social',
  },
  {
    id: 'live',
    title: 'Weekly growth clinic',
    description:
      'Async-first, with a standing live block to unblock ads, funnels, and instrumentation—no slide-only updates.',
    cta: 'Secure your spot for free',
    href: '/contact',
    tone: 'violet',
    layout: 'compact',
    decoration: 'live',
  },
  {
    id: 'academy',
    title: 'Playbooks, merch lab, and launch kits',
    description:
      'Step-by-step checklists, reusable creative modules, and the Motion Carry experiment—tangible artifacts your team keeps.',
    cta: 'Watch the lab',
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
    title: 'Embedded like a product team',
    description:
      'Shared channels, weekly exec readouts, and PRs you can review—so knowledge stays in your org, not a black box.',
    cta: 'See how we engage',
    href: '/contact',
    tone: 'cyan',
    layout: 'compact',
    decoration: 'social',
  },
  {
    id: 'principles',
    title: 'Principles you can audit',
    description:
      'Instrument first, ship primitives not one-offs, and treat privacy as a feature—documented in every engagement.',
    cta: 'Read how we ship',
    href: '/case-studies',
    tone: 'violet',
    layout: 'compact',
    decoration: 'live',
  },
  {
    id: 'handoff',
    title: 'From first workshop to scaled spend',
    description:
      'A repeatable arc: diagnose, build composable surfaces, then run experiments with kill criteria—so growth compounds instead of resetting every quarter.',
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
    title: 'Request a full dossier',
    description:
      'Redacted timelines, stack diagrams, and before/after metrics for programs closest to your industry.',
    cta: 'Start with a brief',
    href: '/contact',
    tone: 'cyan',
    layout: 'compact',
    decoration: 'social',
  },
  {
    id: 'workshop',
    title: 'Benchmark workshop',
    description:
      'A working session to stress-test your funnel, tagging plan, and creative velocity against peers we have seen at scale.',
    cta: 'Book a session',
    href: '/contact',
    tone: 'violet',
    layout: 'compact',
    decoration: 'live',
  },
  {
    id: 'patterns',
    title: 'Three patterns we ship again and again',
    description:
      'Instrumentation before redesign. Creative systems paired with paid. Automation with human approvals—patterns you can lift into your roadmap this quarter.',
    cta: 'View the playbook path',
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
