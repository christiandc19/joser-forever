import React from 'react'
import {Link} from 'react-router-dom'
import './InsuranceSectionStyles.css'
import Aetna from '../../assets/aetna.png'
import Beacon from '../../assets/beacon.png'
import Bluecross from '../../assets/bluecross.png'
import Cigna from '../../assets/cigna.png'



const InsuranceSection = () => {
    return (
        <div className='InsuranceSection'>
            <div className="container">
                <div className="content">

                <div className='flex-left'>
                        <h2><span>WE WORK</span> WITH MAJOR INSURANCE</h2>                   
                        <p>If you don’t see your insurance provider below, please reach out to us to find a way to assist you further.</p>
                </div>


                <div className='flex-right'>
                    <div className='insurance-thumbnail'>
                        <img src= { Aetna } alt="Aetna Logo" loading="lazy" />                    
                    </div>

                    <div className='insurance-thumbnail'>
                        <img src= { Beacon } alt="Beacon Logo" loading="lazy" />   
                    </div>

                    <div className='insurance-thumbnail'>
                        <img src= { Bluecross } alt="Bluecross Logo" loading="lazy" />   
                    </div>

                    <div className='insurance-thumbnail'>
                        <img src= { Cigna } alt="Cigna Logo" loading="lazy" />   
                    </div>
                </div>
                <Link to='/insurance'>
                <button>View More</button>
                </Link>
            </div>
        </div>
        </div>
    )
}

export default InsuranceSection
