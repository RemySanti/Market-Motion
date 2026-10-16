export interface ServiceDetail {
  id: string
  title: string
  titleEs: string
  shortDesc: string
  shortDescEs: string
  fullDesc: string
  icon: string
  highlights: string[]
}

export interface DeliverablePhase {
  phase: string
  timeframe: string
  title: string
  summary: string
  deliverables: string[]
}

export interface TierComparisonFeature {
  name: string
  category: 'build' | 'lead-gen' | 'seo' | 'support' | 'trade'
  tier1: boolean | string
  tier2: boolean | string
  tooltip?: string
}

export interface ProposalTier {
  id: 'tier-1' | 'tier-2'
  name: string
  badge?: string
  headline: string
  description: string
  tradeSummary: string
  retailValue: string
  tradeCommitment: string
  recommended?: boolean
  deliverablesList: string[]
  whatBulfranoProvides: string
  whatMarketMotionProvides: string
}

export const bulfranoClientProfile = {
  businessName: 'Bulfrano Gonzalez Lawn Service, LLC',
  ownerName: 'Bulfrano Gonzalez',
  phone: '941-718-6278',
  phoneFormatted: '(941) 718-6278',
  email: 'BulfranoGonzalez@iCloud.com',
  tagline: 'PROFESSIONAL • RELIABLE • QUALITY',
  badgeTagline: 'COMPLETE LANDSCAPE SOLUTIONS',
  primaryLocation: 'Sarasota & Manatee County, Southwest Florida',
  serviceAreas: [
    'Bradenton',
    'Sarasota',
    'Lakewood Ranch',
    'Venice',
    'Palmetto',
    'Ellenton',
    'Parrish',
  ],
  credentials: [
    { label: 'Fully Licensed & Insured', icon: 'shield' },
    { label: 'Free Estimates / Estimados Gratis', icon: 'clipboard' },
    { label: 'Veteran Discounts', icon: 'medal' },
  ],
  originalClientMessage:
    'Good morning. If we’re going to trade work for a website, please provide a written breakdown of exactly what you would do on the site so I can review it. We can then draw up a contract—which I’ll send over—to ensure we’re both in agreement: I’ll provide the gardening services, and you’ll handle the website work.',
}

