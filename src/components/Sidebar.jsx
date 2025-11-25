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
    <aside className="w-80 bg-white border-r-4 border-simpsons-yellow flex flex-col shadow-cartoon">
      <div className="p-6 border-b-2 border-simpsons-yellow/30 bg-gradient-to-r from-simpsons-yellow/20 to-simpsons-sky/20">
        <div className="w-14 h-14 bg-simpsons-yellow rounded-xl flex items-center justify-center mb-3 shadow-cartoon border-2 border-black/10">
          <span className="text-3xl">🍩</span>
        </div>
        <h2 className="text-lg font-bold text-gray-900">Navigation</h2>
        <p className="text-sm text-gray-600 mt-1">Click to jump between sections</p>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-2 bg-gradient-to-b from-white to-simpsons-sky-light/30">
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
                  <Check className="w-5 h-5 text-simpsons-green" />
                ) : (
                  <Circle className={`w-5 h-5 ${isActive ? 'text-simpsons-yellow fill-simpsons-yellow' : 'text-gray-400'}`} />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-simpsons-blue">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-sm font-bold text-gray-900 truncate">
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

      <div className="p-4 border-t-2 border-simpsons-yellow/30 text-xs text-gray-500 bg-simpsons-yellow/10">
        <p className="font-bold">Built for Springfield</p>
        <p className="mt-1">Craig McDonnell - 2024</p>
        <p className="mt-1 text-simpsons-orange italic">"D'oh!" - Homer Simpson</p>
      </div>
    </aside>
  );
}
