import React from 'react'
import Fade from 'react-reveal/Fade';
import {Helmet} from "react-helmet";

import './Jobs.css'

import JobSection from '../../components/jobs/JobSection'

import Contact2 from '../contact/Contact2'

const Jobs = () => {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>JOBS - Joser Forever</title>
            <link rel="canonical" href="https://joserforever.biz/jobs" />
        </Helmet>
        <div className='jobs submenu'>

                <div className="jobs-content">
                    <Fade top>
                    <h1>EMPLOYMENT ASSISTANCE</h1>
                    </Fade>
                </div>
            </div>
        <JobSection />
        <Contact2 />
        </>
    )
}

export default Jobs