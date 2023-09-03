import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';
import '../assets/styles/footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartColumn, faQuestionCircle, faLink } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const [bounceAnimation, setBounceAnimation] = useState(false);

  const bounceConfig = useSpring({
    transform: bounceAnimation ? 'translateY(-10px)' : 'translateY(0)',
    config: { tension: 3000, friction: 50 },
    onRest: () => {
      setBounceAnimation(false);
    },
  });
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className='footer-content-text'>
          <span className="sources"><FontAwesomeIcon icon={faLink} /></span>{' '}
          <a href="https://img.nasa.gov" target="_blank" rel="noopener noreferrer" className="link-italic">img.nasa.gov</a><br />
          Inspired by NASA's images and mission, we hope this application serves as a source of inspiration to make a positive impact on our environment.
        </p>
      </div>
      <div className='footer-list'>
        <ul>
          <li>
            <Link to="/search">
              <animated.div
                className={`fa-icon ${bounceAnimation ? 'clicked' : ''}`}
                style={{
                  ...bounceConfig,
                  cursor: 'pointer',
                }}
                onClick={() => setBounceAnimation(true)}
              >
                <FontAwesomeIcon icon={faChartColumn} className='icon' />
              </animated.div>
            </Link>
          </li>
          <li>
            <Link to="/faq">
              <animated.div
                className={`icon ${bounceAnimation ? 'clicked' : ''}`}
                style={{
                  ...bounceConfig,
                  cursor: 'pointer',
                }}
                onClick={() => setBounceAnimation(true)}
              >
                <FontAwesomeIcon icon={faQuestionCircle} className='fa-icon' />
              </animated.div>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;