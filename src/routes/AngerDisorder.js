import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ANGERDISORDER from '../components/MH-AngerDisorder/AngerDisorder'
import AngerDisorderSection from '../components/MH-AngerDisorder/AngerDisorderSection'
import Contact2 from '../components/contact/Contact2'


const AngerDisorder = () => {
  return (
    <>
    <Navbar /> 
    <ANGERDISORDER />
    <AngerDisorderSection />
    <Contact2 />
    <Footer />
     </>
  )
}

export default AngerDisorder