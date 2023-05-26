import React from 'react'
import './ServicesMH.css'
import Fade from 'react-reveal/Fade';
import ServicesMH1 from "../../assets/servicesMH1.png";
import { BsCheckLg } from "react-icons/bs";
import { Link as LinkRoll } from "react-scroll";
import { Link } from 'react-router-dom';

const ServicesMH = () => {
  return (
    <>
      <div className='servicesMH'>
        <div className='servicesMH-content container'>
            <div className='servicesMH-left'>
                <img src={ServicesMH1} loading="lazy" alt="psychologist" />
            </div>

            <div className='servicesMH-right'>
                <Fade left>
                <h1>SERVICES</h1>
                </Fade>

                <Fade right>
                <h2>Mental Health Treatment</h2>
                </Fade>

                <Fade left>
                <p>Depending on your needs, we offer treatment for co-occurring disorders that can address both mental health and addiction disorders at the same time.</p>
                </Fade>

                <div className="servicesMH-icon">

                     <Fade right><p> <span><BsCheckLg /></span> Anxiety</p></Fade>
                     <Fade left><p> <span><BsCheckLg /></span> Sadness/Depression</p></Fade>
                     <Fade right><p> <span><BsCheckLg /></span> Anger Management</p></Fade>
                     <Fade left><p> <span><BsCheckLg /></span> Panic Disorder</p></Fade>
                </div>

                <div className='servicesMH-btn'>
                <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                    >
                    <Link to="/mental-health">
                        <button> VIEW ALL</button>
                    </Link>
                </LinkRoll>
                </div>

            </div>

        </div>

      </div>
    </>
  )
}

export default ServicesMH
