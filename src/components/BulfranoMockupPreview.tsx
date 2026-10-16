import { useState } from 'react'
import { BulfranoLogo } from './BulfranoLogo'
import { bulfranoServices } from '../site/bulfranoPitchData'

export function BulfranoMockupPreview() {
  const [device, setDevice] = useState<'mobile' | 'desktop'>('mobile')
  const [lang, setLang] = useState<'en' | 'es'>('en')
  const [activeServiceId, setActiveServiceId] = useState<string>('lawn-maintenance')
  const [beforeAfterToggle, setBeforeAfterToggle] = useState<'after' | 'before'>('after')
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [sampleForm, setSampleForm] = useState({
    name: 'Sarah M.',
    phone: '(941) 555-0198',
    service: 'Lawn Maintenance',
    city: 'Lakewood Ranch',
  })

  const activeService = bulfranoServices.find((s) => s.id === activeServiceId) || bulfranoServices[0]

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 4000)
  }

  return (
    <div className="w-full">
      {/* Top Controller Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-900/80 p-3 backdrop-blur-xl sm:px-5 sm:py-3.5">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold tracking-wide text-white uppercase sm:text-sm">
            Interactive Website Blueprint Preview
          </span>
          <span className="hidden rounded-full border border-emerald-500/30 bg-emerald-950/60 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300 md:inline">
            Live Functional Prototype
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Device Toggle */}
          <div className="inline-flex rounded-xl border border-white/10 bg-black/40 p-1">
            <button
              type="button"
              onClick={() => setDevice('mobile')}
              className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition-all ${
                device === 'mobile'
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              aria-label="Switch to Mobile View"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span>Mobile Phone</span>
            </button>
            <button
              type="button"
              onClick={() => setDevice('desktop')}
              className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition-all ${
                device === 'desktop'
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              aria-label="Switch to Desktop View"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Desktop / Tablet</span>
            </button>
          </div>

          {/* Bilingual Toggle */}
          <div className="inline-flex rounded-xl border border-emerald-500/20 bg-emerald-950/40 p-1">
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`rounded-lg px-2 py-1 text-xs font-semibold transition-all ${
                lang === 'en' ? 'bg-emerald-600 text-white' : 'text-emerald-400 hover:text-emerald-200'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang('es')}
              className={`rounded-lg px-2 py-1 text-xs font-semibold transition-all ${
                lang === 'es' ? 'bg-emerald-600 text-white' : 'text-emerald-400 hover:text-emerald-200'
              }`}
            >
              ES
            </button>
          </div>
        </div>
      </div>

      {/* Frame Container */}
      <div className="mt-4 flex justify-center overflow-x-auto pb-4">
        <div
          className={`transition-all duration-300 ${
            device === 'mobile'
              ? 'w-full max-w-[420px] rounded-[38px] border-[8px] border-slate-800 bg-slate-950 p-1 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.8),0_0_40px_-10px_rgba(34,197,94,0.2)]'
              : 'w-full max-w-4xl rounded-2xl border border-white/15 bg-slate-950 p-2 shadow-2xl'
          }`}
        >
          {/* Mobile Speaker / Notch */}
          {device === 'mobile' && (
            <div className="mx-auto mb-2 mt-1 h-4 w-28 rounded-full bg-slate-800 flex items-center justify-center">
              <span className="h-2 w-2 rounded-full bg-slate-900 mr-2" />
              <span className="h-1 w-8 rounded-full bg-slate-700" />
            </div>
          )}

          {/* Inner Simulated Web Browser Frame */}
          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-slate-950 text-slate-100">
            {/* Simulated Address Bar */}
            <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/90 px-3 py-2 text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-500/80" />
                <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-1.5 rounded-md bg-black/50 px-3 py-0.5 font-mono text-[10px] text-emerald-400">
                <svg className="h-2.5 w-2.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>gonzalezlawnservice.com</span>
              </div>
              <span className="text-[10px] text-slate-500">FL 941</span>
            </div>

            {/* Mock Website Content Header */}
            <header className="border-b border-emerald-900/40 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-4 py-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <BulfranoLogo variant="emblem" className="h-10 w-10 sm:h-12 sm:w-12" />
                  <div>
                    <p className="font-extrabold tracking-tight text-white text-xs sm:text-sm">
                      BULFRANO GONZALEZ
                    </p>
                    <p className="text-[9px] font-bold tracking-wider text-emerald-400 uppercase sm:text-[10px]">
                      LAWN SERVICE, LLC
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2">
                  <a
                    href="tel:9417186278"
                    className="inline-flex items-center gap-1 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-2.5 py-1.5 text-xs font-bold text-white shadow-md shadow-emerald-900/40 transition hover:brightness-110 active:scale-95"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-[11px] font-bold">
                      {lang === 'en' ? 'Call (941) 718-6278' : 'Llamar (941) 718-6278'}
                    </span>
                  </a>
                </div>
              </div>
            </header>

            {/* Mock Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 px-4 py-6 sm:px-8 sm:py-8">
              <div className="relative z-10 text-center">
                {/* Complete Landscape Solutions Pill */}
                <div className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-3 py-1 text-[10px] font-semibold text-emerald-300">
                  <span>🌴</span>
                  <span>
                    {lang === 'en'
                      ? 'PROFESSIONAL • RELIABLE • QUALITY'
                      : 'PROFESIONAL • CONFIABLE • CALIDAD'}
                  </span>
                  <span>🌿</span>
                </div>

                <h3 className="mt-3 text-lg font-extrabold tracking-tight text-white sm:text-2xl">
                  {lang === 'en'
                    ? 'Complete Landscape Solutions in Sarasota & Manatee County'
                    : 'Soluciones Completas de Jardinería en Sarasota y Manatee'}
                </h3>

                <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                  {lang === 'en'
                    ? 'From weekly lawn maintenance to custom palm care, sod, and fresh mulch. Professional work done right.'
                    : 'Desde mantenimiento semanal de césped hasta poda de palmeras, nuevo césped y mantillo. Trabajo profesional y garantizado.'}
                </p>

                {/* Badge Strip */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[10px] font-medium text-slate-300 sm:text-xs">
                  <span className="inline-flex items-center gap-1 rounded-md bg-emerald-950/50 border border-emerald-500/20 px-2 py-0.5 text-emerald-300">
                    ✓ {lang === 'en' ? 'Fully Insured' : 'Asegurado'}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-emerald-950/50 border border-emerald-500/20 px-2 py-0.5 text-emerald-300">
                    ✓ {lang === 'en' ? 'Free Estimates' : 'Estimados Gratis'}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-emerald-950/50 border border-emerald-500/20 px-2 py-0.5 text-emerald-300">
                    ✓ {lang === 'en' ? 'Veteran Discounts' : 'Descuento para Veteranos'}
                  </span>
                </div>

                {/* Direct Action Buttons */}
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  <a
                    href="tel:9417186278"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-emerald-900/50 hover:bg-emerald-400"
                  >
                    <span>📞</span>
                    <span>{lang === 'en' ? 'Call 941-718-6278' : 'Llamar 941-718-6278'}</span>
                  </a>
                  <a
                    href="#mockup-estimate-form"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white hover:bg-white/10"
                  >
                    <span>📋</span>
                    <span>{lang === 'en' ? 'Get Free Estimate' : 'Pedir Estimado'}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* 5 Core Services Selector */}
            <div className="border-t border-b border-white/10 bg-slate-900/70 p-3 sm:p-5">
              <div className="text-center mb-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                  {lang === 'en' ? 'Our 5 Core Specialties' : 'Nuestras 5 Especialidades'}
                </p>
                <h4 className="text-sm font-bold text-white sm:text-base">
                  {lang === 'en' ? 'Tap Any Service To View Scope' : 'Toque un Servicio Para Ver Detalles'}
                </h4>
              </div>

              {/* Service Badges Row */}
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
                {bulfranoServices.map((svc) => {
                  const isSelected = svc.id === activeServiceId
                  return (
                    <button
                      key={svc.id}
                      type="button"
                      onClick={() => setActiveServiceId(svc.id)}
                      className={`flex flex-col items-center justify-center rounded-xl p-2.5 text-center transition-all ${
                        isSelected
                          ? 'border border-emerald-400 bg-emerald-950/60 text-white shadow-md shadow-emerald-950'
                          : 'border border-white/5 bg-slate-800/40 text-slate-300 hover:border-emerald-500/30 hover:bg-slate-800'
                      }`}
                    >
                      <span className="text-lg mb-1">
                        {svc.id === 'lawn-maintenance' && '🌱'}
                        {svc.id === 'landscape-design' && '✂️'}
                        {svc.id === 'tree-palm-care' && '🌴'}
                        {svc.id === 'irrigation-systems' && '💧'}
                        {svc.id === 'stone-mulch-cleanups' && '🪨'}
                      </span>
                      <span className="text-[11px] font-bold leading-tight">
                        {lang === 'en' ? svc.title : svc.titleEs}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Active Service Detail Panel */}
              <div className="mt-3 rounded-xl border border-emerald-500/20 bg-emerald-950/30 p-3.5 sm:p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h5 className="text-xs font-bold text-emerald-300 sm:text-sm">
                      {lang === 'en' ? activeService.title : activeService.titleEs}
                    </h5>
                    <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                      {lang === 'en' ? activeService.fullDesc : activeService.shortDescEs}
                    </p>
                  </div>
                </div>

                <div className="mt-3 grid gap-1.5 text-[11px] text-slate-300 sm:grid-cols-2">
                  {activeService.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Before / After Showcase Section */}
            <div className="p-3 sm:p-5 bg-slate-950 border-b border-white/10">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                    {lang === 'en' ? 'Proof of Quality' : 'Prueba de Calidad'}
                  </p>
                  <p className="text-xs font-bold text-white sm:text-sm">
                    {lang === 'en' ? 'Before & After Florida Transformations' : 'Transformaciones Antes y Después'}
                  </p>
                </div>
                {/* Before/After Toggle */}
                <div className="inline-flex rounded-lg border border-white/15 bg-slate-900 p-0.5">
                  <button
                    type="button"
                    onClick={() => setBeforeAfterToggle('before')}
                    className={`rounded-md px-2 py-0.5 text-[10px] font-semibold ${
                      beforeAfterToggle === 'before'
                        ? 'bg-amber-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Before
                  </button>
                  <button
                    type="button"
                    onClick={() => setBeforeAfterToggle('after')}
                    className={`rounded-md px-2 py-0.5 text-[10px] font-semibold ${
                      beforeAfterToggle === 'after'
                        ? 'bg-emerald-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    After (Clean)
                  </button>
                </div>
              </div>

              {/* Visual Result Card */}
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-4">
                <div className="flex items-center justify-between">
                  <span className={`inline-block rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                    beforeAfterToggle === 'after'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  }`}>
                    {beforeAfterToggle === 'after'
                      ? '✓ Completed: Pristine Palms & Mulch'
                      : '⚠️ Before: Overgrown & Storm Debris'}
                  </span>
                  <span className="text-[10px] text-slate-400">Lakewood Ranch, FL</span>
                </div>

                <div className="mt-3 rounded-lg border border-white/5 bg-slate-950/60 p-3 text-xs text-slate-300">
                  {beforeAfterToggle === 'after' ? (
                    <p>
                      <strong>Finished Result:</strong> Healthy canopy lifting on 6 Queen Palms, St. Augustine sod cleanly edged along curb, and 12 yards of deep-black shredded pine mulch installed with sharp trench borders.
                    </p>
                  ) : (
                    <p>
                      <strong>Initial State:</strong> Heavy brown fronds dropping seed pods onto driveway, grass encroaching on sidewalk by 6 inches, and old faded mulch washed away from summer rainstorms.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Mock Free Estimate Request Form */}
            <div id="mockup-estimate-form" className="p-4 sm:p-6 bg-slate-900/90">
              <div className="text-center mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                  {lang === 'en' ? 'Direct Inbound Lead Generator' : 'Generador Directo de Clientes'}
                </span>
                <h4 className="text-sm font-bold text-white sm:text-base">
                  {lang === 'en' ? 'Request a Free Estimate / Estimados Gratis' : 'Solicite un Estimado Gratis'}
                </h4>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {lang === 'en'
                    ? 'Inquiries route straight to BulfranoGonzalez@iCloud.com and trigger a phone alert'
                    : 'Las solicitudes van directo a su correo y activan una alerta en su teléfono'}
                </p>
              </div>

              {formSubmitted ? (
                <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/60 p-4 text-center">
                  <span className="text-2xl">🎉</span>
                  <p className="mt-1 text-xs font-bold text-emerald-300">
                    {lang === 'en' ? 'Quote Request Dispatched!' : '¡Solicitud Enviada con Éxito!'}
                  </p>
                  <p className="mt-0.5 text-[10px] text-slate-300">
                    Delivered to BulfranoGonzalez@iCloud.com with caller details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-2 text-xs">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] font-medium text-slate-400 mb-0.5">
                        {lang === 'en' ? 'Homeowner Name' : 'Nombre'}
                      </label>
                      <input
                        type="text"
                        value={sampleForm.name}
                        onChange={(e) => setSampleForm({ ...sampleForm, name: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-slate-950 px-2.5 py-1.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-medium text-slate-400 mb-0.5">
                        {lang === 'en' ? 'Phone Number' : 'Teléfono'}
                      </label>
                      <input
                        type="text"
                        value={sampleForm.phone}
                        onChange={(e) => setSampleForm({ ...sampleForm, phone: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-slate-950 px-2.5 py-1.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] font-medium text-slate-400 mb-0.5">
                        {lang === 'en' ? 'City / Area' : 'Ciudad / Área'}
                      </label>
                      <input
                        type="text"
                        value={sampleForm.city}
                        onChange={(e) => setSampleForm({ ...sampleForm, city: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-slate-950 px-2.5 py-1.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-medium text-slate-400 mb-0.5">
                        {lang === 'en' ? 'Service Needed' : 'Servicio'}
                      </label>
                      <select
                        value={sampleForm.service}
                        onChange={(e) => setSampleForm({ ...sampleForm, service: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-slate-950 px-2.5 py-1.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
                      >
                        <option>Lawn Maintenance</option>
                        <option>Landscape Design</option>
                        <option>Tree & Palm Care</option>
                        <option>Irrigation Repair</option>
                        <option>Stone & Mulch</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 py-2 text-xs font-bold text-white shadow-md shadow-emerald-950 hover:brightness-110 active:scale-98 transition"
                  >
                    {lang === 'en' ? '⚡ Send Free Estimate Request' : '⚡ Enviar Solicitud de Estimado'}
                  </button>
                </form>
              )}
            </div>

            {/* Mock Footer Strip */}
            <footer className="border-t border-white/10 bg-slate-950 p-3 text-center text-[10px] text-slate-400">
              <p className="font-semibold text-slate-300">
                Bulfrano Gonzalez Lawn Service, LLC • (941) 718-6278
              </p>
              <p className="mt-0.5 text-slate-500">
                Serving Bradenton • Sarasota • Lakewood Ranch • Venice • Palmetto
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}
