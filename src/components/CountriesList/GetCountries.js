import React, { useEffect, useState } from 'react';
import CountriesListPresentational from './CountriesListPresentational'; 
import { getAllCountries } from '../../utils'; 

const GetCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getallCountries = async () => {
      try {
        const countries = await getAllCountries();
        setCountries(countries);
      } catch (err) {
        console.error(err);
        return [];
      }
    }

    getallCountries();
  }, []);

  return <CountriesListPresentational countries={countries} />;
};

export default GetCountries;
