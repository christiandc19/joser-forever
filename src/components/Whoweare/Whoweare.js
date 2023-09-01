import React from "react";
import "./Whoweare.css";
import Fade from 'react-reveal/Fade';

import { BsCheckLg } from "react-icons/bs";
import HomeSection2Image from "../../assets/whoWeAre1-min.png";

const Whoweare = () => {
  return (
    <>
      <div className="homeSection2 ">
        <div className="homeSection2-content container">
          <div className="homeSection2-left">
            <Fade left>
            <h1>ABOUT JOSER FOREVER</h1>
            </Fade>

            <Fade right>
            <h2>We're Here to Help You Find a Path Forward.</h2>
            </Fade>

            <Fade left>
            <p>
              At Joser Forever, we provide safe and comfortable medical detox
              services for those struggling with addiction.
            </p>
            </Fade>

            <br /> <br />
            <div className="checklist">

            <Fade top>
              <div className="homeSection2-icon">
                <BsCheckLg />
              </div>
              <div>
                <p>
                  A comprehensive medical assessment by a doctor to create an
                  individualized treatment plan.
                </p>
              </div>
            </Fade>
            </div>
            <br />

            <div className="checklist">
            <Fade top>
              <div className="homeSection2-icon">
                <BsCheckLg />
              </div>
              <div>
                <p>Urine tests and other lab tests.</p>
              </div>
              </Fade>

            </div>
            <br />
            <div className="checklist">
            <Fade top>
              <div className="homeSection2-icon">
                <BsCheckLg />
              </div>
              <div>
                <p>
                  The doctor prescribes a series of personalized medications to
                  reduce the severity of withdrawal symptoms, slowly tapering
                  off over time.
                </p>
              </div>
              </Fade>
            </div>
          </div>

          <div className="homeSection2-right">
            <img src={HomeSection2Image} loading="lazy" alt="psychologist" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Whoweare;