export const bulfranoServices: ServiceDetail[] = [
  {
    id: 'lawn-maintenance',
    title: 'Lawn Maintenance',
    titleEs: 'Mantenimiento de Césped',
    shortDesc: 'Precision mowing, string trimming, crisp edging, and full debris clean-off.',
    shortDescEs: 'Corte de césped con precisión, orillado limpio y soplado completo.',
    fullDesc:
      'Scheduled residential and commercial turf care keeping lawns manicured year-round. Includes sharp blade mowing at optimal Florida turf height (St. Augustine, Zoysia, Bahia), hard-edge weed-eating along sidewalks and driveways, and thorough blow-down of all hardscapes.',
    icon: 'grass',
    highlights: [
      'Rotary mowing tailored to Florida grass varieties',
      'Vertical sidewalk & driveway border edging',
      'Fence line & foundation weed-whacking',
      'Complete power blowing of all patios & walkways',
    ],
  },
  {
    id: 'landscape-design',
    title: 'Landscape Design & Installation',
    titleEs: 'Diseño e Instalación de Jardines',
    shortDesc: 'Custom plant layouts, fresh sod replacement, and tropical Florida curb appeal.',
    shortDescEs: 'Diseño paisajístico, reemplazo de césped e instalación de plantas tropicales.',
    fullDesc:
      'End-to-end landscape transformations from bare dirt or overgrown beds to resort-style outdoor living. We handle sod cut-out, soil amendment, new pallet installation (Floratam, Empire Zoysia), tropical accent plants, and decorative border curbing.',
    icon: 'shears',
    highlights: [
      'Fresh sod delivery and precision installation',
      'Drought-tolerant Florida native & tropical plantings',
      'Bed reshaping, trench edging, and weed barrier install',
      'Curb appeal enhancements for HOA compliance',
    ],
  },
  {
    id: 'tree-palm-care',
    title: 'Tree & Palm Care',
    titleEs: 'Cuidado de Palmeras y Árboles',
    shortDesc: 'Palm trimming, frond thinning, seed pod removal, and hurricane storm prep.',
    shortDescEs: 'Poda de palmeras, eliminación de hojas secas y preparación para huracanes.',
    fullDesc:
      'Specialized Florida palm tree pruning and tree trimming. Removing dead fronds, heavy seed pods, and hanging boots from Sabal Palms, Queen Palms, Sylvester Palms, and Washingtonias. Critical pre-storm hurricane season thinning to protect roofing and fences.',
    icon: 'palm',
    highlights: [
      'Safety-first palm frond and seed pod removal',
      'Trunk boot skinning and clean shaping',
      'Pre-hurricane canopy lifting and wind-resistance pruning',
      'Ground chipping and haul-away cleanup',
    ],
  },
  {
    id: 'irrigation-systems',
    title: 'Irrigation Systems',
    titleEs: 'Sistemas de Riego',
    shortDesc: 'Sprinkler head replacement, timer programming, and complete zone inspection.',
    shortDescEs: 'Reparación de aspersores, programación de temporizadores e inspección de zonas.',
    fullDesc:
      'Diagnostic testing and repair of in-ground sprinkler networks. We locate hidden leaks, fix broken pop-up spray heads and rotary rotors, adjust coverage arcs so water hits grass instead of driveways, and calibrate rain sensors and smart Wi-Fi timers.',
    icon: 'sprinkler',
    highlights: [
      'Full-system pressure and coverage audit',
      'Pop-up head and rotary rotor replacement',
      'Rain sensor testing & seasonal timer scheduling',
      'Dry-spot elimination and pipe repair',
    ],
  },
  {
    id: 'stone-mulch-cleanups',
    title: 'Stone, Mulch & Clean Ups',
    titleEs: 'Piedra, Mantillo y Limpiezas',
    shortDesc: 'Premium pine bark/dyed mulch, river rock beds, and seasonal property cleanups.',
    shortDescEs: 'Instalación de mantillo (mulch), piedra de río y limpieza estacional.',
    fullDesc:
      'Weed barrier fabric installation topped with premium shredded mulch (dark brown, black, cypress, or pine bark) or decorative stone (egg rock, river gravel, crushed marble). Complete spring and post-storm cleanup removing brush, fallen branches, and leaves.',
    icon: 'stone',
    highlights: [
      'Depth-controlled mulch application for moisture retention',
      'Decorative river rock and gravel bed installation',
      'Post-storm branch, leaf, and yard waste clearing',
      'Commercial debris hauling and recycling',
    ],
  },
]

