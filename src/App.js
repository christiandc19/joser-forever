import React from 'react'
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Services from './components/services/Services';
import InsuranceSection from './components/insurance/InsuranceSection';
// import ContactForm from './components/contact/ContactForm';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <InsuranceSection />
      {/* <ContactForm /> */}
      <Footer />
    </>
  );
}

export default App;
