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
    title: 'How to read this service page',
    lead: 'We organized this page the way we scope work: what you get, how we ship it, and what “done” looks like in production—not a feature laundry list.',
    items: [
      {
        title: 'Scope column',
        description:
          'The left panel is your delivery checklist. Each line is a production-ready commitment, not marketing filler.',
      },
      {
        title: 'Signals column',
        description:
          'Numbers on the right are targets we design toward (CWV, accessibility). They become gates in your repo and release notes.',
      },
      {
        title: 'Journey below',
        description:
          'The timeline explains sequence—so stakeholders know when content, design, and analytics actually land.',
      },
    ],
  },
  journey: {
    title: 'From blank repo to resilient launch',
    subtitle: 'A simplified delivery map your team can align on in one read—same cadence we use in kickoffs.',
    steps: [
      {
        phase: 'Week 0–1',
        title: 'Blueprint & measurement spine',
        body: 'IA, component inventory, consent + analytics schema, and editor workflows—before visual polish steals attention.',
      },
      {
        phase: 'Week 2–4',
        title: 'Composable build + CMS wiring',
        body: 'Design system in code, preview environments, and migration scripts so launches are reversible, not “big bang”.',
      },
      {
        phase: 'Week 5+',
        title: 'Hardening & handoff',
        body: 'Performance budgets in CI, accessibility sweeps, runbooks for editors, and a punch list tied to business KPIs.',
      },
    ],
  },
  insights: [
    {
      eyebrow: 'UX principle',
      title: 'Editor experience is a first-class surface',
      body: 'If marketing cannot publish safely, velocity dies. We prototype the CMS path as early as the hero layout.',
    },
    {
      eyebrow: 'Systems',
      title: 'One source of truth for content + schema',
      body: 'Structured data, OG tags, and event naming ship together so Search, Social, and CRM narratives stay aligned.',
    },
    {
      eyebrow: 'Risk',
      title: 'Launch without “unknown unknowns”',
      body: 'Canary routes, staged domains, and rollback switches are documented—not improvised the night before go-live.',
    },
  ],
  fit: {
    title: 'Website engagements',
    idealTitle: 'Strong fit',
    ideal: [
      'You need marketing + product surfaces to share a design language.',
      'Performance and accessibility are non-negotiable brand signals.',
      'You want editors empowered without breaking layout or SEO.',
    ],
    caveatTitle: 'Pause if',
    caveats: [
      'You need only a single landing page with no ongoing publishing (we may still help—scope just shrinks).',
      'No owner for analytics/consent decisions—legal and marketing need a named DRI before build week.',
    ],
  },
}

export const seoPpcNarrative: ServiceNarrative = {
  readGuide: {
    title: 'How to read this service page',
    lead: 'Paid and organic should tell one coherent story. This page separates what we instrument, what we ship in creative, and how we govern spend.',
    items: [
      {
        title: 'Scope = playbooks',
        description: 'Each bullet is something we document in writing: naming, audiences, QA, and escalation paths.',
      },
      {
        title: 'Signals = guardrails',
        description: 'Efficiency and coverage metrics are how we keep platforms honest—not vanity dashboards.',
      },
      {
        title: 'Journey = weekly rhythm',
        description: 'Shows the operating cadence your team adopts: ship, learn, reallocate—without thrash.',
      },
    ],
  },
  journey: {
    title: 'Search & paid loop in plain language',
    subtitle: 'What happens after kickoff—so finance and creative both know the drumbeat.',
    steps: [
      {
        phase: 'Discover',
        title: 'Intent map + account hygiene',
        body: 'Keyword / audience clusters, negative lists, conversion definitions, and server-side tagging checks.',
      },
      {
        phase: 'Build',
        title: 'Creative system + landing parity',
        body: 'Modular ads, message match to LP, and experiments sized for statistical sanity—not random toggles.',
      },
      {
        phase: 'Operate',
        title: 'Weekly learning agenda',
        body: 'Budget shifts with narrative notes, search query mining, and CRO tickets fed back to the web team.',
      },
    ],
  },
  insights: [
    {
      eyebrow: 'UX of data',
      title: 'Dashboards people actually open',
      body: 'We design weekly views around decisions: what changed, why it matters, and the next action—three scrolls max.',
    },
    {
      eyebrow: 'Brand safety',
      title: 'Creative fatigue is a product problem',
      body: 'Asset rotation, variant naming, and UTM hygiene reduce silent leakage that makes ROAS look “fine” until it is not.',
    },
    {
      eyebrow: 'Alignment',
      title: 'One glossary for paid + organic',
      body: 'Shared definitions for pipeline stages and “qualified” prevent teams from debating charts instead of customers.',
    },
  ],
  fit: {
    title: 'SEO & PPC engagements',
    idealTitle: 'Strong fit',
    ideal: [
      'You have (or want) clean first-party data feeding decisions.',
      'Creative and media are willing to iterate on a weekly cadence.',
      'You need help translating platform metrics into executive language.',
    ],
    caveatTitle: 'Pause if',
    caveats: [
      'Channels are seen as a shortcut without product/offering readiness—we will flag that early.',
      'No budget for creative refreshes—platforms reward motion; static accounts rarely compound.',
    ],
  },
}

