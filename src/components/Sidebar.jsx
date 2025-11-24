import { Circle, Check } from 'lucide-react';

// Mini preview icons for each section type
function MiniBarChart() {
  return (
    <svg width="24" height="16" viewBox="0 0 24 16" className="text-current">
      <rect x="2" y="8" width="4" height="8" fill="currentColor" opacity="0.4" />
      <rect x="8" y="4" width="4" height="12" fill="currentColor" opacity="0.6" />
      <rect x="14" y="0" width="4" height="16" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

function MiniLayers() {
  return (
    <svg width="24" height="16" viewBox="0 0 24 16" className="text-current">
      <path d="M2 12 L12 16 L22 12" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
      <path d="M2 8 L12 12 L22 8" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M2 4 L12 8 L22 4" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.9" />
    </svg>
  );
}

function MiniTimeline() {
  return (
    <svg width="24" height="16" viewBox="0 0 24 16" className="text-current">
      <line x1="2" y1="8" x2="22" y2="8" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <circle cx="4" cy="8" r="2" fill="currentColor" opacity="0.9" />
      <circle cx="10" cy="8" r="2" fill="currentColor" opacity="0.7" />
      <circle cx="16" cy="8" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="22" cy="8" r="1.5" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

function MiniRadar() {
  return (
    <svg width="24" height="16" viewBox="0 0 24 16" className="text-current">
      <polygon points="12,1 20,6 18,14 6,14 4,6" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1" />
      <polygon points="12,4 16,7 15,12 9,12 8,7" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

function MiniCompare() {
  return (
    <svg width="24" height="16" viewBox="0 0 24 16" className="text-current">
      <rect x="2" y="2" width="8" height="12" fill="currentColor" opacity="0.3" rx="1" />
      <rect x="14" y="2" width="8" height="12" fill="currentColor" opacity="0.7" rx="1" />
      <line x1="12" y1="0" x2="12" y2="16" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" opacity="0.5" />
    </svg>
  );
}

const sectionIcons = {
  'splitComparison': MiniCompare,
  'toggleComparison': MiniBarChart,
  'animatedLayers': MiniLayers,
  'compressibleTimeline': MiniTimeline,
  'radarWithCalc': MiniRadar,
};

export default function Sidebar({ sections, currentSection, viewedSections, onSectionChange }) {
  return (
    <aside className="w-80 bg-deep border-r border-stone/30 flex flex-col" role="navigation" aria-label="Section navigation">
      {/* Header */}
      <div className="p-8 border-b border-stone/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 border border-aqua/30 flex items-center justify-center">
            <span className="text-lg font-light text-aqua tracking-widest">WA</span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-aqua/30 to-transparent" />
        </div>
        <h2 className="text-xs font-medium text-mist tracking-[0.3em] uppercase">Contents</h2>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4" aria-label="Sections">
        {sections.map((section, index) => {
          const isActive = currentSection === index;
          const isViewed = viewedSections.has(index);
          const IconComponent = sectionIcons[section.visualType] || MiniBarChart;

          return (
            <button
              key={section.id}
              onClick={() => onSectionChange(index)}
              className={`sidebar-item w-full text-left group transition-all duration-300 ${
                isActive ? 'active' : ''
              } ${isViewed && !isActive ? 'completed' : ''}`}
              aria-current={isActive ? 'step' : undefined}
              aria-label={`Section ${index + 1}: ${section.navLabel}${isViewed ? ' (visited)' : ''}`}
            >
              {/* Section number with visited indicator */}
              <div className="flex-shrink-0 w-10 relative">
                <span className={`text-2xl font-light transition-all duration-300 ${
                  isActive ? 'text-aqua' : isViewed ? 'text-aqua/40' : 'text-stone'
                }`}>
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Visited checkmark */}
                {isViewed && !isActive && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-aqua/20 rounded-full flex items-center justify-center animate-fade-in">
                    <Check className="w-2.5 h-2.5 text-aqua" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 ml-2">
                <div className="flex items-center gap-3 mb-1.5">
                  <h3 className={`text-sm font-medium tracking-wide truncate transition-colors duration-300 ${
                    isActive ? 'text-bone' : 'text-mist group-hover:text-bone'
                  }`}>
                    {section.navLabel}
                  </h3>

                  {/* Mini preview icon */}
                  <div className={`flex-shrink-0 transition-all duration-300 ${
                    isActive ? 'text-aqua opacity-100' : 'text-drift opacity-50 group-hover:opacity-80'
                  }`}>
                    <IconComponent />
                  </div>
                </div>

                <p className={`text-xs line-clamp-2 transition-colors duration-300 ${
                  isActive ? 'text-cream/60' : 'text-drift group-hover:text-mist'
                }`}>
                  {section.navPreview}
                </p>

                {/* Progress indicator for active section */}
                {isActive && (
                  <div className="mt-2 h-0.5 bg-stone/30 rounded-full overflow-hidden">
                    <div className="h-full bg-aqua/50 rounded-full animate-pulse w-1/3" />
                  </div>
                )}
              </div>

              {/* Active indicator dot */}
              {isActive && (
                <div className="flex-shrink-0 ml-2">
                  <Circle className="w-2 h-2 text-aqua fill-aqua animate-pulse" />
                </div>
              )}
            </button>
          );
        })}
      </nav>

      {/* Progress summary */}
      <div className="p-6 border-t border-stone/30">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-mist tracking-wide">Progress</span>
          <span className="text-xs text-aqua">{viewedSections.size} / {sections.length}</span>
        </div>
        <div className="h-1 bg-stone/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-aqua to-teal rounded-full transition-all duration-500"
            style={{ width: `${(viewedSections.size / sections.length) * 100}%` }}
          />
        </div>

        <div className="mt-4 h-px bg-gradient-to-r from-aqua/20 to-transparent" />
        <p className="text-xs text-drift tracking-wide mt-3">Western Australia</p>
        <p className="text-xs text-stone mt-1">AI-Ready Spatial Framework</p>
      </div>
    </aside>
  );
}
