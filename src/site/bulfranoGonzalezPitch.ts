export const client = {
  businessName: 'Bulfrano Gonzalez Lawn Service, LLC',
  shortName: 'BG Lawn',
  tagline: 'Professional · Reliable · Quality',
  headline: 'Complete landscape solutions',
  phone: '941-718-6278',
  phoneHref: 'tel:+19417186278',
  email: 'BulfranoGonzalez@icloud.com',
  emailHref: 'mailto:BulfranoGonzalez@icloud.com',
} as const

export const services = [
  {
    title: 'Lawn maintenance',
    description: 'Recurring mowing, edging, and tidy-ups that keep properties sharp week after week.',
  },
  {
    title: 'Landscape design & installation',
    description: 'Layouts, plantings, and hardscape coordination from concept through install.',
  },
  {
    title: 'Tree & palm care',
    description: 'Trimming, shaping, and health-focused care for palms and ornamental trees.',
  },
  {
    title: 'Irrigation systems',
    description: 'Repairs, adjustments, and efficiency checks so water goes where it should.',
  },
  {
    title: 'Stone, mulch & clean-ups',
    description: 'Fresh beds, stone work, and seasonal clean-ups that reset the property.',
  },
] as const

export const trustPoints = [
  'Insured',
  'Free estimates (estimados gratis)',
  'Veteran discounts',
] as const

/** Written scope sections — suitable for contract attachment. */
export const websiteScope = {
  overview: [
    'A fast, mobile-first marketing website that turns your flyer and word-of-mouth reputation into a professional online presence customers can trust.',
    'Built around your existing logo, colors, and service list so the site feels like the same brand people already know—not a generic template.',
    'Focused on one job: help homeowners and property managers understand what you do, see proof you are legitimate, and contact you in one tap on a phone.',
  ],
  pages: [
    {
      name: 'Home',
      bullets: [
        'Hero with your motto, primary call-to-action (call or request estimate), and service area context.',
        'Overview of all five service areas with short, scannable descriptions.',
        'Trust bar: insured, free estimates, veteran discounts.',
        'Optional photo strip or before/after placeholders (filled with your project photos when ready).',
        'Footer with phone, email, and quick links.',
      ],
    },
    {
      name: 'Services',
      bullets: [
        'Dedicated sections for lawn maintenance, landscape design & installation, tree & palm care, irrigation, and stone/mulch/clean-ups.',
        'Plain-language copy aligned with your flyer (we draft; you approve).',
        'Each section ends with a consistent “Get a free estimate” action.',
      ],
    },
    {
      name: 'About',
      bullets: [
        'Your story, years in business, and what “professional, reliable, quality” means on the job.',
        'Credentials: insured, veteran-friendly pricing, bilingual-friendly tone where appropriate.',
      ],
    },
    {
      name: 'Contact / estimates',
      bullets: [
        'Prominent phone and email (tap-to-call and mailto on mobile).',
        'Simple estimate request form: name, phone, email, address or area, service needed, optional notes.',
        'Form delivers to your email (and optional SMS notification if you want it later).',
        'Thank-you confirmation so visitors know the message was sent.',
      ],
    },
    {
      name: 'Optional gallery (included if you provide photos)',
      bullets: [
        'Grid of completed jobs once you supply 8–20 images (phone photos are fine).',
        'Light captions by service type for SEO and clarity.',
      ],
    },
  ],
  design: [
    'Color palette anchored on your navy, forest green, silver/gray, and white from existing branding.',
    'Logo placement and typography that match a clean, professional lawn & landscape look.',
    'Layouts optimized for phones first (where most local service searches happen).',
    'Consistent icons or simple illustrations for each service line.',
  ],
  functionality: [
    'Fast static hosting with global CDN (typical load: Vercel or similar).',
    'SSL certificate (HTTPS) included via hosting.',
    'Contact form with spam protection (honeypot and/or provider captcha).',
    'Click-to-call and click-to-email throughout.',
    'Google Maps embed or service-area text (your choice—no fake address required).',
    'Basic analytics hookup (privacy-conscious pageview stats so you can see traffic).',
  ],
  seo: [
    'Unique page titles and meta descriptions for Home, Services, About, and Contact.',
    'Local SEO structure: business name, phone, and service keywords for Southwest Florida / your service area (as you define it).',
    'Schema.org LocalBusiness markup so search engines understand who you are.',
    'Sitemap and robots.txt for indexing.',
    'Guidance (written checklist) for connecting Google Business Profile and linking the new site.',
  ],
  performance: [
    'Compressed images and modern image formats where supported.',
    'Target: strong mobile performance scores (aiming for fast first paint on 4G).',
    'Accessible contrast, focus states, and semantic HTML for screen readers.',
  ],
  launch: [
    'Staging link for your review before anything goes public.',
    'Up to two structured revision rounds on copy and layout after staging review.',
    'DNS/domain connection assistance if you already own a domain; if not, guidance on purchasing one.',
    'Final handoff: you own the content; codebase documented for Tier 2 or future developers.',
  ],
  outOfScope: [
    'Ongoing lawn or landscape work (that is your side of the trade—separate line items in the contract).',
    'Paid advertising management (Google Ads, Meta ads) unless added later.',
    'Blog writing or monthly social media posting unless added later.',
    'Custom web apps, client portals, or online payment/checkout.',
    'Professional copywriting beyond drafting from your flyer and interview notes (you approve all text).',
    'Photography or drone shoots (we use photos you provide).',
  ],
  clientProvides: [
    'Final approval on all text and images.',
    'Logo file (PNG/SVG/PDF) or permission to extract from your flyer art.',
    'List of cities/areas you serve and any license or insurance wording you want displayed.',
    'Project photos when available (optional but recommended for gallery).',
    'Access to domain registrar if connecting an existing domain.',
  ],
  acceptance: [
    'Site live on agreed domain with all scoped pages reachable.',
    'Contact form successfully delivers test messages to your email.',
    'Mobile layout checked on iOS and Android-sized viewports.',
    'You sign off on staging after revision rounds included in Tier 1.',
  ],
} as const

