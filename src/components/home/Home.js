import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Home.css'

import BgVideo from '../../assets/hero-vbg.mp4'

import HeroLogo from '../../assets/joserlogo.png'

// import Services from '../services/Services';
// import ContactForm from '../contact/ContactForm';


const Home = () => {
    return (
        <>
        <div className='home'>
             <video src={BgVideo} autoPlay muted loop playsInline className='video-bg' />

            <div className="container">
                <div className="content">
                    

                <div className='hero-logo'>
                    <Fade left>
                    <img src={HeroLogo} width="200px" height="220px" alt="Palm Springs Rehab Logo" loading="lazy"/>
                    </Fade>
                    </div>

                    <Fade bottom>
                        <h2 className='subtitle'>MENTAL HEALTH TREATMENT FACILITY</h2>
                        <p>Find your happiness and learn to put it first.</p>
                    </Fade>
                        <br />
                        <div className='home-btn'>
                        <Link to="/treatment">
                        <button>Learn More</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>



        </>
    )
}

export default Home
