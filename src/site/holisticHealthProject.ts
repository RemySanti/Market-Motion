export const holisticHealthGate = {
  storageKey: 'mm.project.holistic-health.unlocked',
  passwordSha256: 'd4d6184f97968e101e6c0271280db9f84fd22cafa5ee8702326b339dbf73ebad',
} as const

export const packages = [
  {
    name: 'Wellness Package',
    visits: '8 visits',
    detail: 'Eight visits across assigned providers. Minimum bundle size for marketplace launch.',
  },
  {
    name: 'Performance Package',
    visits: '12 visits',
    detail: 'Twelve visits for clients who want a longer care cadence across the same network.',
  },
  {
    name: 'Custom bundles',
    visits: '8+ visits',
    detail: 'Pre-defined packages only at launch. Intake selects from the catalog—not à la carte visits.',
  },
] as const

export const architectureModules = [
  {
    title: 'Intake interface',
    price: '$2–3k',
    body: 'Single-page form for the intake member: customer info, package type, provider assignment, Stripe payment, and order confirmation.',
  },
  {
    title: 'Payment processing',
    price: 'Stripe',
    body: 'Collect the full package payment upfront, store the payment method securely, and generate transaction records.',
  },
  {
    title: 'Provider database',
    price: '$2.5–3.5k',
    body: 'Provider details, package eligibility, rate structures, bank info for payouts, and capacity or availability status.',
  },
  {
    title: 'Split logic engine',
    price: 'Included',
    body: 'Calculates package revenue, assigned providers, each provider’s cut, and which visits have been used or claimed.',
  },
  {
    title: 'Payout system',
    price: '$1.5–2k',
    body: 'ACH transfers to provider bank accounts, payout schedule, history, reconciliation, and 1099 prep for U.S. providers.',
  },
  {
    title: 'Admin dashboard',
    price: '$1.5–2k',
    body: 'Remy’s view of active packages and customers, payouts, allocation adjustments, revenue reporting, and payout status.',
  },
] as const

export const pricingRows = [
  { item: 'Intake form + Stripe payment', range: '$2–3k' },
  { item: 'Provider database + assignment logic', range: '$2.5–3.5k' },
  { item: 'Payout system (ACH)', range: '$1.5–2k' },
  { item: 'Admin dashboard', range: '$1.5–2k' },
  { item: 'Testing, deployment, docs', range: '$1–1.5k' },
] as const

export const addOns = [
  {
    title: 'Provider self-service portal',
    body: 'Providers view payouts and update their own information without backend dashboard access to the marketplace.',
  },
  {
    title: 'Advanced reporting / analytics',
    body: 'Deeper cuts of revenue, utilization, and conversion beyond the core admin dashboard.',
  },
  {
    title: 'Custom branding',
    body: 'Intake and admin surfaces dressed for the holistic health network rather than a generic ops tool.',
  },
  {
    title: 'Automated weekly payouts',
    body: 'Recurring payout schedule instead of manual triggers—daily, weekly, or monthly once the engine is trusted.',
  },
] as const

export const stack = [
  { layer: 'Frontend', value: 'React or Next.js — single intake form interface' },
  { layer: 'Backend', value: 'Node.js + Express or Next.js API routes' },
  { layer: 'Database', value: 'PostgreSQL for customers, providers, packages, and transactions' },
  { layer: 'Payments', value: 'Stripe API + Connect for provider payouts' },
  { layer: 'Hosting', value: 'Vercel for the frontend; Railway or Heroku for a separate backend if needed' },
  { layer: 'Infrastructure', value: 'Can leverage the existing GHL SaaS Pro setup where it is useful' },
] as const

export const metrics = [
  { label: 'Revenue collected', detail: 'Per package type, so the catalog can be priced with evidence.' },
  { label: 'Provider utilization', detail: 'How often assigned practitioners are actually used versus idle.' },
  { label: 'Average payout', detail: 'Per provider, against their rate structure and visit claims.' },
  { label: 'Customer conversion', detail: 'Intake conversations that become paid packages.' },
  { label: 'Payment health', detail: 'Processing errors, failed charges, and chargebacks.' },
] as const

export const scaling = [
  'Provider onboarding portal — self-signup versus manual enrollment.',
  'Customer portal to view remaining visits and book appointments.',
  'Multi-package purchases for the same household or care plan.',
  'Tiered provider rates by experience level.',
  'Marketplace discovery / storefront so customers can browse providers.',
] as const

export const providerFields = [
  'Legal name and contact email / phone',
  'Bank account details (routing + account) or payment method preference',
  'Tax ID / SSN for 1099 generation',
  'Which packages they are eligible for',
  'Their cut per package (amount or percentage)',
  'Max capacity (visits per week or total visits)',
  'Specialties / modalities they offer',
] as const

export const customerFields = [
  'Name, email, phone',
  'Selected package type',
  'Which providers they want assigned',
  'Payment method via Stripe',
] as const
