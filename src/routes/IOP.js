import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import IOP from '../components/iop/Iop'
import IopSection from '../components/iop/IopSection'
import InsuranceSection from '../components/insurance/InsuranceSection'
import Cards from '../components/servicesCards/Cards';
import ContactForm from '../components/contact/ContactForm'


const Iop = () => {
  return (
    <>
    <Navbar /> 
    <IOP />
    <IopSection />
    <InsuranceSection />
    <Cards /> 
    <ContactForm />
    <Footer />
     </>
  )
}

export default Iop