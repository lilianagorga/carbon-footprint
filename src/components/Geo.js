import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Geo = () => {
  const [geoData, setGeoData] = useState([]);
  const baseUrl = 'https://api.v2.emissions-api.org';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/v2/carbonmonoxide/geo.json`, {
          params: {
            geoframe: '6.0,47.0,18.5,36.5',
            begin: '2023-02-11', // Replace with actual date
            end: '2023-08-11',   // Replace with actual date
            limit: 100,
            offset: 0
          }
        });
        setGeoData(response.data.features);
        console.log('geo', response.data.features);
      } catch (error) {
        console.error('Error fetching geo data:', error);
      }
    };

    fetchData();
  }, [baseUrl]);

  return (
    <div>
      <h1>Geo Data</h1>
      <ul>
        {geoData.map((feature, index) => (
          <li key={index}>
            Properties: {JSON.stringify(feature.properties)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Geo;
