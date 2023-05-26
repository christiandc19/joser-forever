import React from 'react'
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Topbar from './components/topbar/Topbar'


function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <Home />
      <Footer />
    </>
  );
}

export default App;