export const photoVideoNarrative: ServiceNarrative = {
  readGuide: {
    title: 'How to read this service page',
    lead: 'Visual work should plug into distribution, not live in a drive folder. This page explains how shoots become reusable modules.',
    items: [
      {
        title: 'Scope = deliverables',
        description: 'Shot lists, ratios, formats, and accessibility of motion (captions, contrast) spelled out up front.',
      },
      {
        title: 'Signals = suitability',
        description: 'Specs reference where assets land—social, site hero, paid—to avoid beautiful footage that cannot ship.',
      },
      {
        title: 'Journey = production → library',
        description: 'How raw becomes tagged, rights-managed, and ready for editors and media buyers.',
      },
    ],
  },
  journey: {
    title: 'From brief to library-ready assets',
    subtitle: 'Designed so marketing, brand, and legal can sign off without endless email chains.',
    steps: [
      {
        phase: 'Pre-pro',
        title: 'Creative platform + shot plan',
        body: 'Moodboard tied to channels, aspect ratios, and caption-first story beats for thumb-stopping clarity.',
      },
      {
        phase: 'Capture',
        title: 'Set disciplined for reuse',
        body: 'Coverage for vertical and horizontal crops, B-roll for paid, and neutral plates for compositing.',
      },
      {
        phase: 'Post',
        title: 'Color, sound, and packaging',
        body: 'Masters, social cuts, and DAM metadata so teams find “the approved hero” in seconds, not Slack archaeology.',
      },
    ],
  },
  insights: [
    {
      eyebrow: 'UX of motion',
      title: 'Silent-first storytelling',
      body: 'Most viewers start muted. We design opening frames and supers so the message lands without sound.',
    },
    {
      eyebrow: 'Accessibility',
      title: 'Captions are design, not compliance dust',
      body: 'Timing, contrast, and line breaks are treated like typography—not auto-generated afterthoughts.',
    },
    {
      eyebrow: 'Ops',
      title: 'Rights you can enforce',
      body: 'Talent releases, music licenses, and usage windows are tracked beside the file—reducing launch risk.',
    },
  ],
  fit: {
    title: 'Photo / video engagements',
    idealTitle: 'Strong fit',
    ideal: [
      'You need a repeatable library for campaigns and site refreshes.',
      'Brand guidelines exist but need translation into motion grammar.',
      'You want fewer one-off shoots and more modular capture days.',
    ],
    caveatTitle: 'Pause if',
    caveats: [
      'No stakeholder for final on-camera approvals—delays compound fast on set days.',
      'Expectations of “viral” without distribution plan—we pair visuals with channel strategy.',
    ],
  },
}

