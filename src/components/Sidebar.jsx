import { Circle } from 'lucide-react';

export default function Sidebar({ sections, currentSection, viewedSections, onSectionChange }) {
  return (
    <aside className="w-80 bg-deep border-r border-stone/30 flex flex-col">
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
      <nav className="flex-1 overflow-y-auto py-4">
        {sections.map((section, index) => {
          const isActive = currentSection === index;
          const isViewed = viewedSections.has(index);

          return (
            <button
              key={section.id}
              onClick={() => onSectionChange(index)}
              className={`sidebar-item w-full text-left ${isActive ? 'active' : ''} ${isViewed && !isActive ? 'completed' : ''}`}
            >
              {/* Section number */}
              <div className="flex-shrink-0 w-8">
                <span className={`text-2xl font-light ${isActive ? 'text-aqua' : isViewed ? 'text-drift' : 'text-stone'}`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 ml-2">
                <h3 className={`text-sm font-medium tracking-wide truncate ${isActive ? 'text-bone' : 'text-mist'}`}>
                  {section.navLabel}
                </h3>
                <p className={`text-xs mt-1 line-clamp-2 ${isActive ? 'text-cream/60' : 'text-drift'}`}>
                  {section.navPreview}
                </p>
              </div>

              {/* Active indicator dot */}
              {isActive && (
                <div className="flex-shrink-0">
                  <Circle className="w-2 h-2 text-aqua fill-aqua" />
                </div>
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-stone/30">
        <div className="h-px bg-gradient-to-r from-aqua/20 to-transparent mb-4" />
        <p className="text-xs text-drift tracking-wide">Western Australia</p>
        <p className="text-xs text-stone mt-1">AI-Ready Spatial Framework</p>
      </div>
    </aside>
  );
}
