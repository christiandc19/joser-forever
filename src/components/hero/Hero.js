import React from 'react'
import Fade from 'react-reveal/Fade';
import './HeroStyles.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="container">
                <div className="content">
                <Fade top>
                    <h1>NATURAL REST HOUSE</h1>
                </Fade>
                <Fade bottom>
                    <h2 className='blue'>Detox and Residential Center</h2>
                </Fade>
                    <p>Reaching out is the first step.</p>
                    <p>You’re here because you care about someone who might be struggling with substance use.</p>
                    <div><button>Learn More</button></div>
                </div>
            </div>
        </div>
    )
}

export default Hero
