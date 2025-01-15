import React from 'react'
import Fade from 'react-reveal/Fade';
import './Prescriptions.css'
import {Helmet} from "react-helmet";

const Prescriptions = () => {
    return (

        <>

        <Helmet>
            <meta charSet="utf-8" />
            <title>PRESCRIPTIONS ADDICTION - Joser Forever</title>
            <link rel="canonical" href="https://joserforever.biz/prescriptions" />
        </Helmet>
        <div className='prescriptions submenu'>
                <div className="prescriptions-content">
                    <Fade top>
                    <h1>PRESCRIPTIONS ADDICTION</h1>
                    </Fade>
            </div>
        </div>
        </>
    )
}

export default Prescriptions
