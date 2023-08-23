import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Chart from '../components/charts/Chart';
import PromptChart from '../components/charts/PromptChart';
import { sortAndFormatData, filterDataByDateRange } from '../utils';

const Emissions = () => {
  const { country, latitude, longitude, start, end } = useParams();
  const [rangeEmissions, setRangeEmissions] = useState([]);
  const [average, setAverage] = useState(0);
  const [promptChart, setPromptChart] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState('whole');

  useEffect(() => {
    const currentDate = new Date().toJSON().split('T')[0];
    const startDate = getPeriod(selectedPeriod);
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
        const additionalFilterRange = filterDataByDateRange(formattedData, getPeriod(selectedPeriod), end);
        setPromptChart(additionalFilterRange);
        console.log('avg', avg);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [country, latitude, longitude, start, end, selectedPeriod]);
  const getPeriod = (period) => {
    const currentDate = new Date();
    switch (period) {
      case 'whole':
        return '2019-01-01';
      case 'last6':
        const sixMonthsAgo = new Date(currentDate);
        sixMonthsAgo.setMonth(currentDate.getMonth() - 6);
        return sixMonthsAgo.toISOString().split('T')[0];
      case 'last3':
        const threeMonthsAgo = new Date(currentDate);
        threeMonthsAgo.setMonth(currentDate.getMonth() - 3);
        return threeMonthsAgo.toISOString().split('T')[0];
      case 'last1':
        const oneMonthAgo = new Date(currentDate);
        oneMonthAgo.setMonth(currentDate.getMonth() - 1);
        return oneMonthAgo.toISOString().split('T')[0];
      case 'last12':
        const oneYearAgo = new Date(currentDate);
        oneYearAgo.setFullYear(currentDate.getFullYear() - 1);
        return oneYearAgo.toISOString().split('T')[0];
      default:
        return '2019-01-01';
    }
  }; 

  const handleDate = (e) => {
    setSelectedPeriod(e.target.value);
  };

  return (
    <div>
      <div>
        <label>
          Period:
          <select value={selectedPeriod} onChange={handleDate}>
            <option value="whole">Whole Period</option>
            <option value="last12">Last One Year</option>
            <option value="last6">Last 6 Months</option>
            <option value="last3">Last 3 Months</option>
            <option value="last1">Last Month</option>
          </select>
        </label>
      </div>
      <div className="charts-container">
        <Chart rangeEmissions={rangeEmissions} average={average} />
        <PromptChart data={promptChart} />
      </div>
    </div>
  );
};
  
  export default Emissions;


