import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './HeroStyles.css'
import JoserLogo from '../../assets/joserlogo.png'

const Hero = () => {
    return (
        <>


        <div className='hero'>


                    <div className='hero-left'>
                        <Fade top>
                            <img src={ JoserLogo } alt="" />
                            <h1>Joser Forever</h1>
                            <h2 className='subtitle'>Mental Health  Treatment Facility </h2>
                        </Fade> 
                    </div>

                    <div className='hero-right'>
                    <Fade right>
                        <p>Joser Forever strives to make this step less stressful by focusing on your comfort and safety first. Our compassionate staff utilizes established medical treatments to decrease withdrawal effects in an empathetic environment.</p>
                        <br/>
                        <p>Find your happiness</p>
                            <p>and learn to put it first.</p>
                        <Link to="/about-us">
                            <div><button>Learn More</button></div>
                        </Link>
                        </Fade>


                    </div>
                

            </div>


        </>
    )
}

export default Hero
