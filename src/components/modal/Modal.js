import React, { useState } from 'react';
import '../../assets/search.css';
import '../../pages/Search';

const Modal = ({
  country,
  countries,
  startDate,
  endDate,
  setCountry,
  setStartDate,
  setEndDate,
  handleSubmit,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open</button>
      {modalIsOpen && (
        <div className="modal">
          <div className="modal-content">
            <select value={country} onChange={(e) => setCountry(e.target.value)}>
              <option value="">Select a country</option>
              {countries.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
            <div>
              <label>
                Start Date:
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
              </label>
            </div>
            <div>
              <label>
                End Date:
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
              </label>
            </div>
            <div>
              <button onClick={handleSubmit}>Send</button>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;