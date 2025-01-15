import React from 'react'
import Fade from 'react-reveal/Fade';
import './Alcohol.css'
import {Helmet} from "react-helmet";

const Alcohol = () => {
    return (
        <>

        <Helmet>
            <meta charSet="utf-8" />
            <title>ALCOHOL ADDICTION - Joser Forever</title>
            <link rel="canonical" href="https://joserforever.biz/alcohol" />
        </Helmet>

        <div className='alcohol'>
                <div className="alcohol-content">
                    <Fade top>
                    <h1>ALCOHOL ADDICTION</h1>
                    </Fade>
            </div>
        </div>
        </>
    )
}

export default Alcohol
