import {
  AlertCircle,
  Zap,
  Network,
  Route,
  TrendingUp,
  Circle,
  Check
} from 'lucide-react';

const iconMap = {
  'alert-circle': AlertCircle,
  'zap': Zap,
  'network': Network,
  'route': Route,
  'trending-up': TrendingUp,
};

export default function Sidebar({ sections, currentSection, viewedSections, onSectionChange }) {
  return (
    <aside className="w-80 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="w-12 h-12 bg-wa-blue rounded-lg flex items-center justify-center mb-3">
          <span className="text-2xl font-bold text-white">WA</span>
        </div>
        <h2 className="text-lg font-semibold text-gray-900">Navigation</h2>
        <p className="text-sm text-gray-600 mt-1">Click to jump between sections</p>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {sections.map((section, index) => {
          const isActive = currentSection === index;
          const isViewed = viewedSections.has(index);
          const IconComponent = iconMap[section.icon] || Circle;

          return (
            <button
              key={section.id}
              onClick={() => onSectionChange(index)}
              className={`sidebar-item w-full text-left ${isActive ? 'active' : ''} ${isViewed && !isActive ? 'completed' : ''}`}
            >
              <div className="flex-shrink-0 mt-1">
                {isViewed && !isActive ? (
                  <Check className="w-5 h-5 text-green-600" />
                ) : (
                  <Circle className={`w-5 h-5 ${isActive ? 'text-wa-blue fill-wa-blue' : 'text-gray-400'}`} />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-gray-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-sm font-semibold text-gray-900 truncate">
                    {section.navLabel}
                  </h3>
                </div>
                <p className="text-xs text-gray-600 line-clamp-2">
                  {section.navPreview}
                </p>
              </div>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-200 text-xs text-gray-500">
        <p>Built for WA Government</p>
        <p className="mt-1">Craig McDonnell - 2024</p>
      </div>
    </aside>
  );
}
