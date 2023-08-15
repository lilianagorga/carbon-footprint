import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Average = () => {
  const [averages, setAverages] = useState([]);
  const baseUrl = 'https://api.v2.emissions-api.org';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sixMonthsAgo = new Date('2023-02-11T13:03:40.254000+00:00');
        const currentDate = new Date('2023-08-11T13:03:40.254000+00:00');
        const monthlyAverageData = [];
        sixMonthsAgo.setMonth(currentDate.getMonth() - 6);
        let startDate = new Date(currentDate);
        startDate.setMonth(startDate.getMonth() - 1);

      while (startDate >= sixMonthsAgo) {
        const formattedStartDate = startDate.toISOString().split('T')[0];
        const endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0);
        const formattedEndDate = endDate.toISOString().split('T')[0];

        const response = await axios.get(`${baseUrl}/api/v2/carbonmonoxide/average.json`, {
          params: {
            begin: formattedStartDate,
            end: formattedEndDate,
            limit: 1,
            offset: 0,
            country: 'IT'
          }
        });

        monthlyAverageData.push(response.data[0]);

        startDate.setMonth(startDate.getMonth() - 1);
      }

      setAverages(monthlyAverageData);
      console.log('average', monthlyAverageData);
    } catch (error) {
      console.error('Error fetching averages:', error);
    }
  };

  fetchData();
}, [baseUrl]);


  const chartData = averages.map(item => ({
    name: item.start,
    average: item.average
  }));

  return (
    <div>
      <h1>Average Carbon Monoxide Data</h1>
      <BarChart width={600} height={400} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="average" fill="#8884d8" />
      </BarChart>
      <ul>
        {averages.map((average, index) => (
          <li key={index}>
            Start: {average.start}, End: {average.end}, Average: {average.average}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Average;
