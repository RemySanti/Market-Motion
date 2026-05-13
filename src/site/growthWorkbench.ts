export type SubTabId = 'pages' | 'journeys' | 'design'

export type WorkbenchStep = {
  id: string
  label: string
  preview: {
    eyebrow: string
    title: string
    body: string
    button: string
  }
  panel: {
    headline: string
    paragraph: string
    href: string
    cta: string
  }
}

export type WorkbenchTop = {
  id: string
  label: string
  description: string
  accent: 'cyan' | 'violet' | 'amber'
  steps: WorkbenchStep[]
}

export const WORKBENCH_SUBTABS: { id: SubTabId; label: string }[] = [
  { id: 'pages', label: 'Pages' },
  { id: 'journeys', label: 'Journeys' },
  { id: 'design', label: 'Design' },
]

export const WORKBENCH_TOPS: WorkbenchTop[] = [
  {
    id: 'strategy',
    label: 'Strategy',
    description: 'Get positioning, site structure, and measurement right before you build.',
    accent: 'cyan',
    steps: [
      {
        id: 's1',
        label: 'Start',
        preview: {
          eyebrow: 'Kickoff',
          title: 'Agree on the win that actually matters',
          body: 'We turn leadership intent into numbers people can defend—not vanity metrics.',
          button: 'Plan a strategy call',
        },
        panel: {
          headline: 'Clarity before craft',
          paragraph:
            'Workshops, a clear-eyed look at competitors, and honest analytics baselines so every later choice ties back to revenue or retention.',
          href: '/services/website',
          cta: 'See how we build sites',
        },
      },
      {
        id: 's2',
        label: 'Range',
        preview: {
          eyebrow: 'Scope',
          title: 'Map where your buyer actually goes',
          body: 'Site, ads, social proof, offline touchpoints—one story that holds together.',
          button: 'See channel mix',
        },
        panel: {
          headline: 'A story that spans the funnel',
          paragraph:
            'Channel plans that match how people really research—especially on their phones.',
          href: '/services/seo-ppc',
          cta: 'SEO and PPC',
        },
      },
      {
        id: 's3',
        label: 'Goal',
        preview: {
          eyebrow: 'North star',
          title: 'Pick metrics leadership will stand behind',
          body: 'Cost per lead, pipeline speed, margin by cohort—written down with owners.',
          button: 'Define goals',
        },
        panel: {
          headline: 'Measurement by design',
          paragraph:
            'GA4 events, CRM fields, and offline imports sketched before launch traffic shows up.',
          href: '/contact',
          cta: 'Talk measurement',
        },
      },
      {
        id: 's4',
        label: 'Position',
        preview: {
          eyebrow: 'Market',
          title: 'Carve out a lane you can own',
          body: 'Category language, proof, and answers to objections—baked into copy everyone can reuse.',
          button: 'Review positioning',
        },
        panel: {
          headline: 'Messaging you can ship',
          paragraph:
            'Systems creatives, paid media, and sales can all pull from—without drifting apart.',
          href: '/about',
          cta: 'Meet the team',
        },
      },
      {
        id: 's5',
        label: 'Budget',
        preview: {
          eyebrow: 'Resourcing',
          title: 'Phase spend with learning in mind',
          body: 'Pilot, prove it, then scale—with clear rules for when to stop.',
          button: 'See phasing model',
        },
        panel: {
          headline: 'Growth that respects the budget',
          paragraph:
            'Planning across paid, creative, and engineering so dollars stack instead of scatter.',
          href: '/case-studies',
          cta: 'Read case studies',
        },
      },
      {
        id: 's6',
        label: 'Opt-In',
        preview: {
          eyebrow: 'Launch',
          title: 'Ship the first slice people can trust',
          body: 'Landing page, tracking, and QA in one tight loop—ready for real traffic.',
          button: 'Launch checklist',
        },
        panel: {
          headline: 'Ready when you are',
          paragraph:
            'We get the first measurable slice live quickly, then improve with disciplined experiments.',
          href: '/contact',
          cta: 'Start a project',
        },
      },
    ],
  },
  {
    id: 'systems',
    label: 'Systems',
    description: 'Integrations that fit together—and that you can actually watch and fix.',
    accent: 'violet',
    steps: [
      {
        id: 'y1',
        label: 'Sources',
        preview: {
          eyebrow: 'Data in',
          title: 'Line up events from every platform',
          body: 'Ads, site, CRM, and warehouse—same definitions everywhere.',
          button: 'View schema map',
        },
        panel: {
          headline: 'Pipelines you can rely on',
          paragraph:
            'Sync jobs that can retry, clear alerts, and ops teams who trust the glue between tools.',
          href: '/services/automations',
          cta: 'Automations',
        },
      },
      {
        id: 'y2',
        label: 'Routing',
        preview: {
          eyebrow: 'Logic',
          title: 'Route leads with humans in the loop',
          body: 'Let AI draft; people approve when it matters—especially in regulated spaces.',
          button: 'See routing rules',
        },
        panel: {
          headline: 'People where you need them',
          paragraph:
            'Guardrails for enrichment, scoring, and clean handoffs between marketing and sales.',
          href: '/contact',
          cta: 'Design routing',
        },
      },
      {
        id: 'y3',
        label: 'Automation',
        preview: {
          eyebrow: 'Playbooks',
          title: 'Trigger journeys from real behavior',
          body: 'Lifecycle branches that respect consent and how often you reach out.',
          button: 'Open playbook',
        },
        panel: {
          headline: 'Lifecycle that can grow',
          paragraph:
            'Automation you can audit—not mystery cron jobs no one remembers owning.',
          href: '/services/automations',
          cta: 'Explore automations',
        },
      },
      {
        id: 'y4',
        label: 'QA',
        preview: {
          eyebrow: 'Safety',
          title: 'Try it in shadow before it hits prod',
          body: 'Diffs, dry runs, and rollback paths as part of every deploy.',
          button: 'QA dashboard',
        },
        panel: {
          headline: 'Change you can trust',
          paragraph:
            'Staging that matches production, feature flags, and visibility on every integration release.',
          href: '/case-studies',
          cta: 'Reliability stories',
        },
      },
      {
        id: 'y5',
        label: 'Handoff',
        preview: {
          eyebrow: 'Docs',
          title: 'Runbooks your team keeps',
          body: 'Who to call, how to escalate, dashboards named in plain English.',
          button: 'Read runbook',
        },
        panel: {
          headline: 'Ops that stays clear',
          paragraph:
            'We write things the way an internal platform team would—so knowledge does not walk out the door.',
          href: '/about',
          cta: 'Meet the operators',
        },
      },
      {
        id: 'y6',
        label: 'Results',
        preview: {
          eyebrow: 'Signals',
          title: 'Here is what got better',
          body: 'Latency, errors, and revenue signals in one view for leadership.',
          button: 'View summary',
        },
        panel: {
          headline: 'Proof in the numbers',
          paragraph:
            'Dashboards that connect how systems run to how the business performs—not vanity charts.',
          href: '/case-studies',
          cta: 'See proof',
        },
      },
    ],
  },
  {
    id: 'scale',
    label: 'Scale',
    description: 'Performance loops with room for creative to breathe.',
    accent: 'amber',
    steps: [
      {
        id: 'z1',
        label: 'Baseline',
        preview: {
          eyebrow: 'Benchmark',
          title: 'Start from an honest line in the sand',
          body: 'Search, paid, and lifecycle baselines with attribution you can explain.',
          button: 'Open baseline deck',
        },
        panel: {
          headline: 'Measurement you can stand behind',
          paragraph:
            'Server-side tagging, consent mode, and CRM backfills so tests read clean.',
          href: '/services/seo-ppc',
          cta: 'SEO and PPC',
        },
      },
      {
        id: 'z2',
        label: 'Experiments',
        preview: {
          eyebrow: 'Cadence',
          title: 'Ship a learning rhythm every week',
          body: 'Hypothesis cards, enough sample size, and rules for when to stop.',
          button: 'See experiment board',
        },
        panel: {
          headline: 'Experiments with hygiene',
          paragraph:
            'Structured tests on landing pages, bids, and creative fatigue—not random tweaks.',
          href: '/case-studies',
          cta: 'Case studies',
        },
      },
      {
        id: 'z3',
        label: 'Creative',
        preview: {
          eyebrow: 'Velocity',
          title: 'Modular creative for every placement',
          body: 'Hooks and proof points built once, adapted for each channel.',
          button: 'Preview variants',
        },
        panel: {
          headline: 'Creative as a system',
          paragraph:
            'Photo, video, and social modules lined up to funnel stages and each platform’s safe zones.',
          href: '/services/photo-video',
          cta: 'Photo and video',
        },
      },
      {
        id: 'z4',
        label: 'Spend',
        preview: {
          eyebrow: 'Efficiency',
          title: 'Keep CAC and payback in view',
          body: 'Portfolio rules that ease off when quality slips.',
          button: 'View guardrails',
        },
        panel: {
          headline: 'Scale that stays economical',
          paragraph:
            'Search, social, and lifecycle spend orchestrated around margin—not just volume.',
          href: '/services/social-media',
          cta: 'Social programs',
        },
      },
      {
        id: 'z5',
        label: 'Commerce',
        preview: {
          eyebrow: 'Checkout',
          title: 'Merch and promos without breaking ops',
          body: 'Campaigns that know what is in stock.',
          button: 'See commerce flow',
        },
        panel: {
          headline: 'Stores that survive busy days',
          paragraph:
            'Headless patterns, subscriptions, and fulfillment hooks reviewed with finance.',
          href: '/services/ecommerce',
          cta: 'Ecommerce',
        },
      },
      {
        id: 'z6',
        label: 'Opt-In',
        preview: {
          eyebrow: 'Retention',
          title: 'Turn wins into playbooks',
          body: 'Documented loops your team can run again next quarter.',
          button: 'Download playbook',
        },
        panel: {
          headline: 'Growth that compounds',
          paragraph:
            'We leave you with systems, dashboards, and creative kits—not one-off heroics.',
          href: '/contact',
          cta: 'Grow with us',
        },
      },
    ],
  },
]
