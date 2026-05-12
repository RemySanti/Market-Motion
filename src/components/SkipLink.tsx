export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="focus-ring sr-only z-[100] rounded-xl border border-white/20 bg-[color:rgba(11,13,22,0.96)] px-4 py-3 text-sm font-medium text-white shadow-2xl backdrop-blur-md focus:not-sr-only focus:fixed focus:left-4 focus:top-24 focus:inline-flex focus:min-h-[44px] focus:min-w-[min(100vw-2rem,18rem)] focus:items-center sm:focus:top-28"
    >
      Skip to main content
    </a>
  )
}
