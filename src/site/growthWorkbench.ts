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
    description: 'Positioning, IA, and measurement before build.',
    accent: 'cyan',
    steps: [
      {
        id: 's1',
        label: 'Start',
        preview: {
          eyebrow: 'Kickoff',
          title: 'Align on the win that actually matters',
          body: 'We translate leadership intent into measurable outcomes—not vanity KPIs.',
          button: 'Book a strategy call',
        },
        panel: {
          headline: 'Clarity before craft',
          paragraph:
            'Discovery workshops, competitive scans, and analytics baselines so every later decision traces back to revenue or retention.',
          href: '/services/website',
          cta: 'Explore website systems',
        },
      },
      {
        id: 's2',
        label: 'Range',
        preview: {
          eyebrow: 'Scope',
          title: 'Map the surfaces your buyer touches',
          body: 'Sites, ads, social proof, and offline moments—one coherent story.',
          button: 'See channel mix',
        },
        panel: {
          headline: 'Full-funnel narrative',
          paragraph:
            'Channel architecture that respects how people really research on mobile-first journeys.',
          href: '/services/seo-ppc',
          cta: 'SEO & PPC services',
        },
      },
      {
        id: 's3',
        label: 'Goal',
        preview: {
          eyebrow: 'North star',
          title: 'Pick the metrics execs will defend',
          body: 'CPL, pipeline velocity, margin per cohort—documented and owned.',
          button: 'Define goals',
        },
        panel: {
          headline: 'Instrumentation design',
          paragraph:
            'GA4 events, CRM fields, and offline imports sketched before launch traffic hits.',
          href: '/contact',
          cta: 'Talk measurement',
        },
      },
      {
        id: 's4',
        label: 'Position',
        preview: {
          eyebrow: 'Market',
          title: 'Own a defensible lane',
          body: 'Category language, proof points, and objection handling baked into copy.',
          button: 'Review positioning',
        },
        panel: {
          headline: 'Differentiation you can ship',
          paragraph:
            'Messaging systems that creatives, paid teams, and sales can reuse without drift.',
          href: '/about',
          cta: 'About the team',
        },
      },
      {
        id: 's5',
        label: 'Budget',
        preview: {
          eyebrow: 'Resourcing',
          title: 'Phase spend against learning velocity',
          body: 'Pilot → validate → scale with explicit kill criteria.',
          button: 'See phasing model',
        },
        panel: {
          headline: 'Capital-efficient growth',
          paragraph:
            'Portfolio planning across paid, creative, and engineering so budgets compound.',
          href: '/case-studies',
          cta: 'View case studies',
        },
      },
      {
        id: 's6',
        label: 'Opt-In',
        preview: {
          eyebrow: 'Launch',
          title: 'Ship the first credible slice',
          body: 'Landing, tracking, and QA in one tight loop—ready for traffic.',
          button: 'Launch checklist',
        },
        panel: {
          headline: 'Ready when you are',
          paragraph:
            'We stand up the first measurable slice fast, then iterate with experiment hygiene.',
          href: '/contact',
          cta: 'Start your project',
        },
      },
    ],
  },
  {
    id: 'systems',
    label: 'Systems',
    description: 'Composable integrations with observability.',
    accent: 'violet',
    steps: [
      {
        id: 'y1',
        label: 'Sources',
        preview: {
          eyebrow: 'Data in',
          title: 'Normalize events across platforms',
          body: 'Ads, site, CRM, and warehouse signals with shared contracts.',
          button: 'View schema map',
        },
        panel: {
          headline: 'Reliable pipelines',
          paragraph:
            'Idempotent sync jobs, retries, and alerting so ops trusts the glue—not fears it.',
          href: '/services/automations',
          cta: 'Automations practice',
        },
      },
      {
        id: 'y2',
        label: 'Routing',
        preview: {
          eyebrow: 'Logic',
          title: 'Route leads with human checkpoints',
          body: 'AI drafts, humans approve—especially for regulated industries.',
          button: 'See routing rules',
        },
        panel: {
          headline: 'Human-in-the-loop',
          paragraph:
            'Guardrails for enrichment, scoring, and handoffs between marketing and sales.',
          href: '/contact',
          cta: 'Design routing',
        },
      },
      {
        id: 'y3',
        label: 'Automation',
        preview: {
          eyebrow: 'Playbooks',
          title: 'Trigger journeys off real behavior',
          body: 'Lifecycle branches that respect consent and frequency caps.',
          button: 'Open playbook',
        },
        panel: {
          headline: 'Lifecycle that scales',
          paragraph:
            'Composable automation with audit trails—not mystery cron jobs.',
          href: '/services/automations',
          cta: 'Explore automations',
        },
      },
      {
        id: 'y4',
        label: 'QA',
        preview: {
          eyebrow: 'Safety',
          title: 'Test in shadow before production',
          body: 'Diffs, dry runs, and rollback paths baked into deploys.',
          button: 'QA dashboard',
        },
        panel: {
          headline: 'Change you can trust',
          paragraph:
            'Staging parity, feature flags, and observability for every integration release.',
          href: '/case-studies',
          cta: 'See reliability wins',
        },
      },
      {
        id: 'y5',
        label: 'Handoff',
        preview: {
          eyebrow: 'Docs',
          title: 'Runbooks your team inherits',
          body: 'On-call steps, escalation paths, and dashboards named in plain English.',
          button: 'Read runbook',
        },
        panel: {
          headline: 'Operational clarity',
          paragraph:
            'We document like an internal platform team so knowledge does not walk out the door.',
          href: '/about',
          cta: 'Meet the operators',
        },
      },
      {
        id: 'y6',
        label: 'Results',
        preview: {
          eyebrow: 'Signals',
          title: 'Thank you—here is what improved',
          body: 'Latency, error budgets, and revenue proxies in one exec view.',
          button: 'View summary',
        },
        panel: {
          headline: 'Proof in the metrics',
          paragraph:
            'Dashboards that tie engineering health to commercial outcomes—not vanity charts.',
          href: '/case-studies',
          cta: 'Proof library',
        },
      },
    ],
  },
  {
    id: 'scale',
    label: 'Scale',
    description: 'Performance loops with creative discipline.',
    accent: 'amber',
    steps: [
      {
        id: 'z1',
        label: 'Baseline',
        preview: {
          eyebrow: 'Benchmark',
          title: 'Establish honest starting points',
          body: 'Search, paid, and lifecycle baselines with clean attribution.',
          button: 'Open baseline deck',
        },
        panel: {
          headline: 'Truthful measurement',
          paragraph:
            'Server-side tagging, consent mode, and CRM backfills so experiments read clean.',
          href: '/services/seo-ppc',
          cta: 'SEO & PPC',
        },
      },
      {
        id: 'z2',
        label: 'Experiments',
        preview: {
          eyebrow: 'Cadence',
          title: 'Ship weekly learning cycles',
          body: 'Hypothesis cards, power analysis, and kill criteria upfront.',
          button: 'See experiment board',
        },
        panel: {
          headline: 'Experiment hygiene',
          paragraph:
            'Structured tests across landing, bids, and creative fatigue—not random tweaks.',
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
          body: 'Ratios, hooks, and proofs generated once, deployed everywhere.',
          button: 'Preview variants',
        },
        panel: {
          headline: 'Creative systems',
          paragraph:
            'Photo, video, and social modules aligned to funnel stages and platform safe zones.',
          href: '/services/photo-video',
          cta: 'Photo / video',
        },
      },
      {
        id: 'z4',
        label: 'Spend',
        preview: {
          eyebrow: 'Efficiency',
          title: 'Guardrails on CAC and payback',
          body: 'Portfolio rules that throttle spend when quality drops.',
          button: 'View guardrails',
        },
        panel: {
          headline: 'Economical scale',
          paragraph:
            'Paid search, social, and lifecycle spend orchestrated against margin goals.',
          href: '/services/social-media',
          cta: 'Social programs',
        },
      },
      {
        id: 'z5',
        label: 'Commerce',
        preview: {
          eyebrow: 'Checkout',
          title: 'Merch + promos without breaking ops',
          body: 'Catalog-aware campaigns tied to inventory signals.',
          button: 'See commerce flow',
        },
        panel: {
          headline: 'Ecommerce that survives spikes',
          paragraph:
            'Headless storefront patterns, subscriptions, and fulfillment hooks reviewed with finance.',
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
          body: 'Documented loops your team can rerun next quarter.',
          button: 'Download playbook',
        },
        panel: {
          headline: 'Compounding growth',
          paragraph:
            'We leave you with systems, dashboards, and creative kits—not one-off heroics.',
          href: '/contact',
          cta: 'Scale with us',
        },
      },
    ],
  },
]
