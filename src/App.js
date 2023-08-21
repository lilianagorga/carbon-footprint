import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import SearchContainer from './pages/SearchContainer';
import EmissionsContainer from './pages/EmissionsContainer';
import GetCountries from './components/CountriesList/GetCountries';

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
          <Route path="/search" element={<SearchContainer />} />
          <Route path="/emissions/:country/:start/:end" element={<EmissionsContainer />} />
          <Route path="/countries" element={<GetCountries />} />
        </Routes>
    </div>
  );
}

export default App;

