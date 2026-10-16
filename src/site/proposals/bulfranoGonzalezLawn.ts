/**
 * Proposal content for Bulfrano Gonzalez Lawn Service, LLC.
 *
 * Everything the client reads on the proposal page lives here so scope,
 * tier contents, and trade terms can be edited without touching layout.
 * This document is intended to be attached to the services contract as the
 * written scope of work.
 */

export const proposalMeta = {
  clientName: 'Bulfrano Gonzalez Lawn Service, LLC',
  clientShortName: 'Bulfrano Gonzalez Lawn Service',
  tagline: 'Professional · Reliable · Quality',
  subTagline: 'Complete Landscape Solutions',
  phone: '941-718-6278',
  phoneHref: 'tel:+19417186278',
  email: 'BulfranoGonzalez@iCloud.com',
  emailHref: 'mailto:BulfranoGonzalez@iCloud.com',
  serviceArea: 'Sarasota & Manatee County, FL (941)',
  preparedBy: 'Market Motion Agency',
  preparedByEmail: 'hello@marketmotionagency.com',
  preparedByPhone: '+1 (484) 241-9067',
  preparedByPhoneHref: 'tel:+14842419067',
  version: 'v1 · October 2026',
}

export const clientServices = [
  'Lawn maintenance',
  'Landscape design & installation',
  'Tree & palm care',
  'Irrigation systems',
  'Stone, mulch & clean ups',
]

export const clientTrustBadges = ['Insured', 'Free estimates / Estimados gratis', 'Veteran discounts']

export type SitePage = {
  name: string
  purpose: string
  includes: string[]
}

/** Page-by-page breakdown — the "exactly what you would do on the site" the client asked for. */
export const sitePages: SitePage[] = [
  {
    name: 'Home',
    purpose:
      'The first thing a homeowner sees after a Google search or a flyer. Its only job is to make calling or requesting an estimate obvious within five seconds.',
    includes: [
      'Hero with your logo, "Professional · Reliable · Quality", and a tap-to-call button that works on every phone',
      'Five service tiles that match the flyer exactly (lawn, landscape, tree & palm, irrigation, stone/mulch/clean ups)',
      'Trust strip: Insured · Free Estimates · Veteran Discounts',
      'Short "why us" section and a photo gallery preview',
      '"Request a free estimate" button repeated at the bottom so nobody has to scroll back up',
    ],
  },
  {
    name: 'Services',
    purpose:
      'One section per service so you show up in Google for searches like "palm trimming Sarasota" or "irrigation repair Bradenton," not just your business name.',
    includes: [
      'Lawn maintenance: mowing, edging, trimming, blowing; weekly / bi-weekly options',
      'Landscape design & installation: plantings, beds, sod, hardscape accents',
      'Tree & palm care: trimming, hurricane prep, removal of dead fronds and debris',
      'Irrigation systems: installation, repair, seasonal adjustments and inspections',
      'Stone, mulch & clean ups: deliveries, bed refresh, storm and seasonal cleanups',
      'Each section ends with a "Get a free estimate for this" button',
    ],
  },
  {
    name: 'Our work (gallery)',
    purpose:
      'Lawn and landscape work sells on photos. Before-and-after pairs do more than any paragraph of text.',
    includes: [
      'Mobile-friendly photo grid built from photos you already have on your phone',
      'Before / after side-by-side layout for landscape and clean-up jobs',
      'Easy to add photos later (Tier 2: we add them for you whenever you send them)',
    ],
  },
  {
    name: 'About',
    purpose: 'People hire the person, not the company. A short, honest page about Bulfrano and the crew.',
    includes: [
      'Who you are, how long you have been doing this, and what you will not cut corners on',
      'Insured status and veteran discount called out clearly',
      'Service area list: Sarasota, Bradenton, Lakewood Ranch, Venice, North Port and surrounding areas (we will confirm the exact list with you)',
    ],
  },
  {
    name: 'Free estimate / Estimado gratis',
    purpose:
      'The page every button on the site leads to. Short form, in English and Spanish, that lands in your inbox and phone.',
    includes: [
      'Name, phone, address, which service, and an optional photo upload',
      'Form submissions emailed to BulfranoGonzalez@iCloud.com, with optional text-message alert',
      'Click-to-call and click-to-text buttons for people who would rather not type',
      'Spam protection so you only get real requests',
    ],
  },
  {
    name: 'Reviews',
    purpose: 'Social proof from real customers, pulled from Google so it stays current.',
    includes: [
      'Google reviews embedded or hand-picked quotes with first names',
      'Direct "Leave us a review" link to your Google Business Profile',
    ],
  },
]

