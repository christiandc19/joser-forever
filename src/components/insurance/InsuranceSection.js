import React from 'react'
import './Insurance.css'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'



import InsuranceLogos from '../insurance/InsuranceLogos'

import MolinaHealthCare from '../../assets/molina-healthcare.png'
import Aetna from '../../assets/aetna.png'
import Beacon from '../../assets/beacon.png'
import Bluecross from '../../assets/bluecross.png'
import Cigna from '../../assets/cigna.png'
import MHN from '../../assets/mhn.png'
import United from '../../assets/united-healthcare.png'

const Insurance = () => {
    return (
        <>
            <div>
                <h1>WE ACCEPT MAJOR INSURANCE</h1>
            </div>

            <div className='insuranceLogos'>
            <Fade top>
            <InsuranceLogos Image = { MolinaHealthCare }/>
            </Fade>

            <Fade bottom>
            <InsuranceLogos Image = { Aetna }/>
            </Fade>

            <Fade top>
            <InsuranceLogos Image = { Beacon }/>
            </Fade>

            <Fade bottom>
            <InsuranceLogos Image = { Bluecross }/>
            </Fade>

            <Fade top>
            <InsuranceLogos Image = { Cigna }/>
            </Fade>

            <Fade bottom>
            <InsuranceLogos Image = { MHN }/>
            </Fade>
            
            <Fade top>
            <InsuranceLogos Image = { United }/>
            </Fade>
        </div>




        </>

    )
}

export default Insurance
