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

  const isValidCoordinates = (latitude, longitude) => {
    if (!latitude || !longitude) {
      return false;
    }

    if (isNaN(latitude) || isNaN(longitude)) {
      return false;
    }

    if (
      latitude < -90 ||
      latitude > 90 ||
      longitude < -180 ||
      longitude > 180
    ) {
      return false;
    }
    return true;
  }

  const isSendAllowed = () => {
    if (!startDate || !endDate || startDate >= endDate) {
      return false;
    }

    return modalType === 'country' ? country : isValidCoordinates(latitude, longitude);
  }

  return (
    <div
      className={`modal ${
        modalType === "coordinates" ? "modal-coordinates" : ""
      }`}
    >
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
        <button
          onClick={handleSubmit}
          className="button-modal"
          disabled={!isSendAllowed()}
        >
          Send
        </button>
        <button onClick={closeModal} className="button-modal">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
