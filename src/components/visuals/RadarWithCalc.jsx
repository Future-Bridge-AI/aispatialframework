import { useState, useMemo } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import CountUp from 'react-countup';

// Calculate benefit based on org size (staff count)
function calculateBenefit(staffCount) {
  if (staffCount <= 2) {
    return Math.round(staffCount * 22500);
  } else if (staffCount <= 10) {
    return Math.round(45000 + (staffCount - 2) * 16875);
  } else {
    return Math.round(180000 + (staffCount - 10) * 27000);
  }
}

function formatCurrency(amount) {
  if (amount >= 1000000) {
    return `$${(amount / 1000000).toFixed(2)}M`;
  } else if (amount >= 1000) {
    return `$${(amount / 1000).toFixed(0)}K`;
  }
  return `$${amount.toLocaleString()}`;
}

function BenefitSlider({ value, onChange, benefit }) {
  const sizeLabel = value <= 2 ? 'Small' : value <= 10 ? 'Medium' : 'Large';

  return (
    <div className="p-6 border border-aqua/20 bg-aqua/5">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-mist uppercase tracking-widest">Organisation Size</span>
        <span className="text-sm text-aqua font-medium">{sizeLabel} ({value} spatial staff)</span>
      </div>

      {/* Custom slider */}
      <div className="relative mb-6">
        <input
          type="range"
          min="1"
          max="30"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="w-full h-2 bg-stone/30 rounded-lg appearance-none cursor-pointer
                     [&::-webkit-slider-thumb]:appearance-none
                     [&::-webkit-slider-thumb]:w-5
                     [&::-webkit-slider-thumb]:h-5
                     [&::-webkit-slider-thumb]:rounded-full
                     [&::-webkit-slider-thumb]:bg-aqua
                     [&::-webkit-slider-thumb]:cursor-pointer
                     [&::-webkit-slider-thumb]:transition-all
                     [&::-webkit-slider-thumb]:hover:scale-110
                     [&::-webkit-slider-thumb]:shadow-lg
                     [&::-webkit-slider-thumb]:shadow-aqua/30
                     [&::-moz-range-thumb]:w-5
                     [&::-moz-range-thumb]:h-5
                     [&::-moz-range-thumb]:rounded-full
                     [&::-moz-range-thumb]:bg-aqua
                     [&::-moz-range-thumb]:border-0
                     [&::-moz-range-thumb]:cursor-pointer
                     focus:outline-none focus:ring-2 focus:ring-aqua/50"
          aria-label={`Organisation size: ${value} spatial staff`}
        />

        {/* Scale markers */}
        <div className="flex justify-between mt-2 text-xs text-drift">
          <span>1</span>
          <span>10</span>
          <span>20</span>
          <span>30</span>
        </div>
      </div>

      {/* Benefit display */}
      <div className="text-center p-4 bg-void/50 border border-aqua/10">
        <p className="text-xs text-mist uppercase tracking-widest mb-2">Estimated Annual Benefit</p>
        <p className="text-4xl font-light text-aqua glow-text">
          <CountUp
            end={benefit}
            duration={0.5}
            separator=","
            prefix="$"
            preserveValue={true}
          />
        </p>
        <p className="text-xs text-mist mt-2">in reduced duplication and efficiency gains</p>
      </div>

      {/* Size category descriptions */}
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div className={`p-2 transition-all ${value <= 2 ? 'bg-aqua/10 border border-aqua/20' : ''}`}>
          <p className="text-xs text-mist">Small</p>
          <p className="text-[10px] text-drift">1-2 staff</p>
        </div>
        <div className={`p-2 transition-all ${value > 2 && value <= 10 ? 'bg-aqua/10 border border-aqua/20' : ''}`}>
          <p className="text-xs text-mist">Medium</p>
          <p className="text-[10px] text-drift">3-10 staff</p>
        </div>
        <div className={`p-2 transition-all ${value > 10 ? 'bg-aqua/10 border border-aqua/20' : ''}`}>
          <p className="text-xs text-mist">Large</p>
          <p className="text-[10px] text-drift">10+ staff</p>
        </div>
      </div>
    </div>
  );
}

export default function RadarWithCalc({ data }) {
  const [radarView, setRadarView] = useState('today');
  const [staffCount, setStaffCount] = useState(5);
  const [showGrowth, setShowGrowth] = useState(false);

  const benefit = useMemo(() => calculateBenefit(staffCount), [staffCount]);

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
            className={`px-8 py-3 text-sm tracking-widest uppercase transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-aqua/50 ${
              radarView === 'today'
                ? 'bg-aqua/10 text-aqua border border-aqua/30'
                : 'bg-transparent text-mist border border-stone hover:border-aqua/30'
            }`}
            aria-pressed={radarView === 'today'}
          >
            Today
          </button>
          <button
            onClick={() => setRadarView('target')}
            className={`px-8 py-3 text-sm tracking-widest uppercase transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-aqua/50 ${
              radarView === 'target'
                ? 'bg-aqua/10 text-aqua border border-aqua/30'
                : 'bg-transparent text-mist border border-stone hover:border-aqua/30'
            }`}
            aria-pressed={radarView === 'target'}
          >
            Target
          </button>
        </div>

        <div className="h-96" role="img" aria-label="Radar chart showing capability dimensions">
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

      {/* Interactive Benefit Slider */}
      <div className="section-card">
        <h3 className="text-xs font-medium text-mist tracking-[0.3em] uppercase mb-6">
          Estimate Your Agency's Benefit
        </h3>

        <BenefitSlider
          value={staffCount}
          onChange={setStaffCount}
          benefit={benefit}
        />
      </div>

      {/* Growth Animation */}
      {data.growthAnimation && (
        <div className="section-card">
          <button
            onClick={() => setShowGrowth(!showGrowth)}
            className="w-full flex items-center justify-between p-2 hover:bg-stone/20 transition-all focus:outline-none focus:ring-2 focus:ring-aqua/50 rounded"
            aria-expanded={showGrowth}
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
