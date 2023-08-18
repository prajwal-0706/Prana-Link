import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Hero from './components/Hero';
import Services from './components/Our main Services/services';
import SpecialServices from './components/special services/services';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Homepage = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <SpecialServices />
    </>
  );
};

export default Homepage;
