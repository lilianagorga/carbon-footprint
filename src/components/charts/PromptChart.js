import React, {useState, useEffect} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const PromptChart = ({ data }) => {
  const [chartSize, setChartSize] = useState({ width: 350, height: 350 });

  useEffect(() => {
    const handleChartResize = () => {
      const newSize = window.innerWidth;
      if (newSize <= 1024) {
        setChartSize({ width: 350, height: 350 });
      } else {
        setChartSize({ width: 450, height: 450 });
      }
    }
    window.addEventListener('resize', handleChartResize);
    handleChartResize();
    return () => {
      window.removeEventListener('resize', handleChartResize);
    }
  }, []);
  
  return (
    <div className="chart">
      <h1 className="chart-title">Period Range</h1>
      <BarChart 
        width={chartSize.width}
        height={chartSize.height}
        data={data} 
        margin={{ top: 15, right: 50, left: 0, bottom: 15 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis tick={{ fontSize: 13 }}/>
        <Tooltip cursor={{ fill: '#d0c182' }}/>
        <Legend />
        <Bar dataKey="average" fill="#779e0e" type='step'/>
      </BarChart>
    </div>
  );
};

export default PromptChart;

