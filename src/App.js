import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Emissions from './pages/Emissions';
import Faq from './pages/Faq';
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/styles/global.scss';
import carbonIcon from './assets/img/carbon-icon.png';

function App() {
  return (
    <div className="app">
      <Header />
      <Link to="/" className='carbon-icon-link'>
        <img src={carbonIcon} alt="Carbon Icon" className="carbon-icon" />
      </Link>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<Search/>} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/emissions" element={<Emissions />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
