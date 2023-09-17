import React from "react";
import "./ResidenceHome.css";
import Fade from 'react-reveal/Fade';

import { BsCheckLg } from "react-icons/bs";
import HomeSection2Image from "../../assets/submenu-bg-residence.jpg";

const ResidenceHome = () => {
  return (
    <>
      <div className="residence-home ">
        <div className="residence-home-content container">
          <div className="residence-left">
            <Fade left>
            <h1>ABOUT JOSER FOREVER</h1>
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
              <div className="residence-icon">
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
              <div className="residence-icon">
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
              <div className="residence-icon">
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

          <div className="residence-right">
            <img src={HomeSection2Image} loading="lazy" alt="psychologist" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResidenceHome;
