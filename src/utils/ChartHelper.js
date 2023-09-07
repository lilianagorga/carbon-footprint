import React, { useState, useEffect } from 'react';

export const ChartHelper = ({ children }) => {
  const [chartSize, setChartSize] = useState({ width: 350, height: 350 });

  useEffect(() => {
    const handleChartResize = () => {
      const newSize = window.innerWidth;
      if (newSize <= 1024) {
        setChartSize({ width: 350, height: 350 });
      } else {
        setChartSize({ width: 450, height: 450 });
      }
    };

    window.addEventListener('resize', handleChartResize);
    handleChartResize();

    return () => {
      window.removeEventListener('resize', handleChartResize);
    };
  }, []);

  return <>{children(chartSize)}</>;
};
