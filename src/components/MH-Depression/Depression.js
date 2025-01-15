import React from 'react'
import Fade from 'react-reveal/Fade';
import './Depression.css'
import {Helmet} from "react-helmet";

const Depression = () => {
    return (
        <>   

        <Helmet>
            <meta charSet="utf-8" />
            <title>DEPRESSION - Joser Forever</title>
            <link rel="canonical" href="https://joserforever.biz/depression" />
        </Helmet>
        <div className='depression submenu'>
                <div className="depression-content">
                    <Fade top>
                    <h1>DEPRESSION</h1>
                    </Fade>
            </div>
        </div>
        </>
    )
}

export default Depression
