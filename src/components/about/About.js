import React from "react";
import Fade from "react-reveal/Fade";
import ContactForm from "../contact/ContactForm";
import "./About.css";
import AboutSection from "./AboutSection";
import {Helmet} from "react-helmet";

const About = () => {
  return (
    <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>ABOUT US - Joser Forever</title>
            <link rel="canonical" href="https://joserforever.biz/about" />
        </Helmet>

      <div className="about main-menu">

        <div className="about-content">
          <Fade top>
            <h1>ABOUT US</h1>
          </Fade>
        </div>
      </div>

      <AboutSection />
      <ContactForm />
    </>
  );
};
export default About;
