import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import PHP from '../components/php/Php'
import PhpSection from '../components/php/PhpSection'
import InsuranceSection from '../components/insurance/InsuranceSection'
import Cards from '../components/servicesCards/Cards';
import ContactForm from '../components/contact/ContactForm'


const Php = () => {
  return (
    <>
    <Navbar /> 
    <PHP />
    <PhpSection />
    <InsuranceSection />
    <Cards /> 
    <ContactForm />
    <Footer />
     </>
  )
}

export default Php