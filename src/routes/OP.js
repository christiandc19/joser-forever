import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import OP from '../components/op/Op'
import OpSection from '../components/op/OpSection'
import InsuranceSection from '../components/insurance/InsuranceSection'
import Cards from '../components/servicesCards/Cards';
import ContactForm from '../components/contact/ContactForm'


const Op = () => {
  return (
    <>
    <Navbar /> 
    <OP />
    <OpSection />
    <InsuranceSection />
    <Cards /> 
    <ContactForm />
    <Footer />
     </>
  )
}

export default Op