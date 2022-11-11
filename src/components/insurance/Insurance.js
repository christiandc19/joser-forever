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

            <div className='insurance'>
                <div className="container">
                    <div className="content">
                        <Fade left>
                            <h1>ACCEPTED INSURANCE</h1>
                        </Fade>
                        <Fade right>
                            <p>If you don’t see your insurance provider below, please reach out to us to find a way to assist you further.</p>
                        </Fade>

                        <div>
                            <Link to="/contact">
                                <button>Contact Us</button>
                            </Link>
                        </div>
                    </div>
                </div>
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
