import type { InsightCard, JourneyStep, ReadGuideItem } from '../components/PageExplainer'

export type ServiceNarrative = {
  readGuide: { title: string; lead: string; items: ReadGuideItem[] }
  journey: { title: string; subtitle: string; steps: JourneyStep[] }
  insights: InsightCard[]
  fit: {
    title: string
    idealTitle: string
    ideal: string[]
    caveatTitle: string
    caveats: string[]
  }
}

export const websiteNarrative: ServiceNarrative = {
  readGuide: {
    title: 'What this page covers',
    lead:
      'We organized it the way we actually work: what you get, how we roll it out, and what “done” means in production—not a feature laundry list.',
    items: [
      {
        title: 'Delivery list',
        description:
          'The left column is your checklist. Each line is something we ship for real, not filler copy.',
      },
      {
        title: 'Targets',
        description:
          'The numbers on the right are goals we design toward—speed, accessibility—and we often wire them into CI so they stick.',
      },
      {
        title: 'Timeline',
        description:
          'The journey shows order of operations so people know when content, design, and analytics actually land.',
      },
    ],
  },
  journey: {
    title: 'From empty repo to a launch you can trust',
    subtitle: 'A simple map your team can align on in one read—the same rhythm we use in kickoffs.',
    steps: [
      {
        phase: 'Week 0–1',
        title: 'Blueprint and measurement spine',
        body: 'Site structure, component inventory, consent and analytics, and how editors will work—before polish steals all the oxygen.',
      },
      {
        phase: 'Week 2–4',
        title: 'Composable build and CMS wiring',
        body: 'Design system in code, previews, and migration paths so going live feels reversible, not like a one-way door.',
      },
      {
        phase: 'Week 5+',
        title: 'Hardening and handoff',
        body: 'Performance budgets in CI, accessibility passes, editor runbooks, and a punch list tied to the metrics you care about.',
      },
    ],
  },
  insights: [
    {
      eyebrow: 'UX principle',
      title: 'The editor experience matters as much as the hero',
      body: 'If marketing cannot publish safely, nothing ships fast. We prototype the CMS path as early as the first layout.',
    },
    {
      eyebrow: 'Systems',
      title: 'One place for content and structure',
      body: 'Structured data, social previews, and event naming ship together so search, social, and CRM stay on the same story.',
    },
    {
      eyebrow: 'Risk',
      title: 'Launches without nasty surprises',
      body: 'Canary routes, staging domains, and rollback switches get written down—not invented the night before go-live.',
    },
  ],
  fit: {
    title: 'Website engagements',
    idealTitle: 'A great fit when',
    ideal: [
      'Marketing and product surfaces should feel like one brand, not two teams guessing.',
      'Performance and accessibility are part of how you show up, not an afterthought.',
      'You want editors empowered without breaking layout or SEO.',
    ],
    caveatTitle: 'Better to wait if',
    caveats: [
      'You only need a single landing page with almost no ongoing publishing—we can still help; the scope just shrinks.',
      'There is no clear owner for analytics or consent yet—legal and marketing need one named person before build week.',
    ],
  },
}

