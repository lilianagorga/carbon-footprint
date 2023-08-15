import React from 'react';
import { Link } from 'react-router-dom';

const Section = () => {
  return (
    <div>
      <h1>Section</h1>
      <div>
        <Link to="/average">CO2 by Year</Link>
      </div>
      <div>
        <Link to="/countries">CO2 by Country</Link>
      </div>
    </div>
  );
};

export default Section;