export const proposalTiers: ProposalTier[] = [
  {
    id: 'tier-1',
    name: 'Tier 1: Complete Website Build',
    badge: 'Foundation Trade',
    headline: 'High-Converting Custom Website, Fully Built & Launched',
    description:
      'A complete, turnkey marketing website custom engineered for Bulfrano Gonzalez Lawn Service, LLC. Designed to turn local Florida homeowners into steady, high-paying residential and commercial accounts.',
    tradeSummary:
      'One-time website build & launch in exchange for an agreed schedule of gardening/lawn maintenance services.',
    retailValue: '$3,500 One-Time Value',
    tradeCommitment: 'Fixed schedule of gardening care (e.g., bi-weekly visits over an agreed term)',
    recommended: false,
    deliverablesList: [
      'Custom modern web design built around the GG Palm & Turf logo branding',
      'Mobile-first responsive architecture (optimized for 97% of local mobile queries)',
      'Instant Click-to-Call (941) 718-6278 & tap-to-email on every page',
      'Bilingual English / Spanish toggle ("Estimados Gratis / Free Estimates")',
      '5 dedicated service showcases for all core specialties with Florida-specific copy',
      'Interactive Before & After photo showcase for lawn, palm, and mulch jobs',
      'High-converting 3-step Free Estimate request form routing straight to email/SMS',
      'Local SEO setup targeting Sarasota, Bradenton, Lakewood Ranch, and Venice',
      'Google Maps embed & Google Business Profile linking',
      'Trust badges: Licensed & Insured, Free Estimates, Veteran Discounts',
      'Ultra-fast cloud edge hosting deployment with free SSL security certificate',
      '30-day post-launch warranty, basic maintenance guide, and 100% code ownership',
    ],
    whatBulfranoProvides:
      'Professional gardening and lawn maintenance visits for Market Motion according to an agreed schedule until the trade value balance is satisfied.',
    whatMarketMotionProvides:
      'Complete end-to-end website design, custom code development, content writing, photo optimization, search engine optimization, and live launch.',
  },
  {
    id: 'tier-2',
    name: 'Tier 2: Build + Lifetime Support & Free Updates',
    badge: 'VIP Partnership Trade',
    headline: 'Complete Build + Perpetual Hosting & Free Lifetime Updates',
    description:
      'The ultimate zero-hassle partnership. You get the complete custom website PLUS you never pay a dime for hosting, and whenever you need photo updates, seasonal promos, or price tweaks, we handle it free for life.',
    tradeSummary:
      'Ongoing mutual partnership: Ongoing regular lawn & garden care in exchange for ongoing, worry-free website hosting, maintenance, and lifetime free updates.',
    retailValue: '$6,500+ Value ($3,500 build + $1,200/yr ongoing webmaster care)',
    tradeCommitment: 'Ongoing recurring gardening & lawn care relationship',
    recommended: true,
    deliverablesList: [
      'EVERYTHING INCLUDED IN TIER 1 (complete custom website build & launch)',
      'Lifetime Cloud Edge Hosting Included ($0 server or hosting bills for Bulfrano forever)',
      'Unlimited Free Photo & Project Updates: Snap photos on your phone, text or email them to us, and we format and publish them to your live gallery within 24–48 hours',
      'Quarterly Seasonal Campaign Refreshes: Spring mulch rush (Feb–Apr), Hurricane palm trimming prep (May–Jul), Rainy-season irrigation checks (Aug–Oct), Winter cleanups (Nov–Jan)',
      'Free Unlimited Content & Price Changes: Update phone numbers, service offerings, pricing, or crew info on demand',
      'Continuous Local SEO & Google Search Ranking Stewardship to keep Bulfrano at the top of Sarasota/Manatee searches',
      'VIP Priority Support Line: Direct text/call line with same-day turnaround on website updates',
      'Zero-Hassle Tech Guarantee: Security patches, browser updates, and domain renewals handled proactively without you lifting a finger',
      'Google Review Acceleration Strategy & custom QR code review flyer for your trucks',
    ],
    whatBulfranoProvides:
      'Ongoing, regular gardening and lawn maintenance care for Market Motion (e.g. bi-weekly in peak growing season, monthly in dry winter) to keep property pristine.',
    whatMarketMotionProvides:
      'Complete custom website build, ongoing cloud hosting coverage, unlimited lifetime updates, seasonal marketing refreshes, priority tech support, and continuous local search growth.',
  },
]

