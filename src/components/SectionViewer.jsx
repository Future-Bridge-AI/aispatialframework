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

      {/* Divider */}
      <div className="flex items-center justify-center gap-4">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-aqua/30" />
        <div className="w-1 h-1 bg-aqua/50 rounded-full" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-aqua/30" />
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
            <div className="mt-8 section-card animate-fade-in-up">
              {Array.isArray(section.cta.reveal) ? (
                <ul className="space-y-4 text-left">
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

      {/* Supporting Points (Optional) */}
      {section.supportingPoints && (
        <div className="animate-on-scroll revealed" style={{ animationDelay: '0.8s' }}>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm text-mist hover:text-aqua transition-colors flex items-center gap-3 mx-auto tracking-wide"
          >
            <span className={`transform transition-transform ${expanded ? 'rotate-90' : ''}`}>→</span>
            {expanded ? 'Hide context' : 'Additional context'}
          </button>

          {expanded && (
            <div className="mt-6 section-card animate-fade-in-up">
              <ul className="space-y-3 text-sm">
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
