import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Insurance from '../components/insurance/Insurance'
import Footer from '../components/footer/Footer'
import InsuranceLogos from '../components/insurance/InsuranceLogos'

import MolinaHealthCare from '../assets/molina-healthcare.png'
import Aetna from '../assets/aetna.png'
import Beacon from '../assets/beacon.png'
import Bluecross from '../assets/bluecross.png'
import Cigna from '../assets/cigna.png'
import MHN from '../assets/mhn.png'




const InsurancePage = () => {
    return (
        <>
           <Navbar /> 
           <Insurance />

        <div className='insuranceLogos'>
        
            <InsuranceLogos Image = { MolinaHealthCare }/>
            <InsuranceLogos Image = { Aetna }/>
            <InsuranceLogos Image = { Beacon }/>
            <InsuranceLogos Image = { Bluecross }/>
            <InsuranceLogos Image = { Cigna }/>
            <InsuranceLogos Image = { MHN }/>

        </div>




           <Footer />
        </>
    )
}

export default InsurancePage
