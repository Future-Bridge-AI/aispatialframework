import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default function ToggleComparison({ data }) {
  const [activeView, setActiveView] = useState(data.toggleStates[0].id);

  const chartData = data.metrics.map((metric, index) => ({
    name: metric,
    value: activeView === 'wa' ? data.waValues[index] : data.nationalValues[index],
  }));

  const colors = ['#7fb8c9', '#5a9aab', '#a89078'];

  return (
    <div className="section-card">
      {/* Toggle Buttons */}
      <div className="flex justify-center gap-1 mb-10">
        {data.toggleStates.map((state, index) => (
          <button
            key={state.id}
            onClick={() => setActiveView(state.id)}
            className={`px-8 py-3 text-sm tracking-widest uppercase transition-all duration-500 ${
              activeView === state.id
                ? 'bg-aqua/10 text-aqua border border-aqua/30'
                : 'bg-transparent text-mist border border-stone hover:border-aqua/30 hover:text-aqua/70'
            }`}
          >
            {state.label}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#252525" vertical={false} />
            <XAxis
              dataKey="name"
              tick={{ fill: '#c9c5bc', fontSize: 11, fontWeight: 300 }}
              tickLine={false}
              axisLine={{ stroke: '#252525' }}
            />
            <YAxis
              domain={[0, 100]}
              tick={{ fill: '#c9c5bc', fontSize: 11, fontWeight: 300 }}
              tickLine={false}
              axisLine={{ stroke: '#252525' }}
              label={{ value: 'Maturity %', angle: -90, position: 'insideLeft', fill: '#c9c5bc', fontSize: 11 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1a1a1a',
                border: '1px solid #252525',
                borderRadius: '0',
                padding: '12px 16px'
              }}
              labelStyle={{ color: '#f5f2ed', fontWeight: 300 }}
              itemStyle={{ color: '#7fb8c9' }}
              formatter={(value) => [`${value}%`, 'Maturity']}
            />
            <Bar dataKey="value" radius={[2, 2, 0, 0]} animationDuration={800}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Insight */}
      <div className="mt-8 pt-6 border-t border-stone/30 text-center">
        <p className="text-sm text-mist font-light tracking-wide">
          {activeView === 'wa'
            ? 'Western Australia leads by 20-30 points across all dimensions'
            : 'National baseline reflects current minimum standards'}
        </p>
      </div>
    </div>
  );
}
