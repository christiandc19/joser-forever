import React from 'react'
import './whatWeCanProvide.css'
import Therapy from '../../assets/therapy.jpg'
import GroupSupport from '../../assets/wcwp-support-group.jpg'
import Staff from '../../assets/wcwp-staff.jpg'
import Jobs from '../../assets/wcwp-jobs.jpg'




const whatWeCanProvide = () => {
  return (
    <>


<div className="wwcp-cards-header container">

                <div className="wwcp-cards-header-left">
                  <h1>WHAT WE CAN PROVIDE</h1>
                  <h3><i>"Everyone Deserves A Second Chance At Life..."</i></h3>
                </div>
                
                <div className="wwcp-cards-header-right">
                  <p> <span>Joser Forever Treatment Center</span> strive to make overcoming addiction achievable by focusing on your sobriety. We use proven medical practices and a comprehensive approach to healing through better guidance, greater compassion, and a stronger community.</p>
                </div>
                
            </div>

    <div className='whatWeCanProvide'>

        <div className='wwcp-content'>
        <div className='wwcp-thumbnails-container'>
        <div className='wwcp-thumbnails'>
            <img src={ GroupSupport } alt="Therapy Session" loading="lazy"/>            
            <h1>Support Group</h1>
            <p>Therapy and support groups for either addiction or mental health disorders</p>
        </div>

        <div className='wwcp-thumbnails'>
            <img src={ Staff } alt="Therapy Session" loading="lazy"/>            
            <h1>On-site Staff</h1>
            <p>Compassionate staff that is dedicated to your success</p>
        </div>

        <div className='wwcp-thumbnails'>
            <img src={ Therapy } alt="Therapy Session" loading="lazy"/>            
            <h1>Proven Methods</h1>
            <p>Evidence-based practices that give you the best chance of recovery</p>
        </div>

        <div className='wwcp-thumbnails'>
            <img src={ Jobs } alt="Therapy Session" loading="lazy"/>            
            <h1>Jobs Program</h1>
            <p>Employment tools and resources to get you hired.</p>
        </div>
        </div>


        </div>
    </div>
    </>
  )
}

export default whatWeCanProvide