export const tiers = [
  {
    id: 'build',
    name: 'Tier 1 — Website build',
    tradeHeadline: '$1,500 in company service credits',
    summary:
      'Full scoped website, launched and handed off—in exchange for $1,500 in Bulfrano Gonzalez Lawn Service credits we can use on company properties.',
    tradeLabel: 'Your side of the trade',
    tradeNote:
      '$1,500 credit pool at your standard rates, booked like any customer (schedule, service area, materials policy). Credits are for our company use only and expire per whatever terms you put in the contract (e.g. 12 months to redeem).',
    includes: [
      'Everything in the written scope above',
      'Staging review + up to 2 revision rounds before launch',
      'Launch and domain connection help',
      'Enhancements included upon request (reasonable site improvements after launch—copy tweaks, new photos, small sections—not a full redesign)',
      '30-day post-launch bug fix window (broken links, form issues, display bugs)',
    ],
    excludes: [
      'Unlimited or open-ended website work after launch (see Tier 2)',
      'Advanced growth strategy, ongoing SEO retainers, or major new features',
      'Hosting renewal fees (typically low; we handle setup and can recommend a plan)',
    ],
    highlighted: false,
  },
  {
    id: 'lifetime',
    name: 'Tier 2 — Lifetime 1:1 partnership',
    tradeHeadline: '1-for-1 lifetime trade',
    summary:
      'Same professional build, then an ongoing dollar-for-dollar trade: landscaping services on our side matched to website work on yours—for life.',
    tradeLabel: 'Your side of the trade',
    tradeNote:
      'Ongoing 1:1 trade (e.g. $1 of lawn/landscape work for $1 of website labor at agreed rates, or equivalent hour tracking). Contract defines how we log work on both sides and settle up.',
    includes: [
      'Everything in Tier 1 (initial build, launch, and enhancement-friendly baseline)',
      'Unlimited website updates: content, photos, seasonal offers, new gallery images, form changes',
      'Advanced build strategy: conversion-focused improvements, local SEO roadmap, analytics reviews, and iterative upgrades over time',
      'Security and platform updates for the life of the site',
      'Priority response for site requests (target: within 2 business days)',
      'Landscaping enhancements included up to $1,500 in value (mulch, stone, bed refresh, clean-ups, or similar—scope listed in contract)',
    ],
    excludes: [
      'Third-party subscription costs (domain, email hosting, paid ad spend)',
      'Landscaping enhancement work above the included $1,500 cap (continues at 1:1 trade rates)',
      'Work outside your service area or specialty without a written addendum',
    ],
    highlighted: true,
  },
] as const

export const tradeFramework = {
  youProvide: [
    'Tier 1: $1,500 in service credits for our company properties, delivered per your normal booking process.',
    'Tier 2: Ongoing landscaping at 1:1 trade value against our website work, plus up to $1,500 in enhancement landscaping as defined in the contract.',
    'Materials policy, access, and scheduling spelled out so both sides know what is included in the credit or trade rate.',
  ],
  weProvide: [
    'Tier 1: Complete website per the written scope, plus enhancements upon request within reason.',
    'Tier 2: Unlimited site updates, advanced build/growth strategy, and ongoing technical care for the life of the agreement.',
    'Written confirmation when larger Tier 2 enhancements exceed routine update size (so the 1:1 ledger stays fair).',
  ],
  contractHooks: [
    'Selected tier, credit redemption rules (Tier 1), and 1:1 ledger method (Tier 2).',
    'Tier 2: itemized list of what counts toward the included $1,500 landscaping enhancements cap.',
    'Milestones: staging approval → launch → credit drawdown or trade balance schedule.',
    'Pause/weather policy, photo license, and what happens if either party ends the lifetime arrangement.',
  ],
} as const
