import React from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import logo from '../../assets/nav-logo.png'
import './FooterStyles.css'
import {Link} from 'react-router-dom'
import { Link as LinkRoll } from 'react-scroll'
import DHCS from "../../assets/DHCS-logo2.png";

const Footer = () => {
    return (

<>


        <div className='footer'>
            <div className="container">
                <div className="top">
                    <div className="logo-footer">
                    <img src={logo} alt="Santa Monica Detox Logo" loading="lazy"/>
                    </div>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <BsFillArrowUpCircleFill className='footer-icon' />
                    </LinkRoll>

                </div>
                <div className="col-container">

                    <div className="col">
                        <h3>Company</h3>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/mission'>
                            <p>Our Mission</p>
                        </Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/about-us'><p>About Us</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/contact'><p>Contact</p></Link>
                        </LinkRoll>


                    </div>


                    <div className="col">
                        <h3>Navigation</h3>
                        
                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/'><p>Home</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/insurance'><p>Insurance</p></Link>
                        </LinkRoll>


                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/community-links'><p>Community Links</p></Link>
                        </LinkRoll>

                    </div>


                    <div className="col">
                        <h3>SERVICES</h3>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/substance-abuse'><p>Substance Abuse Programs</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/mental-health'><p>Mental Health Programs</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/jobs'><p>Employment Assistance</p></Link>
                        </LinkRoll>
                    </div>





                    <div className="license">
                        <h3>Licensed by the State Department of Health Care Services</h3>
                        <p>Certification Number: 191114AP <br /> Expiration date: 10/31/2025</p>
                        <br />
                        <a href="https://data.chhs.ca.gov/dataset/sud-recovery-treatment-facilities"
                        target="_blank"
                        rel="noreferrer">( View License & Certification Information here ).</a>
                            <div className='license-image'>
                                <img
                                src={DHCS}
                                alt="DHCS Logo"
                                loading="lazy"
                                />
                            </div>
                    </div>






                </div>
                <p className='copyright'><p>&copy; 2025 Joser Forever. All rights reserved.</p></p>
            </div>
        </div>
</>
    )
}

export default Footer