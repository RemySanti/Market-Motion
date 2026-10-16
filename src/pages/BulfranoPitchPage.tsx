import { useState, useId } from 'react'
import { BulfranoLogo } from '../components/BulfranoLogo'
import { BulfranoMockupPreview } from '../components/BulfranoMockupPreview'
import { GlassPanel } from '../components/GlassPanel'
import { PageIntro } from '../components/PageIntro'
import { PageSection } from '../components/PageSection'
import { PageShell } from '../components/PageShell'
import { SectionHeading } from '../components/SectionHeading'
import { StatusPill } from '../components/ui/StatusPill'
import { usePageTitle } from '../hooks/usePageTitle'
import {
  bulfranoClientProfile,
  comparisonFeatures,
  contractSowClauses,
  phaseBreakdown,
  proposalFaqs,
  proposalTiers,
} from '../site/bulfranoPitchData'

export function BulfranoPitchPage() {
  usePageTitle('Bulfrano Gonzalez Lawn Service — Website Trade Proposal')
  const [selectedTier, setSelectedTier] = useState<'tier-1' | 'tier-2'>('tier-2')
  const [copiedContract, setCopiedContract] = useState(false)
  const [activeTab, setActiveTab] = useState<'overview' | 'breakdown' | 'preview' | 'contract'>('overview')
  const copyToastId = useId()

  const currentTierData = proposalTiers.find((t) => t.id === selectedTier) || proposalTiers[1]
  const currentSowText = selectedTier === 'tier-1' ? contractSowClauses.tier1 : contractSowClauses.tier2

  const handleCopySow = async () => {
    try {
      await navigator.clipboard.writeText(currentSowText)
      setCopiedContract(true)
      setTimeout(() => setCopiedContract(false), 3000)
    } catch {
      // fallback
    }
  }

  return (
    <PageShell>
      {/* Top Breadcrumb & Status */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="font-semibold text-cyan-400">Market Motion Agency</span>
          <span>/</span>
          <span className="text-emerald-400 font-medium">Client Pitch</span>
          <span>/</span>
          <span className="text-white">Bulfrano Gonzalez Lawn Service, LLC</span>
        </div>

        <div className="flex items-center gap-2">
          <StatusPill variant="in-progress">
            Service Trade Proposal Active
          </StatusPill>
          <span className="rounded-full border border-emerald-500/30 bg-emerald-950/50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300">
            2 Tiers Available
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-8">
          <PageIntro
            kicker="Executive Service Trade Proposal"
            title="Custom Website Build & Digital Partnership."
            lead="Prepared exclusively for Bulfrano Gonzalez Lawn Service, LLC. A high-performance website engineered to generate steady residential and commercial lawn care leads across Sarasota & Manatee County—structured as an equal trade for professional gardening services."
          />

          {/* Client Details Card Strip */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="tel:9417186278"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-2 text-xs font-semibold text-emerald-300 shadow-sm transition hover:bg-emerald-900/50"
            >
              <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{bulfranoClientProfile.phoneFormatted}</span>
            </a>

            <a
              href={`mailto:${bulfranoClientProfile.email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <svg className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>{bulfranoClientProfile.email}</span>
            </a>

            <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-slate-400">
              <svg className="h-4 w-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Area Code 941 • Sarasota & Manatee County</span>
            </div>
          </div>
        </div>

        {/* Client Emblem Badge Showcase */}
        <div className="lg:col-span-4 flex justify-center">
          <GlassPanel className="p-6 sm:p-8 flex flex-col items-center text-center max-w-sm w-full border-emerald-500/20 bg-gradient-to-b from-emerald-950/30 to-slate-950/70" hover>
            <BulfranoLogo variant="full" />
            <div className="mt-4 pt-4 border-t border-white/10 w-full flex items-center justify-around text-[11px] font-semibold text-slate-300">
              <span className="text-emerald-400">✓ Insured</span>
              <span>•</span>
              <span className="text-emerald-400">✓ Free Estimates</span>
              <span>•</span>
              <span className="text-emerald-400">✓ Veterans</span>
            </div>
          </GlassPanel>
        </div>
      </div>

      {/* Client Quote Card: Direct response to Bulfrano's message */}
      <PageSection className="mt-10 sm:mt-12">
        <GlassPanel className="border-l-4 border-emerald-400 p-6 sm:p-8 bg-gradient-to-r from-emerald-950/30 via-slate-950/70 to-slate-950/90 shadow-xl" hover>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-300 text-2xl border border-emerald-500/30">
              💬
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-emerald-400">
                Bulfrano's Request & Catalyst for this Pitch
              </p>
              <blockquote className="mt-2 text-base italic text-slate-200 sm:text-lg leading-relaxed">
                "{bulfranoClientProfile.originalClientMessage}"
              </blockquote>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                <span className="font-semibold text-white">Bulfrano Gonzalez</span>
                <span>•</span>
                <span>Bulfrano Gonzalez Lawn Service, LLC</span>
                <span>•</span>
                <span className="text-emerald-400">Contract Agreement Stage</span>
              </div>
            </div>
          </div>
        </GlassPanel>
      </PageSection>

      {/* Navigation Tabs for Easy Navigation */}
      <div className="mt-12 flex flex-wrap gap-2 border-b border-white/10 pb-4">
        {[
          { id: 'overview', label: '1. The 2 Tiers & Comparison', icon: '⚖️' },
          { id: 'preview', label: '2. Interactive Website Preview', icon: '📱' },
          { id: 'breakdown', label: '3. Written SOW Breakdown', icon: '📝' },
          { id: 'contract', label: '4. Mutual Contract Clauses', icon: '🤝' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all sm:text-sm ${
              activeTab === tab.id
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-950 ring-1 ring-emerald-400'
                : 'border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* SECTION 1: THE TWO TIERS */}
      {(activeTab === 'overview' || activeTab === 'contract') && (
        <PageSection className="mt-12 sm:mt-16" id="tiers-section">
          <SectionHeading
            id="tiers-heading"
            title="Two Clear Tiers for Our Service Trade"
            description="We have structured two distinct options so you can choose what best fits your goals: a one-time turnkey build, or an ongoing partnership with zero hosting costs and free lifetime updates."
          />

          {/* Tier Switcher & Quick Selector */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-2xl border border-white/15 bg-slate-900/90 p-1.5 shadow-xl">
              <button
                type="button"
                onClick={() => setSelectedTier('tier-1')}
                className={`rounded-xl px-5 py-2.5 text-xs font-bold transition-all sm:text-sm ${
                  selectedTier === 'tier-1'
                    ? 'bg-white/15 text-white shadow-md ring-1 ring-white/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Tier 1: Website Build
              </button>
              <button
                type="button"
                onClick={() => setSelectedTier('tier-2')}
                className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold transition-all sm:text-sm ${
                  selectedTier === 'tier-2'
                    ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-950 ring-1 ring-emerald-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>Tier 2: Build + Lifetime Support</span>
                <span className="rounded-full bg-emerald-900/80 px-2 py-0.5 text-[10px] font-bold text-emerald-200">
                  Recommended ⭐
                </span>
              </button>
            </div>
          </div>

          {/* Side by Side Tier Cards */}
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {proposalTiers.map((tier) => {
              const isSelected = selectedTier === tier.id
              const isTier2 = tier.id === 'tier-2'

              return (
                <GlassPanel
                  key={tier.id}
                  className={`relative p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                    isSelected
                      ? 'border-2 border-emerald-400/80 ring-2 ring-emerald-400/30 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950'
                      : 'border-white/15 bg-slate-950/70 hover:border-white/25'
                  }`}
                  hover
                >
                  {isTier2 && (
                    <div className="absolute -top-3.5 right-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-md shadow-emerald-950">
                      ★ Best Value Barter Partnership
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-400">
                        {tier.badge}
                      </span>
                      <span className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold text-slate-300">
                        {tier.retailValue}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-extrabold text-white sm:text-2xl">
                      {tier.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-emerald-300">
                      {tier.headline}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {tier.description}
                    </p>

                    {/* Trade Exchange Box */}
                    <div className="mt-5 rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-4">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                        Mutual Trade Exchange:
                      </p>
                      <p className="mt-1 text-xs text-slate-200">
                        <strong>Gardening Service Commitment:</strong> {tier.tradeCommitment}
                      </p>
                    </div>

                    {/* Key Deliverables Checklist */}
                    <div className="mt-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        What is Included in This Tier:
                      </p>
                      <ul className="mt-3 space-y-2.5 text-xs text-slate-300">
                        {tier.deliverablesList.map((deliv, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-500/30">
                              ✓
                            </span>
                            <span className="leading-snug">
                              {deliv.includes('EVERYTHING INCLUDED') ? (
                                <strong className="text-emerald-300 uppercase tracking-wide">
                                  {deliv}
                                </strong>
                              ) : (
                                deliv
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Selector */}
                  <div className="mt-8 pt-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedTier(tier.id)
                        setActiveTab('contract')
                      }}
                      className={`w-full rounded-xl py-3 text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                        isSelected
                          ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-950 hover:bg-emerald-400'
                          : 'border border-white/20 bg-white/10 text-white hover:bg-white/15'
                      }`}
                    >
                      <span>{isSelected ? '✓ Currently Selected Tier' : `Select ${tier.name}`}</span>
                      <span>→ View Contract Terms</span>
                    </button>
                  </div>
                </GlassPanel>
              )
            })}
          </div>

          {/* Deep Dive Spotlight on Tier 2 Perks */}
          <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-emerald-950/40 p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300 border border-emerald-500/30">
                  Why Tier 2 is the Premier Choice
                </span>
                <h4 className="mt-2 text-lg font-bold text-white sm:text-xl">
                  Perpetual Peace of Mind: No Hosting Fees & Unlimited Free Updates For Life
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-3xl">
                  In Florida lawn care, things change seasonally—prices shift, new before/after job photos roll in, hurricane season demands palm trimming promotions, and hosting bills usually cost $30–$100/month. Under Tier 2, Bulfrano never pays a penny, never deals with technical code, and gets unlimited updates via simple phone texts for life.
                </p>
              </div>

              <div className="shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedTier('tier-2')
                    setActiveTab('contract')
                  }}
                  className="rounded-xl bg-emerald-500 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-emerald-950 hover:bg-emerald-400 transition"
                >
                  Choose Tier 2 Partnership →
                </button>
              </div>
            </div>

            {/* 4 Feature Columns of Tier 2 */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
                <span className="text-2xl">⚡</span>
                <h5 className="mt-2 text-xs font-bold text-white">Zero Hosting Invoices</h5>
                <p className="mt-1 text-[11px] text-slate-400">
                  Market Motion covers edge cloud hosting, SSL security, and domain renewals indefinitely.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
                <span className="text-2xl">📸</span>
                <h5 className="mt-2 text-xs font-bold text-white">Text-to-Publish Photos</h5>
                <p className="mt-1 text-[11px] text-slate-400">
                  Finish a great sod or palm job? Text the photos from your phone; we edit and upload them within 24–48h.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
                <span className="text-2xl">🌪️</span>
                <h5 className="mt-2 text-xs font-bold text-white">Seasonal Marketing Refreshes</h5>
                <p className="mt-1 text-[11px] text-slate-400">
                  Pre-hurricane palm pruning push, spring mulch specials, and rainy season sprinkler tuneups.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
                <span className="text-2xl">📞</span>
                <h5 className="mt-2 text-xs font-bold text-white">Direct VIP Hotline</h5>
                <p className="mt-1 text-[11px] text-slate-400">
                  Direct phone & text access for same-day turnaround whenever you want to change prices or services.
                </p>
              </div>
            </div>
          </div>
        </PageSection>
      )}

      {/* SECTION 2: INTERACTIVE LIVE WEBSITE PREVIEW */}
      {activeTab === 'preview' && (
        <PageSection className="mt-12 sm:mt-16" id="preview-section">
          <SectionHeading
            id="preview-heading"
            title="Interactive Website Blueprint Preview"
            description="Experience how Bulfrano Gonzalez Lawn Service, LLC will appear to local Florida homeowners. Test the mobile and desktop views, try the bilingual Spanish/English toggle, and interact with the 5 core services."
          />

          <div className="mt-8">
            <BulfranoMockupPreview />
          </div>

          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setActiveTab('breakdown')}
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-2.5 text-xs font-bold text-white hover:bg-white/20 transition"
            >
              <span>Next: View Written SOW Breakdown</span>
              <span>→</span>
            </button>
          </div>
        </PageSection>
      )}

      {/* SECTION 3: WRITTEN BREAKDOWN OF EXACTLY WHAT WE WILL DO */}
      {(activeTab === 'breakdown' || activeTab === 'overview') && (
        <PageSection className="mt-16 sm:mt-20" id="breakdown-section">
          <SectionHeading
            id="breakdown-heading"
            title="Written Breakdown: Exactly What We Will Do On The Site"
            description="Bulfrano requested: 'please provide a written breakdown of exactly what you would do on the site so I can review it.' Below is the complete phase-by-phase scope of work from asset intake to live production launch."
          />

          {/* Phase Cards Timeline */}
          <div className="mt-8 space-y-4">
            {phaseBreakdown.map((phase, idx) => {
              const isLifetime = phase.phase.includes('Tier 2')

              return (
                <GlassPanel
                  key={idx}
                  className={`p-6 sm:p-7 border-white/15 transition-all ${
                    isLifetime
                      ? 'border-emerald-500/40 bg-gradient-to-r from-emerald-950/40 via-slate-950 to-slate-950'
                      : 'bg-slate-950/60'
                  }`}
                  hover
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <div className="flex items-center gap-3">
                      <span className={`rounded-lg px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-wider ${
                        isLifetime
                          ? 'bg-emerald-500 text-white'
                          : 'bg-white/10 text-cyan-300'
                      }`}>
                        {phase.phase}
                      </span>
                      <h4 className="text-base font-bold text-white sm:text-lg">
                        {phase.title}
                      </h4>
                    </div>

                    <span className="font-mono text-xs text-slate-400">
                      {phase.timeframe}
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-300">
                    {phase.summary}
                  </p>

                  <div className="mt-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Detailed Line-Item Deliverables:
                    </p>
                    <ul className="mt-2 grid gap-2 sm:grid-cols-2 text-xs text-slate-300">
                      {phase.deliverables.map((d, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span className="text-emerald-400 font-bold">›</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassPanel>
              )
            })}
          </div>

          {/* Detailed Feature Comparison Table */}
          <div className="mt-12 rounded-2xl border border-white/15 bg-slate-950/80 p-6 overflow-x-auto">
            <h4 className="text-base font-bold text-white sm:text-lg mb-4">
              Side-by-Side Feature Matrix: Tier 1 vs Tier 2
            </h4>

            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 uppercase tracking-wider">
                  <th className="py-3 px-4 font-semibold">Feature / Capability</th>
                  <th className="py-3 px-4 font-semibold text-center w-48">
                    Tier 1: Website Build
                  </th>
                  <th className="py-3 px-4 font-semibold text-center w-56 text-emerald-300">
                    Tier 2: Build + Lifetime Support ★
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparisonFeatures.map((feat, i) => (
                  <tr key={i} className="hover:bg-white/[0.02]">
                    <td className="py-3 px-4 font-medium text-slate-200">
                      <div>{feat.name}</div>
                      {feat.tooltip && (
                        <div className="text-[10px] text-slate-500">{feat.tooltip}</div>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {typeof feat.tier1 === 'boolean' ? (
                        feat.tier1 ? (
                          <span className="text-emerald-400 font-bold">✓ Included</span>
                        ) : (
                          <span className="text-slate-600">—</span>
                        )
                      ) : (
                        <span className="text-slate-300 font-medium">{feat.tier1}</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center bg-emerald-950/20">
                      {typeof feat.tier2 === 'boolean' ? (
                        feat.tier2 ? (
                          <span className="text-emerald-400 font-bold">✓ Included</span>
                        ) : (
                          <span className="text-slate-600">—</span>
                        )
                      ) : (
                        <span className="text-emerald-300 font-bold">{feat.tier2}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </PageSection>
      )}

      {/* SECTION 4: CONTRACT TERMS & STATEMENT OF WORK (SOW) */}
      {(activeTab === 'contract' || activeTab === 'overview') && (
        <PageSection className="mt-16 sm:mt-20" id="contract-section">
          <SectionHeading
            id="contract-heading"
            title="Mutual Contract Terms & Ready-to-Sign Statement of Work"
            description="Bulfrano noted: 'We can then draw up a contract—which I’ll send over—to ensure we’re both in agreement: I’ll provide the gardening services, and you’ll handle the website work.' Here is the exact contractual clause text ready to drop into the agreement."
          />

          <div className="mt-8 rounded-2xl border border-white/15 bg-slate-900/90 p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                  Ready-to-Copy Contract Scope of Work
                </span>
                <h4 className="text-lg font-bold text-white">
                  {selectedTier === 'tier-1'
                    ? 'Statement of Work: Tier 1 (Turnkey Build Trade)'
                    : 'Statement of Work: Tier 2 (Continuous Partnership Trade)'}
                </h4>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopySow}
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-emerald-400 transition active:scale-95"
                >
                  {copiedContract ? (
                    <>
                      <span>✓</span>
                      <span>Copied SOW to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                      <span>Copy SOW to Clipboard</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${bulfranoClientProfile.email}?subject=${encodeURIComponent(
                    `Contract Terms: ${currentTierData.name} - Bulfrano Gonzalez Lawn Service`
                  )}&body=${encodeURIComponent(currentSowText)}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold text-slate-300 hover:bg-white/10 hover:text-white transition"
                >
                  <svg className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email to Bulfrano</span>
                </a>
              </div>
            </div>

            {/* Contract SOW Code / Box */}
            <div className="mt-4 relative">
              <pre className="overflow-x-auto rounded-xl border border-white/10 bg-slate-950 p-4 font-mono text-xs text-slate-300 leading-relaxed whitespace-pre-wrap max-h-96">
                {currentSowText}
              </pre>

              {copiedContract && (
                <div
                  id={copyToastId}
                  className="absolute bottom-4 right-4 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-xl animate-fade-in"
                >
                  ✓ SOW Clauses copied! Ready to paste into your contract doc.
                </div>
              )}
            </div>

            {/* Clear Side-by-Side Trade Commitment Matrix */}
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/30 p-5">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <span>🌿</span>
                  <span>Bulfrano Gonzalez Delivers:</span>
                </div>
                <p className="mt-2 text-xs text-slate-200 leading-relaxed">
                  {currentTierData.whatBulfranoProvides}
                </p>
                <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                  <span>✓ Licensed & Insured</span>
                  <span>•</span>
                  <span>✓ Professional Equipment</span>
                  <span>•</span>
                  <span>✓ Scheduled Service</span>
                </div>
              </div>

              <div className="rounded-xl border border-cyan-500/30 bg-cyan-950/30 p-5">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
                  <span>💻</span>
                  <span>Market Motion Agency Delivers:</span>
                </div>
                <p className="mt-2 text-xs text-slate-200 leading-relaxed">
                  {currentTierData.whatMarketMotionProvides}
                </p>
                <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                  <span>✓ Mobile Optimized</span>
                  <span>•</span>
                  <span>✓ Area 941 Local SEO</span>
                  <span>•</span>
                  <span>✓ Bilingual Ready</span>
                </div>
              </div>
            </div>
          </div>
        </PageSection>
      )}

      {/* SECTION 5: FREQUENTLY ASKED QUESTIONS */}
      <PageSection className="mt-16 sm:mt-20">
        <SectionHeading
          id="faq-heading"
          title="Frequently Asked Questions About the Trade"
          description="Clear answers on how the trade operates, how updates are submitted, and how we handle seasonal Florida yard care."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {proposalFaqs.map((faq, i) => (
            <GlassPanel key={i} className="p-5 sm:p-6 bg-slate-950/60" hover>
              <h4 className="text-sm font-bold text-white leading-snug">
                {faq.q}
              </h4>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                {faq.a}
              </p>
            </GlassPanel>
          ))}
        </div>
      </PageSection>

      {/* SECTION 6: READY TO SIGN / CALL TO ACTION */}
      <PageSection className="mt-16 sm:mt-20">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-emerald-950/60 via-slate-950 to-slate-900 p-8 sm:p-12 text-center shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-emerald-300 border border-emerald-500/30">
              Next Step: Draw Up Agreement
            </span>

            <h3 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">
              Ready to Lock In Our Service Trade?
            </h3>

            <p className="mt-3 text-xs sm:text-base text-slate-300 leading-relaxed">
              Review this written breakdown, select between <strong>Tier 1</strong> or <strong>Tier 2</strong>, and let's finalize the contract. Bulfrano provides the lawn care; Market Motion provides the website.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:9417186278"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-emerald-950 hover:brightness-110 active:scale-95 transition"
              >
                <span>📞 Call Bulfrano (941) 718-6278</span>
              </a>

              <a
                href={`mailto:${bulfranoClientProfile.email}?subject=${encodeURIComponent(
                  'Acceptance & Contract Signing - Website Trade'
                )}&body=${encodeURIComponent(
                  `Hi Bulfrano,\n\nWe have reviewed the proposal and are ready to finalize the contract for ${currentTierData.name}.\n\nPlease send over the contract draft so we can sign and begin work!\n\nBest regards,\nMarket Motion Agency`
                )}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/15 active:scale-95 transition"
              >
                <span>✉️ Email Contract Confirmation</span>
              </a>
            </div>

            <p className="mt-4 text-[11px] text-slate-400">
              Bulfrano Gonzalez Lawn Service, LLC • Insured • Free Estimates • Veteran Discounts
            </p>
          </div>
        </div>
      </PageSection>
    </PageShell>
  )
}
