import React from 'react'
import Fade from 'react-reveal/Fade';
import './HeroStyles.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="container">
                <div className="content">
                <Fade top>
                    <h1>JOSER FOREVER</h1>
                </Fade>
                <Fade bottom>
                    <h2 className='subtitle'>Mental Health Treatment Facility</h2>
                </Fade>
                    <p>Find your happiness</p>
                    <p>and learn to put it first.</p>
                    <div><button>Learn More</button></div>
                </div>
            </div>
        </div>
    )
}

export default Hero