export type ScopeGroup = {
  title: string
  items: string[]
}

/** Behind-the-scenes work included in every option. */
export const technicalScope: ScopeGroup[] = [
  {
    title: 'Design & build',
    items: [
      'Custom design using your existing logo, green/navy brand colors and flyer style — no stock template',
      'Mobile-first: most of your customers will open the site from a phone',
      'Fast load times on cellular connections; large photos compressed automatically',
      'Accessible: readable text sizes, high contrast, keyboard and screen-reader friendly',
    ],
  },
  {
    title: 'Content',
    items: [
      'We write all the copy for every page based on a 30–45 minute conversation with you',
      'English first, with Spanish on the estimate page and key buttons (full Spanish version available in Tier 2)',
      'We organize and edit the photos you already have; a professional photo shoot is optional and quoted separately',
    ],
  },
  {
    title: 'Getting found on Google',
    items: [
      'Domain name set up (for example bulfranogonzalezlawn.com) — registered in your name so you always own it',
      'Google Business Profile created or cleaned up and linked to the site',
      'Local SEO basics: page titles, descriptions, service-area pages, and LocalBusiness schema so Google understands what you do and where',
      'Submitted to Google Search Console and a sitemap so pages get indexed',
    ],
  },
  {
    title: 'Launch & handoff',
    items: [
      'Hosting and SSL certificate (the padlock) configured; the site is live on your domain',
      'Google Analytics so you can see how many people visit and tap to call',
      'Short screen-recorded walkthrough showing how the site works and how to request changes',
      'You own the domain, the content, and the code. If we ever part ways, the site goes with you.',
    ],
  },
]

export type TierFeature = {
  label: string
  /** `true` = included, `false` = not included, string = short note (e.g. "30 days"). */
  build: boolean | string
  lifetime: boolean | string
}

export const tierFeatures: TierFeature[] = [
  { label: 'Everything in the page-by-page scope above', build: true, lifetime: true },
  { label: 'Domain, hosting & SSL set up on launch', build: true, lifetime: true },
  { label: 'Google Business Profile setup + local SEO basics', build: true, lifetime: true },
  { label: 'You own the domain, content and code', build: true, lifetime: true },
  { label: 'Bug fixes after launch', build: '30 days', lifetime: 'Lifetime' },
  { label: 'Hosting and SSL renewals paid for', build: 'First year', lifetime: 'Lifetime' },
  { label: 'Content updates (prices, services, photos, promos)', build: false, lifetime: 'Unlimited, free' },
  { label: 'New pages or sections as the business grows', build: false, lifetime: true },
  { label: 'Security, software and dependency updates', build: false, lifetime: true },
  { label: 'Uptime monitoring and fast recovery if the site goes down', build: false, lifetime: true },
  { label: 'Full Spanish version of the site', build: false, lifetime: true },
  { label: 'Seasonal refresh (hurricane prep, spring clean-up promos)', build: false, lifetime: 'Twice a year' },
  { label: 'Quarterly check-in: traffic, calls, what to improve', build: false, lifetime: true },
  { label: 'Turnaround on change requests', build: 'Quoted per request', lifetime: '2 business days' },
]

export type Tier = {
  id: 'build' | 'lifetime'
  name: string
  kicker: string
  summary: string
  /** Shown prominently; the trade equivalent is settled in the contract. */
  tradeNote: string
  highlights: string[]
  recommended?: boolean
}

