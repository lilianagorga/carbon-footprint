import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Emissions from './pages/Emissions';
import About from './pages/About';
import Countries from './components/Countries';
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
            <Link to="/countries">Countries</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<Search/>} />
        <Route path="/about" element={<About />} />
        <Route path="/emissions" element={<Emissions />} />
        <Route path="/countries" element={<Countries />} />
      </Routes>
    </div>
  );
}

export default App;
