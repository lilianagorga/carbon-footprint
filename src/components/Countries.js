import React, { useEffect, useState } from 'react';
import { getAllCountries } from "../utils";

const GetCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getallCountries = async () => {
      try {
        const countries = await getAllCountries();
        setCountries(countries);
      } catch (err) {
        console.error(err);
        return [];
      }
    }

    getallCountries();
  }, []);

  return (
    <div>
      Countries Component (TEMPORARY)

      <ul>
        {countries.map((country) => {
          return (
            <li key={country.value}>
              {country.label} - {country.value}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default GetCountries;