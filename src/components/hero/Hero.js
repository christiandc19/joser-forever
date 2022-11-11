import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Hero.css'
import JoserLogo from '../../assets/joserlogo.png'

const Hero = () => {
    return (
        <>


        <div className='hero'>

                <div className='hero-container'>

                    <div className='hero-content'>
                        <Fade top>
                            <img src={ JoserLogo } alt="" />
                            <h1>Joser Forever</h1>
                            <h2 className='subtitle'>Mental Health  Treatment Facility </h2>
                        </Fade> 

                        <p className='hero-quote'>Find your happiness, <br/> and learn to put it first.</p>
                        <Link to="/treatment">
                        <div><button>Learn More</button></div>
                        </Link>
                        </div>
                
                    </div>
            </div>


        </>
    )
}

export default Hero
