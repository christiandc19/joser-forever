import React from 'react'
import Fade from 'react-reveal/Fade';
import './TreatmentStyles.css'

import Service1 from '../../assets/treatment-image-1.jpg'


const Treatment = () => {
    return (
        <>

{/* -------------------------------- HERO -------------------------------------- */}

        <div className='treatment'>
            <div className="container">
                <div className="content">
                    <Fade right>
                    <h2><span>Our</span> Treatment</h2>
                    </Fade>
                    <Fade left>
                    <p>All treatment clients will have a recovery/treatment plan developed within 30 days of admission. Measurement and reassessment of treatment plan progress happen on a weekly basis through the weekly summary. In the weekly summary, the drug and alcohol counselor will ensure that action steps to be taken by client or counselor are on target and that the action step achievements will enable resolution of the objective. All treatment plans are reviewed by and signed off on by the clinical director. </p>
                    </Fade>
                <div>
                    <button>Learn More</button>
                </div>
                </div>
            </div>
        </div>

{/* -------------------------------- SECTION 1 -------------------------------------- */}


<div className='service-1'>
      <div className='service-1-description'>
        <Fade left>
                    <p><span>Key Areas/Fundamentals </span>
                    <br /> <br />
                    The treatment plan will be developed between client and counselor from key information gleaned from the assessment and intake process. This treatment plan will be goal and action oriented with objective and measurable criteria. Each treatment plan will have a statement of problem(s) with which the client identifies, statement of objectives to be reached that addressees each problem, action steps for client and counselor to ensure that objective will be completed. 
                    </p><br />
                    <p>
                    Counselor and client will work together to compose a treatment plan with clear objectives and goals based on key areas intake assessment. It will include: challenges that the client may encounter during recovery process, clear methods of navigating obstacles in recovery, action steps to be taken by the program and/or client to overcome the challenges of recovery.
                    </p><br />
                    <p>
                    Some areas to be examined may be personal relationships, work, anger management, lack of power, financial burdens, separation from children, past trauma as it relates to present, school, etc. 
                    </p><br />
                    <p>
                    Counselor and client will set clear and tangible goals regarding above mentioned obstacles
                    </p><br />
                    <p>
                    Counselor and client will brainstorm potential hurdles as client attempts to accomplish goals. 
                    </p> <br />
                    <p>
                    Counselor and client discuss systems for working through hurdles. 
                    </p> <br />
                    <p>
                    Counselor and client will — upon following weekly session — discuss successes and setbacks for set goals.      
                    </p>
        </Fade>
        </div>
                <div className='service-1-image'>
                    <img src={ Service1 } alt="" />
                </div>
</div>

{/* -------------------------------- SECTION 2 -------------------------------------- */}

        <div className='service-2'>
            <div className='service-2-description'>
                <Fade left>
                    <p><span>Key Areas/Fundamentals </span>
                    <br /> <br />
                    The treatment plan will be developed between client and counselor from key information gleaned from the assessment and intake process. This treatment plan will be goal and action oriented with objective and measurable criteria. Each treatment plan will have a statement of problem(s) with which the client identifies, statement of objectives to be reached that addressees each problem, action steps for client and counselor to ensure that objective will be completed. 
                    </p>
                </Fade>
            </div>
        </div>
        </>
    )
}

export default Treatment
