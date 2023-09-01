import React from "react";
import "./AboutSection.css";
import AboutUs from "../../assets/about-section-min.jpg";
import DHCS from "../../assets/DHCS-logo.png";

const AboutSection = () => {
  return (
    <>
    <div className="about-section">
      <div className="about-container">
        <div className="about-content container">
          <div className="about-content-left">
            <img src={AboutUs} alt="nurse" loading="lazy" />
          </div>

          <div className="about-content-right">
            <h1>ABOUT US</h1> <br />
            <h2>
              <i>Get the right care from the people who care</i>
            </h2>
            <br />
            <p>
              Joser Forever Treatment Center has refined and
              well educated staff that is committed to providing the best
              possible level of care to our clients. We are there for you,
              through every stage of recovery. No matter where you’re located,
              you can reach out and get in touch with someone from our staff
              today
            </p>{" "}
            <br />
            <p>
              We strives to make sobriety less stressful by focusing on sobriety
              and utilize established medical treatments to help you get sober
              and stay sober. <br />
              <br />
              Joser Forever Treatment Center helps you taper in a safe,
              structured environment. We are there for you, through every stage
              of recovery. No matter where you’re located, you can reach out and
              get in touch with someone from our staff today.
            </p>
            <br />
            <hr />
            <br />
            <p>Certified by the State Department of Health Care Services <br/>Certification Number: 191114AP Expiration Date: 10/31/2023<br/><a href="https://data.chhs.ca.gov/dataset/sud-recovery-treatment-facilities" target="_blank" rel="noreferrer">(View License & Certification Information here )</a></p>
            <div className="license-img">
                  <img src={DHCS} alt="DHCS Logo" loading="lazy"/>
            </div>

          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutSection;
