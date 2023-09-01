import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const PromptChart = ({ data }) => {
  return (
    <div className="chart">
      <h1 className="chart-title">Period Range</h1>
      <BarChart width={600} height={400} data={data} margin={{ top: 15, right: 30, left: 20, bottom: 15 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis tick={{ fontSize: 13 }}/>
        <Tooltip cursor={{ fill: '#d0c182' }}/>
        <Legend />
        <Bar dataKey="average" fill="#779e0e" type='step' maxBarSize={70} z={3}/>
      </BarChart>
    </div>
  );
};

export default PromptChart;

