import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';

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

  const openModal = (type) => {
    setModalIsOpen(true);
    setModalType(type);
  };

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

  return (
    <div>
      <h1 className='search-title'>Search</h1>
      <nav>
        <ul>
          <li className='search-list'>
            <button 
              className='search-button'
              onClick={() => {
                openModal("country");
              }}
            >
              Search by Country
            </button>
          </li>
          <p></p>
          <li className='search-list'>
            <button
              className='search-button'
              onClick={() => {
                openModal("coordinates");
              }}
            >
              Search by Coordinates
            </button>
          </li>
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
        />
      )}
    </div>
  );
};


export default Search;
