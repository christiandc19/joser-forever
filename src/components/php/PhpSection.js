import React from "react";
import Fade from "react-reveal/Fade";
import "./PhpSection.css";
import { AiFillCheckCircle } from "react-icons/ai";


const PhpSection = () => {
  return (
    <>
    <div className="phpSection">

      <div className="php-wrap">
        <Fade left>
          <div className="php-wrap-left">
            <h1 className="header">WHAT IS PARTIAL HOSPITALIZATION PROGRAM?</h1>
          </div>
        </Fade>

        <Fade right>
          <div className="php-wrap-right">
            <br />
            <p>
              A treatment plan that can be highly beneficial for those who have supportive family members at home and responsibilities that they must maintain during the week, the partial hospitalization program offers structured addiction treatment that runs several hours daily throughout the week. Through this treatment option, you can participate in treatment sessions during the day and return to your home at night.
              <br /> <br />
              One of the first steps that you should take is to talk to our addiction treatment admissions team. They will provide a formal assessment to determine what level of treatment is right for your needs. For instance, we may recommend a partial hospitalization program if you meet these criteria:
              <br /> <br />

                    <ul>
                        <br />
                          <li>
                                <AiFillCheckCircle className="star" /> You are medically stable.
                          </li>
                          <li>
                                <AiFillCheckCircle className="star" /> You're not at risk of harming others or yourself.
                          </li>
                          <li>
                                <AiFillCheckCircle className="star" /> You have difficulty functioning at school, work, or home.
                          </li>
                          <li>
                                <AiFillCheckCircle className="star" /> You're motivated to engage in our treatment program.
                          </li>
                          <li>
                                <AiFillCheckCircle className="star" /> You're experiencing co-occurring substance use disorders and mental health concerns.
                          </li>
                          <li>
                                <AiFillCheckCircle className="star" /> You have sufficient support in your home life.
                          </li>

                      </ul>
              <br />
              <br /> Our evaluation doesn’t just determine what level of care you need. It also allows us to choose what therapeutic options could be part of your treatment program.
            </p>
            <br />
          </div>
        </Fade>
      </div>
    </div>


    

      <div className="php-wrap2">
        <div className="wrap2-content container">
          <h1>What to expect throughout the program</h1>
          <br /> <br />
          <p>
          Consisting of 5 hours of clinical services (5 days per week), the PHP has the highest level of care we provide. Throughout treatment, patients will participate in four daily group therapy sessions, as well as individual therapy at least once a week. Additionally, all patients meet with our medical director on a weekly basis to discuss medication management (if applicable).
            <br /> <br />
            Patients are served lunch between group sessions and can participate in weekly recovery outings as well. For anyone starting their journey to sobriety, this level of care is recommended, as it is best to have a strong foundation of support built.
          </p>
        </div>
      </div>

    </>
  );
};

export default PhpSection;
