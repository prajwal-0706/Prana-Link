import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Hero from './components/Hero';
import Services from './components/Our main Services/services';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
    </>
  );
};

export default Homepage;
