import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import axios from 'axios';
import Chart from '../components/charts/Chart';
import PromptChart from '../components/charts/PromptChart';
import {
  previousPeriodOptions,
  handleDateRangeChange,
  processData,
} from "../utils";
import '../assets/styles/emission.scss';

const Emissions = () => {
  const [searchParams] = useSearchParams();
  const country = searchParams.get('country');
  const latitude = searchParams.get('latitude');
  const longitude = searchParams.get('longitude');
  const start = searchParams.get('startDate');
  const end = searchParams.get('endDate');

  const startDate = "2019/01/01";

  const [rangeEmissions, setRangeEmissions] = useState([]);
  const [average, setAverage] = useState(0);
  const [promptChart, setPromptChart] = useState([]);
  const [previousPeriod, setpreviousPeriod] = useState(previousPeriodOptions[0].value);
  const [emissionData, setEmissionData] = useState([]);

  const generateUrl = () => {
    const currentDate = new Date().toJSON().split("T")[0];

    if (latitude && longitude) {
      return `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?point=${longitude}&point=${latitude}&begin=${startDate}&end=${currentDate}&offset=0`;
    } else {
      return `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?country=${country}&begin=${startDate}&end=${currentDate}&offset=0`;
    }
  };

  const url = generateUrl();

  const handlepreviousPeriodChange = (e) => {
    setpreviousPeriod(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url);
        const { formattedData, filterRange, processedAverage } =
          processData(data, start, end);

        setEmissionData(formattedData);
        setRangeEmissions(filterRange);
        setAverage(processedAverage);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url, start, end]);

  useEffect(() => {
    const dateRange = handleDateRangeChange(emissionData, previousPeriod);
    setPromptChart(dateRange);
  }, [emissionData, previousPeriod]);

  return (
    <div>
      <div className='chart-label-container'>
        <label className='chart-label'>
          <span>Period: </span>
          <select value={previousPeriod} onChange={handlepreviousPeriodChange}>
            {previousPeriodOptions.map((range) => (
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


