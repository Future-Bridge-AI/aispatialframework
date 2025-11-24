import { useState, useEffect } from 'react';
import HeroStat from './HeroStat';
import VisualRenderer from './VisualRenderer';
import CTAButton from './CTAButton';

export default function SectionViewer({ section, sectionIndex, tldrMode }) {
  const [revealed, setRevealed] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Reset states when section changes
  useEffect(() => {
    setRevealed(false);
    setExpanded(false);
    setIsVisible(false);

    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, [sectionIndex]);

  if (tldrMode) {
    return (
      <div className="section-card">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <span className="text-4xl font-light text-aqua">{String(sectionIndex + 1).padStart(2, '0')}</span>
          </div>
          <div>
            <h2 className="text-xl font-light text-bone mb-3 tracking-wide">{section.navLabel}</h2>
            <p className="text-cream/70 font-light leading-relaxed">{section.keyInsight}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      {/* Hero Stat */}
      <div className="text-center">
        <HeroStat
          value={section.heroStat.value}
          label={section.heroStat.label}
          countUp={section.heroStat.countUp !== false}
          duration={section.heroStat.duration || 2000}
          prefix={section.heroStat.prefix}
          suffix={section.heroStat.suffix}
          sectionKey={sectionIndex}
        />
      </div>

      {/* Divider - animated */}
      <div className={`flex items-center justify-center gap-4 transition-all duration-700 delay-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-aqua/30" />
        <div className="w-1 h-1 bg-aqua/50 rounded-full animate-pulse-glow" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-aqua/30" />
      </div>

      {/* Key Insight - slide up */}
      <div className={`text-center transition-all duration-700 delay-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}>
        <p className="key-insight">{section.keyInsight}</p>
      </div>

      {/* Main Visual - slide up */}
      <div className={`transition-all duration-700 delay-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <VisualRenderer
          type={section.visualType}
          data={section.visualData}
          config={section}
          sectionIndex={sectionIndex}
        />
      </div>

      {/* CTA Button - slide up */}
      {section.cta && (
        <div className={`text-center transition-all duration-700 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <CTAButton
            text={section.cta.text}
            onClick={() => setRevealed(!revealed)}
            isActive={revealed}
          />

          {revealed && section.cta.reveal && (
            <div className="mt-8 section-card animate-fade-in-up">
              {Array.isArray(section.cta.reveal) ? (
                <ul className="space-y-4 text-left stagger-children">
                  {section.cta.reveal.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 border border-aqua/30 flex items-center justify-center mt-0.5">
                        <span className="text-xs text-aqua">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <span className="text-cream/80 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xl font-light text-aqua glow-text">{section.cta.reveal}</p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Supporting Points */}
      {section.supportingPoints && (
        <div className={`transition-all duration-700 delay-900 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm text-mist hover:text-aqua transition-colors flex items-center gap-3 mx-auto tracking-wide focus:outline-none focus:ring-2 focus:ring-aqua/50 focus:ring-offset-2 focus:ring-offset-void rounded px-3 py-1"
            aria-expanded={expanded}
          >
            <span className={`transform transition-transform duration-300 ${expanded ? 'rotate-90' : ''}`}>→</span>
            {expanded ? 'Hide context' : 'Additional context'}
          </button>

          {expanded && (
            <div className="mt-6 section-card animate-fade-in-up">
              <ul className="space-y-3 text-sm stagger-children">
                {section.supportingPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-drift">—</span>
                    <span className="text-cream/60 font-light">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
