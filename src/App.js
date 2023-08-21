import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Emissions from './pages/Emissions';
import Countries from './components/Countries';

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
        </ul>
      </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<Search/>} />
          <Route path="/emissions/:country/:start/:end" element={<Emissions />} />
          <Route path="/countries" element={<Countries />} />
        </Routes>
    </div>
  );
}

export default App;

