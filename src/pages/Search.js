import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllCountries } from '../utils';
import Modal from '../components/modal/Modal';

const Search = () => {
  const [country, setCountry] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();
  const [searchType, setSearchType] = useState('country');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');

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
    if (searchType === 'country') {
      navigate(`/emissions/country/${country}/${startDate}/${endDate}`);
    } else if (searchType === 'coordinates') {
      navigate(`/emissions/coordinates/${latitude}/${longitude}/${startDate}/${endDate}`);
    }
  };

  return (
    <Modal
      country={country}
      countries={countries}
      startDate={startDate}
      endDate={endDate}
      setCountry={setCountry}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      handleSubmit={handleSubmit}
      searchType={searchType}
      setSearchType={setSearchType}
      longitude={longitude}
      latitude={latitude}
      setLongitude={setLongitude}
      setLatitude={setLatitude}
    />
  );
};


export default Search;
