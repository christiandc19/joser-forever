import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import PTSD from '../components/MH-PTSD/PTSD'
import PTSDSection from '../components/MH-PTSD/PTSDSection'
import Contact2 from '../components/contact/Contact2'


const Ptsd = () => {
  return (
    <>
    <Navbar /> 
    <PTSD />
    <PTSDSection />
    <Contact2 />
    <Footer />
     </>
  )
}

export default Ptsd