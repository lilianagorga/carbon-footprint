import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/header.scss';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="link">Carbon Footprint</Link> 
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/search" className="link">Start Calculating</Link>
          </li>
          <li>
            <Link to="/faq" className="link">Learn More</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;