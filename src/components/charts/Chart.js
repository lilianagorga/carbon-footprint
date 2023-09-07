import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { ChartHelper } from '../../utils';

const Chart = ({ rangeEmissions }) => {
  return (
    <div className="chart">
      <h1 className="chart-title">Period Custom</h1>

      <ChartHelper>
        {(chartSize) => (
          <div
            {...(rangeEmissions.length === 0 ? { className: 'no-data-chart' } : {})}
          >
            {rangeEmissions.length === 0 ? (
              <h2 className="chart-subtitle">
                No data for the period selected found
              </h2>
            ) : (
              <BarChart
                width={chartSize.width}
                height={chartSize.height}
                data={rangeEmissions}
                margin={{ top: 15, right: 50, left: 0, bottom: 15 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="start" />
                <YAxis tick={{ fontSize: 13 }} />
                <Tooltip cursor={{ fill: "#d0c182" }} />
                <Legend />
                <Bar dataKey="average" fill="#779e0e" />
              </BarChart>
            )}
          </div>
        )}
      </ChartHelper>
    </div>
  );
};

export default Chart;
