import React from 'react'
import {Link} from 'react-router-dom'
import './ServicesStyles.css'
import './ServicesCardsStyles.css'
import Fade from 'react-reveal/Fade';
import ServicesCards from './ServicesCards';
import Services1 from '../../assets/mental-illness.png'
import Services2 from '../../assets/substance-use.png'
import Services3 from '../../assets/addiction-treatment.png'
import Services4 from '../../assets/employment-assistance.png'
import Service3 from '../../assets/treatment-image-1.jpg'

const Services = () => {
  return (
    <>
    <div className='services'>
        <div className="container">
            <Fade top>
            <div className="content">
                <h2>OUR SERVICES</h2>
                <p>At Natural Rest House, clients receive individual therapy alongside a range of additional treatments, including relapse prevention, trauma therapy, mindfulness meditation, transportation, yoga, and more. We offer support that clients need to allow them to gradually go back to treatment. </p>
            </div>
            </Fade>
        </div>
    </div>

{/* ---------------------------------------------- START of CARDS -------------------------------------------------*/}

<div className='main'>
<Fade bottom>
    <ServicesCards
    Image = { Services1 }
    CardName="Mental Health Services​"
    Description="Lorem Ipsum dolor sit amet pretium consecteru adipiscing elit. Lorem consectetur adipescing elit."
    />

<ServicesCards
    Image = { Services2 }
    CardName="Substance Use"
    Description="Lorem Ipsum dolor sit amet pretium consecteru adipiscing elit. Lorem consectetur adipescing elit."
    />
</Fade>

<Fade bottom>
<ServicesCards
    Image = { Services3 }
    CardName="Addiction Treatment"
    Description="Lorem Ipsum dolor sit amet pretium consecteru adipiscing elit. Lorem consectetur adipescing elit."
    />


<ServicesCards
    Image = { Services4 }
    CardName="Employment Assistance"
    Description="Lorem Ipsum dolor sit amet pretium consecteru adipiscing elit. Lorem consectetur adipescing elit."
    />
</Fade>
    </div>

    <Link to="/treatment">
    <div className='service-cards-btn'>
        <button>Learn More</button>
    </div>
    </Link>

{/* ---------------------------------------------- END of CARDS -------------------------------------------------*/}



{/* ---------------------------------------------- THIRD SECTION - SERVICES -------------------------------------------------*/}
<hr className='hr-container'/>

<div className='service-3'>
      <div className='service-3-description'>
        <Fade left>

                    <p><span> What We Do </span>
                    <br /> <br />
                    At Joser Forever Mental Health Treatment Facility, we offer different levels of care based on each individual’s needs. Our programs consist of an intensive outpatient program (IOP) and a more demanding and structured partial hospitalization program (PHP). You can be confident that our caring and professional staff will recommend the right level of care for you or your loved one.                    </p><br />
                    <p>
                    Counselor and client will work together to compose a treatment plan with clear objectives and goals based on key areas intake assessment. It will include: challenges that the client may encounter during recovery process, clear methods of navigating obstacles in recovery, action steps to be taken by the program and/or client to overcome the challenges of recovery.
                    </p><br />
        </Fade>
        </div>
                <div className='service-3-image'>
                    <img src={ Service3 } alt="" />
                </div>
</div>

{/* ---------------------------------------------- END of THIRD SECTION - SERVICES -------------------------------------------------*/}


  </>


  )
}

export default Services
