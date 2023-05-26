import React from 'react'
import Fade from 'react-reveal/Fade';
import './Treatment.css'


// import Service1 from '../../assets/treatment-1.jpg'
// import Service2 from '../../assets/treatment-2.jpg'
// import Service3 from '../../assets/treatment-3.jpg'
// import Service4 from '../../assets/treatment-4.jpg'


import ContactForm from '../contact/ContactForm';

import Wave from '../../assets/waves.svg'
import TreatmentSection from './TreatmentSection';


// import { FaRegStar } from 'react-icons/fa';

const Treatment = () => {
    return (
        <>


{/* -------------------------------- HERO -------------------------------------- */}

        <div className='treatment main-menu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" alt='colum divider' repeat-x />
            </div>
            <div className="treatment-content">
                <Fade right>
                    <h1>TREATMENT</h1>
                </Fade>
            </div>
        </div>

        <TreatmentSection />
        <ContactForm />
        </>
    )
}

export default Treatment