export const seoPpcNarrative: ServiceNarrative = {
  readGuide: {
    title: 'What this page covers',
    lead:
      'Paid and organic should tell one story. Here is what we measure, what we ship in creative, and how we keep spend under adult supervision.',
    items: [
      {
        title: 'Playbooks',
        description: 'Each bullet becomes something in writing: naming, audiences, QA, and who to call when something breaks.',
      },
      {
        title: 'Guardrails',
        description: 'Efficiency and coverage numbers keep platforms honest—so you are not staring at vanity charts.',
      },
      {
        title: 'Weekly rhythm',
        description: 'The journey is the cadence your team adopts: ship, learn, move budget—without constant thrash.',
      },
    ],
  },
  journey: {
    title: 'The search and paid loop, in plain English',
    subtitle: 'What happens after kickoff—so finance and creative both know the drumbeat.',
    steps: [
      {
        phase: 'Discover',
        title: 'Intent map and account hygiene',
        body: 'Keyword and audience clusters, negatives, conversion definitions, and a quick check that tagging is telling the truth.',
      },
      {
        phase: 'Build',
        title: 'Creative system and landing parity',
        body: 'Modular ads, message match to the page, and experiments sized so we are not flipping coins.',
      },
      {
        phase: 'Operate',
        title: 'Weekly learning agenda',
        body: 'Budget moves with short notes, search query mining, and CRO tickets that feed back to the web team.',
      },
    ],
  },
  insights: [
    {
      eyebrow: 'UX of data',
      title: 'Dashboards people actually open',
      body: 'Weekly views built around decisions: what changed, why it matters, and what to do next—three scrolls, tops.',
    },
    {
      eyebrow: 'Brand safety',
      title: 'Creative fatigue is a product problem',
      body: 'Asset rotation, clear naming, and clean UTMs catch the quiet leakage that makes ROAS look “fine” until it is not.',
    },
    {
      eyebrow: 'Alignment',
      title: 'One glossary for paid and organic',
      body: 'Shared definitions for pipeline stages and “qualified” so teams argue about customers, not charts.',
    },
  ],
  fit: {
    title: 'SEO and PPC engagements',
    idealTitle: 'A great fit when',
    ideal: [
      'You have—or want—clean first-party data behind decisions.',
      'Creative and media can iterate on a weekly cadence.',
      'You want help turning platform metrics into language leadership understands.',
    ],
    caveatTitle: 'Better to wait if',
    caveats: [
      'Channels are treated as a shortcut before the offer is ready—we will say that out loud early.',
      'There is no room in the budget to refresh creative—platforms reward motion; static accounts rarely compound.',
    ],
  },
}

export const photoVideoNarrative: ServiceNarrative = {
  readGuide: {
    title: 'What this page covers',
    lead:
      'Visual work should plug into where it ships, not live in a forgotten drive. This is how shoots turn into reusable building blocks.',
    items: [
      {
        title: 'Deliverables',
        description: 'Shot lists, ratios, formats, and motion accessibility (captions, contrast) spelled out up front.',
      },
      {
        title: 'Where it lands',
        description: 'Specs call out social, site hero, paid, and so on—so nothing is “beautiful but unusable.”',
      },
      {
        title: 'Production to library',
        description: 'How raw footage becomes tagged, rights-managed, and easy for editors and media buyers to find.',
      },
    ],
  },
  journey: {
    title: 'From brief to assets your team can reuse',
    subtitle: 'So marketing, brand, and legal can sign off without endless email chains.',
    steps: [
      {
        phase: 'Pre-pro',
        title: 'Creative direction and shot plan',
        body: 'Mood tied to channels, aspect ratios, and opening frames that read even on a noisy feed.',
      },
      {
        phase: 'Capture',
        title: 'Sets planned for reuse',
        body: 'Coverage for vertical and horizontal crops, B-roll for paid, and neutral plates when we need to composite later.',
      },
      {
        phase: 'Post',
        title: 'Color, sound, and packaging',
        body: 'Masters, social cuts, and DAM metadata so “the approved hero” takes seconds to find, not a Slack archaeology dig.',
      },
    ],
  },
  insights: [
    {
      eyebrow: 'UX of motion',
      title: 'Silent-first storytelling',
      body: 'Most people start muted. We design opening frames and supers so the idea still lands.',
    },
    {
      eyebrow: 'Accessibility',
      title: 'Captions are design, not a checkbox',
      body: 'Timing, contrast, and line breaks get the same care as typography—not a sloppy auto-export.',
    },
    {
      eyebrow: 'Ops',
      title: 'Rights you can actually enforce',
      body: 'Talent releases, music licenses, and usage windows live next to the file—less launch-week panic.',
    },
  ],
  fit: {
    title: 'Photo and video engagements',
    idealTitle: 'A great fit when',
    ideal: [
      'You need a repeatable library for campaigns and site refreshes.',
      'Brand guidelines exist but need a real motion grammar.',
      'You want fewer one-off shoots and more modular capture days.',
    ],
    caveatTitle: 'Better to wait if',
    caveats: [
      'No one can sign off on-camera—delays stack fast on shoot days.',
      'The brief is “go viral” with no distribution plan—we pair visuals with channel strategy.',
    ],
  },
}

