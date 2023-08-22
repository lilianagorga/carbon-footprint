import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import Chart from '../components/chart/Chart';
import { sortAndFormatData, filterDataByDateRange } from '../utils';

const fetchData = async ({ country, start, end }) => {
  const currentDate = new Date().toJSON();
  const startDate = '2019-01-01';
  const url = `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?country=${country}&begin=${startDate}&end=${currentDate}&offset=0`;

  const response = await axios.get(url);
  const data = response.data;
  const formattedData = sortAndFormatData(data);
  const filterRange = filterDataByDateRange(formattedData, start, end);

  const average = filterRange.reduce((acc, curr) => acc + curr.average, 0).toFixed(2);
  console.log('avg', average);

  return {
    rangeEmissions: filterRange,
    average: average,
  };
};

const Emissions = () => {
  const { country, start, end } = useParams();

  const { data, error, isLoading } = useQuery(
    ['emissions', { country, start, end }],
    () => fetchData({ country, start, end })
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return <Chart rangeEmissions={data.rangeEmissions} average={data.average} />;
};
  
  export default Emissions;

