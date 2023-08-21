import React from 'react';

const CountriesListPresentational = ({ countries }) => {
  return (
    <div>
      Countries Component (TEMPORARY)
      <ul>
        {countries.map((country) => (
          <li key={country.value}>
            {country.label} - {country.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesListPresentational;
