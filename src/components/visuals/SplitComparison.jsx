import { useState } from 'react';
import { Network, GitBranch, Check } from 'lucide-react';

export default function SplitComparison({ data }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="section-card">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Before State */}
        <div className="relative">
          <div className="absolute -top-3 left-4 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
            {data.before.label}
          </div>
          <div className="border-2 border-red-200 rounded-lg p-6 bg-red-50/50 h-full">
            <div className="flex justify-center mb-4">
              <GitBranch className="w-16 h-16 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
              {data.before.description}
            </h3>

            {expanded && data.before.details && (
              <ul className="mt-4 space-y-2">
                {data.before.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-red-500 mt-1">x</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* After State */}
        <div className="relative">
          <div className="absolute -top-3 left-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
            {data.after.label}
          </div>
          <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50/50 h-full">
            <div className="flex justify-center mb-4">
              <Network className="w-16 h-16 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
              {data.after.description}
            </h3>

            {expanded && data.after.details && (
              <ul className="mt-4 space-y-2">
                {data.after.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {data.before.details && data.after.details && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm text-gray-600 hover:text-wa-blue transition-colors"
          >
            {expanded ? '^ Hide details' : 'v Show details'}
          </button>
        </div>
      )}
    </div>
  );
}
