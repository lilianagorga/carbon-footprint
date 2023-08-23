import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart = ({ rangeEmissions }) => {
  return (
    <div>
      <h1>Emissions</h1>
      
      
      <BarChart width={600} height={400} data={rangeEmissions}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="start" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="average" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Chart;