export const socialMediaNarrative: ServiceNarrative = {
  readGuide: {
    title: 'How to read this service page',
    lead: 'Social is a product surface: cadence, creative system, and community care. This page shows how we keep all three coherent.',
    items: [
      {
        title: 'Scope = operating model',
        description: 'What we publish, how we moderate, and how crises escalate—written down, not tribal knowledge.',
      },
      {
        title: 'Signals = quality + velocity',
        description: 'Engagement without guardrails burns trust. We pair growth metrics with sentiment and response SLAs.',
      },
      {
        title: 'Journey = always-on',
        description: 'How ideas move from brief to scheduled posts to learning notes that feed the next sprint.',
      },
    ],
  },
  journey: {
    title: 'Always-on social, calmly run',
    subtitle: 'A calm operating rhythm beats “random acts of posting”—especially for lean teams.',
    steps: [
      {
        phase: 'Systemize',
        title: 'Voice, pillars, and approvals',
        body: 'Editorial matrix, tone ladders, and lightweight legal review paths that do not bottleneck nights and weekends.',
      },
      {
        phase: 'Produce',
        title: 'Modular creative batches',
        body: 'Template families for carousels, shorts, and threads—so designers spend time on ideas, not margins.',
      },
      {
        phase: 'Learn',
        title: 'Weekly retro → next brief',
        body: 'What worked, what to retire, and what the community asked for—fed back to product and support teams.',
      },
    ],
  },
  insights: [
    {
      eyebrow: 'UX writing',
      title: 'Microcopy that survives screenshots',
      body: 'Posts are UI: first lines, CTAs, and link previews are tested like above-the-fold web copy.',
    },
    {
      eyebrow: 'Community',
      title: 'Inbox as brand touchpoint',
      body: 'Saved replies + human nuance for FAQs; escalation paths when sentiment spikes—so brand feels cared for.',
    },
    {
      eyebrow: 'Creative ops',
      title: 'Fatigue is designed away',
      body: 'Rotation rules and variant naming keep Meta/TikTok algorithms fed without burning your storytellers.',
    },
  ],
  fit: {
    title: 'Social engagements',
    idealTitle: 'Strong fit',
    ideal: [
      'You need a sustainable calendar—not one viral spike.',
      'Multiple stakeholders must align on voice and risk.',
      'You want social insights to inform product and site.',
    ],
    caveatTitle: 'Pause if',
    caveats: [
      'No capacity to answer DMs or comments—social without care erodes trust quickly.',
      'Expectations of instant virality without creative runway or media support.',
    ],
  },
}

export const ecommerceNarrative: ServiceNarrative = {
  readGuide: {
    title: 'How to read this service page',
    lead: 'Commerce UX is logistics + persuasion. This page connects what shoppers see with what ops can fulfill—same narrative we use in discovery.',
    items: [
      {
        title: 'Scope = flows',
        description: 'PDP, cart, checkout, and post-purchase—each step has acceptance criteria tied to revenue and support load.',
      },
      {
        title: 'Signals = trust & speed',
        description: 'Core Web Vitals, payment success, and return reasons—so improvements map to money, not opinions.',
      },
      {
        title: 'Journey = launch ladder',
        description: 'How we de-risk replatforms: shadow traffic, staged catalogs, and rollback levers.',
      },
    ],
  },
  journey: {
    title: 'Commerce launches with guardrails',
    subtitle: 'A simplified path from audit to confident scale—especially when SKU counts are high.',
    steps: [
      {
        phase: 'Audit',
        title: 'Friction map + data truth',
        body: 'Checkout drop-offs, inventory sync delays, and promo edge cases—documented with severity and owners.',
      },
      {
        phase: 'Design',
        title: 'Merchandising that respects cognition',
        body: 'Scannable PDPs, honest shipping timelines, and mobile-first payment paths that reduce “almost bought”.',
      },
      {
        phase: 'Scale',
        title: 'Automation without mystery',
        body: 'Tax, promos, and fulfillment webhooks monitored with alerts your ops team can act on—not cryptic logs.',
      },
    ],
  },
  insights: [
    {
      eyebrow: 'UX research',
      title: 'We watch real sessions, not only heatmaps',
      body: 'Replay-informed fixes for form fields, shipping messaging, and sticky CTAs—prioritized by revenue impact.',
    },
    {
      eyebrow: 'Trust design',
      title: 'Policies surfaced at the right moment',
      body: 'Returns and privacy appear when anxiety peaks—reducing support tickets and cart anxiety.',
    },
    {
      eyebrow: 'Ops empathy',
      title: 'Editors cannot break the catalog',
      body: 'Guardrails in CMS + validation rules prevent “small typos” that become costly fulfillment errors.',
    },
  ],
  fit: {
    title: 'Ecommerce engagements',
    idealTitle: 'Strong fit',
    ideal: [
      'You are replatforming or modernizing a catalog-heavy store.',
      'Ops and marketing need shared visibility into promos and inventory.',
      'You want CWV and checkout success treated as KPIs.',
    ],
    caveatTitle: 'Pause if',
    caveats: [
      'No owner for fulfillment rules—checkout UX cannot outrun warehouse reality.',
      'Custom ERP edge cases undocumented—we need the “weird orders” stories early.',
    ],
  },
}