export const tiers: Tier[] = [
  {
    id: 'build',
    name: 'Option 1 · Website Build',
    kicker: 'One-time project',
    summary:
      'We design, write, build and launch the full site described above, then hand you the keys. Good if you want a finished site and are comfortable handling updates yourself (or hiring someone later).',
    tradeNote: 'Trade equivalent settled in the contract',
    highlights: [
      'All six pages, fully written and designed',
      'Live on your own domain with hosting and SSL for the first year',
      'Google Business Profile and local SEO setup',
      '30 days of bug fixes after launch',
      'Walkthrough video and full ownership handoff',
    ],
  },
  {
    id: 'lifetime',
    name: 'Option 2 · Build + Lifetime Support',
    kicker: 'Recommended',
    summary:
      'Everything in Option 1, plus we stay on as your web team for the life of the business. Send a text with new photos or a price change and it is live within two business days — no invoices for updates, ever.',
    tradeNote: 'Build trade + ongoing seasonal lawn care, settled in the contract',
    highlights: [
      'Everything in Option 1',
      'Free unlimited content updates for life',
      'Hosting, SSL, security and software updates covered',
      'New pages as you add services or crews',
      'Full Spanish version and twice-yearly seasonal refresh',
      'Quarterly check-in on traffic and calls',
    ],
    recommended: true,
  },
]

export type TimelineStep = {
  phase: string
  title: string
  body: string
}

export const timeline: TimelineStep[] = [
  {
    phase: 'Week 1 · Foundation',
    title: 'Kickoff and content',
    body:
      'A 30–45 minute call (in person or phone) to confirm services, service area, pricing approach and the exact wording you want. You send logo files and the photos you already have. We register the domain in your name.',
  },
  {
    phase: 'Week 2 · Build',
    title: 'Design and first draft',
    body:
      'We design the home page first, you approve the look, then we build the remaining pages and write all copy. You get a private preview link to view on your phone.',
  },
  {
    phase: 'Week 3 · Review',
    title: 'Your revisions',
    body:
      'Two rounds of changes are included — wording, photos, colors, ordering. We wire up the estimate form and test that requests land in your inbox and phone.',
  },
  {
    phase: 'Week 4 · Launch',
    title: 'Go live',
    body:
      'Site goes live on your domain with SSL, Google Business Profile linked, analytics running. We record the walkthrough video and hand over all logins.',
  },
  {
    phase: 'Ongoing · Support',
    title: 'Option 2 only',
    body:
      'Text or email us changes whenever you want. Hosting, security updates and monitoring run quietly in the background. We check in every quarter with a one-page summary of visits and calls.',
  },
]

export const tradeTerms = {
  weProvide: [
    'The complete website scope on this page, delivered on the four-week timeline above',
    'Domain registered in your name; all accounts (hosting, Google, analytics) owned by you',
    'For Option 2: ongoing support, updates and hosting for as long as Bulfrano Gonzalez Lawn Service is operating',
  ],
  youProvide: [
    'Lawn and landscape services at an agreed value, schedule and property address — spelled out in your contract',
    'Logo files, existing photos, and roughly one hour of your time for the kickoff call and reviews',
    'Prompt feedback during the two revision rounds so the four-week timeline holds',
  ],
  notIncluded: [
    'Paid advertising (Google Ads, Facebook Ads) and ad spend — can be quoted separately',
    'Professional photography or drone video — quoted separately if you want it',
    'Logo redesign — we use your existing logo as-is',
    'Domain renewal after year one on Option 1 (about $15–20 per year, billed by the registrar to you)',
    'Third-party fees you may choose to add later (for example, paid review or scheduling software)',
  ],
  contractNotes: [
    'You send the contract; we will review and sign within three business days.',
    'This page is attached to the contract as the written scope of work, so both sides are agreeing to the same list.',
    'Either side can request a scope change in writing; nothing changes without both signatures.',
    'If the trade value is uneven in either direction, we settle the difference in additional services or a simple invoice — agreed up front, no surprises.',
  ],
}

export const faq = [
  {
    q: 'What does "lifetime" actually mean?',
    a: 'For as long as Bulfrano Gonzalez Lawn Service is operating and the trade arrangement stays in place, we keep the site hosted, secure and updated at no extra charge. If either side wants out, you keep the site and we hand over everything with 30 days notice.',
  },
  {
    q: 'What counts as a free update?',
    a: 'Anything that changes words, photos, prices, services, hours, service areas, or seasonal promos on existing pages, plus new pages as the business grows. Building a completely different kind of site (an online store, a customer portal) would be a new conversation.',
  },
  {
    q: 'Do I need to know anything technical?',
    a: 'No. You text or email us the change. If you ever want to make edits yourself, we will set up a simple editor and show you how.',
  },
  {
    q: 'Who owns the website?',
    a: 'You do — domain, content, photos, code and all accounts are in your name from day one.',
  },
]
