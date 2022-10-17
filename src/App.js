import React from 'react'
import Data from './components/data/Data';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Cloud from './components/cloud/Cloud'
import Footer from './components/footer/Footer';
import Services from './components/services/Services';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Data />
      <Cloud />
      <Footer />
    </>
  );
}

export default App;
