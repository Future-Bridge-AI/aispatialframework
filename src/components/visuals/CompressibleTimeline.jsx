import { useState } from 'react';
import { Clock, ChevronRight } from 'lucide-react';

export default function CompressibleTimeline({ data, config }) {
  const [compressed, setCompressed] = useState(false);
  const [expandedStep, setExpandedStep] = useState(null);

  const currentDuration = compressed ? data.optimizedDuration : data.standardDuration;
  const totalSteps = data.steps.length;

  return (
    <div className="section-card">
      {/* Header with Duration Display */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Clock className="w-8 h-8 text-wa-blue" />
          <div>
            <p className="text-3xl font-bold text-gray-900">
              {currentDuration} months
            </p>
            <p className="text-sm text-gray-600">
              {compressed ? 'Optimized timeline' : 'Standard timeline'}
            </p>
          </div>
        </div>

        <button
          onClick={() => setCompressed(!compressed)}
          className="px-6 py-3 bg-wa-blue text-white rounded-lg hover:bg-wa-navy transition-all shadow-lg hover:shadow-xl"
        >
          {compressed ? 'Show Standard' : 'Compress Timeline'}
        </button>
      </div>

      {/* Savings Banner */}
      {compressed && (
        <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg animate-fade-in-up">
          <p className="text-green-800 font-semibold text-center">
            Saved {data.standardDuration - data.optimizedDuration} months by leveraging existing patterns
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
                className="w-full text-left"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex-shrink-0 w-8 h-8 bg-wa-blue rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-gray-900">{step.name}</h4>
                      <span className="text-sm text-gray-600 font-medium">
                        {duration} {duration === 1 ? 'month' : 'months'}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-wa-blue to-wa-teal h-full rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${widthPercent}%` }}
                      />
                    </div>
                  </div>

                  <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                </div>
              </button>

              {/* Expanded Details */}
              {isExpanded && (
                <div className="ml-12 mt-3 p-4 bg-gray-50 rounded-lg border border-gray-200 space-y-3 animate-fade-in-up">
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase mb-1">What Happens</p>
                    <p className="text-sm text-gray-700">{step.whatHappens}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase mb-1">Where I Add Value</p>
                    <p className="text-sm text-gray-700">{step.myValue}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase mb-1">Artifact Produced</p>
                    <p className="text-sm text-wa-blue font-medium">{step.artifact}</p>
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
