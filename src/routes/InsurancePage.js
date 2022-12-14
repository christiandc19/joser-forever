import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import InsuranceSection from '../components/insurance/InsuranceSection'
import Insurance from '../components/insurance/Insurance'



const InsurancePage = () => {
    return (
        <>
           <Navbar /> 
           <Insurance />
           <InsuranceSection />
           <Footer />
        </>
    )
}

export default InsurancePage
