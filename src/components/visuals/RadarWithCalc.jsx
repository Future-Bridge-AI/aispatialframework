import { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
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
        <div className="flex justify-center gap-1 mb-8">
          <button
            onClick={() => setRadarView('today')}
            className={`px-8 py-3 text-sm tracking-widest uppercase transition-all duration-500 ${
              radarView === 'today'
                ? 'bg-aqua/10 text-aqua border border-aqua/30'
                : 'bg-transparent text-mist border border-stone hover:border-aqua/30'
            }`}
          >
            Today
          </button>
          <button
            onClick={() => setRadarView('target')}
            className={`px-8 py-3 text-sm tracking-widest uppercase transition-all duration-500 ${
              radarView === 'target'
                ? 'bg-aqua/10 text-aqua border border-aqua/30'
                : 'bg-transparent text-mist border border-stone hover:border-aqua/30'
            }`}
          >
            Target
          </button>
        </div>

        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radarData}>
              <PolarGrid stroke="#252525" />
              <PolarAngleAxis
                dataKey="dimension"
                tick={{ fill: '#c9c5bc', fontSize: 11, fontWeight: 300 }}
              />
              <PolarRadiusAxis
                angle={90}
                domain={[0, 100]}
                tick={{ fill: '#c9c5bc', fontSize: 10 }}
                axisLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #252525',
                  borderRadius: '0'
                }}
                labelStyle={{ color: '#f5f2ed' }}
              />
              <Radar
                name={radarView === 'today' ? 'Today' : 'Target'}
                dataKey="value"
                stroke="#7fb8c9"
                fill="#7fb8c9"
                fillOpacity={0.3}
                animationDuration={800}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ROI Calculator */}
      <div className="section-card">
        <h3 className="text-xs font-medium text-mist tracking-[0.3em] uppercase mb-6">
          {data.calculator.title}
        </h3>

        <div className="space-y-3">
          {data.calculator.orgSizes.map((orgSize) => (
            <button
              key={orgSize.value}
              onClick={() => setSelectedOrgSize(orgSize)}
              className={`w-full p-5 border transition-all duration-500 text-left ${
                selectedOrgSize.value === orgSize.value
                  ? 'border-aqua/30 bg-aqua/5'
                  : 'border-stone/30 hover:border-stone/60'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-light text-bone mb-1 tracking-wide">
                    {orgSize.label}
                  </h4>
                  <p className="text-sm text-mist/60 font-light">{orgSize.description}</p>
                </div>
                <div className="text-right ml-6">
                  <p className="text-2xl font-light text-aqua">
                    {formatCurrency(orgSize.benefit)}
                  </p>
                  <p className="text-xs text-mist tracking-wide">per year</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6 p-4 border-l-2 border-aqua/30 bg-aqua/5">
          <p className="text-sm text-cream/80 font-light">
            <span className="text-aqua">{selectedOrgSize.label}</span> →
            <span className="text-aqua ml-2">{formatCurrency(selectedOrgSize.benefit)}/year</span>
            <span className="text-mist ml-2">in efficiency gains</span>
          </p>
        </div>
      </div>

      {/* Growth Animation */}
      {data.growthAnimation && (
        <div className="section-card">
          <button
            onClick={() => setShowGrowth(!showGrowth)}
            className="w-full flex items-center justify-between p-2 hover:bg-stone/20 transition-all"
          >
            <span className="text-xs font-medium text-mist tracking-[0.3em] uppercase">
              {data.growthAnimation.title}
            </span>
            <span className={`text-mist transition-transform duration-500 ${showGrowth ? 'rotate-180' : ''}`}>
              ↓
            </span>
          </button>

          {showGrowth && (
            <div className="mt-6 space-y-4 animate-fade-in-up">
              {data.growthAnimation.milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="flex items-start gap-6 p-4 border-l border-aqua/20 bg-deep/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-16 h-16 border border-aqua/30 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-xs text-mist/60 uppercase tracking-widest">Year</p>
                      <p className="text-2xl font-light text-aqua">{milestone.year}</p>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-xl font-light text-bone mb-1">
                      {milestone.agencies} <span className="text-sm text-mist">agencies</span>
                    </p>
                    <p className="text-sm text-mist/70 font-light">{milestone.value}</p>
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