export const socialMediaNarrative: ServiceNarrative = {
  readGuide: {
    title: 'What this page covers',
    lead:
      'Social is part product: cadence, creative system, and community care. Here is how we keep all three pointing the same way.',
    items: [
      {
        title: 'Operating model',
        description: 'What we publish, how we moderate, and how rough moments escalate—written down, not tribal knowledge.',
      },
      {
        title: 'Quality and pace',
        description: 'Engagement without guardrails burns trust. We pair growth metrics with sentiment and response times.',
      },
      {
        title: 'Always-on',
        description: 'How ideas move from brief to scheduled posts to notes that feed the next sprint.',
      },
    ],
  },
  journey: {
    title: 'Always-on social, run calmly',
    subtitle: 'A steady rhythm beats random bursts of posting—especially for lean teams.',
    steps: [
      {
        phase: 'Systemize',
        title: 'Voice, pillars, and approvals',
        body: 'Editorial matrix, tone ladders, and light legal paths that do not bottleneck nights and weekends.',
      },
      {
        phase: 'Produce',
        title: 'Modular creative batches',
        body: 'Template families for carousels, shorts, and threads—so designers spend time on ideas, not margins.',
      },
      {
        phase: 'Learn',
        title: 'Weekly retro, then the next brief',
        body: 'What worked, what to retire, and what the community asked for—fed back to product and support.',
      },
    ],
  },
  insights: [
    {
      eyebrow: 'UX writing',
      title: 'Microcopy that survives screenshots',
      body: 'Posts are UI: first lines, CTAs, and link previews get tested like above-the-fold web copy.',
    },
    {
      eyebrow: 'Community',
      title: 'The inbox is a brand moment',
      body: 'Saved replies with room for a human touch; clear escalation when sentiment spikes—so the brand feels cared for.',
    },
    {
      eyebrow: 'Creative ops',
      title: 'Fatigue by design',
      body: 'Rotation rules and variant naming keep algorithms fed without burning out your storytellers.',
    },
  ],
  fit: {
    title: 'Social engagements',
    idealTitle: 'A great fit when',
    ideal: [
      'You need a calendar you can sustain—not one viral spike and silence.',
      'Several stakeholders need to align on voice and risk.',
      'You want social insights to inform product and the site.',
    ],
    caveatTitle: 'Better to wait if',
    caveats: [
      'There is no capacity to answer DMs or comments—social without care erodes trust fast.',
      'The expectation is instant virality with no creative runway or media support.',
    ],
  },
}

