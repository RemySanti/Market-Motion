import { Link } from 'react-router-dom'
import { GlassPanel } from '../components/GlassPanel'
import { PageInsightRow, PageJourneyStrip, PageReadGuide } from '../components/PageExplainer'
import { PageIntro } from '../components/PageIntro'
import { PageSection } from '../components/PageSection'
import { PageShell } from '../components/PageShell'
import { ProjectPasswordGate } from '../components/ProjectPasswordGate'
import { SectionHeading } from '../components/SectionHeading'
import { StatusPill } from '../components/ui/StatusPill'
import { useNoIndex } from '../hooks/useNoIndex'
import { usePageTitle } from '../hooks/usePageTitle'
import {
  addOns,
  architectureModules,
  customerFields,
  holisticHealthGate,
  metrics,
  packages,
  pricingRows,
  providerFields,
  scaling,
  stack,
} from '../site/holisticHealthProject'

export function HolisticHealthProjectPage() {
  usePageTitle('Holistic Health Network brief')
  useNoIndex()

  return (
    <ProjectPasswordGate
      storageKey={holisticHealthGate.storageKey}
      passwordSha256={holisticHealthGate.passwordSha256}
      kicker="Confidential · Client brief"
      title="Holistic Health Network"
      lead="This page holds the marketplace intake and payment system brief. Enter the project password to open it."
    >
      {({ lock }) => (
        <PageShell>
        <PageIntro
          kicker="Private project brief"
          title="Marketplace intake & payment system."
          lead="A custom platform for the holistic health network marketplace: customers buy bundled visit packages, one intake member runs the whole flow, and the system splits revenue and pays providers automatically."
        />

        <ul className="mt-6 flex list-none flex-wrap gap-2 p-0" aria-label="Project status">
          <li>
            <StatusPill variant="in-progress">Intake + Stripe</StatusPill>
          </li>
          <li>
            <StatusPill variant="todo">Provider payouts</StatusPill>
          </li>
          <li>
            <StatusPill variant="design-review">Admin for Remy</StatusPill>
          </li>
        </ul>

        <PageSection className="mt-8 sm:mt-10" aria-label="Brief orientation">
          <PageReadGuide
            eyebrow="How to read this brief"
            title="Scope, money, and the day-to-day flow"
            lead="This is the build plan—not a live marketplace yet. Skim the model, then the six system pieces, then the $10–15k envelope and what sits outside it."
            items={[
              {
                title: 'Who uses it',
                description:
                  'One intake member talks to the customer. Providers never get a backend. Remy gets the admin dashboard.',
              },
              {
                title: 'How money moves',
                description:
                  'Customer pays the full package up front. Stripe holds the charge. The split engine pays providers by assignment and visits used.',
              },
              {
                title: 'What $10–15k covers',
                description:
                  'Intake, provider database, ACH payouts, admin, and launch hardening. Portals, extra analytics, and branding are add-ons.',
              },
            ]}
          />
        </PageSection>

        <PageSection className="mt-10 sm:mt-12" aria-labelledby="headline-metrics">
          <h2 id="headline-metrics" className="sr-only">
            Launch constraints
          </h2>
          <ul className="grid gap-4 sm:grid-cols-3" aria-label="Launch constraints">
            {[
              { value: '$10–15k', label: 'Development cost', hint: 'Core build, not including optional add-ons.' },
              { value: '8+', label: 'Visits per package', hint: 'Minimum bundle size. Catalog starts with named packages.' },
              { value: '3 → 8+', label: 'Practitioners', hint: 'Launch with three. Architecture should scale past eight.' },
            ].map((stat) => (
              <li key={stat.label}>
                <GlassPanel className="p-5 sm:p-6" hover>
                  <p className="font-mono text-xs uppercase tracking-widest text-slate-500">{stat.label}</p>
                  <p className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{stat.hint}</p>
                </GlassPanel>
              </li>
            ))}
          </ul>
        </PageSection>

        <PageSection className="mt-12 sm:mt-16" aria-labelledby="model-heading">
          <SectionHeading
            id="model-heading"
            title="Business model"
            description="Customers buy a pre-defined package. Providers are assigned to that package. Nobody shops à la carte at launch."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-2 lg:gap-6">
            <GlassPanel className="p-5 sm:p-7" hover>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300/90">Customer acquisition</p>
              <h3 className="mt-3 text-lg font-semibold text-white">One conversation, one payment</h3>
              <ol className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
                <li>1. A single intake member talks to the customer.</li>
                <li>2. Customer picks a package (Wellness, Performance, or another catalog option).</li>
                <li>3. Customer pays the full package up front.</li>
                <li>4. The system splits revenue to eligible providers based on package assignment.</li>
              </ol>
            </GlassPanel>
            <GlassPanel className="p-5 sm:p-7" hover>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-200/90">Provider model</p>
              <h3 className="mt-3 text-lg font-semibold text-white">Assigned, not logged in</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
                <li>Acupuncturists, nutritionists, massage therapists, and similar practitioners are assigned to packages.</li>
                <li>No backend or dashboard access for providers in the core build.</li>
                <li>Payouts follow package allocation and customer usage—not a shared login.</li>
                <li>Start with three practitioners; the data model should already assume eight or more.</li>
              </ul>
            </GlassPanel>
          </div>
          <ul className="mt-4 grid gap-4 md:grid-cols-3">
            {packages.map((pkg) => (
              <li key={pkg.name}>
                <GlassPanel className="h-full p-5 sm:p-6" hover>
                  <p className="font-mono text-xs uppercase tracking-widest text-slate-500">{pkg.visits}</p>
                  <h3 className="mt-3 text-base font-semibold text-white">{pkg.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{pkg.detail}</p>
                </GlassPanel>
              </li>
            ))}
          </ul>
        </PageSection>

        <PageSection className="mt-12 sm:mt-16">
          <PageInsightRow
            cards={[
              {
                eyebrow: 'Intake member',
                title: 'The whole flow lives on one form',
                body: 'Collect the customer, pick the package, confirm providers, take Stripe, confirm the order. No extra admin hop for day-one operations.',
              },
              {
                eyebrow: 'Split engine',
                title: 'Rates can be flat, percent, or per visit',
                body: 'Each provider’s cut is stored per package. The engine uses assignment plus visits claimed—not a one-size split.',
              },
              {
                eyebrow: 'Remy',
                title: 'Admin is the only control room',
                body: 'Active packages, payout monitoring, allocation overrides, revenue by package and provider, and payout history.',
              },
            ]}
          />
        </PageSection>

        <PageSection className="mt-12 sm:mt-16" aria-labelledby="architecture-heading">
          <SectionHeading
            id="architecture-heading"
            title="What gets built"
            description="Six surfaces. Intake and Stripe are the first money path; the rest keep providers paid and Remy informed."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {architectureModules.map((mod, index) => (
              <GlassPanel key={mod.title} className="p-5 sm:p-6" hover>
                <div className="flex items-start justify-between gap-3">
                  <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-2.5 py-0.5 font-mono text-[11px] text-cyan-200">
                    {mod.price}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white">{mod.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{mod.body}</p>
              </GlassPanel>
            ))}
          </div>
        </PageSection>

        <PageSection className="mt-12 sm:mt-16">
          <PageJourneyStrip
            title="Workflow in practice"
            subtitle="What the intake member does from login through the first provider payout."
            steps={[
              {
                phase: 'Login',
                title: 'Intake member opens the form',
                body: 'No customer portal at launch. The member is the operator: add a new customer and start the package.',
              },
              {
                phase: 'Package',
                title: 'Select the catalog option',
                body: 'Example: 8-visit Wellness. The system then shows providers eligible for that package from their enrollment.',
              },
              {
                phase: 'Assign',
                title: 'Confirm providers — override if needed',
                body: 'Defaults come from eligibility. The member can override when the customer already has a practitioner in mind.',
              },
              {
                phase: 'Pay',
                title: 'Stripe on the same form',
                body: 'Full package payment is collected before the order is confirmed. The payment method is stored for the record.',
              },
              {
                phase: 'Notify',
                title: 'Splits calculate; providers hear about it',
                body: 'Confirming the order runs the split engine. Providers get an email or webhook that they have a new customer.',
              },
              {
                phase: 'Payout',
                title: 'Visits are tracked; money follows usage',
                body: 'As visits happen, the system claims them against the package and pays out on the chosen schedule.',
              },
            ]}
          />
        </PageSection>

        <PageSection className="mt-12 sm:mt-16" aria-labelledby="data-heading">
          <SectionHeading
            id="data-heading"
            title="Data collection"
            description="Onboarding captures what payouts and 1099s need. Intake captures only what the order and Stripe charge need."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-2 lg:gap-6">
            <GlassPanel className="p-5 sm:p-7" hover>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300/90">From each provider</p>
              <h3 className="mt-3 text-lg font-semibold text-white">At onboarding</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
                {providerFields.map((field) => (
                  <li key={field} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/80" aria-hidden />
                    {field}
                  </li>
                ))}
              </ul>
            </GlassPanel>
            <GlassPanel className="p-5 sm:p-7" hover>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-200/90">From each customer</p>
              <h3 className="mt-3 text-lg font-semibold text-white">At intake</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
                {customerFields.map((field) => (
                  <li key={field} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400/80" aria-hidden />
                    {field}
                  </li>
                ))}
              </ul>
            </GlassPanel>
          </div>
        </PageSection>

        <PageSection className="mt-12 sm:mt-16" aria-labelledby="split-heading">
          <SectionHeading
            id="split-heading"
            title="Split logic and payouts"
            description="The sale is one Stripe charge. Everything after that is assignment, visit claims, and ACH."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-2 lg:gap-6">
            <GlassPanel className="border border-emerald-500/15 p-5 sm:p-6" hover>
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-300/80">
                What the engine always knows
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">Split logic</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
                {[
                  'Total package revenue from the Stripe charge.',
                  'Which providers are assigned to this customer.',
                  'Each provider’s cut from package type and their rate structure (flat, percentage, or per-visit).',
                  'Which visits have been used or claimed so payouts match real care, not just the sale.',
                ].map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/80" aria-hidden />
                    {line}
                  </li>
                ))}
              </ul>
            </GlassPanel>
            <GlassPanel className="border border-amber-500/15 p-5 sm:p-6" hover>
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-amber-200/80">
                Payout operations
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">How providers get paid</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
                {[
                  'ACH to provider bank accounts on a daily, weekly, or monthly cadence.',
                  'Payout history and reconciliation live in admin—not in a provider login.',
                  'Tax documentation prep (1099s) for U.S. providers is in the core payout scope.',
                ].map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400/70" aria-hidden />
                    {line}
                  </li>
                ))}
              </ul>
            </GlassPanel>
          </div>
        </PageSection>

        <PageSection className="mt-12 sm:mt-16" aria-labelledby="pricing-heading">
          <SectionHeading
            id="pricing-heading"
            title="Scope and pricing"
            description="Development cost is $10–15k. The ranges below are the working breakdown, not a line-item invoice."
          />
          <GlassPanel className="mt-8 overflow-hidden p-0" hover>
            <div className="border-b border-white/10 px-5 py-4 sm:px-7">
              <p className="font-mono text-xs uppercase tracking-widest text-slate-500">Core build</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-white">$10k–15k</p>
            </div>
            <ul className="divide-y divide-white/8">
              {pricingRows.map((row) => (
                <li
                  key={row.item}
                  className="flex items-baseline justify-between gap-4 px-5 py-3.5 text-sm sm:px-7"
                >
                  <span className="text-slate-300">{row.item}</span>
                  <span className="shrink-0 font-mono text-cyan-200">{row.range}</span>
                </li>
              ))}
            </ul>
          </GlassPanel>
          <h3 className="mt-8 text-base font-semibold text-white">Optional add-ons</h3>
          <p className="mt-2 max-w-2xl text-sm text-slate-400">Each is +$1.5–2.5k on top of the core envelope.</p>
          <ul className="mt-5 grid gap-4 md:grid-cols-2">
            {addOns.map((addon) => (
              <li key={addon.title}>
                <GlassPanel className="h-full p-5 sm:p-6" hover>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber-200/80">+$1.5–2.5k</p>
                  <h4 className="mt-2 text-base font-semibold text-white">{addon.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{addon.body}</p>
                </GlassPanel>
              </li>
            ))}
          </ul>
        </PageSection>

        <PageSection className="mt-12 sm:mt-16" aria-labelledby="stack-heading">
          <SectionHeading
            id="stack-heading"
            title="Recommended stack"
            description="Familiar pieces that match how this agency already ships—and that Stripe Connect can actually pay against."
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {stack.map((item) => (
              <li key={item.layer}>
                <GlassPanel className="p-5" hover>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">{item.layer}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.value}</p>
                </GlassPanel>
              </li>
            ))}
          </ul>
        </PageSection>

        <PageSection className="mt-12 sm:mt-16" aria-labelledby="metrics-heading">
          <SectionHeading
            id="metrics-heading"
            title="Success metrics to track"
            description="If these five numbers are visible in admin, the marketplace can be steered without a second reporting project."
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map((metric) => (
              <li key={metric.label}>
                <GlassPanel className="h-full p-5 sm:p-6" hover>
                  <h3 className="text-base font-semibold text-white">{metric.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{metric.detail}</p>
                </GlassPanel>
              </li>
            ))}
          </ul>
        </PageSection>

        <PageSection className="mt-12 sm:mt-16" aria-labelledby="scale-heading">
          <SectionHeading
            id="scale-heading"
            title="Future scaling"
            description="Out of the $10–15k envelope. The schema should not paint the team into a corner when these show up."
          />
          <GlassPanel className="mt-8 p-5 sm:p-7" hover>
            <ol className="space-y-4">
              {scaling.map((item, index) => (
                <li key={item} className="flex gap-4">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-mono text-xs text-cyan-200"
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                  <p className="pt-1 text-sm leading-relaxed text-slate-300">{item}</p>
                </li>
              ))}
            </ol>
          </GlassPanel>
        </PageSection>

        <PageSection className="mt-12 sm:mt-16" aria-labelledby="brief-cta">
          <GlassPanel className="flex min-w-0 flex-col items-start gap-6 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-8" hover>
            <div className="min-w-0">
              <h2 id="brief-cta" className="section-title max-w-xl">
                Ready to turn this brief into a build?
              </h2>
              <p className="section-desc mt-2 max-w-xl">
                One conversation to confirm package catalog, provider rate rules, and whether payouts start manual or on a weekly cadence.
              </p>
            </div>
            <Link to="/contact" className="btn-primary w-full shrink-0 justify-center px-8 sm:w-auto">
              Talk with Market Motion
            </Link>
          </GlassPanel>
        </PageSection>
        <div className="mt-10 flex justify-end">
          <button type="button" className="btn-secondary px-4 text-xs" onClick={lock}>
            Lock this brief
          </button>
        </div>
        </PageShell>
      )}
    </ProjectPasswordGate>
  )
}
