import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import About from '../components/about/About'
import AboutSection from '../components/about/AboutSection'
import ContactForm from '../components/contact/ContactForm'

const AboutPage = () => {
    return (
        <>
           <Navbar /> 
           <About />
           <AboutSection />
           <ContactForm />
           <Footer />
        </>
    )
}

export default AboutPage