import axios from "axios";

const getAllCountries = async () => {
  const res = await axios.get('https://api.v2.emissions-api.org/api/v2/countries.json');
  const data = res.data;

  const filteredCountryCodes = Object.keys(data || []).filter((key) => {
    return key.length <= 2;
  });

  const countryList = filteredCountryCodes.map((key) => {
    return { label: data[key], value: key };
  });

  const sortedCountryList = countryList.sort((a, b) => {
    if (a.label < b.label) return -1;
    if (a.label > b.label) return 1;
    return 0;
  });

  return sortedCountryList;
};

export default getAllCountries;