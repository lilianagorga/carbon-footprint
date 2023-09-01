import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart = ({ rangeEmissions }) => {
  return (
    <div className='chart'>
      <h1 className='chart-title'>Period Custom</h1>
      <BarChart width={600} height={400} data={rangeEmissions} margin={{ top: 15, right: 30, left: 20, bottom: 15 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis tick={{ fontSize: 13 }}/>
        <Tooltip cursor={{ fill: '#d0c182' }}/>
        <Legend />
        <Bar type='step' dataKey="average" fill="#779e0e" maxBarSize={70} z={3}/>
      </BarChart>
    </div>
  );
};

export default Chart;