import React from 'react'
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Insurance from './components/insurance/Insurance'
import Footer from './components/footer/Footer';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
