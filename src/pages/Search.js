import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import eco from '../assets/img/eco.png';
import energySaving from '../assets/img/energy_savings.png';
import car from '../assets/img/car.png';
import pollution from '../assets/img/pollution.png';
import industry from '../assets/img/industry.png';
import industryViolet from '../assets/img/industry-violet.png';
import lamp from '../assets/img/lamp.png';
import footprint from '../assets/img/footprint.png';
import cloud from '../assets/img/cloud.png';
import cloudBlack from '../assets/img/cloud-black.png';

const Search = () => {
  const navigate = useNavigate();

  const [country, setCountry] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  
  const defaultModal = 'country';

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState(defaultModal);

  const modalRef = useRef(null);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = () => {
    if (modalType === "country") {
      navigate(`/emissions?country=${country}&startDate=${startDate}&endDate=${endDate}`);
    } else if (modalType === "coordinates") {
      navigate(
        `/emissions?latitude=${latitude}&longitude=${longitude}&startDate=${startDate}&endDate=${endDate}`
      );
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalIsOpen(false);
      }
    };

    if (modalIsOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [modalIsOpen]);

  const handleClickWithCountryType = (event) => {
    handleButtonClick(event, "country");
  };

  const handleClickWithCoordinatesType = (event) => {
    handleButtonClick(event, "coordinates");
  };

  const handleButtonClick = (event, type) => {
    event.stopPropagation();
    setModalIsOpen(!modalIsOpen);
    setModalType(type);
  };

  return (
    <div className='search-container'>
      <img src={pollution} alt="pollution" className='icon-img'/>
      <nav>
        <img src={car} alt="car" className='search-icon'/>
        <span className='search-text'>
          Welcome to our search tool. You can search for information by country or by coordinates.
        </span>
        <img src={eco} alt="eco" className='search-icon'/>
        <img src={energySaving} alt="energy saving" className='search-icon'/>
        <ul>
          <li className='search-list'>
            <button 
              className='search-button'
              onClick={handleClickWithCountryType}
            >
              Search by Country
            </button>
          </li>
          <div>
            <img src={industry} alt="industry" className='icon-img'/>
          </div>
          <img src={footprint} alt="footprint" className='search-icon'/>
          <span className='search-text'>
            Looking for information about a specific country? You can search by entering the country name or code.
          </span>
          <img src={lamp} alt="lamp" className='search-icon'/> 
          <li className='search-list'>
            <button
              className='search-button'
              onClick={handleClickWithCoordinatesType}
            >
              Search by Coordinates
            </button>
          </li>
          <div>
            <img src={industryViolet} alt="industry violet" className='icon-img'/>
          </div>
          <img src={cloudBlack} alt="cloud black" className='search-icon'/>
          <span className='search-text'>
            If you have specific coordinates, you can search for information related to that location.
          </span>
          <img src={cloud} alt="cloud" className='search-icon'/>
        </ul>
      </nav>

      {modalIsOpen && (
        <Modal
          country={country}
          startDate={startDate}
          endDate={endDate}
          setCountry={setCountry}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          handleSubmit={handleSubmit}
          longitude={longitude}
          latitude={latitude}
          setLongitude={setLongitude}
          setLatitude={setLatitude}
          closeModal={closeModal}
          modalType={modalType}
          modalRef={modalRef}
        />
      )}
    </div>
  );
};


export default Search;
