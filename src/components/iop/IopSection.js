import React from "react";
import Fade from "react-reveal/Fade";
import "./IopSection.css";
import { AiFillCheckCircle } from "react-icons/ai";


const IopSection = () => {
  return (
    <>
    <div className="iopSection">

      <div className="iopSection-wrap">
        <Fade left>
          <div className="iopSection-wrap-left">
            <h1 className="header">WHAT IS INTENSIVE OUTPATIENT PROGRAM (IOP)?</h1>
          </div>
        </Fade>

        <Fade right>
          <div className="iopSection-wrap-right">
            <br />
            <h1>Intensive Outpatient Program (IOP)</h1>
            <p>
            Our IOP enables patients to continue their day-to-day regimen while simultaneously undergoing our best possible care. Measured on a case-by-case basis, patients may live in our treatment center, in a sober living community, or at their own home.<br /> <br />At Joser Forever Treatment Center, we recognize that overcoming addiction on your own may not be possible. Fortunately our treatment programs give you the path to healing/recovery. Through our intensive outpatient program, we give you the tools to manage your addiction in the most healthy way possible. To learn more, reach out to us today.</p>

            <h1>Why choose an IOP?</h1>
            <p>
            It is common for those struggling with addiction to not respond well to residential treatment options. An intensive outpatient program may be the best alternative, as it can offer a high level of care and more accountability (removing patients from access to drugs/alcohol, enabling peers, etc.).

            <br /><br />
            If the patient has a strong, supportive family and group of friends/peers, they will be able to undergo care with us, but also be able to live at home.
            
            </p>
            <br />
          </div>
        </Fade>
      </div>
    </div>


    

      <div className="iop-wrap2">
        <div className="wrap2-content container">
          <h1>What to expect throughout the program</h1>
          <br /> <br />
          <p>
          Considered our mid-tier intensive care, the program consists of 3 hours of clinical services 3-5 days per week. Patients also participate in group therapy sessions (2 per day) with any additional sessions available if deemed necessary. We also offer several other therapeutic options, such as:
            <br /> <br />
            <ul>
            <li>
                <AiFillCheckCircle className="star" /> Cognitive Behavioral Therapy.
            </li>
            <li>
                <AiFillCheckCircle className="star" /> Dialectical Behavioral Therapy (DBT).
            </li>
            <li>
                <AiFillCheckCircle className="star" /> Psychodynamic Therapy.
            </li>
            <li>
                <AiFillCheckCircle className="star" /> Interpersonal Psychotherapy.
            </li>

            </ul>
          </p>
        </div>
      </div>

    </>
  );
};

export default IopSection;
