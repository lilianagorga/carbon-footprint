import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          Sources: <a href="https://img.nasa.gov" target="_blank" rel="noopener noreferrer" className='link'>img.nasa.gov</a><br />
          Inspired by NASA's images and mission, we hope this application serves as a source of inspiration to make a positive impact on our environment.
        </p>
      </div>
      <div className="footer-list">
        <ul>
          <li>
            <Link to="/search" className="link">Start Calculating</Link>
          </li>
          <li>
            <Link to="/faq" className="link">Learn More</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;