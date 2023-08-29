import React, { useState, useEffect } from 'react';
import '../assets/styles/search.scss';
import '../pages/Search';
import { getAllCountries } from '../utils';
import { CountryModal, CoordinatesModal, CommonModal } from './ModalComponents';

const Modal = ({
  handleSubmit,
  country,
  startDate,
  endDate,
  setCountry,
  setStartDate,
  setEndDate,
  longitude,
  latitude,
  setLongitude,
  setLatitude,
  closeModal,
  modalType,
}) => {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const countries = await getAllCountries();
        setCountryList(countries);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          {modalType === "country" ? (
            <CountryModal
              country={country}
              setCountry={setCountry}
              countryList={countryList}
            />
          ) : (
            <CoordinatesModal
              setLongitude={setLongitude}
              setLatitude={setLatitude}
              longitude={longitude}
              latitude={latitude}
            />
          )}

          <CommonModal
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            startDate={startDate}
            endDate={endDate}
          />

          <div>
            <button onClick={handleSubmit}>Send</button>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
