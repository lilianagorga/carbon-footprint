import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Emissions from './pages/Emissions';
import Faq from './pages/Faq';
import './assets/styles/global.css';

function App() {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/faq">Faq</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<Search/>} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/emissions" element={<Emissions />} />
      </Routes>
    </div>
  );
}

export default App;
