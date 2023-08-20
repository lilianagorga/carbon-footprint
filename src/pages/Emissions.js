import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Emissions = () => {
  const { country, start, end } = useParams();
  
  const [rangeEmissions, setRangeEmissions] = useState([]);

  const startDataDate = '2019-01-01';
  const currentDate = new Date().toJSON();

  useEffect(() => {
    const fetchEmissions = async () => {
      const url = `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?country=${country}&begin=${startDataDate}&end=${currentDate}&offset=0`;

      const response = await axios.get(url);
      const data = response.data;

      const sortedData = data.sort((a, b) => {
        const first = new Date(a.start).getTime();
        const second = new Date(b.start).getTime();

        return first - second;
      });

      const formatDate = (date) => {
        const fullDate = new Date(date);
        const dateFormatted = `${fullDate.getMonth() + 1}/${fullDate.getDate()}/${fullDate.getFullYear()} `;

        return dateFormatted;
      };

      const formattedData = sortedData.map((data) => {
        const unfixedAverage = data.average;
        const unformattedEnd = data.end;
        const unformattedStart = data.start;

        const average = Number((unfixedAverage * 100).toFixed(3));
        const start = formatDate(unformattedStart);
        const end = formatDate(unformattedEnd);

        return { average, end, start };
      });

      const filterRange = formattedData.filter((data) => {
        const startDate = new Date(data.start).getTime();
        const endDate = new Date(data.end).getTime();

        const startRange = new Date(start).getTime();
        const endRange = new Date(end).getTime();

        return startDate >= startRange && endDate <= endRange;
      });

      setRangeEmissions(filterRange);

      const average = filterRange.reduce((acc, curr) => {
        return acc + curr.average;
      }, 0).toFixed(2);

      console.log("average", average);
    };
    fetchEmissions();
  }, [country, start, end, startDataDate, currentDate]);

  return (
    <div>
      <h1>Emissions</h1>
      
      <BarChart width={600} height={400} data={rangeEmissions}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="average" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default Emissions;
