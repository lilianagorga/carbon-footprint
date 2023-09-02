import React from 'react';

const SearchResult = ({ searchResults }) => {
  return (
    <div className="search-results">
      {searchResults.length === 0 ? (
        <p>No matching results found. Please refine your search criteria.</p>
      ) : (
        searchResults.map((result) => (
          <div key={result.id} className="search-result">
            <h3>{result.countryName}</h3>
            <p>Population: {result.population}</p>
            <p>Capital: {result.capital}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchResult;