import {
  timeRangeOption,
  filterDataByDateRange,
  sortAndFormatData,
} from "./index";

const calculateAverage = (data, setAverage) => {
  return data.reduce((acc, curr) => acc + curr.average, 0).toFixed(2);
};

export const handleDateRangeChange = (emissionData, timeRange) => {
  const setRange = timeRangeOption.find((range) => range.value === timeRange);
  const additionalFilterRange = filterDataByDateRange(
    emissionData,
    setRange.startDate,
    setRange.endDate
  );
  return additionalFilterRange;
};

export const processData = (data, start, end) => {
  const formattedData = sortAndFormatData(data);
  const filterRange = filterDataByDateRange(formattedData, start, end);
  const processedAverage = calculateAverage(filterRange);

  return {
    formattedData,
    filterRange,
    processedAverage,
  }
};