export const phaseBreakdown: DeliverablePhase[] = [
  {
    phase: 'Phase 1',
    timeframe: 'Days 1–3',
    title: 'Brand Vectorization & Asset Intake',
    summary:
      'We extract, sharpen, and digitize your brand identity so your online presence looks like a top-tier regional enterprise.',
    deliverables: [
      'High-resolution vectorization of the GG Palm & Turf circular monogram logo',
      'Color palette mapping: Vibrant Florida Lawn Green, Deep Gulf Coast Navy, and Crisp Clean White',
      'Collection and curation of your job site photos (fresh sod, trimmed palms, mulch beds, equipment)',
      'Verification of insurance credentials, veteran discount details, and service boundary radius',
      'Direct contact route mapping to (941) 718-6278 and BulfranoGonzalez@iCloud.com',
    ],
  },
  {
    phase: 'Phase 2',
    timeframe: 'Days 4–7',
    title: 'Mobile-First UX Architecture & Bilingual Copywriting',
    summary:
      '97% of Florida homeowners looking for lawn care browse on their phones. We build thumb-first with bilingual accessibility.',
    deliverables: [
      'Mobile-first responsive wireframes featuring persistent "Call (941) 718-6278" floating action button',
      'Bilingual English / Spanish content architecture for all 5 core service offerings',
      'Localized persuasive copywriting emphasizing "Reliable, Professional, Insured, Free Estimates"',
      'Interactive Before / After comparison gallery component to showcase real landscape results',
      'Low-friction Free Estimate intake form (Address, Service Needed, Best Phone Number)',
    ],
  },
  {
    phase: 'Phase 3',
    timeframe: 'Days 8–12',
    title: 'Custom Engineering & Performance Optimization',
    summary:
      'Engineered with modern web standards (React + Vite) instead of slow, bloated WordPress templates that get hacked.',
    deliverables: [
      'Ultra-fast load times (sub-100ms) with 100/100 Google Core Web Vitals score',
      'Fully responsive layouts for iPhone, Android, iPad, and desktop computers',
      'Accessible, high-contrast typography compliant with modern web accessibility guidelines',
      'Interactive service filter and instant estimate calculator preview',
      'Lead form spam filtering and instantaneous email/SMS notification dispatch',
    ],
  },
  {
    phase: 'Phase 4',
    timeframe: 'Days 13–15',
    title: 'Local SEO, Google Maps & Area Code 941 Domination',
    summary:
      'Ensuring that homeowners searching in Bradenton, Sarasota, and Lakewood Ranch find Bulfrano before the competition.',
    deliverables: [
      'Structured LocalBusiness Schema.org code embedding your phone, email, and service radius',
      'Geo-targeted keyword optimization (e.g. "Bradenton lawn mowing", "Sarasota palm tree trimming", "Lakewood Ranch mulch installation")',
      'Interactive Google Maps embed highlighting your primary Florida service territory',
      'Integration of 5-star Google review snippets to build instant trust with new homeowners',
      'Social media preview cards (OpenGraph tags) so links shared via text or Facebook look stunning',
    ],
  },
  {
    phase: 'Phase 5',
    timeframe: 'Days 16–19',
    title: 'Review, Polish & Live Production Launch',
    summary:
      'We send you a private staging link to review on your smartphone, make any requested adjustments, and take the site live.',
    deliverables: [
      'Private preview link sent to Bulfrano to test on his phone before anyone else sees it',
      '1 round of revisions incorporated within 24 hours',
      'Domain name connection & DNS routing to secure cloud edge infrastructure',
      'Free SSL security certificate installed (https padlock in browser address bar)',
      'Live test calls and test quote submissions to confirm 100% deliverability to your inbox',
    ],
  },
  {
    phase: 'Phase 6 (Tier 2)',
    timeframe: 'Ongoing / Lifetime',
    title: 'Lifetime Support, Seasonal Updates & Unlimited Photo Ingestion',
    summary:
      'Exclusive to Tier 2: Ongoing management that keeps your site fresh, secure, and competitive for years to come.',
    deliverables: [
      '100% Free Cloud Edge Hosting covered by Market Motion ($0 server bills forever)',
      'Unlimited photo gallery updates: Text or email us job photos from your phone and we post them within 24–48h',
      'Seasonal promotional refreshes (Spring Mulch, Hurricane Palm Prep, Fall Cleanups, Winter Overhaul)',
      'On-demand price changes, service additions, or crew contact updates',
      'Proactive security monitoring, uptime monitoring, and automatic browser compatibility updates',
      'Priority VIP direct line for rapid assistance',
    ],
  },
]

