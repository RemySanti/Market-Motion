import { GlassPanel } from '../components/GlassPanel'
import { PageFitCallout, PageInsightRow, PageReadGuide } from '../components/PageExplainer'
import { PageIntro } from '../components/PageIntro'
import { PageSection } from '../components/PageSection'
import { PageShell } from '../components/PageShell'
import { usePageTitle } from '../hooks/usePageTitle'

export function ShopPage() {
  usePageTitle('Shop')

  return (
    <PageShell>
      <PageIntro
        kicker="Shop"
        title="Motion Carry — tan edition"
        lead="Wearable phone pouch engineered for operators who live between shoots, terminals, and client floors. This page mirrors a production PDP: orientation, proof, specs, and a clear commerce action—wired for headless checkout when you connect payments."
      />

      <PageSection className="mt-8 sm:mt-10">
        <PageReadGuide
          eyebrow="Shop · orientation"
          title="How to read this product page"
          lead="We split the story into “why it exists” (left) and “what you are buying” (right). Your future PDP can reorder blocks, but the cognitive flow stays: value → evidence → transaction."
          items={[
            {
              title: 'Hero product panel',
              description:
                'Price, batch context, and shipping clarity up top—so visitors never hunt for the basics on mobile.',
            },
            {
              title: 'Placeholder media callout',
              description:
                'Shows where rich media slots in. Swap for carousel, video, or AR without restructuring the layout.',
            },
            {
              title: 'Specs + CTA',
              description:
                'Technical trust lives beside the buy button—reduces tabs opened in the background and bounce to FAQs.',
            },
          ]}
        />
      </PageSection>

      <PageSection className="mt-10 sm:mt-12">
        <PageInsightRow
          cards={[
            {
              eyebrow: 'Merchandising UX',
              title: 'Operators recognize operators',
              body: 'Copy speaks to motion-heavy days: airports, sets, retail floors—so the right buyer self-selects fast.',
            },
            {
              eyebrow: 'Checkout-ready',
              title: 'Buttons are honest',
              body: 'Demo state is labeled. In production, wire Stripe/Shopify and swap this block for inventory-aware CTAs.',
            },
            {
              eyebrow: 'Ops hooks',
              title: 'Designed for real fulfillment',
              body: 'SKU + webhook mention signals this is not a static brochure—it expects ERP or 3PL truth behind the scenes.',
            },
          ]}
        />
      </PageSection>

      <PageSection className="mt-10 sm:mt-12">
        <div className="mb-8 max-w-2xl">
          <h2 className="section-title">Fit before you buy</h2>
          <p className="section-desc mt-3">
            Physical goods need the same clarity as SaaS trials—especially for limited batches where expectation management
            is brand protection.
          </p>
        </div>
        <PageFitCallout
          title="Motion Carry"
          idealTitle="Great fit"
          ideal={[
            'You want premium merch that feels usable, not landfill swag.',
            'You need a template SKU to test headless storefront components.',
            'You value domestic shipping baked into price for simpler support.',
          ]}
          caveatTitle="Heads-up"
          caveats={[
            'International duties are not modeled here—add disclosure blocks before EU/UK launch.',
            'If you need try-on sizing, add a fit guide module above the fold on mobile.',
          ]}
        />
      </PageSection>

      <PageSection className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-2 lg:gap-8">
        <GlassPanel className="aspect-[4/5] p-0 sm:aspect-auto sm:min-h-[380px] lg:min-h-[420px]" hover>
          <div className="flex h-full flex-col justify-between p-6 sm:p-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-amber-200/80">
                Limited batch
              </p>
              <p className="mt-5 text-4xl font-semibold text-white sm:mt-6 sm:text-5xl">$48</p>
              <p className="mt-2 text-sm text-slate-400">Flat domestic shipping included.</p>
            </div>
            <div className="mt-10 rounded-2xl border border-dashed border-white/15 bg-black/30 p-5 text-left sm:mt-12 sm:p-6">
              <p className="font-mono text-[11px] uppercase text-slate-500">Placeholder media</p>
              <p className="mt-2 text-sm text-slate-400">
                Swap this panel for product photography, 3D, or WebGL preview.
              </p>
            </div>
          </div>
        </GlassPanel>

        <GlassPanel className="p-6 sm:p-8" hover>
          <h2 className="text-lg font-semibold text-white">Specs</h2>
          <ul className="mt-6 space-y-3 text-sm text-slate-300">
            <li>RF-shielded inner pocket · aircraft-grade polymer clip</li>
            <li>Micro-suede lining · tan colorway tuned for campaign parity</li>
            <li>SKU sync hooks for your warehouse or 3PL webhook</li>
          </ul>
          <button
            type="button"
            className="mt-8 inline-flex min-h-[48px] w-full items-center justify-center rounded-2xl border border-violet-400/35 bg-violet-500/15 px-5 py-3.5 text-sm font-semibold text-violet-100 transition hover:bg-violet-500/25 active:scale-[0.98] sm:mt-10"
          >
            Add to cart (demo)
          </button>
        </GlassPanel>
      </PageSection>
    </PageShell>
  )
}
