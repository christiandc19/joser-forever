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

            {/* <p>Joser Forever Treatment Center strives to make sobriety less stressful by focusing on sobriety. We utilize established medical treatments to help you get sober and stay sober. Joser Forever Treatment Center helps you taper in a safe, structured environment. We are there for you, through every stage of recovery. No matter where you’re located, you can reach out and get in touch with someone from our staff today.</p> */}
          </Fade>
        </div>
      </div>
    </>
  );
};
export default Testimonials;
