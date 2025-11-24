import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default function ToggleComparison({ data }) {
  const [activeView, setActiveView] = useState(data.toggleStates[0].id);

  const chartData = data.metrics.map((metric, index) => ({
    name: metric,
    value: activeView === 'wa' ? data.waValues[index] : data.nationalValues[index],
  }));

  const colors = ['#0066CC', '#00A4B4', '#003366'];

  return (
    <div className="section-card">
      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        {data.toggleStates.map((state) => (
          <button
            key={state.id}
            onClick={() => setActiveView(state.id)}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeView === state.id
                ? 'bg-wa-blue text-white shadow-lg scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="name"
              tick={{ fill: '#6b7280', fontSize: 12 }}
              tickLine={false}
            />
            <YAxis
              domain={[0, 100]}
              tick={{ fill: '#6b7280', fontSize: 12 }}
              tickLine={false}
              label={{ value: 'Maturity (%)', angle: -90, position: 'insideLeft', fill: '#6b7280' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                padding: '8px 12px'
              }}
              formatter={(value) => [`${value}%`, 'Maturity']}
            />
            <Bar dataKey="value" radius={[8, 8, 0, 0]} animationDuration={800}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Insight */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          {activeView === 'wa'
            ? 'WA is 20-30 points ahead across all dimensions'
            : 'National baseline reflects minimum standards most jurisdictions currently meet'}
        </p>
      </div>
    </div>
  );
}
