
import React from 'react';

// Import components
import Lounges from '../components/Lounges';
import Hero from '../components/Hero';
import PopularItems from '../components/PopularItems';
import About from '../components/About';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import DarkModeToggle from '../components/DarkModeToggle';

const Index = () => {
  return (
    <div className="page-wrapper">
      {/* Navbar */}
      <Navbar />
      
      {/* Dark Mode Toggle */}
      <div className="position-fixed top-0 end-0 mt-4 me-4 z-3">
        <DarkModeToggle />
      </div>

      {/* Hero Section */}
      <Hero />

      {/* Display Lounges Component */}
      <Lounges />

      {/* Popular Items Section */}
      <PopularItems />
      
      {/* About Us Section */}
      <About />
      
      {/* Student Reviews */}
      <Reviews />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