export const comparisonFeatures: TierComparisonFeature[] = [
  {
    name: 'Custom Mobile-First Website Design',
    category: 'build',
    tier1: true,
    tier2: true,
    tooltip: 'Tailored specifically for Bulfrano Gonzalez Lawn Service, LLC',
  },
  {
    name: 'GG Palm & Turf Logo Vectorization',
    category: 'build',
    tier1: true,
    tier2: true,
    tooltip: 'High-res digital artwork adapted for screens and social',
  },
  {
    name: '5 Dedicated Service Showcases',
    category: 'build',
    tier1: true,
    tier2: true,
    tooltip: 'Lawn Maintenance, Landscape Design, Tree & Palm Care, Irrigation, Stone/Mulch',
  },
  {
    name: 'Instant Click-to-Call (941) 718-6278',
    category: 'lead-gen',
    tier1: true,
    tier2: true,
    tooltip: 'Persistent call button for quick quote inquiries',
  },
  {
    name: 'Bilingual English / Spanish Mode',
    category: 'lead-gen',
    tier1: true,
    tier2: true,
    tooltip: '"Free Estimates / Estimados Gratis" toggle for all clients',
  },
  {
    name: 'Online Estimate Request Form',
    category: 'lead-gen',
    tier1: true,
    tier2: true,
    tooltip: 'Leads delivered straight to your phone and iCloud email',
  },
  {
    name: 'Before & After Project Gallery',
    category: 'build',
    tier1: 'Initial Photos (Up to 15)',
    tier2: 'Unlimited Lifetime Photos',
    tooltip: 'Show off fresh mulch, trimmed palms, and pristine lawns',
  },
  {
    name: 'Area Code 941 Local SEO Setup',
    category: 'seo',
    tier1: 'Launch Setup',
    tier2: 'Continuous Ongoing SEO',
    tooltip: 'Targeting Bradenton, Sarasota, Lakewood Ranch, and Venice',
  },
  {
    name: 'Google Maps & Review Integration',
    category: 'seo',
    tier1: true,
    tier2: true,
    tooltip: 'Map embed and 5-star customer feedback highlight',
  },
  {
    name: 'Fast Cloud Edge Hosting Included',
    category: 'support',
    tier1: '1 Year Included',
    tier2: 'Lifetime 100% Free',
    tooltip: 'Zero hosting invoices or server headaches',
  },
  {
    name: 'Free Ongoing Content & Price Updates',
    category: 'support',
    tier1: '30 Days Post-Launch',
    tier2: 'Unlimited for Life',
    tooltip: 'Update prices, services, or phone numbers whenever you want',
  },
  {
    name: 'Seasonal Marketing Refreshes',
    category: 'support',
    tier1: false,
    tier2: '4 Seasonal Refreshes / Year',
    tooltip: 'Spring mulch rush, hurricane palm trimming prep, etc.',
  },
  {
    name: 'Priority VIP Text/Call Direct Line',
    category: 'support',
    tier1: false,
    tier2: true,
    tooltip: 'Same-day turnaround for any website requests',
  },
  {
    name: 'Trade Structure',
    category: 'trade',
    tier1: 'Fixed Term Gardening Schedule',
    tier2: 'Ongoing Mutual Partnership',
    tooltip: 'Equal value exchange with zero cash out of pocket',
  },
]