export const automationsNarrative: ServiceNarrative = {
  readGuide: {
    title: 'How to read this service page',
    lead: 'Automation is invisible UX: when it works, teams stop firefighting. This page explains how we design reliable flows—not brittle hacks.',
    items: [
      {
        title: 'Scope = workflows',
        description: 'Triggers, transformations, destinations, and human approvals—each with failure handling spelled out.',
      },
      {
        title: 'Signals = reliability',
        description: 'Latency, error budgets, and replay strategy—so “set and forget” does not become “set and regret”.',
      },
      {
        title: 'Journey = governance',
        description: 'How we document, test, and hand off automations so the next engineer is not guessing.',
      },
    ],
  },
  journey: {
    title: 'Automation that survives turnover',
    subtitle: 'Human-centered ops design: clear logs, owners, and rollback—because tools change, people change.',
    steps: [
      {
        phase: 'Map',
        title: 'Process truth before tools',
        body: 'As-is flows, exception paths, and data definitions—so we do not encode the wrong assumptions in Zapier/n8n/APIs.',
      },
      {
        phase: 'Build',
        title: 'Idempotent, observable pipelines',
        body: 'Retries, dead-letter queues, and structured logs—so support can answer “what happened to this record?”.',
      },
      {
        phase: 'Govern',
        title: 'Runbooks + least privilege',
        body: 'Access reviews, change logs, and test data strategies—so compliance and eng both sleep better.',
      },
    ],
  },
  insights: [
    {
      eyebrow: 'UX for internal teams',
      title: 'Operators see friendly errors',
      body: 'When a sync fails, humans get actionable messages—not stack traces buried in a vendor UI.',
    },
    {
      eyebrow: 'Safety',
      title: 'Humans stay in the loop when stakes are high',
      body: 'Money-moving and customer-impacting steps get approvals and dry runs—by design.',
    },
    {
      eyebrow: 'Future-proofing',
      title: 'Vendor-agnostic where it matters',
      body: 'We document contracts at the data layer so swapping tools does not mean rewriting tribal knowledge.',
    },
  ],
  fit: {
    title: 'Automation engagements',
    idealTitle: 'Strong fit',
    ideal: [
      'You have repetitive CRM ↔ warehouse ↔ finance handoffs.',
      'You want fewer spreadsheet bridges and more audited trails.',
      'You are willing to name owners for exceptions—not only happy paths.',
    ],
    caveatTitle: 'Pause if',
    caveats: [
      'Processes change weekly with no DRI—automation will churn and frustrate.',
      'Expectations of “AI fixes everything” without clean data inputs.',
    ],
  },
}
