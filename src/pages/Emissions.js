import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Chart from '../components/charts/Chart';
import PromptChart from '../components/charts/PromptChart';
import { sortAndFormatData, filterDataByDateRange, timeRangeOption } from '../utils';

const Emissions = () => {
  const { country, latitude, longitude, start, end } = useParams();
  const [rangeEmissions, setRangeEmissions] = useState([]);
  const [average, setAverage] = useState(0);
  const [promptChart, setPromptChart] = useState([]);
  const startDate = '2019/01/01';
  const [timeRange, setTimeRange] = useState(timeRangeOption[0].value);
  const [emissionData, setEmissionData] = useState([]);

  useEffect(() => {
    const currentDate = new Date().toJSON().split('T')[0];
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
        setEmissionData(formattedData);
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

  useEffect(() => {
    if (emissionData.length === 0) {
      return;
    }
    const setRange = timeRangeOption.find((range) => range.value === timeRange);
    const additionalFilterRange = filterDataByDateRange(emissionData, setRange.startDate, setRange.endDate);
    setPromptChart(additionalFilterRange);
    const avg = additionalFilterRange.reduce((acc, curr) => acc + curr.average, 0).toFixed(2);
    console.log('Average:', avg);
  }, [emissionData, timeRange]);

  const handleDate = (e) => {
    setTimeRange(e.target.value);
  };

  return (
    <div>
      <div>
        <label>
          Period:
          <select value={timeRange} onChange={handleDate}>
            {timeRangeOption.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
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


