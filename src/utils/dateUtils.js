export const formatDate = (date) => {
  const fullDate = new Date(date);
  const dateFormatted = `${fullDate.getMonth() + 1}/${fullDate.getDate()}/${fullDate.getFullYear()}`;

  return dateFormatted;
};

export const sortAndFormatData = (data) => {
  const sortedData = data.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());

  const formattedData = sortedData.map((data) => {
    const unfixedAverage = data.average;
    const unformattedEnd = data.end;
    const unformattedStart = data.start;

    const average = Number((unfixedAverage * 100).toFixed(3));
    const start = formatDate(unformattedStart);
    const end = formatDate(unformattedEnd);

    return { average, end, start };
  });
  return formattedData;
};


export const filterDataByDateRange = (data, startDate, endDate) => {
  const filterRange = data.filter((data) => {
    const startDateValue = new Date(data.start).getTime();
    const endDateValue = new Date(data.end).getTime();

    const startRange = new Date(startDate).getTime();
    const endRange = new Date(endDate).getTime();

    return startDateValue >= startRange && endDateValue <= endRange;
  });

  return filterRange;
};


