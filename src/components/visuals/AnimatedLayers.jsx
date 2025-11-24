import { useState, useEffect, useRef } from 'react';

export default function AnimatedLayers({ data }) {
  const [visibleLayers, setVisibleLayers] = useState([]);
  const [selectedLayer, setSelectedLayer] = useState(null);
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
                className={`w-full p-6 border transition-all duration-500 text-left ${
                  isSelected
                    ? `${colors.border} ${colors.bg}`
                    : 'border-stone/30 hover:border-stone/60'
                }`}
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
                      <div className={`mt-6 p-4 border-l-2 ${colors.border} ${colors.bg}`}>
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
