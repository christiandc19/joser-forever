import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import HEROIN from '../components/Addiction-Heroin/Heroin'
import HeroinSection from '../components/Addiction-Heroin/HeroinSection'
import Contact2 from '../components/contact/Contact2'


const Heroin = () => {
  return (
    <>
    <Navbar /> 
    <HEROIN />
    <HeroinSection />    
    <Contact2 />
    <Footer />
     </>
  )
}

export default Heroin