import React from "react";
import { Link as LinkRoll } from "react-scroll";
import { Link } from 'react-router-dom';

// import Fade from 'react-reveal/Fade';
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div class="hero ">
        <div class="row">
          <div class="col-lg-12">
            <div id="content" className="container">
              <div className="hero-flex">
                <div className="hero-flexItem hero-flexItem1">
                  <div className="sub-flex">
                    <div>
                      <h1>MENTAL HEALTH TREATMENT</h1>
                    </div>
                  </div>

                  <p>
                  Depending on your needs, we offer treatment for co-occurring disorders that can address both mental health and addiction disorders at the same time.
                  </p>
                </div>

                <div className="hero-flexItem">
                  <div className="sub-flex">
                    <div>
                      <h1>SUBSTANCE ABUSE TREATMENT</h1>
                    </div>
                  </div>

                  <p>
                  No matter what type of addiction or mental health condition you are dealing with, there’s something for everyone at Joser Forever Treatment Center.
                  </p>
                </div>

                <div className="hero-flexItem hero-flexItem3">
                  <div className="sub-flex">
                    <div>
                      <h1>EMPLOYMENT ASSISTANCE</h1>
                    </div>
                  </div>

                  <p>
                  We offer a variety of employment tools and resources to help you land on your feet and get hired at a great company in recovery.
                  </p>
                </div>
              </div>

              <div className="hero-btn">
              <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                    >
                    <Link to="/contact">
                        <button> Call Us</button>
                    </Link>
                </LinkRoll>              </div>
            </div>

            <ul className="slideshow">
              <li>
                <div className="slideshow-caption ">
                  <h1>Joser Forever</h1>
                  <h2>Substance Abuse and Mental Health Treatment Facility</h2>
                  <h3>"Find your happiness and learn to put it first."</h3>
                </div>
              </li>

              <li>
                <div className="slideshow-caption">
                <h1>Joser Forever</h1>
                  <h2>Substance Abuse and Mental Health Treatment Facility</h2>
                  <h3>
                    We provide comprehensive and individualized support for
                    those struggling with addiction and mental health.
                  </h3>
                </div>
              </li>
              <li>
                <div className="slideshow-caption">
                <h1>Joser Forever</h1>
                  <h2>Substance Abuse and Mental Health Treatment Facility</h2>
                  <h3>
                    Our team of compassionate professionals can help you address
                    the issues your're facing
                  </h3>
                </div>
              </li>
              <li>
                <div className="slideshow-caption">
                <h1>Joser Forever</h1>
                  <h2>Substance Abuse and Mental Health Treatment Facility</h2>
                  <h3>Your personalized road map to success starts here.</h3>
                </div>
              </li>
              <li>
                <div className="slideshow-caption">
                <h1>Joser Forever</h1>
                  <h2>Substance Abuse and Mental Health Treatment Facility</h2>
                  <h3>
                    No matter what you're going through, we're here for you.
                    Reach out today.
                  </h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
