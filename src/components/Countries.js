import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import countryCodeList from './utils/countryCodeList';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const baseUrl = 'https://api.v2.emissions-api.org';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/v2/countries.json`);
        console.log('countries', response.data);
        if (response.data) {
          setCountries(response.data);
        } else {
          console.error('Invalid response format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchData();
  }, [baseUrl]);

  return (
    <div>
      <h1>List of Countries</h1>
      <ul>
        {countryCodeList.map((country, index) => (
          <li key={index}>
            <Link to={`/average${country.url}`}>{country.name}</Link>
          </li>
        ))}
        <li>
          <Link to="/average">Global Average</Link>
        </li>
      </ul>
    </div>
  );
};

export default Countries;
