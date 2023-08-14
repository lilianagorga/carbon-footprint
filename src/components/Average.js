import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Average = () => {
  const [averages, setAverages] = useState([]);
  const baseUrl = 'https://api.v2.emissions-api.org';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/v2/carbonmonoxide/average.json`, {
          params: {
            begin: '2023-02-11', // Replace with actual date
            end: '2023-08-11',   // Replace with actual date
            limit: 100,
            offset: 0,
            country: 'IT'        // Replace with country code
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

  return (
    <div>
      <h1>Average Carbon Monoxide Data</h1>
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
