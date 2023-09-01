import React from 'react'
import './JobSection.css'
import job1 from '../../assets/job1.png'


const JobSection = () => {
    return (
        <>
        <div className='job-section container'>

        <div className='job-flex'>

            <div className='job-left'>

                    <h1>Get hired at a great company in recovery.</h1>
                    <p>We strive to assist participants to acquire the knowledge and skills needed to obtain self-sufficiency through the enhancement of their capacity for civic engagement, community leadership by securing meaningful and gratifying employment that will empower themselves, their families, which will create stronger and safer communities.  
                    <br /> <br />
                    Our jobs program starts with getting an ID, to helping with a resume, to coaching for the interview, transportation to the actual work site, and coaching on how to keep the job and appropriate behavior. Work is NOT an option.  </p>

                    <div className='job-link'>
                    <p>For more information for our Jobs Program, visit <a href='https://www.transitionsfortomorrow.org/'>here.</a></p>
                    </div>
            </div>

            <div className='job-right'>
                <img src={job1} alt="Our Client" loading="lazy" />
            </div>
        </div>

        </div>
        </>
    )
}

export default JobSection
