import { useState } from 'react';

export default function CompressibleTimeline({ data, config }) {
  const [compressed, setCompressed] = useState(false);
  const [expandedStep, setExpandedStep] = useState(null);

  const currentDuration = compressed ? data.optimizedDuration : data.standardDuration;

  return (
    <div className="section-card">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="text-6xl font-light text-bone tracking-tighter">
            {currentDuration}
            <span className="text-2xl text-mist ml-2">months</span>
          </p>
          <p className="text-sm text-mist mt-2 tracking-wide">
            {compressed ? 'Optimized with existing patterns' : 'Standard implementation'}
          </p>
        </div>

        <button
          onClick={() => setCompressed(!compressed)}
          className="px-6 py-3 border border-aqua/30 text-aqua hover:bg-aqua/10 transition-all duration-500 tracking-wide text-sm"
        >
          {compressed ? 'Show Standard' : 'Compress Timeline'}
        </button>
      </div>

      {/* Savings Banner */}
      {compressed && (
        <div className="mb-8 p-4 border border-aqua/20 bg-aqua/5 animate-fade-in-up">
          <p className="text-aqua font-light text-center tracking-wide">
            <span className="text-2xl font-light">{data.standardDuration - data.optimizedDuration}</span>
            <span className="text-sm ml-2">months saved through pattern reuse</span>
          </p>
        </div>
      )}

      {/* Timeline Steps */}
      <div className="space-y-4">
        {data.steps.map((step, index) => {
          const duration = compressed ? step.optimized : step.standard;
          const widthPercent = (duration / currentDuration) * 100;
          const isExpanded = expandedStep === index;

          return (
            <div key={index}>
              <button
                onClick={() => setExpandedStep(isExpanded ? null : index)}
                className="w-full text-left group"
              >
                <div className="flex items-center gap-6 mb-3">
                  {/* Step number */}
                  <div className="flex-shrink-0 w-10 h-10 border border-aqua/30 flex items-center justify-center">
                    <span className="text-sm text-aqua font-light">{String(index + 1).padStart(2, '0')}</span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-light text-bone tracking-wide group-hover:text-aqua transition-colors">
                        {step.name}
                      </h4>
                      <span className="text-sm text-mist font-light">
                        {duration} {duration === 1 ? 'mo' : 'mos'}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-stone/30 h-1 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-aqua to-teal h-full transition-all duration-1000 ease-out"
                        style={{ width: `${widthPercent}%` }}
                      />
                    </div>
                  </div>

                  <span className={`text-mist transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}>
                    →
                  </span>
                </div>
              </button>

              {/* Expanded Details */}
              {isExpanded && (
                <div className="ml-16 mt-4 p-6 border-l border-aqua/20 bg-deep/50 space-y-4 animate-fade-in-up">
                  <div>
                    <p className="text-xs text-mist uppercase tracking-widest mb-2">What Happens</p>
                    <p className="text-sm text-cream/70 font-light">{step.whatHappens}</p>
                  </div>
                  <div>
                    <p className="text-xs text-mist uppercase tracking-widest mb-2">Value Added</p>
                    <p className="text-sm text-cream/70 font-light">{step.myValue}</p>
                  </div>
                  <div>
                    <p className="text-xs text-mist uppercase tracking-widest mb-2">Artifact</p>
                    <p className="text-sm text-aqua font-light">{step.artifact}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
