import React from 'react'
import Fade from 'react-reveal/Fade';
import './Mission.css'

const Mission = () => {
    return (
        <div className='mission'>
            <div className="container">
                <div className="content">
                    <Fade right>
                    <h1>MISSION</h1>
                    </Fade>
                    <Fade left>
                    <p>We strive to make overcoming addiction achievable by focusing on your comfort and safety above all. We use evidence-based medical practices and a holistic, comprehensive approach to healing through guidance, compassion, and community.</p>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Mission
