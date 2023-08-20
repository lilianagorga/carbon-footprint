import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllCountries } from '../utils';
import '../assets/styles/search.css'

const Search = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
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
        return [];
      }
    };

    fetchCountries();
  }, []);

  const handleSubmit = () => {
    navigate(`/emissions/${country}/${startDate}/${endDate}`)
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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
}

export default Search;
