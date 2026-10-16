import { useEffect, useState, type ReactNode } from 'react'

type Tier = 'essential' | 'lifetime'

const essentialFeatures = [
  {
    title: 'A custom, mobile-first website',
    description:
      'A polished five-page site designed around your logo, colors, services, and service area—not a recycled landscaping template.',
  },
  {
    title: 'Pages that answer customer questions',
    description:
      'Home, Services, About, Project Gallery, and Contact / Free Estimate pages with clear calls to action throughout.',
  },
  {
    title: 'Service content and copywriting',
    description:
      'We organize and write clear customer-facing copy for lawn care, landscape design, tree and palm care, irrigation, and stone or mulch work.',
  },
  {
    title: 'Estimate request form',
    description:
      'A simple lead form that sends the customer’s contact details, requested service, and message directly to your business email.',
  },
  {
    title: 'Local search foundation',
    description:
      'Search-friendly page titles, descriptions, headings, service-area language, and LocalBusiness structured data.',
  },
  {
    title: 'Launch and handoff',
    description:
      'Domain connection, secure hosting setup, final device testing, basic analytics, and one recorded walkthrough.',
  },
]

const lifetimeExtras = [
  'Everything included in the Website Build',
  'Website hosting and technical monitoring',
  'Ongoing security, dependency, and performance updates',
  'Unlimited reasonable text, photo, service, and hours updates',
  'Seasonal offer and promotion updates',
  'New project photos added to the gallery',
  'Form, link, and display fixes if anything breaks',
  'Priority support with a two-business-day response target',
]

const steps = [
  {
    number: '01',
    title: 'Gather',
    body: 'We collect your logo, preferred contact details, service area, photos, reviews, and any wording you want us to keep.',
  },
  {
    number: '02',
    title: 'Design',
    body: 'We create the full visual direction and first homepage for review before building the remaining pages.',
  },
  {
    number: '03',
    title: 'Build',
    body: 'We develop the responsive site, write and organize the content, connect the estimate form, and prepare local SEO.',
  },
  {
    number: '04',
    title: 'Review & launch',
    body: 'You receive a private preview and two revision rounds. After written approval, we connect the domain and publish.',
  },
]

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5 shrink-0">
      <path
        d="m5 10.25 3.05 3.05L15.5 5.9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4">
      <path
        d="M4 10h11m-4-4 4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function LeafMark({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3" aria-label="Bulfrano Gonzalez Lawn Service">
      <span
        className={`relative flex h-11 w-11 items-center justify-center rounded-full border text-sm font-black tracking-[-0.12em] ${
          light
            ? 'border-white/25 bg-white/10 text-white'
            : 'border-[#2d6f38]/20 bg-[#e9f1e3] text-[#0b3156]'
        }`}
        aria-hidden="true"
      >
        BG
        <span className="absolute -right-1 -top-1 text-sm text-[#5f9636]">◆</span>
      </span>
      <span className="leading-none">
        <span className={`block text-sm font-extrabold uppercase tracking-[0.03em] ${light ? 'text-white' : 'text-[#0b3156]'}`}>
          Bulfrano Gonzalez
        </span>
        <span className={`mt-1 block text-[9px] font-bold uppercase tracking-[0.28em] ${light ? 'text-white/65' : 'text-[#5a773f]'}`}>
          Lawn Service, LLC
        </span>
      </span>
    </div>
  )
}

