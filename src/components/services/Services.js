import React from 'react'
import './ServicesStyles.css'
import './ServicesCardsStyles.css'
import Fade from 'react-reveal/Fade';
import ServicesCards from './ServicesCards';
import Services1 from '../../assets/mental-illness.png'
import Services2 from '../../assets/substance-use.png'
import Services3 from '../../assets/addiction-treatment.png'
import Services4 from '../../assets/employment-assistance.png'
import ThirdColumnImage  from '../../assets/services1.png'

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
    </div>

{/* ---------------------------------------------- END of CARDS -------------------------------------------------*/}



{/* ---------------------------------------------- THIRD SECTION - SERVICES -------------------------------------------------*/}
<hr className='container'/>

<div className='services-third'>
        <div className="container">
            <Fade top>
            <div className="content">
                <h2>The Best Detox and Residential Treatment Center</h2>
                <p>IN LOS ANGELES CALIFORNIA</p>
            </div>
            </Fade>
        </div>
</div>

<div className='third-section'>
    <div className='quote'>
        <Fade left>
                <blockquote>
                    <p>
                      <span className='quote_intro'>"You may have lost your way but here you won’t get lost in the crowd.</span><br />
                       Nartural Rest House is an inviting, home-like environment where compassionate clinicians and staff members work collaboratively with you to address your unique needs. Rooted in the 12-step philosophy and a trauma-informed, evidence-based approach, we’ll show you how to manage and live with addiction, co-occurring disorders and other underlying issues, like anxiety or depression. Surrounded by a supportive recovery community, you’ll heal internally and, in turn, heal your relationships. Find your footing here and get ready for the next phase of your life. 
                    </p><br />
                </blockquote>
        </Fade>
    </div>

        <Fade right>
            <div className='third-section-image'>
                <img src={ ThirdColumnImage } alt="" />
            </div>
        </Fade>
</div>

{/* ---------------------------------------------- END of THIRD SECTION - SERVICES -------------------------------------------------*/}


  </>


  )
}

export default Services
