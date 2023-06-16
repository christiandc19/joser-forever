import React from "react";
import "./AboutSection.css";
import MissionSection from "../mission/MissionSection";

const AboutSection = () => {
  return (
    <>
      <div className="about-section container">
        <h1>Who We Are</h1>
        <p>
          Joser Forever Treatment Center has refined and well educated staff
          that is committed to providing the best possible level of care to our
          clients
        </p>
      </div>
      < MissionSection />
    </>
  );
};

export default AboutSection;
