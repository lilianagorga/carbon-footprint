import React from 'react';

const SearchResult = ({ searchResults }) => {
  return (
    <div className="search-results">
      {searchResults.length === 0 ? (
        <p>No matching results found. Please refine your search criteria.</p>
      ) : (
        searchResults.map((result) => (
          <div key={result.id} className="search-result">
            {isValidCoordinates(result.latitude, result.longitude) ? (
              <>
                <h3>{result.countryName}</h3>
                <p>Population: {result.population}</p>
                <p>Capital: {result.capital}</p>
                <p>Latitude: {result.latitude}</p>
                <p>Longitude: {result.longitude}</p>
              </>
            ) : (
              <p>Invalid coordinates for {result.countryName}</p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

function isValidCoordinates(latitude, longitude) {
  if (isNaN(latitude) || isNaN(longitude)) {
    return false;
  }
  if (latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) {
    return false;
  }
  return true;
}

export default SearchResult;