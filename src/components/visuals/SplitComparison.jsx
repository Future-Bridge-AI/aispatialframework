import { useState } from 'react';

export default function SplitComparison({ data }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="section-card">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Before State */}
        <div className="relative group">
          <div className="absolute -top-4 left-6 px-4 py-1 bg-void border border-terracotta/30 text-terracotta text-xs tracking-widest uppercase">
            {data.before.label}
          </div>
          <div className="border border-terracotta/20 p-8 bg-terracotta/5 h-full transition-all duration-500 group-hover:border-terracotta/40">
            {/* Contour lines decoration */}
            <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
              <pattern id="beforeLines" patternUnits="userSpaceOnUse" width="60" height="60">
                <path d="M0 30 Q15 20, 30 30 T60 30" fill="none" stroke="#9d7a5c" strokeWidth="0.5"/>
                <path d="M0 45 Q15 35, 30 45 T60 45" fill="none" stroke="#9d7a5c" strokeWidth="0.5"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#beforeLines)"/>
            </svg>

            <div className="relative z-10">
              <h3 className="text-xl font-light text-bone mb-4 tracking-wide">
                {data.before.description}
              </h3>

              {expanded && data.before.details && (
                <ul className="mt-6 space-y-3">
                  {data.before.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="text-terracotta/60">—</span>
                      <span className="text-cream/60 font-light">{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* After State */}
        <div className="relative group">
          <div className="absolute -top-4 left-6 px-4 py-1 bg-void border border-aqua/30 text-aqua text-xs tracking-widest uppercase">
            {data.after.label}
          </div>
          <div className="border border-aqua/20 p-8 bg-aqua/5 h-full transition-all duration-500 group-hover:border-aqua/40">
            {/* Contour lines decoration */}
            <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
              <pattern id="afterLines" patternUnits="userSpaceOnUse" width="60" height="60">
                <path d="M0 30 Q15 20, 30 30 T60 30" fill="none" stroke="#7fb8c9" strokeWidth="0.5"/>
                <path d="M0 45 Q15 35, 30 45 T60 45" fill="none" stroke="#7fb8c9" strokeWidth="0.5"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#afterLines)"/>
            </svg>

            <div className="relative z-10">
              <h3 className="text-xl font-light text-bone mb-4 tracking-wide">
                {data.after.description}
              </h3>

              {expanded && data.after.details && (
                <ul className="mt-6 space-y-3">
                  {data.after.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="text-aqua/60">+</span>
                      <span className="text-cream/70 font-light">{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {data.before.details && data.after.details && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm text-mist hover:text-aqua transition-colors tracking-wide"
          >
            {expanded ? '↑ Collapse' : '↓ Expand details'}
          </button>
        </div>
      )}
    </div>
  );
}
