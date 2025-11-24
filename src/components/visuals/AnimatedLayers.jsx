import { useState, useEffect, useRef } from 'react';

export default function AnimatedLayers({ data }) {
  const [visibleLayers, setVisibleLayers] = useState([]);
  const [selectedLayer, setSelectedLayer] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate layers in sequence
          data.layers.forEach((_, index) => {
            setTimeout(() => {
              setVisibleLayers(prev => [...prev, index]);
            }, index * 300);
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
    blue: 'bg-wa-blue',
    teal: 'bg-wa-teal',
    navy: 'bg-wa-navy',
  };

  return (
    <div ref={ref} className="section-card">
      <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
        Three-Layer Architecture
      </h3>

      <div className="space-y-4">
        {data.layers.map((layer, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ${
              visibleLayers.includes(index)
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <button
              onClick={() => setSelectedLayer(selectedLayer === index ? null : index)}
              className={`w-full p-6 rounded-lg border-2 transition-all ${
                selectedLayer === index
                  ? 'border-wa-blue bg-wa-blue/5 shadow-lg'
                  : 'border-gray-200 hover:border-wa-blue/50'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 ${colorMap[layer.color] || 'bg-wa-blue'} rounded-lg flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">
                    {data.layers.length - index}
                  </span>
                </div>

                <div className="flex-1 text-left">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    {layer.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {layer.description}
                  </p>

                  {selectedLayer === index && layer.waArtifact && (
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-sm font-medium text-blue-900">
                        WA's Existing Artifact:
                      </p>
                      <p className="text-sm text-blue-700 mt-1">
                        {layer.waArtifact}
                      </p>
                    </div>
                  )}
                </div>

                <span className={`text-2xl transition-transform ${selectedLayer === index ? 'rotate-180' : ''}`}>
                  v
                </span>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
