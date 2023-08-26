const currentDate = new Date();
const calculateDate = (date, amount, type) => {
  if (type === 'year') {
    const startDate = new Date(date);
    startDate.setFullYear(date.getFullYear() - amount);
    return startDate.toISOString().split('T')[0];
  } else if (type === 'month') {
    const startDate = new Date(date);
    startDate.setMonth(date.getMonth() - amount);
    return startDate.toISOString().split('T')[0];
  }
};

export const timeRangeOption = [
  {
    value: 'whole_period',
    label: 'Whole Period',
    startDate: '2019-01-01',
    endDate: currentDate.toISOString().split('T')[0],
  },
  {
    value: 'last_one_year',
    label: 'Last one year',
    startDate: calculateDate(currentDate, 1, 'year'),
    endDate: currentDate.toISOString().split('T')[0],
  },
  {
    value: 'last_six_months',
    label: 'Last 6 months',
    startDate: calculateDate(currentDate, 6, 'month'),
    endDate: currentDate.toISOString().split('T')[0],
  },
  {
    value: 'last_three_months',
    label: 'Last 3 months',
    startDate: calculateDate(currentDate, 3, 'month'),
    endDate: currentDate.toISOString().split('T')[0],
  },
  {
    value: 'last_month',
    label: 'Last month',
    startDate: calculateDate(currentDate, 1, 'month'),
    endDate: currentDate.toISOString().split('T')[0],
  }
];