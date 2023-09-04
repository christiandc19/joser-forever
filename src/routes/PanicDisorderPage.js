import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import PANICDISORDER from '../components/MH-PanicDisorder/PanicDisorder'
import PanicDisorderSection from '../components/MH-PanicDisorder/PanicDisorderSection'
import Contact2 from '../components/contact/Contact2'


const PanicDisorder = () => {
  return (
    <>
    <Navbar /> 
    <PANICDISORDER />
    <PanicDisorderSection />
    <Contact2 />
    <Footer />
     </>
  )
}

export default PanicDisorder