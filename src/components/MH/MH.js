import React from 'react'
import Fade from 'react-reveal/Fade';
import {Helmet} from "react-helmet";

import './MH.css'


const MH = () => {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>MENTAL HEALTH PROGRAMS - Joser Forever</title>
            <link rel="canonical" href="https://joserforever.biz/mental-health" />
        </Helmet>
        <div className='mh submenu'>

                <div className="mh-content">
                    <Fade top>
                    <h1>MENTAL HEALTH PROGRAMS</h1>
                    </Fade>
                </div>
            </div>
        </>
    )
}

export default MH
