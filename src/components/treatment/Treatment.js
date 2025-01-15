import React from 'react'
import Fade from 'react-reveal/Fade';
import './Treatment.css'

import ContactForm from '../contact/ContactForm';
import TreatmentSection from './TreatmentSection';
import {Helmet} from "react-helmet";

const Treatment = () => {
    return (
        <>


{/* -------------------------------- HERO -------------------------------------- */}

        <Helmet>
            <meta charSet="utf-8" />
            <title>TREATMENT - Joser Forever</title>
            <link rel="canonical" href="https://joserforever.biz/treatment" />
        </Helmet>

        <div className='treatment main-menu'>

            <div className="treatment-content">
                <Fade right>
                    <h1>TREATMENT</h1>
                </Fade>
            </div>
        </div>

        <TreatmentSection />
        <ContactForm />
        </>
    )
}

export default Treatment
