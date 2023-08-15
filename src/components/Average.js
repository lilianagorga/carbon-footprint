import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Average = () => {
  const [averages, setAverages] = useState([]);
  const baseUrl = 'https://api.v2.emissions-api.org';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/v2/carbonmonoxide/average.json`, {
          params: {
            begin: '2023-02-11', 
            end: '2023-08-11',  
            limit: 100,
            offset: 0,
            country: 'IT'        
          }
        });
        setAverages(response.data);
        console.log('average', response.data);
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
