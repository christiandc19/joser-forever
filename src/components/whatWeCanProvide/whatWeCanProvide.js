import React from 'react'
import './whatWeCanProvide.css'
import Therapy from '../../assets/therapy.jpg'
import GroupSupport from '../../assets/wcwp-support-group.jpg'
import Staff from '../../assets/wcwp-staff.jpg'
import Jobs from '../../assets/wcwp-jobs.jpg'


import Wave2 from '../../assets/wave2.svg'


const whatWeCanProvide = () => {
  return (
    <>
    <div className='whatWeCanProvide'>

    <div class="wwcp-divider-top">
<img src={Wave2} loading="lazy" repeat-x alt='wave divider'/>
</div>


        <div className='wwcp-content'>

        <div className='wwcp-header container'>
            <h3>WHAT WE CAN PROVIDE</h3>
            <h1>Everyone Deserves A Second Chance At Life...</h1>
            <p>We strive to make overcoming addiction achievable by focusing on your sobriety. We use proven medical practices and a comprehensive approach to healing through better guidance, greater compassion, and a stronger community.</p>
        </div>

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
