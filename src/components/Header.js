import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/header.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  const handleButtonClick = (event) => {
    event.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <Link to="/" className="link">
        Carbon Footprint
      </Link>

      <button 
        className="menu-toggle"
        onClick={handleButtonClick}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav 
        className={`nav ${menuOpen ? "show" : ""}`}
        ref={menuRef}
      >
        <ul className="nav-list">
          <li>
            <Link
              to="/search"
              className="link"
              onClick={() => setMenuOpen(false)}
            >
              Start Calculating
            </Link>
          </li>
          <li>
            <Link 
              to="/faq" 
              className="link" 
              onClick={() => setMenuOpen(false)}
            >
              Learn More
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;