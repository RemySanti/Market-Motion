export const gonzalezClient = {
  legalName: 'Bulfrano Gonzalez Lawn Service, LLC',
  shortName: 'Gonzalez Lawn',
  phoneDisplay: '(941) 718-6278',
  phoneTel: '+19417186278',
  email: 'BulfranoGonzalez@iCloud.com',
  tagline: 'Professional · Reliable · Quality',
  promise: 'Complete landscape solutions',
  proofs: ['Insured', 'Free estimates', 'Veteran discounts'],
} as const

export const agencyContact = {
  name: 'Market Motion Agency',
  email: 'hello@marketmotionagency.com',
  phoneDisplay: '+1 (484) 241-9067',
  phoneTel: '+14842419067',
} as const

export type PitchTierId = 'build' | 'lifetime'

export const pitchTiers: Record<
  PitchTierId,
  {
    id: PitchTierId
    kicker: string
    name: string
    blurb: string
    recommended?: boolean
    includes: string[]
    mailtoSubject: string
  }
> = {
  build: {
    id: 'build',
    kicker: 'Tier 1',
    name: 'Site build',
    blurb:
      'We design, build, and launch the website. You get a finished site plus a 30-day polish window. After that, the files are yours.',
    includes: [
      'Everything in the written site plan below',
      'Mobile-first design using your GG / palm identity',
      'One preview round and one pre-launch round of revisions',
      'Domain, HTTPS, and hosting connected for launch',
      '30 days of bug fixes after go-live',
      'A simple handoff: how to change a phone number or photo if you want to',
    ],
    mailtoSubject: 'Gonzalez Lawn — choose Site Build',
  },
  lifetime: {
    id: 'lifetime',
    kicker: 'Tier 2',
    name: 'Build + lifetime support',
    blurb:
      'The same launch, then we stay on the site. Hosting, security, and free updates for as long as you run this lawn company with us.',
    recommended: true,
    includes: [
      'Everything in Site build',
      'We keep hosting, SSL, backups, and security current',
      'Free updates: photos, hours, prices, seasonal specials, new testimonials, service-list tweaks',
      'Small layout fixes when phones or browsers change',
      'A direct text/email line—no ticket portal',
      'You never have to log into a CMS unless you want to',
    ],
    mailtoSubject: 'Gonzalez Lawn — choose Build + Lifetime Support',
  },
}

export const scopePages = [
  {
    title: 'Home',
    body: 'Hero with your logo and tagline, click-to-call, free-estimate button (English + Estimados Gratis), the five services from your flyer, insured / veteran / free-estimate badges, and a short reason to hire you.',
  },
  {
    title: 'Services',
    body: 'One page for all five offers, plus a clear block for each: Lawn Maintenance, Landscape Design & Installation, Tree & Palm Care, Irrigation Systems, and Stone, Mulch & Clean Ups. Each block explains the job in plain language and sends people to an estimate.',
  },
  {
    title: 'About',
    body: 'Who Bulfrano Gonzalez Lawn Service is, that you are insured, veteran discounts, and the professional / reliable / quality promise—so a new neighbor trusts the name before they call.',
  },
  {
    title: 'Recent work',
    body: 'A photo gallery of real jobs. You send pictures (phone photos are fine). We crop, caption, and lay them out so the work sells itself.',
  },
  {
    title: 'Free estimate',
    body: 'A short form: name, phone, address or city, which service, and an optional photo of the yard. Submissions go to your iCloud email. Same page also shows tap-to-call and tap-to-email.',
  },
  {
    title: 'Service area',
    body: 'Cities and neighborhoods you cover in the 941 area (Sarasota–Bradenton and nearby). We will confirm the list with you before launch so we do not advertise towns you skip.',
  },
] as const

export const scopeAlwaysOn = [
  'Click-to-call on (941) 718-6278, including a sticky call button on phones',
  'Tap-to-email on BulfranoGonzalez@iCloud.com',
  'Bilingual estimate language on the main buttons: Free estimates / Estimados Gratis',
  'Veteran-discount and insured callouts on home and about',
  'Fast load on phones—most lawn customers will find you from Google on a phone in the driveway',
  'Local SEO basics: page titles, Google-friendly text, and LocalBusiness markup so maps and search can read the company',
  'HTTPS, a custom domain (yours, or we help register one), and a preview link you can tap before we go live',
  'A simple privacy note for the estimate form',
] as const

export const scopeNotIncluded = [
  'Paid Google or Facebook ads (we can quote that separately)',
  'A professional photo/video shoot—unless you want to add that to the trade',
  'A brand-new visual identity from scratch (we build from the flyer you already have)',
  'Online payments or a shop',
  'Unlimited extra websites for other businesses',
] as const

export const lifetimeFairUse = [
  'Copy, photos, hours, prices, promo banners, and service-list edits as you need them',
  'Seasonal notes (spring cleanup, hurricane prep, holiday lighting if you offer it)',
  'Bug fixes, SSL, hosting, and backups',
  'Not a weekly brand-new marketing campaign or a full redesign every quarter—if the site needs a new product line or a second brand, we talk first',
] as const

export const timeline = [
  {
    phase: 'Week 1',
    title: 'Kickoff and materials',
    body: 'You send the contract, pick a tier, and share logo, photos, service-area towns, and any reviews you want quoted. We confirm the page list in writing.',
  },
  {
    phase: 'Weeks 2–3',
    title: 'Design and build',
    body: 'You get a private preview link. One round of notes on layout and wording—tap it on your phone the way a customer would.',
  },
  {
    phase: 'Week 4',
    title: 'Polish and launch',
    body: 'Second revision round, connect the domain, test call/email/form, then go live. Site Build includes 30 days of bug fixes from that date.',
  },
] as const

export const youProvide = [
  'A written contract for the trade: your gardening / lawn services in exchange for this website work',
  'Logo file (the flyer art is enough to start)',
  'Photos of completed jobs—phone pictures are welcome',
  'The towns you actually serve, plus hours if you post them',
  'Any reviews or veteran-discount wording you want on the site',
] as const

export const weProvide = [
  'The website work in the tier you choose, as written on this page',
  'Preview links you can open on your phone',
  'Launch on a real domain with HTTPS',
  'A short note you can paste into the contract so both sides match this page',
] as const

export const comparisonRows: { label: string; build: string; lifetime: string }[] = [
  { label: 'Pages, design, and launch', build: 'Included', lifetime: 'Included' },
  { label: 'Two revision rounds before launch', build: 'Included', lifetime: 'Included' },
  { label: '30-day bug-fix window', build: 'Included', lifetime: 'Included' },
  { label: 'Hosting, SSL, and backups after launch', build: 'Handoff — you run it, or we quote', lifetime: 'We run it' },
  { label: 'Copy, photo, hours, and promo updates', build: 'Not included', lifetime: 'Free, ongoing' },
  { label: 'Seasonal specials on the site', build: 'Not included', lifetime: 'Free' },
  { label: 'Direct text/email support', build: 'During the build', lifetime: 'For the life of the company' },
]

export function pitchMailto(tier: PitchTierId) {
  const subject = encodeURIComponent(pitchTiers[tier].mailtoSubject)
  const body = encodeURIComponent(
    `Hi Market Motion,\n\nI'd like to move forward with ${pitchTiers[tier].name} for ${gonzalezClient.legalName}.\n\nI'll send the gardening-services contract next.\n`,
  )
  return `mailto:${agencyContact.email}?subject=${subject}&body=${body}`
}