export const ecommerceNarrative: ServiceNarrative = {
  readGuide: {
    title: 'What this page covers',
    lead:
      'Commerce is part logistics, part persuasion. This connects what shoppers see with what your team can actually fulfill.',
    items: [
      {
        title: 'Flows',
        description: 'Product page, cart, checkout, and post-purchase—each step has criteria tied to revenue and support load.',
      },
      {
        title: 'Trust and speed',
        description: 'Core Web Vitals, payment success, and return reasons—so improvements map to money, not opinions.',
      },
      {
        title: 'Launch ladder',
        description: 'How we de-risk replatforms: shadow traffic, staged catalogs, and rollback levers.',
      },
    ],
  },
  journey: {
    title: 'Commerce launches with guardrails',
    subtitle: 'From audit to scale—especially when you have a lot of SKUs.',
    steps: [
      {
        phase: 'Audit',
        title: 'Friction map and honest data',
        body: 'Checkout drop-offs, inventory sync delays, and promo edge cases—ranked with owners.',
      },
      {
        phase: 'Design',
        title: 'Merchandising that respects the brain',
        body: 'Scannable product pages, honest shipping timelines, and mobile payment paths that reduce “almost bought.”',
      },
      {
        phase: 'Scale',
        title: 'Automation you can see and fix',
        body: 'Tax, promos, and fulfillment hooks monitored with alerts your ops team can act on—not mystery logs.',
      },
    ],
  },
  insights: [
    {
      eyebrow: 'UX research',
      title: 'We watch real sessions, not only heatmaps',
      body: 'Replay-informed fixes for fields, shipping copy, and sticky CTAs—prioritized by revenue impact.',
    },
    {
      eyebrow: 'Trust design',
      title: 'Policies at the moment anxiety spikes',
      body: 'Returns and privacy show up when people need them—fewer tickets and less cart dread.',
    },
    {
      eyebrow: 'Ops empathy',
      title: 'Editors should not be able to break the catalog',
      body: 'Guardrails in the CMS and validation rules catch “small typos” before they become expensive fulfillment mistakes.',
    },
  ],
  fit: {
    title: 'Ecommerce engagements',
    idealTitle: 'A great fit when',
    ideal: [
      'You are replatforming or modernizing a catalog-heavy store.',
      'Ops and marketing need shared visibility into promos and inventory.',
      'You want site speed and checkout success treated as KPIs.',
    ],
    caveatTitle: 'Better to wait if',
    caveats: [
      'No one owns fulfillment rules—checkout UX cannot outrun warehouse reality.',
      'Custom ERP edge cases are undocumented—we need the “weird orders” stories early.',
    ],
  },
}

export const automationsNarrative: ServiceNarrative = {
  readGuide: {
    title: 'What this page covers',
    lead:
      'Good automation is invisible UX: when it works, people stop firefighting. Here is how we design flows that hold up—not brittle hacks.',
    items: [
      {
        title: 'Workflows',
        description: 'Triggers, transformations, destinations, and human approvals—each with a plan when something fails.',
      },
      {
        title: 'Reliability',
        description: 'Latency, error budgets, and replay strategy—so “set and forget” does not become “set and regret.”',
      },
      {
        title: 'Governance',
        description: 'How we document, test, and hand off so the next person is not guessing.',
      },
    ],
  },
  journey: {
    title: 'Automation that survives turnover',
    subtitle: 'Clear logs, owners, and rollback—because tools change and people change.',
    steps: [
      {
        phase: 'Map',
        title: 'Understand the process before the tool',
        body: 'Current flows, exception paths, and data definitions—so we do not encode the wrong assumptions in APIs or no-code.',
      },
      {
        phase: 'Build',
        title: 'Pipelines you can observe',
        body: 'Retries, dead-letter queues, and structured logs—so support can answer “what happened to this record?”',
      },
      {
        phase: 'Govern',
        title: 'Runbooks and least privilege',
        body: 'Access reviews, change logs, and test data strategies—so compliance and engineering both sleep better.',
      },
    ],
  },
  insights: [
    {
      eyebrow: 'UX for internal teams',
      title: 'Operators see helpful errors',
      body: 'When a sync fails, people get a clear next step—not a stack trace buried five clicks deep in a vendor UI.',
    },
    {
      eyebrow: 'Safety',
      title: 'Humans stay in the loop when it matters',
      body: 'Money-moving and customer-impacting steps get approvals and dry runs on purpose.',
    },
    {
      eyebrow: 'Future-proofing',
      title: 'Vendor-agnostic where it counts',
      body: 'We document contracts at the data layer so swapping tools does not mean rewriting tribal knowledge.',
    },
  ],
  fit: {
    title: 'Automation engagements',
    idealTitle: 'A great fit when',
    ideal: [
      'You have repetitive handoffs between CRM, warehouse, and finance.',
      'You want fewer spreadsheet bridges and clearer audit trails.',
      'You can name owners for exceptions—not only the happy path.',
    ],
    caveatTitle: 'Better to wait if',
    caveats: [
      'The process changes every week with no single owner—automation will churn and frustrate.',
      'The hope is “AI fixes everything” without cleaning up inputs first.',
    ],
  },
}
