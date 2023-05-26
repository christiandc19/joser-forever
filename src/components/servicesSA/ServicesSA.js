import React from 'react'
import './ServicesSA.css'
import { CiBeerMugFull } from "react-icons/ci";
import { CiPillsBottle1 } from "react-icons/ci";
import { RiSyringeLine } from "react-icons/ri";
import { FaPills } from "react-icons/fa";

import { Link as LinkRoll } from "react-scroll";
import { Link } from 'react-router-dom';


const ServicesSA = () => {
  return (
    <>
      <div className='servicesSA'>
            <div className='servicesSA-content container'>
                <div className='servicesSA-header'>
                    <h1>SERVICES</h1>
                    <h2>Substance Abuse Programs</h2>
                    <p>No matter what type of addiction or mental health condition you are dealing with, there’s something for everyone at Joser Forever Treatment Center.</p>
                </div>


                <div className='servicesSA-flex'>

                    <div className='servicesSA-flexItem'>
                        <h2><CiBeerMugFull /></h2>
                        <h1>Alcohol Addiction</h1>
                        <p>Inability to manage one’s drinking habits. It is the most acute form of alcohol abuse.</p>
                    </div>

                    <div className='servicesSA-flexItem'>
                        <h2><CiPillsBottle1 /></h2>
                        <h1>Prescription Addiction</h1>
                        <p>Abuse of prescription medications can be recreational, due to addiction, or both, and the consequences can be severe or fatal.</p>
                    </div>

                    <div className='servicesSA-flexItem'>
                        <h2><RiSyringeLine /></h2>
                        <h1>Heroin Addiction</h1>
                        <p>Heroin is an opioid stimulant created from morphine and the seed of the poppy plant. It usually appears in either powder form or as a sticky tar substance.</p>
                    </div>

                    <div className='servicesSA-flexItem'>
                        <h2><FaPills /></h2>
                        <h1>Xanax Addiction</h1>
                        <p>When taken in high doses, Xanax can lead to serious side effects, ranging from coma, to respiratory arrest, and even death.</p>
                    </div>

                </div>

                <div className='servicesSA-btn'>
                <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                    >
                    <Link to="/substance-abuse">
                        <button> VIEW ALL</button>
                    </Link>
                </LinkRoll>

                </div>


            </div>
      </div>
    </>
  )
}

export default ServicesSA
