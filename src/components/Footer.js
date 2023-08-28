import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="cta-buttons">
      <Link to="/faq" className="cta-button">Learn More</Link><br />
      <Link to="/search" className="cta-button">Start Calculating</Link>
    </div>
  )
}

export default Footer;