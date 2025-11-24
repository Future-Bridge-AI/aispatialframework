import { useState, useEffect, useRef } from 'react';

// Human vs AI comparison data
const humanVsAI = {
  human: {
    label: 'Human-Centric',
    description: 'Traditional desktop workflows',
    items: [
      { aspect: 'Data Format', value: 'PDF reports, Excel files, desktop GIS' },
      { aspect: 'Discovery', value: 'Manual search, tribal knowledge' },
      { aspect: 'Integration', value: 'Copy-paste, email attachments' },
      { aspect: 'Quality', value: 'Spot checks, manual review' },
      { aspect: 'Provenance', value: 'File metadata, folder structure' },
    ]
  },
  ai: {
    label: 'AI-Ready',
    description: 'Machine-accessible patterns',
    items: [
      { aspect: 'Data Format', value: 'STAC, GeoParquet, COG, API-first' },
      { aspect: 'Discovery', value: 'Semantic search, metadata catalogs' },
      { aspect: 'Integration', value: 'Streaming protocols, federated queries' },
      { aspect: 'Quality', value: 'Automated validation pipelines' },
      { aspect: 'Provenance', value: 'Immutable lineage, audit trails' },
    ]
  }
};

function HumanVsAIToggle({ activeMode, onToggle }) {
  return (
    <div className="mb-8">
      <div className="flex justify-center gap-1 mb-6">
        <button
          onClick={() => onToggle('human')}
          className={`px-6 py-3 text-sm tracking-widest uppercase transition-all duration-500 ${
            activeMode === 'human'
              ? 'bg-terracotta/10 text-terracotta border border-terracotta/30'
              : 'bg-transparent text-mist border border-stone hover:border-terracotta/30'
          }`}
          aria-pressed={activeMode === 'human'}
        >
          Human-Centric
        </button>
        <button
          onClick={() => onToggle('ai')}
          className={`px-6 py-3 text-sm tracking-widest uppercase transition-all duration-500 ${
            activeMode === 'ai'
              ? 'bg-aqua/10 text-aqua border border-aqua/30'
              : 'bg-transparent text-mist border border-stone hover:border-aqua/30'
          }`}
          aria-pressed={activeMode === 'ai'}
        >
          AI-Ready
        </button>
      </div>

      <div className={`p-6 border transition-all duration-500 ${
        activeMode === 'human'
          ? 'border-terracotta/20 bg-terracotta/5'
          : 'border-aqua/20 bg-aqua/5'
      }`}>
        <h4 className={`text-lg font-light mb-4 ${activeMode === 'human' ? 'text-terracotta' : 'text-aqua'}`}>
          {humanVsAI[activeMode].description}
        </h4>

        <div className="space-y-3">
          {humanVsAI[activeMode].items.map((item, i) => (
            <div
              key={item.aspect}
              className="flex items-start gap-4 animate-fade-in"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="text-xs text-mist uppercase tracking-widest w-24 flex-shrink-0 pt-1">
                {item.aspect}
              </span>
              <span className={`text-sm font-light ${activeMode === 'human' ? 'text-cream/60' : 'text-cream/80'}`}>
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {activeMode === 'human' && (
          <p className="mt-4 text-xs text-terracotta/60 italic">
            These patterns block AI agents from accessing and processing spatial data effectively
          </p>
        )}
        {activeMode === 'ai' && (
          <p className="mt-4 text-xs text-aqua/60 italic">
            Open formats with provenance enable autonomous agents to discover, validate, and integrate data
          </p>
        )}
      </div>
    </div>
  );
}

export default function AnimatedLayers({ data }) {
  const [visibleLayers, setVisibleLayers] = useState([]);
  const [selectedLayer, setSelectedLayer] = useState(null);
  const [showComparison, setShowComparison] = useState(false);
  const [comparisonMode, setComparisonMode] = useState('ai');
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          data.layers.forEach((_, index) => {
            setTimeout(() => {
              setVisibleLayers(prev => [...prev, index]);
            }, index * 400);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [data.layers]);

  const colorMap = {
    blue: { border: 'border-aqua/30', bg: 'bg-aqua/5', text: 'text-aqua', num: 'text-aqua' },
    teal: { border: 'border-teal/30', bg: 'bg-teal/5', text: 'text-teal', num: 'text-teal' },
    navy: { border: 'border-sand/30', bg: 'bg-sand/5', text: 'text-sand', num: 'text-sand' },
  };

  return (
    <div ref={ref} className="section-card">
      {/* Human vs AI Toggle */}
      <div className="mb-8 text-center">
        <button
          onClick={() => setShowComparison(!showComparison)}
          className="text-sm text-mist hover:text-aqua transition-colors tracking-wide border border-stone px-4 py-2 hover:border-aqua/30 focus:outline-none focus:ring-2 focus:ring-aqua/50 rounded"
          aria-expanded={showComparison}
        >
          {showComparison ? 'Hide framework comparison' : 'Compare Human vs AI-Ready approach'}
        </button>
      </div>

      {showComparison && (
        <HumanVsAIToggle activeMode={comparisonMode} onToggle={setComparisonMode} />
      )}

      <h3 className="text-xs font-medium text-mist tracking-[0.3em] uppercase text-center mb-8">
        Three-Layer Architecture
      </h3>

      <div className="space-y-4">
        {data.layers.map((layer, index) => {
          const colors = colorMap[layer.color] || colorMap.blue;
          const isSelected = selectedLayer === index;

          return (
            <div
              key={index}
              className={`transition-all duration-700 ${
                visibleLayers.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <button
                onClick={() => setSelectedLayer(isSelected ? null : index)}
                className={`w-full p-6 border transition-all duration-500 text-left focus:outline-none focus:ring-2 focus:ring-aqua/50 ${
                  isSelected
                    ? `${colors.border} ${colors.bg}`
                    : 'border-stone/30 hover:border-stone/60'
                }`}
                aria-expanded={isSelected}
              >
                <div className="flex items-start gap-6">
                  {/* Layer number */}
                  <div className="flex-shrink-0">
                    <span className={`text-4xl font-light ${colors.num}`}>
                      {String(data.layers.length - index).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-lg font-light text-bone mb-2 tracking-wide">
                      {layer.name}
                    </h4>
                    <p className="text-sm text-mist font-light">
                      {layer.description}
                    </p>

                    {isSelected && layer.waArtifact && (
                      <div className={`mt-6 p-4 border-l-2 ${colors.border} ${colors.bg} animate-fade-in`}>
                        <p className="text-xs text-mist uppercase tracking-widest mb-2">
                          WA Artifact
                        </p>
                        <p className={`text-sm font-light ${colors.text}`}>
                          {layer.waArtifact}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Expand indicator */}
                  <span className={`text-lg text-mist transition-transform duration-500 ${isSelected ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
