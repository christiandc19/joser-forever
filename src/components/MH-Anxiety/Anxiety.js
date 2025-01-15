import React from 'react'
import Fade from 'react-reveal/Fade';
import './Anxiety.css'
import {Helmet} from "react-helmet";

const Anxiety = () => {
    return (
        <>   
        <Helmet>
            <meta charSet="utf-8" />
            <title>ANXIETY DISORDER - Joser Forever</title>
            <link rel="canonical" href="https://joserforever.biz/anxiety" />
        </Helmet>
        <div className='anxiety submenu'>
                <div className="anxiety-content">
                    <Fade top>
                    <h1>ANXIETY DISORDER</h1>
                    </Fade>
            </div>
        </div>
        </>
    )
}

export default Anxiety
