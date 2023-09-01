import React from "react";
import Fade from "react-reveal/Fade";
import "./OpSection.css";
import { AiFillCheckCircle } from "react-icons/ai";


const PhpSection = () => {
  return (
    <>
    <div className="opSection">

      <div className="opSection-wrap">
        <Fade left>
          <div className="opSection-wrap-left">
            <h1 className="header">WHAT IS OUTPATIENT PROGRAM (OP)?</h1>
          </div>
        </Fade>

        <Fade right>
          <div className="opSection-wrap-right">
            <br />
            <p>
            The least intensive program we provide, the outpatient program does not require overnight stays at our facilities. And although there is less time required for therapy sessions per week, we instill a high level of accountability for our patients in order for them to succeed in their journey to sobriety.
              <br /> <br />
              At Joser Forever, we recognize that overcoming addiction on your own may not be possible. Fortunately our treatment programs give you the path to healing/recovery. Through our outpatient program, we give you the tools to manage your addiction in the most healthy way possible. To learn more, reach out to us today.
              <br /> <br />
              <h1 className="header">SOBER LIVING</h1>
              <br /> For many reasons, patients don’t always have a stable home-environment to return to after treatment. For these cases, we offer sober living homes in which patients can continue to strengthen themselves even further post-treatment.              <br /> <br />
              At our sober living homes, structure and accountability are at the patients’ side. The combination of our outpatient program with a transition to sober living communities boosts the success of our patients’ journey to sobriety.
            </p>
            <br />
          </div>
        </Fade>
      </div>
    </div>


    

      <div className="opSection-wrap2">
        <div className="opSection-content container">
          <h1>What to expect throughout the program</h1>
          <br /> <br />
          <p>
          Considered the final step in the treatment plan, the outpatient program has patients attend three group therapy sessions per week with one individual session as well. Other therapeutic options that are involved:
            <br /> <br />
            <ul>
                        <br />
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

export default PhpSection;
