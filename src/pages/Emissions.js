import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import axios from 'axios';
import {
  previousPeriodOptions,
  handleDateRangeChange,
  processData,
} from "../utils";
import '../assets/styles/emission.scss';
import Loader from '../components/Loader';
import EmissionsContent  from '../components/EmissionsContent';

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
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
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
      {isLoading ? <Loader /> : 
        <EmissionsContent
          average={average}
          previousPeriod={previousPeriod}
          handlepreviousPeriodChange={handlepreviousPeriodChange}
          promptChart={promptChart}
          rangeEmissions={rangeEmissions}
        />
      }
    </div>
  );
};
  
  export default Emissions;


