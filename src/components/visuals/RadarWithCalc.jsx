import { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Calculator, TrendingUp } from 'lucide-react';
import { formatCurrency } from '../../utils/helpers';

export default function RadarWithCalc({ data }) {
  const [radarView, setRadarView] = useState('today');
  const [selectedOrgSize, setSelectedOrgSize] = useState(data.calculator.orgSizes[1]);
  const [showGrowth, setShowGrowth] = useState(false);

  const radarData = data.dimensions.map((dimension, index) => ({
    dimension,
    value: radarView === 'today' ? data.today[index] : data.target[index],
  }));

  return (
    <div className="space-y-8">
      {/* Radar Chart */}
      <div className="section-card">
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setRadarView('today')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              radarView === 'today'
                ? 'bg-wa-blue text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Today
          </button>
          <button
            onClick={() => setRadarView('target')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              radarView === 'target'
                ? 'bg-wa-blue text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Target (3-5 years)
          </button>
        </div>

        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radarData}>
              <PolarGrid stroke="#e5e7eb" />
              <PolarAngleAxis
                dataKey="dimension"
                tick={{ fill: '#6b7280', fontSize: 12 }}
              />
              <PolarRadiusAxis
                angle={90}
                domain={[0, 100]}
                tick={{ fill: '#6b7280', fontSize: 10 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
              <Radar
                name={radarView === 'today' ? 'Today' : 'Target'}
                dataKey="value"
                stroke="#0066CC"
                fill="#0066CC"
                fillOpacity={0.6}
                animationDuration={800}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ROI Calculator */}
      <div className="section-card">
        <div className="flex items-center gap-3 mb-6">
          <Calculator className="w-6 h-6 text-wa-blue" />
          <h3 className="text-lg font-semibold text-gray-900">
            {data.calculator.title}
          </h3>
        </div>

        <div className="space-y-4">
          {data.calculator.orgSizes.map((orgSize) => (
            <button
              key={orgSize.value}
              onClick={() => setSelectedOrgSize(orgSize)}
              className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                selectedOrgSize.value === orgSize.value
                  ? 'border-wa-blue bg-wa-blue/5 shadow-md'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {orgSize.label}
                  </h4>
                  <p className="text-sm text-gray-600">{orgSize.description}</p>
                </div>
                <div className="text-right ml-4">
                  <p className="text-2xl font-bold text-wa-blue">
                    {formatCurrency(orgSize.benefit)}
                  </p>
                  <p className="text-xs text-gray-500">per year</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-900">
            <strong>Selected:</strong> {selectedOrgSize.label} = <strong>{formatCurrency(selectedOrgSize.benefit)}/year</strong> in reduced duplication and improved efficiency
          </p>
        </div>
      </div>

      {/* Growth Animation */}
      {data.growthAnimation && (
        <div className="section-card">
          <button
            onClick={() => setShowGrowth(!showGrowth)}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-all"
          >
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-wa-blue" />
              <span className="font-semibold text-gray-900">
                {data.growthAnimation.title}
              </span>
            </div>
            <span className={`text-2xl transition-transform ${showGrowth ? 'rotate-180' : ''}`}>
              v
            </span>
          </button>

          {showGrowth && (
            <div className="mt-6 space-y-4 animate-fade-in-up">
              {data.growthAnimation.milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-wa-blue rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-xs text-white/80 font-medium">Year</p>
                      <p className="text-xl font-bold text-white">{milestone.year}</p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-2xl font-bold text-wa-blue mb-1">
                      {milestone.agencies} agencies
                    </p>
                    <p className="text-sm text-gray-700">{milestone.value}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
