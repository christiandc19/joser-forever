import React from 'react'
import Fade from 'react-reveal/Fade';

import './Mdma.css'

import Wave from '../../assets/waves.svg'


const Fentanyl = () => {
    return (
        <div className='mdma '>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="mdma-content">
                    <Fade top>
                    <h1>MDMA ADDICTION</h1>
                    </Fade>
            </div>
        </div>
    )
}

export default Fentanyl
