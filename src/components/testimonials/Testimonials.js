import React from "react";
import Fade from "react-reveal/Fade";

import "./Testimonials.css";

import Wave from "../../assets/waves.svg";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials main-menu">
        <div className="hero-divider">
          <img src={Wave} loading="lazy" repeat-x alt="wave divider" />
        </div>
        <div className="testimonials-content">
          <Fade top>
            <h1>TESTIMONIALS</h1>
          </Fade>
        </div>
      </div>
    </>
  );
};
export default Testimonials;
