import React from 'react'
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import './InsuranceSectionStyles.css'
import Aetna from '../../assets/aetna.png'
import Beacon from '../../assets/beacon.png'
import Bluecross from '../../assets/bluecross.png'
import Cigna from '../../assets/cigna.png'
import MolinaHealthCare from '../../assets/molina-healthcare.png'
import MHN from '../../assets/mhn.png'
import United from '../../assets/united-healthcare.png'


import { Link as LinkRoll } from 'react-scroll'



const InsuranceSection = () => {
    return (
        <div className='InsuranceSection'>
            <div className="container">
            <h1>WE WORK WITH MAJOR INSURANCE</h1>
                <p>If you don’t see your insurance provider below, please reach out to us to find a way to assist you further.</p>

                <div className="content">

                <Fade top>
                                <div className='insurance-thumbnail'>
                                    <img src={Aetna} alt="Aetna Logo" loading="lazy" />
                                </div>
                            </Fade>


                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                    <img src={Beacon} alt="Beacon Logo" loading="lazy" />
                                </div>
                            </Fade>

                            <Fade top>
                                <div className='insurance-thumbnail'>
                                    <img src={Bluecross} alt="Bluecross Logo" loading="lazy" />
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                    <img src={Cigna} alt="Cigna Logo" loading="lazy" />
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                    <img src={MolinaHealthCare} alt="Cigna Logo" loading="lazy" />
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                    <img src={MHN} alt="Cigna Logo" loading="lazy" />
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                    <img src={United} alt="Cigna Logo" loading="lazy" />
                                </div>
                            </Fade>
                </div>
            </div>

            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                <Link to="/treatment">
                    <div className='service-cards-btn'>
                        <button>Learn More</button>
                    </div>
                </Link>
            </LinkRoll>

        </div>
    )
}

export default InsuranceSection
