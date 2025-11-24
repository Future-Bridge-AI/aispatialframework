import { useState } from 'react';
import HeroStat from './HeroStat';
import VisualRenderer from './VisualRenderer';
import CTAButton from './CTAButton';

export default function SectionViewer({ section, sectionIndex, tldrMode }) {
  const [revealed, setRevealed] = useState(false);
  const [expanded, setExpanded] = useState(false);

  if (tldrMode) {
    return (
      <div className="section-card">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-wa-blue/10 rounded-lg flex items-center justify-center">
            <span className="text-lg font-bold text-wa-blue">{sectionIndex + 1}</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">{section.navLabel}</h2>
            <p className="text-gray-700 font-medium">{section.keyInsight}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Hero Stat */}
      <div className="text-center animate-on-scroll revealed">
        <HeroStat
          value={section.heroStat.value}
          label={section.heroStat.label}
          countUp={section.heroStat.countUp}
          duration={section.heroStat.duration || 2000}
          prefix={section.heroStat.prefix}
          suffix={section.heroStat.suffix}
        />
      </div>

      {/* Key Insight */}
      <div className="text-center animate-on-scroll revealed" style={{ animationDelay: '0.2s' }}>
        <p className="key-insight">{section.keyInsight}</p>
      </div>

      {/* Main Visual */}
      <div className="animate-on-scroll revealed" style={{ animationDelay: '0.4s' }}>
        <VisualRenderer
          type={section.visualType}
          data={section.visualData}
          config={section}
        />
      </div>

      {/* CTA Button */}
      {section.cta && (
        <div className="text-center animate-on-scroll revealed" style={{ animationDelay: '0.6s' }}>
          <CTAButton
            text={section.cta.text}
            onClick={() => setRevealed(!revealed)}
            isActive={revealed}
          />

          {revealed && section.cta.reveal && (
            <div className="mt-6 section-card animate-fade-in-up">
              {Array.isArray(section.cta.reveal) ? (
                <ul className="space-y-3 text-left">
                  {section.cta.reveal.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-wa-blue/10 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-sm font-bold text-wa-blue">✓</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-lg font-semibold text-wa-blue">{section.cta.reveal}</p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Supporting Points (Optional) */}
      {section.supportingPoints && (
        <div className="animate-on-scroll revealed" style={{ animationDelay: '0.8s' }}>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm text-gray-600 hover:text-wa-blue transition-colors flex items-center gap-2 mx-auto"
          >
            {expanded ? '▼' : '▶'} {expanded ? 'Hide' : 'Show'} additional context
          </button>

          {expanded && (
            <div className="mt-4 section-card animate-fade-in-up">
              <ul className="space-y-2 text-sm text-gray-700">
                {section.supportingPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gray-400">•</span>
                    <span>{point}</span>
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
