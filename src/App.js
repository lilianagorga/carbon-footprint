import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Emissions from './pages/Emissions';
import Faq from './pages/Faq';
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/styles/global.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Footer />
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
