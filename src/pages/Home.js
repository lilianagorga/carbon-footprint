import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <div>
        <Link to="/average">CO2 by Year</Link>
      </div>
      <div>
        <Link to="/countries">CO2 by Country</Link>
      </div>
      <div>
        <Link to="/geo">CO2 by Latitude and Longitude</Link>
      </div>
    </div>
  );
};

export default Home;
