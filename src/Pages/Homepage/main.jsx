import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Hero from './components/Hero';
import Services from './components/Our main Services/services';
import SpecialServices from './components/special services/services';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from '../User/User';

const Homepage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/home" element={<User />} />
      </Routes>
    </Router>
  );
};

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <SpecialServices />
    </>
  );
};

export default Homepage;
