import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { ChartHelper } from '../../utils';

const PromptChart = ({ data }) => {
  return (
    <div className="chart">
      <h1 className="chart-title">Period Range</h1>

      <ChartHelper>
        {(chartSize) => (
          <BarChart
            width={chartSize.width}
            height={chartSize.height}
            data={data}
            margin={{ top: 15, right: 50, left: 0, bottom: 15 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis tick={{ fontSize: 13 }} />
            <Tooltip cursor={{ fill: '#d0c182' }} />
            <Legend />
            <Bar dataKey="average" fill="#779e0e" type='step' />
          </BarChart>
        )}
      </ChartHelper>
    </div>
  );
};

export default PromptChart;
