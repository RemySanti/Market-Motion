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
        lead="A phone pouch built for people who bounce between shoots, airports, and client sites. This page follows a real product flow—why it exists, proof, specs, and checkout—ready for headless payments when you wire them in."
      />

      <PageSection className="mt-8 sm:mt-10">
        <PageReadGuide
          eyebrow="Shop · orientation"
          title="How this product page is organized"
          lead="On the left: why the product exists and what you pay. On the right: what you are buying. You can reorder blocks later; the flow still moves value, proof, then checkout."
          items={[
            {
              title: 'Product hero',
              description:
                'Price, batch note, and shipping called out up top—so nobody hunts on mobile.',
            },
            {
              title: 'Media placeholder',
              description:
                'Drop in photos, video, or 3D without rebuilding the whole layout.',
            },
            {
              title: 'Specs beside the button',
              description:
                'Technical trust sits next to the buy action—fewer tab hops and fewer “check the FAQ” bounces.',
            },
          ]}
        />
      </PageSection>

      <PageSection className="mt-10 sm:mt-12">
        <PageInsightRow
          cards={[
            {
              eyebrow: 'Merch voice',
              title: 'Written for people who live on the move',
              body: 'Airports, sets, retail floors—the right buyer recognizes themselves quickly.',
            },
            {
              eyebrow: 'Honest checkout',
              title: 'Buttons tell the truth',
              body: 'This is a demo label. In production, plug in Stripe or Shopify and swap for stock-aware buttons.',
            },
            {
              eyebrow: 'Fulfillment aware',
              title: 'Built for real operations',
              body: 'SKU and webhook hints show this expects warehouse or 3PL data behind the scenes—not a PDF brochure.',
            },
          ]}
        />
      </PageSection>

      <PageSection className="mt-10 sm:mt-12">
        <div className="mb-8 max-w-2xl">
          <h2 className="section-title">Fit before you buy</h2>
          <p className="section-desc mt-3">
            Physical products deserve the same clarity as software trials—especially for small batches where expectations are
            part of the brand.
          </p>
        </div>
        <PageFitCallout
          title="Motion Carry"
          idealTitle="Great fit if"
          ideal={[
            'You want premium merch people will actually use, not drawer clutter.',
            'You need a sample SKU to exercise a headless storefront.',
            'You like domestic shipping rolled into the price for simpler support.',
          ]}
          caveatTitle="Before you launch wide"
          caveats={[
            'International duties are not spelled out here—add clear disclosures before EU or UK shipping.',
            'If sizing matters, add a fit guide above the fold on mobile.',
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
                Swap this for photography, 3D, or a lightweight WebGL preview.
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
