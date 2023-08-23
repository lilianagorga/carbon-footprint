import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Chart from '../components/chart/Chart';
import { sortAndFormatData, filterDataByDateRange } from '../utils';

const Emissions = () => {
  const { country, latitude, longitude, start, end } = useParams();
  const [rangeEmissions, setRangeEmissions] = useState([]);
  const [average, setAverage] = useState(0);

  useEffect(() => {
    const currentDate = new Date().toJSON();
    const startDate = '2019-01-01';
    let url;

    if (latitude && longitude) {
      url = `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?point=${longitude}&point=${latitude}&begin=${startDate}&end=${currentDate}&offset=0`;
    } else {
      url = `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?country=${country}&begin=${startDate}&end=${currentDate}&offset=0`;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const data = response.data;
        const formattedData = sortAndFormatData(data);
        const filterRange = filterDataByDateRange(formattedData, start, end);
        setRangeEmissions(filterRange);
        const avg = filterRange.reduce((acc, curr) => acc + curr.average, 0).toFixed(2);
        setAverage(avg);
        console.log('avg', avg);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [country, latitude, longitude, start, end]);

  return (
    <div>
      <Chart rangeEmissions={rangeEmissions} average={average} />
    </div>
  );
};
  
  export default Emissions;