function ScopeCard({
  index,
  title,
  children,
}: {
  index: number
  title: string
  children: ReactNode
}) {
  return (
    <article className="group border-t border-[#0b3156]/15 pt-5">
      <div className="flex items-start gap-4">
        <span className="mt-0.5 font-mono text-xs font-semibold text-[#5f9636]">
          0{index + 1}
        </span>
        <div>
          <h3 className="text-lg font-bold tracking-[-0.025em] text-[#0b3156]">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-[#526052]">{children}</p>
        </div>
      </div>
    </article>
  )
}

export function BulfranoProposalPage() {
  const [selectedTier, setSelectedTier] = useState<Tier>('lifetime')

  useEffect(() => {
    document.title = 'Website Partnership Proposal | Bulfrano Gonzalez Lawn Service'
    window.scrollTo(0, 0)
  }, [])

  const chosenName = selectedTier === 'essential' ? 'Website Build' : 'Website + Lifetime Care'
  const mailto = `mailto:hello@marketmotionagency.com?subject=${encodeURIComponent(
    `Bulfrano Gonzalez — ${chosenName}`,
  )}&body=${encodeURIComponent(
    `We would like to move forward with the ${chosenName} option. Please send the next steps for the written agreement.`,
  )}`

  return (
    <div className="min-h-screen bg-[#f6f4ed] font-sans text-[#183026] selection:bg-[#a9cb87] selection:text-[#0b3156]">
      <header className="border-b border-[#0b3156]/10 bg-[#f6f4ed]/90 px-5 py-4 backdrop-blur-xl sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <LeafMark />
          <div className="flex items-center gap-3">
            <p className="hidden text-right text-[10px] font-bold uppercase leading-5 tracking-[0.22em] text-[#667264] sm:block">
              Website partnership
              <br />
              Prepared by Market Motion
            </p>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#0b3156]/20 px-4 text-xs font-bold uppercase tracking-[0.12em] text-[#0b3156] transition hover:border-[#0b3156] hover:bg-white"
            >
              Print proposal
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
          <div
            className="pointer-events-none absolute -right-32 -top-52 h-[34rem] w-[34rem] rounded-full border-[7rem] border-[#dfe9d4] opacity-80"
            aria-hidden="true"
          />
          <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#5f7d40]">
                <span className="h-px w-9 bg-[#76a64f]" />
                Prepared exclusively for your review
              </p>
              <h1 className="mt-7 max-w-4xl text-[clamp(2.8rem,7.4vw,6.9rem)] font-black leading-[0.88] tracking-[-0.07em] text-[#0b3156]">
                Your work already
                <span className="block text-[#5f9636]">speaks for itself.</span>
                <span className="block">Your website should too.</span>
              </h1>
            </div>
            <div className="max-w-md border-l-2 border-[#5f9636] pl-6 lg:mb-2">
              <p className="text-lg font-medium leading-8 text-[#35473d]">
                A written, contract-ready breakdown of the website work we’ll provide in exchange
                for gardening services—with two clear levels of support.
              </p>
              <a
                href="#options"
                className="mt-7 inline-flex items-center gap-3 text-sm font-extrabold text-[#0b3156] underline decoration-[#7faa58] decoration-2 underline-offset-8"
              >
                Compare the two options <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#0b3156] px-5 py-6 text-white sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 text-center sm:grid-cols-3 sm:text-left">
            <p className="text-sm font-semibold">
              <span className="mr-2 text-[#9fc675]">01</span> Custom to your business
            </p>
            <p className="text-sm font-semibold">
              <span className="mr-2 text-[#9fc675]">02</span> Built for phones first
            </p>
            <p className="text-sm font-semibold">
              <span className="mr-2 text-[#9fc675]">03</span> Designed to win estimates
            </p>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="scope-heading">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#5f9636]">
                  The core build
                </p>
                <h2
                  id="scope-heading"
                  className="mt-4 max-w-md text-4xl font-black leading-[1.02] tracking-[-0.05em] text-[#0b3156] sm:text-5xl"
                >
                  Exactly what we would do.
                </h2>
                <p className="mt-6 max-w-sm text-base leading-7 text-[#526052]">
                  Both options begin with the same complete website. Nothing below is an add-on or
                  surprise charge.
                </p>
              </div>
              <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                {essentialFeatures.map((feature, index) => (
                  <ScopeCard key={feature.title} index={index} title={feature.title}>
                    {feature.description}
                  </ScopeCard>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="options" className="scroll-mt-6 bg-[#e9eee4] px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="options-heading">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#5f9636]">
                Choose your level of support
              </p>
              <h2
                id="options-heading"
                className="mt-4 text-4xl font-black tracking-[-0.05em] text-[#0b3156] sm:text-5xl"
              >
                Two straightforward options.
              </h2>
              <p className="mt-5 text-base leading-7 text-[#526052]">
                The exact gardening services exchanged for the selected option will be itemized in
                the contract you provide and approved by both parties before work begins.
              </p>
            </div>

            <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-2">
              <article
                className={`relative flex flex-col rounded-[2rem] border bg-[#f8f7f1] p-7 transition sm:p-10 ${
                  selectedTier === 'essential'
                    ? 'border-[#5f9636] shadow-[0_18px_60px_-30px_rgba(11,49,86,0.28)]'
                    : 'border-[#0b3156]/10'
                }`}
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#5f9636]">
                  Option one
                </p>
                <h3 className="mt-4 text-3xl font-black tracking-[-0.045em] text-[#0b3156]">
                  Website Build
                </h3>
                <p className="mt-4 max-w-lg text-sm leading-6 text-[#526052]">
                  Best if you want a professional website built and launched, then prefer to manage
                  future changes yourself.
                </p>
                <div className="my-7 h-px bg-[#0b3156]/12" />
                <ul className="space-y-4 text-sm font-semibold text-[#263d31]">
                  {[
                    'Complete five-page custom website',
                    'Copywriting and content organization',
                    'Estimate form and business email delivery',
                    'Mobile, tablet, and desktop optimization',
                    'Local SEO foundation and analytics',
                    'Two revision rounds before launch',
                    '30 days of post-launch bug support',
                    'Full website ownership after exchange is complete',
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-[#5f9636]"><CheckIcon /></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => setSelectedTier('essential')}
                  aria-pressed={selectedTier === 'essential'}
                  className="mt-9 inline-flex min-h-12 items-center justify-between rounded-full border border-[#0b3156] px-5 text-sm font-extrabold text-[#0b3156] transition hover:bg-[#0b3156] hover:text-white"
                >
                  {selectedTier === 'essential' ? 'Selected' : 'Select website build'}
                  <ArrowIcon />
                </button>
              </article>

              <article
                className={`relative flex flex-col overflow-hidden rounded-[2rem] border bg-[#0b3156] p-7 text-white transition sm:p-10 ${
                  selectedTier === 'lifetime'
                    ? 'border-[#92bd67] shadow-[0_22px_70px_-28px_rgba(11,49,86,0.55)]'
                    : 'border-[#0b3156]'
                }`}
              >
                <div className="absolute right-0 top-0 rounded-bl-3xl bg-[#91bd67] px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.18em] text-[#0b3156]">
                  Most complete
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#a9cf82]">
                  Option two
                </p>
                <h3 className="mt-4 max-w-md text-3xl font-black tracking-[-0.045em]">
                  Website + Lifetime Care
                </h3>
                <p className="mt-4 max-w-lg text-sm leading-6 text-white/70">
                  Best if you want us to keep the site secure, current, and useful without having
                  to learn the technology or pay for routine edits.
                </p>
                <div className="my-7 h-px bg-white/15" />
                <ul className="space-y-4 text-sm font-semibold text-white/90">
                  {lifetimeExtras.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-[#a9cf82]"><CheckIcon /></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => setSelectedTier('lifetime')}
                  aria-pressed={selectedTier === 'lifetime'}
                  className="mt-9 inline-flex min-h-12 items-center justify-between rounded-full bg-[#a9cf82] px-5 text-sm font-extrabold text-[#0b3156] transition hover:bg-white"
                >
                  {selectedTier === 'lifetime' ? 'Selected' : 'Select lifetime care'}
                  <ArrowIcon />
                </button>
              </article>
            </div>

            <p className="mt-7 text-xs leading-5 text-[#667264]">
              “Lifetime” means for as long as Bulfrano Gonzalez Lawn Service remains in business
              and Market Motion Agency continues to operate. It covers routine content and
              technical updates—not a full redesign, new custom application, paid advertising, or
              third-party fees unless specifically added to the contract.
            </p>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="process-heading">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#5f9636]">
                  How the work happens
                </p>
                <h2
                  id="process-heading"
                  className="mt-4 text-4xl font-black tracking-[-0.05em] text-[#0b3156] sm:text-5xl"
                >
                  A clear path to launch.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-[#526052]">
                Work begins after the written agreement is signed and all initial photos, business
                details, and account access are received.
              </p>
            </div>
            <ol className="mt-12 grid gap-8 border-t border-[#0b3156]/15 pt-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <li key={step.number}>
                  <p className="font-mono text-xs font-bold text-[#5f9636]">{step.number}</p>
                  <h3 className="mt-4 text-xl font-black text-[#0b3156]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#526052]">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-[#dfe9d4] px-5 py-20 sm:px-8" aria-labelledby="agreement-heading">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#5f9636]">
                For the agreement
              </p>
              <h2
                id="agreement-heading"
                className="mt-4 text-4xl font-black leading-tight tracking-[-0.05em] text-[#0b3156]"
              >
                What the contract should capture.
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                ['Selected option', `${chosenName}.`],
                ['Exchange value', 'The specific gardening services, schedule, and agreed value.'],
                ['Ownership', 'The business owns its content, domain, and completed website.'],
                ['Approvals', 'Two design revision rounds and written approval before launch.'],
                ['Outside costs', 'Domain or premium third-party costs only if approved in writing.'],
                ['Boundaries', 'New features or redesigns require a separate written scope.'],
              ].map(([title, body]) => (
                <div key={title} className="rounded-2xl bg-[#f6f4ed]/75 p-5">
                  <h3 className="text-sm font-extrabold text-[#0b3156]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#526052]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0b3156] px-5 py-20 text-white sm:px-8 sm:py-24">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a9cf82]">
                Your current selection
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[1.03] tracking-[-0.05em] sm:text-6xl">
                {chosenName}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/65">
                If this written scope looks right, confirm your preferred option and send the
                gardening-services agreement for review. No work or exchange begins until both
                parties sign.
              </p>
            </div>
            <a
              href={mailto}
              className="inline-flex min-h-14 w-full items-center justify-between gap-6 rounded-full bg-[#a9cf82] px-7 text-sm font-black text-[#0b3156] transition hover:bg-white sm:w-auto"
            >
              Confirm this option <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-[#082946] px-5 py-8 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <LeafMark light />
          <p className="text-xs leading-5 text-white/55 sm:text-right">
            Proposal prepared by Market Motion Agency
            <br />
            Scope subject to the final signed agreement
          </p>
        </div>
      </footer>
    </div>
  )
}
