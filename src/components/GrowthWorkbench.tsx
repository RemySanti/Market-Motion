import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useCallback, useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { SectionHeading } from './SectionHeading'
import type { SubTabId } from '../site/growthWorkbench'
import {
  WORKBENCH_SUBTABS,
  WORKBENCH_TOPS,
  type WorkbenchStep,
} from '../site/growthWorkbench'

const accentRing: Record<string, string> = {
  cyan: 'ring-cyan-400/40 border-cyan-400/35 bg-cyan-500/10',
  violet: 'ring-violet-400/40 border-violet-400/35 bg-violet-500/10',
  amber: 'ring-amber-400/40 border-amber-400/35 bg-amber-500/10',
}

const accentText: Record<string, string> = {
  cyan: 'text-cyan-200',
  violet: 'text-violet-200',
  amber: 'text-amber-200',
}

const accentBar: Record<string, string> = {
  cyan: 'bg-cyan-400',
  violet: 'bg-violet-400',
  amber: 'bg-amber-400',
}

const stepActive: Record<string, string> = {
  cyan: 'bg-cyan-500/15 text-white ring-1 ring-cyan-400/25',
  violet: 'bg-violet-500/15 text-white ring-1 ring-violet-400/25',
  amber: 'bg-amber-500/15 text-white ring-1 ring-amber-400/25',
}

function IconStrategy({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path
        d="M4 5h7v7H4V5Zm9 0h7v4h-7V5ZM4 14h7v5H4v-5Zm9 3h7v2h-7v-2Z"
        className={active ? 'fill-white' : 'fill-slate-400'}
      />
    </svg>
  )
}

function IconSystems({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path
        d="M8 7h8v3H8V7Zm-3 5h14v2H5v-2Zm3 4h8v3H8v-3Z"
        className={active ? 'fill-white' : 'fill-slate-400'}
      />
    </svg>
  )
}

function IconScale({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path
        d="M5 18V6l4 4 3-5 4 7 3-3v9H5Z"
        className={active ? 'fill-white' : 'fill-slate-400'}
      />
    </svg>
  )
}

const topIcons = [IconStrategy, IconSystems, IconScale]

function PreviewChrome({
  variant,
  step,
  accent,
}: {
  variant: SubTabId
  step: WorkbenchStep
  accent: string
}) {
  const bar = accentBar[accent] ?? 'bg-cyan-400'

  return (
    <div className="relative mx-auto flex h-full min-h-[280px] w-full max-w-[min(100%,280px)] flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-950 to-slate-900 shadow-2xl sm:min-h-[360px] sm:max-w-[300px]">
      <div className={`h-1 w-full ${bar}`} aria-hidden />
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
        <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
          {variant === 'pages' && 'Live page'}
          {variant === 'journeys' && 'Journey preview'}
          {variant === 'design' && 'Design system'}
        </span>
        <span className="h-2 w-2 rounded-full bg-emerald-400/80" aria-hidden />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        {variant === 'pages' && (
          <div className="space-y-2" aria-hidden>
            <div className="h-2 w-[60%] rounded bg-white/10" />
            <div className="h-2 w-full rounded bg-white/5" />
            <div className="h-2 w-[80%] rounded bg-white/5" />
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="h-14 rounded-lg bg-white/5" />
              <div className="h-14 rounded-lg bg-white/5" />
              <div className="h-14 rounded-lg bg-white/5" />
            </div>
          </div>
        )}
        {variant === 'journeys' && (
          <div className="flex flex-1 flex-col justify-center gap-2 py-2" aria-hidden>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-8 w-8 shrink-0 rounded-full border border-white/10 bg-white/5" />
                {i < 3 && (
                  <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                )}
              </div>
            ))}
          </div>
        )}
        {variant === 'design' && (
          <div className="mt-2 grid grid-cols-4 gap-2" aria-hidden>
            {['bg-cyan-400/70', 'bg-violet-400/70', 'bg-amber-400/70', 'bg-white/20'].map(
              (c, i) => (
                <div key={i} className={`aspect-square rounded-xl ${c}`} />
              ),
            )}
          </div>
        )}
        <div className="mt-auto space-y-2 rounded-2xl border border-white/10 bg-black/40 p-4">
          <p className={`font-mono text-[10px] uppercase tracking-widest ${accentText[accent]}`}>
            {step.preview.eyebrow}
          </p>
          <p className="text-sm font-semibold leading-snug text-white">{step.preview.title}</p>
          <p className="text-xs leading-relaxed text-slate-400">{step.preview.body}</p>
          <span className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500/30 to-violet-500/25 py-2.5 text-center text-xs font-semibold text-white">
            {step.preview.button}
          </span>
        </div>
      </div>
    </div>
  )
}

