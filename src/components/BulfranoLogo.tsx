import type { SVGProps } from 'react'

interface BulfranoLogoProps extends SVGProps<SVGSVGElement> {
  variant?: 'full' | 'emblem' | 'compact'
  className?: string
}

/**
 * High-fidelity recreation of Bulfrano Gonzalez Lawn Service, LLC brand identity:
 * Features the signature GG palm tree and grass turf monogram emblem.
 */
export function BulfranoLogo({
  variant = 'full',
  className = '',
  ...props
}: BulfranoLogoProps) {
  if (variant === 'emblem') {
    return (
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 ${className}`}
        aria-label="Bulfrano Gonzalez Lawn Service GG Emblem"
        {...props}
      >
        <defs>
          <linearGradient id="gg-circle-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#16a34a" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>
          <linearGradient id="gg-blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="50%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="gg-silver-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="50%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
          <linearGradient id="gg-palm-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>
        </defs>

        {/* Outer Circle Ring */}
        <circle
          cx="100"
          cy="100"
          r="86"
          stroke="url(#gg-circle-grad)"
          strokeWidth="11"
          fill="none"
        />

        {/* Palm Tree Trunk and Fronds */}
        <g id="palm-tree">
          {/* Trunk */}
          <path
            d="M 126 130 Q 128 92 135 60 Q 131 92 130 130 Z"
            fill="#78350f"
          />
          {/* Palm Fronds */}
          {/* Top Left Frond */}
          <path
            d="M 135 60 Q 112 42 88 56 Q 112 50 135 60"
            fill="url(#gg-palm-grad)"
          />
          {/* Far Left Arch */}
          <path
            d="M 135 60 Q 98 48 80 72 Q 106 62 135 60"
            fill="url(#gg-palm-grad)"
          />
          {/* Top Center Frond */}
          <path
            d="M 135 60 Q 132 30 142 22 Q 140 42 135 60"
            fill="url(#gg-palm-grad)"
          />
          {/* Top Right Frond */}
          <path
            d="M 135 60 Q 155 35 180 44 Q 158 48 135 60"
            fill="url(#gg-palm-grad)"
          />
          {/* Far Right Arch */}
          <path
            d="M 135 60 Q 166 52 188 74 Q 164 66 135 60"
            fill="url(#gg-palm-grad)"
          />
          {/* Lower Right Arch */}
          <path
            d="M 135 60 Q 164 68 178 95 Q 155 80 135 60"
            fill="url(#gg-palm-grad)"
          />
        </g>

        {/* Monogram First G (Royal Navy Blue) */}
        <path
          d="M 96 68 C 84 62 65 64 54 77 C 40 93 42 120 58 134 C 72 145 92 143 103 131 C 109 124 111 116 111 106 L 82 106 L 82 95 L 123 95 C 123 115 119 133 105 146 C 89 160 62 161 44 146 C 24 130 20 98 38 76 C 53 58 77 52 97 58 Z"
          fill="url(#gg-blue-grad)"
        />

        {/* Monogram Second G (Silver / Steel Metallic) */}
        <path
          d="M 142 96 C 133 89 119 90 110 99 C 99 110 101 130 112 141 C 124 150 140 149 149 138 C 154 132 156 125 156 117 L 132 117 L 132 108 L 166 108 C 166 124 163 138 151 149 C 137 161 115 162 100 149 C 84 135 81 109 96 91 C 108 76 128 72 144 77 Z"
          fill="url(#gg-silver-grad)"
        />

        {/* Turf Grass Blades along Bottom */}
        <g id="turf-blades" fill="url(#gg-circle-grad)">
          <path d="M 52 144 Q 60 118 72 112 Q 68 126 66 148 Z" />
          <path d="M 66 148 Q 78 122 92 116 Q 86 130 82 152 Z" />
          <path d="M 82 152 Q 95 125 110 120 Q 102 136 98 154 Z" />
          <path d="M 98 154 Q 115 128 132 124 Q 124 140 118 155 Z" />
          <path d="M 118 155 Q 134 132 152 130 Q 140 144 136 156 Z" />
        </g>
      </svg>
    )
  }

  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {/* Emblem */}
      <div className="relative flex items-center justify-center">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-28 w-28 drop-shadow-md sm:h-36 sm:w-36"
          aria-label="Bulfrano Gonzalez Lawn Service GG Emblem"
        >
          <defs>
            <linearGradient id="gg-full-circle" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#15803d" />
            </linearGradient>
            <linearGradient id="gg-full-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1d4ed8" />
              <stop offset="60%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="gg-full-silver" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#cbd5e1" />
              <stop offset="50%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
            <linearGradient id="gg-full-palm" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#15803d" />
            </linearGradient>
          </defs>

          {/* Outer Circle Ring */}
          <circle
            cx="100"
            cy="100"
            r="86"
            stroke="url(#gg-full-circle)"
            strokeWidth="11"
            fill="none"
          />

          {/* Palm Tree Trunk and Fronds */}
          <g id="palm-tree-full">
            <path
              d="M 126 130 Q 128 92 135 60 Q 131 92 130 130 Z"
              fill="#78350f"
            />
            <path
              d="M 135 60 Q 112 42 88 56 Q 112 50 135 60"
              fill="url(#gg-full-palm)"
            />
            <path
              d="M 135 60 Q 98 48 80 72 Q 106 62 135 60"
              fill="url(#gg-full-palm)"
            />
            <path
              d="M 135 60 Q 132 30 142 22 Q 140 42 135 60"
              fill="url(#gg-full-palm)"
            />
            <path
              d="M 135 60 Q 155 35 180 44 Q 158 48 135 60"
              fill="url(#gg-full-palm)"
            />
            <path
              d="M 135 60 Q 166 52 188 74 Q 164 66 135 60"
              fill="url(#gg-full-palm)"
            />
            <path
              d="M 135 60 Q 164 68 178 95 Q 155 80 135 60"
              fill="url(#gg-full-palm)"
            />
          </g>

          {/* Monogram First G (Royal Blue) */}
          <path
            d="M 96 68 C 84 62 65 64 54 77 C 40 93 42 120 58 134 C 72 145 92 143 103 131 C 109 124 111 116 111 106 L 82 106 L 82 95 L 123 95 C 123 115 119 133 105 146 C 89 160 62 161 44 146 C 24 130 20 98 38 76 C 53 58 77 52 97 58 Z"
            fill="url(#gg-full-blue)"
          />

          {/* Monogram Second G (Silver) */}
          <path
            d="M 142 96 C 133 89 119 90 110 99 C 99 110 101 130 112 141 C 124 150 140 149 149 138 C 154 132 156 125 156 117 L 132 117 L 132 108 L 166 108 C 166 124 163 138 151 149 C 137 161 115 162 100 149 C 84 135 81 109 96 91 C 108 76 128 72 144 77 Z"
            fill="url(#gg-full-silver)"
          />

          {/* Turf Grass Blades */}
          <g id="turf-blades-full" fill="url(#gg-full-circle)">
            <path d="M 52 144 Q 60 118 72 112 Q 68 126 66 148 Z" />
            <path d="M 66 148 Q 78 122 92 116 Q 86 130 82 152 Z" />
            <path d="M 82 152 Q 95 125 110 120 Q 102 136 98 154 Z" />
            <path d="M 98 154 Q 115 128 132 124 Q 124 140 118 155 Z" />
            <path d="M 118 155 Q 134 132 152 130 Q 140 144 136 156 Z" />
          </g>
        </svg>
      </div>

      {/* Main Title Typography */}
      <div className="mt-3">
        <h2 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
          BULFRANO GONZALEZ
        </h2>
        <div className="mt-1 flex items-center justify-center gap-2">
          <span className="h-[2px] w-6 bg-emerald-500/80 sm:w-10" />
          <p className="text-xs font-bold tracking-widest text-emerald-400 uppercase sm:text-sm">
            LAWN SERVICE, LLC
          </p>
          <span className="h-[2px] w-6 bg-emerald-500/80 sm:w-10" />
        </div>
        <p className="mt-1 text-[11px] font-semibold tracking-wider text-slate-400 uppercase sm:text-xs">
          PROFESSIONAL • RELIABLE • QUALITY
        </p>

        {/* Complete Landscape Solutions Badge */}
        <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-[11px] font-semibold text-emerald-300 shadow-[0_0_15px_-3px_rgba(34,197,94,0.3)]">
          <span>🌿</span>
          <span className="tracking-wider uppercase">COMPLETE LANDSCAPE SOLUTIONS</span>
          <span>🌿</span>
        </div>
      </div>
    </div>
  )
}
