
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
    <div className="w-full h-[260px] sm:h-[340px] md:h-[400px] bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-slate-200 min-w-0">
      <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-4">Visualización de Complejidad Big-O</h3>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={BIG_O_DATA} margin={{ top: 5, right: 8, left: -10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="n" label={{ value: 'Tamaño Entrada (n)', position: 'insideBottomRight', offset: -5 }} />
          <YAxis label={{ value: 'Operaciones', angle: -90, position: 'insideLeft' }} />
          <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
           <Legend />
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