export function GrowthWorkbench() {
  const reduceMotion = useReducedMotion()
  const baseId = useId()
  const [topIdx, setTopIdx] = useState(0)
  const [subIdx, setSubIdx] = useState(0)
  const [stepIdx, setStepIdx] = useState(0)
  const subTabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const top = WORKBENCH_TOPS[topIdx]
  const sub = WORKBENCH_SUBTABS[subIdx]
  const step = top.steps[stepIdx] ?? top.steps[0]
  const variant = sub.id

  const setTop = useCallback((i: number) => {
    setTopIdx(i)
    setSubIdx(0)
    setStepIdx(0)
  }, [])

  const onTopKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault()
      setTop((topIdx + 1) % WORKBENCH_TOPS.length)
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault()
      setTop((topIdx - 1 + WORKBENCH_TOPS.length) % WORKBENCH_TOPS.length)
    }
    if (e.key === 'Home') {
      e.preventDefault()
      setTop(0)
    }
    if (e.key === 'End') {
      e.preventDefault()
      setTop(WORKBENCH_TOPS.length - 1)
    }
  }

  const onSubKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault()
      const n = (subIdx + 1) % WORKBENCH_SUBTABS.length
      setSubIdx(n)
      subTabRefs.current[n]?.focus()
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault()
      const n = (subIdx - 1 + WORKBENCH_SUBTABS.length) % WORKBENCH_SUBTABS.length
      setSubIdx(n)
      subTabRefs.current[n]?.focus()
    }
  }

  const onStepKeyDown = (e: React.KeyboardEvent, index: number) => {
    const max = top.steps.length
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setStepIdx(Math.min(max - 1, index + 1))
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setStepIdx(Math.max(0, index - 1))
    }
    if (e.key === 'Home') {
      e.preventDefault()
      setStepIdx(0)
    }
    if (e.key === 'End') {
      e.preventDefault()
      setStepIdx(max - 1)
    }
  }

  const topPanelId = `${baseId}-panel`
  const carouselNext = () => setTop((topIdx + 1) % WORKBENCH_TOPS.length)
  const carouselPrev = () => setTop((topIdx - 1 + WORKBENCH_TOPS.length) % WORKBENCH_TOPS.length)

  return (
    <section className="mt-16 sm:mt-24" data-reveal aria-labelledby={`${baseId}-workbench-heading`}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          className="max-w-2xl"
          id={`${baseId}-workbench-heading`}
          title="Try the growth workbench"
          description="Flip between Strategy, Systems, and Scale, then step through the journey the way we sketch it with teams—closer to a product tour than a slide."
        />
      </div>

      <div
        className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur-xl sm:p-6"
        role="region"
        aria-label="Interactive growth preview"
      >
        <div
          className="flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:justify-center sm:overflow-visible [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Workbench modules"
          onKeyDown={onTopKeyDown}
        >
          {WORKBENCH_TOPS.map((t, i) => {
            const Icon = topIcons[i] ?? IconStrategy
            const selected = i === topIdx
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                id={`${baseId}-top-${i}`}
                aria-selected={selected}
                aria-controls={topPanelId}
                tabIndex={selected ? 0 : -1}
                className={[
                  'flex min-w-[104px] shrink-0 snap-start touch-manipulation flex-col items-center gap-2 rounded-2xl border px-3 py-3 text-xs font-semibold transition sm:px-4',
                  selected
                    ? `ring-2 ${accentRing[t.accent]} text-white`
                    : 'border-transparent bg-white/[0.02] text-slate-400 hover:border-white/10 hover:bg-white/[0.04] hover:text-slate-200',
                ].join(' ')}
                onClick={() => setTop(i)}
              >
                <span
                  className={[
                    'flex h-11 w-11 items-center justify-center rounded-xl border',
                    selected ? 'border-white/20 bg-white/10' : 'border-white/10 bg-black/30',
                  ].join(' ')}
                >
                  <Icon active={selected} />
                </span>
                {t.label}
              </button>
            )
          })}
        </div>

        <div
          id={topPanelId}
          role="tabpanel"
          aria-labelledby={`${baseId}-top-${topIdx}`}
          className="relative mt-5 rounded-2xl border border-cyan-500/15 bg-[rgba(4,6,14,0.55)] p-3 shadow-inner sm:mt-6 sm:p-6"
        >
          <button
            type="button"
            onClick={carouselPrev}
            className="absolute left-2 top-[52%] z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/90 text-slate-900 shadow-lg lg:flex"
            aria-label="Previous module"
          >
            <span aria-hidden className="text-lg">
              ‹
            </span>
          </button>
          <button
            type="button"
            onClick={carouselNext}
            className="absolute right-2 top-[52%] z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/90 text-slate-900 shadow-lg lg:flex"
            aria-label="Next module"
          >
            <span aria-hidden className="text-lg">
              ›
            </span>
          </button>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 border-b border-white/5 pb-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">
                {top.label} call
              </span>
            </div>

            <div
              className="flex min-w-0 flex-wrap gap-x-3 gap-y-2 border-b border-white/5 pb-3"
              role="tablist"
              aria-label="Workbench views"
              onKeyDown={onSubKeyDown}
            >
              {WORKBENCH_SUBTABS.map((s, i) => {
                const active = i === subIdx
                return (
                  <button
                    key={s.id}
                    ref={(el) => {
                      subTabRefs.current[i] = el
                    }}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    tabIndex={active ? 0 : -1}
                    className={[
                      'relative pb-2 text-xs font-semibold uppercase tracking-widest transition',
                      active ? 'text-white' : 'text-slate-500 hover:text-slate-300',
                    ].join(' ')}
                    onClick={() => {
                      setSubIdx(i)
                      setStepIdx(0)
                    }}
                  >
                    {s.label}
                    {active && (
                      <span
                        className={`absolute inset-x-0 bottom-0 h-0.5 rounded-full ${accentBar[top.accent]}`}
                        aria-hidden
                      />
                    )}
                  </button>
                )
              })}
            </div>

            <div className="grid min-h-[380px] min-w-0 flex-1 gap-5 sm:min-h-[420px] sm:gap-6 lg:min-h-[460px] lg:grid-cols-[minmax(0,220px)_minmax(0,1fr)_minmax(0,280px)] lg:items-start">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                  Pages
                </p>
                <ul className="mt-3 space-y-1" aria-label={`${top.label} steps`}>
                  {top.steps.map((s, i) => {
                    const active = i === stepIdx
                    return (
                      <li key={s.id}>
                        <button
                          id={`${baseId}-step-${i}`}
                          type="button"
                          aria-current={active ? 'step' : undefined}
                          className={[
                            'flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition',
                            active
                              ? stepActive[top.accent] ?? stepActive.cyan
                              : 'text-slate-400 hover:bg-white/[0.04] hover:text-slate-200',
                          ].join(' ')}
                          onClick={() => setStepIdx(i)}
                          onKeyDown={(e) => onStepKeyDown(e, i)}
                        >
                          <span className="font-mono text-xs text-slate-500">{i + 1}.</span>
                          <span className="font-medium">{s.label}</span>
                        </button>
                      </li>
                    )
                  })}
                </ul>
                <div className="mt-6 border-t border-white/5 pt-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                    Results
                  </p>
                  <p className="mt-2 text-xs text-slate-400">Thanks—here are the numbers.</p>
                </div>
              </div>

              <div className="flex min-w-0 items-center justify-center border-t border-white/5 pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${top.id}-${sub.id}-${step.id}`}
                    initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                    transition={{ duration: reduceMotion ? 0 : 0.22 }}
                    className="w-full"
                  >
                    <PreviewChrome variant={variant} step={step} accent={top.accent} />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="border-t border-white/5 pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 p-4 sm:p-6">
                  <h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl">
                    {step.panel.headline}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {step.panel.paragraph}
                  </p>
                  <Link
                    to={step.panel.href}
                    className="mt-5 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-cyan-100"
                  >
                    {step.panel.cta}
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