export const contractSowClauses = {
  tier1: `STATEMENT OF WORK — TIER 1: TURNKEY WEBSITE BUILD
AGREEMENT BETWEEN: Bulfrano Gonzalez Lawn Service, LLC & Market Motion Agency
PRIMARY CONTACTS: Bulfrano Gonzalez (941-718-6278) & Market Motion Team
EXCHANGE TYPE: Service-for-Service Trade (Barter Agreement)

1. MARKET MOTION DELIVERABLES:
- Complete custom responsive website build for Bulfrano Gonzalez Lawn Service, LLC.
- Branded around existing GG monogram logo, palm/turf aesthetic, and green/navy palette.
- Five (5) dedicated service sections: Lawn Maintenance, Landscape Design & Installation, Tree & Palm Care, Irrigation Systems, and Stone, Mulch & Clean Ups.
- Mobile-first optimization with persistent click-to-call ((941) 718-6278) and email routing (BulfranoGonzalez@iCloud.com).
- Bilingual capability (English & Spanish "Estimados Gratis" toggles).
- Online Free Estimate lead capture form delivering inquiries directly to Bulfrano's email.
- Before & After project showcase gallery for up to 15 project photos.
- Local SEO and Schema.org LocalBusiness markup configured for Sarasota and Manatee counties.
- Cloud edge deployment, custom domain DNS linkage, and SSL security certificate.
- Thirty (30) days of post-launch warranty and bug-fix support.

2. BULFRANO GONZALEZ DELIVERABLES:
- Professional gardening and lawn maintenance services provided to Market Motion property.
- Includes mowing, edging, weed-whacking, shrub/hedge trimming, blowing, and seasonal bed maintenance.
- Services performed with professional equipment, proper licensing, and active commercial liability insurance.
- Service schedule: Regular agreed visits until the agreed trade milestone value ($3,500) is fulfilled.

3. MUTUAL AGREEMENT:
- Both parties acknowledge this is a cashless exchange of equal professional labor.
- Neither party shall invoice the other for covered scope of work.
- Contract becomes effective upon signature and delivery of brand assets.`,

  tier2: `STATEMENT OF WORK — TIER 2: WEBSITE BUILD + LIFETIME SUPPORT & FREE UPDATES
AGREEMENT BETWEEN: Bulfrano Gonzalez Lawn Service, LLC & Market Motion Agency
PRIMARY CONTACTS: Bulfrano Gonzalez (941-718-6278) & Market Motion Team
EXCHANGE TYPE: Continuous Mutual Service Partnership (Barter Agreement)

1. MARKET MOTION DELIVERABLES:
- ALL DELIVERABLES FROM TIER 1 (complete custom responsive website build, 5 service showcases, bilingual toggles, mobile lead capture, local SEO, SSL, and domain setup).
- LIFETIME CLOUD HOSTING: Zero hosting or server fees billed to Bulfrano Gonzalez Lawn Service for the life of the partnership.
- UNLIMITED FREE PHOTO UPDATES: Bulfrano sends job photos via text or email; Market Motion formats, optimizes, and uploads them to the live gallery within 24–48 hours.
- SEASONAL CAMPAIGN REFRESHES: Four (4) proactive seasonal banner/promo refreshes per year (Spring Mulch, Hurricane Palm Prep, Rainy-Season Irrigation, Winter Cleanups).
- ON-DEMAND CONTENT CHANGES: Free updates for pricing, service descriptions, phone numbers, and company announcements.
- CONTINUOUS LOCAL SEO STEWARDSHIP: Ongoing monitoring and optimization for Southwest Florida search visibility.
- PRIORITY DIRECT LINE: VIP text and phone access with same-day priority turnaround.

2. BULFRANO GONZALEZ DELIVERABLES:
- Ongoing, regular gardening and lawn maintenance services provided to Market Motion property.
- Services include scheduled lawn mowing, edging, weed trimming, hedge/bush maintenance, blowing, and seasonal bed care.
- Frequency: Regular recurring schedule (e.g., bi-weekly during peak Florida growing season, monthly during dry winter season) to maintain property in pristine condition.
- Services performed with professional equipment, proper licensing, and active commercial liability insurance.

3. MUTUAL AGREEMENT:
- This is an ongoing, continuous partnership trade of professional services.
- As long as the gardening services are actively provided, the website hosting, maintenance, and unlimited updates remain 100% free of charge.
- Either party may review or adjust service schedules upon 30 days written notice.
- Contract becomes effective upon signature and initial service kickoff.`,
}

export const proposalFaqs = [
  {
    q: 'How does the service trade work without money changing hands?',
    a: 'It is a straight barter exchange of professional labor. Bulfrano Gonzalez Lawn Service provides top-quality lawn care and landscaping for our property, and Market Motion Agency builds and maintains your high-end digital presence. Both businesses get top-tier professional work with zero cash out of pocket.',
  },
  {
    q: 'How do updates work under Tier 2?',
    a: 'It is super simple: anytime you finish a great lawn mowing job, fresh mulch installation, or palm tree trimming, take a quick photo with your phone and text or email it to us. We will format the photo, crop it nicely, and add it to your website gallery within 24 to 48 hours. The same applies if you ever change your phone number, prices, or want to run a seasonal special.',
  },
  {
    q: 'Why is bilingual English / Spanish support so important?',
    a: 'In Sarasota and Manatee counties, having "Estimados Gratis" alongside "Free Estimates" instantly opens doors to both Spanish and English-speaking homeowners, realtors, and commercial property managers. It establishes trust and makes it effortless for everyone to request a quote.',
  },
  {
    q: 'What do I need to send to get the website build started?',
    a: 'Almost nothing! We already have your logo emblem, contact information ((941) 718-6278, BulfranoGonzalez@iCloud.com), and your 5 core service offerings. All you need to do is pick your tier, send over any real job photos you have on your phone, and we will build the first live preview for your review.',
  },
  {
    q: 'How will new customer quote requests reach me?',
    a: 'When a homeowner fills out the Free Estimate form on your website, their name, address, phone number, and requested service are instantly sent to your email (BulfranoGonzalez@iCloud.com) and can also trigger a text alert so you can call them back within minutes.',
  },
]
