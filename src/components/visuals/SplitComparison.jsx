import { useState } from 'react';
import CountUp from 'react-countup';

// Duplication matrix data
const duplicationData = [
  { task: 'Risk Assessments', count: 89, color: 'terracotta' },
  { task: 'ETL Workflows', count: 127, color: 'terracotta' },
  { task: 'AI Pilot Projects', count: 45, color: 'terracotta' },
  { task: 'Data Quality Checks', count: 112, color: 'terracotta' },
  { task: 'Vendor Negotiations', count: 98, color: 'terracotta' },
];

function DuplicationMatrix({ isVisible }) {
  return (
    <div className="mt-8 p-6 border border-terracotta/20 bg-terracotta/5">
      <h4 className="text-xs text-mist uppercase tracking-widest mb-4">Duplicated Efforts Across 127 LGAs</h4>

      <div className="space-y-3">
        {duplicationData.map((item, i) => (
          <div
            key={item.task}
            className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-cream/70 font-light">{item.task}</span>
              <span className="text-sm text-terracotta font-medium">
                {isVisible ? <CountUp end={item.count} duration={1.5} delay={i * 0.1} /> : '0'}x
              </span>
            </div>
            <div className="h-2 bg-stone/30 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r from-terracotta/60 to-terracotta rounded-full transition-all duration-1000 ease-out`}
                style={{
                  width: isVisible ? `${(item.count / 127) * 100}%` : '0%',
                  transitionDelay: `${i * 100 + 200}ms`
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-terracotta/80 font-light text-center italic">
        Each LGA reinvents the same patterns up to 127 times
      </p>
    </div>
  );
}

export default function SplitComparison({ data }) {
  const [expanded, setExpanded] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);

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
                <ul className="mt-6 space-y-3 stagger-children">
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
                <ul className="mt-6 space-y-3 stagger-children">
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

      {/* Controls */}
      <div className="mt-8 flex flex-col items-center gap-4">
        {data.before.details && data.after.details && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm text-mist hover:text-aqua transition-colors tracking-wide focus:outline-none focus:ring-2 focus:ring-aqua/50 rounded px-3 py-1"
            aria-expanded={expanded}
          >
            {expanded ? '↑ Collapse details' : '↓ Expand details'}
          </button>
        )}

        {/* Show duplication matrix button */}
        <button
          onClick={() => setShowMatrix(!showMatrix)}
          className="text-sm text-terracotta hover:text-terracotta/80 transition-colors tracking-wide border border-terracotta/30 px-4 py-2 hover:bg-terracotta/10 focus:outline-none focus:ring-2 focus:ring-terracotta/50 rounded"
          aria-expanded={showMatrix}
        >
          {showMatrix ? 'Hide duplication breakdown' : 'See the duplication breakdown'}
        </button>
      </div>

      {/* Duplication Matrix */}
      {showMatrix && <DuplicationMatrix isVisible={showMatrix} />}
    </div>
  );
}
