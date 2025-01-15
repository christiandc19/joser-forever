import React from 'react'
import Fade from 'react-reveal/Fade';
import './PTSD.css'
import {Helmet} from "react-helmet";

const PTSD = () => {
    return (
        <>   

        <Helmet>
            <meta charSet="utf-8" />
            <title>PTSD - Joser Forever</title>
            <link rel="canonical" href="https://joserforever.biz/ptsd" />
        </Helmet>
        <div className='Ptsd submenu'>
                <div className="Ptsd-content">
                    <Fade top>
                    <h1>POST-TRAUMATIC STRESS DISORDER</h1>
                    </Fade>
            </div>
        </div>
        </>
    )
}

export default PTSD
