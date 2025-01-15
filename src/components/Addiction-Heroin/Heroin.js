import React from 'react'
import Fade from 'react-reveal/Fade';
import './Heroin.css'
import {Helmet} from "react-helmet";

const Heroin = () => {
    return (

        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>HEROIN ADDICTION - Joser Forever</title>
            <link rel="canonical" href="https://joserforever.biz/heroin" />
        </Helmet>
        <div className='heroin submenu'>
                <div className="heroin-content">
                    <Fade top>
                    <h1>HEROIN ADDICTION</h1>
                    </Fade>
            </div>
        </div>
        </>
    )
}

export default Heroin
