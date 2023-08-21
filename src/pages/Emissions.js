import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import EmissionsGraphic from '../components/emissionsGraphic/EmissionsGraphic';
import { sortAndFormatData, filterDataByDateRange } from '../utils';

const Emissions = () => {
  const { country, start, end } = useParams();
  const [rangeEmissions, setRangeEmissions] = useState([]);
  const [average, setAverage] = useState(0);

  useEffect(() => {
      const currentDate = new Date().toJSON();
      const startDate = '2019-01-01';
      const url = `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?country=${country}&begin=${startDate}&end=${currentDate}&offset=0`;

      try {
        const response = axios.get(url);
        const data = response.data;
        const formattedData = sortAndFormatData(data);
        const filterRange = filterDataByDateRange(formattedData, start, end);
        setRangeEmissions(filterRange);
        const avg = filterRange.reduce((acc, curr) => acc + curr.average, 0).toFixed(2);
        setAverage(avg);
      } catch (error) {
        console.log(error);
      }
  }, [country, start, end]);

    return (
      <EmissionsGraphic rangeEmissions={rangeEmissions} average={average} />
    );
  };
  
  export default Emissions;

