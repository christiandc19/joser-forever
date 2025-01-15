import React from 'react'
import Fade from 'react-reveal/Fade';
import './Adhd.css'
import {Helmet} from "react-helmet";

const Adhd = () => {
    return (

        <>   
        <Helmet>
            <meta charSet="utf-8" />
            <title>ADHD - Joser Forever</title>
            <link rel="canonical" href="https://joserforever.biz/adhd" />
        </Helmet>
        <div className='adhd submenu'>

                <div className="adhd-content">
                    <Fade top>
                    <h1>ATTENTION DEFICIT HYPERACTIVITY DISORDER</h1>
                    </Fade>
            </div>
        </div>
        </>
    )
}

export default Adhd
