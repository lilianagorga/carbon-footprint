import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllCountries } from '../utils';
import ModalPresentational from '../components/Modal/ModalPresentational';

const SearchContainer = () => {
  const [country, setCountry] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const countries = await getAllCountries();
        setCountries(countries);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();
  }, []);

  const handleSubmit = () => {
    navigate(`/emissions/${country}/${startDate}/${endDate}`);
  };

  return (
    <ModalPresentational
      country={country}
      countries={countries}
      startDate={startDate}
      endDate={endDate}
      setCountry={setCountry}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      handleSubmit={handleSubmit}
    />
  );
};

export default SearchContainer;
