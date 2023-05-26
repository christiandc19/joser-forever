import React from "react";
import "./Whoweare.css";

import { BsCheckLg } from "react-icons/bs";
import HomeSection2Image from "../../assets/whoWeAre1-min.jpg";

const Whoweare = () => {
  return (
    <>
      <div className="homeSection2 ">
        <div className="homeSection2-content container">
          <div className="homeSection2-left">
            <h1>ABOUT JOSER FOREVER</h1>
            <h2>We're Here to Help You Find a Path Forward.</h2>
            <p>
              At Joser Forever, we provide safe and comfortable medical detox
              services for those struggling with addiction.
            </p>{" "}
            <br /> <br />
            <div className="checklist">
              <div className="homeSection2-icon">
                <BsCheckLg />
              </div>
              <div>
                <p>
                  A comprehensive medical assessment by a doctor to create an
                  individualized treatment plan.
                </p>
              </div>
            </div>
            <br />
            <div className="checklist">
              <div className="homeSection2-icon">
                <BsCheckLg />
              </div>
              <div>
                <p>Urine tests and other lab tests.</p>
              </div>
            </div>
            <br />
            <div className="checklist">
              <div className="homeSection2-icon">
                <BsCheckLg />
              </div>
              <div>
                <p>
                  {" "}
                  The doctor prescribes a series of personalized medications to
                  reduce the severity of withdrawal symptoms, slowly tapering
                  off over time.
                </p>
              </div>
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
