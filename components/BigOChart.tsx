
import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { BIG_O_DATA } from '../constants';

const BigOChart: React.FC = () => {
  return (
    <div className="w-full h-[260px] sm:h-[340px] md:h-[400px] bg-white dark:bg-slate-800/60 p-3 sm:p-5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700/60 min-w-0">
      <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-4 text-slate-900 dark:text-slate-50">
        Visualización de Complejidad Big-O
      </h3>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={BIG_O_DATA} margin={{ top: 5, right: 8, left: -10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} className="opacity-30" stroke="currentColor" />
          <XAxis
            dataKey="n"
            tick={{ fill: 'currentColor', fontSize: 11 }}
            className="text-slate-500 dark:text-slate-400"
            label={{ value: 'Tamaño Entrada (n)', position: 'insideBottomRight', offset: -5, fill: 'currentColor' }}
          />
          <YAxis
            tick={{ fill: 'currentColor', fontSize: 11 }}
            className="text-slate-500 dark:text-slate-400"
            label={{ value: 'Operaciones', angle: -90, position: 'insideLeft', fill: 'currentColor' }}
          />
          <Tooltip
            contentStyle={{
              borderRadius: '12px',
              border: '1px solid rgba(148,163,184,0.3)',
              background: 'rgba(15,23,42,0.95)',
              color: '#f1f5f9',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
            }}
          />
          <Legend wrapperStyle={{ fontSize: '12px' }} />
          <Line type="monotone" dataKey="constant" name="O(1)" stroke="#10b981" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="log" name="O(log n)" stroke="#3b82f6" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="linear" name="O(n)" stroke="#f59e0b" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="nlog" name="O(n log n)" stroke="#8b5cf6" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="quadratic" name="O(n²)" stroke="#ea580c" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="exponential" name="O(2ⁿ)" stroke="#ef4444" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BigOChart;
