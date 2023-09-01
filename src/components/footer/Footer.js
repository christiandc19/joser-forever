import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import logo from "../../assets/nav-logo.png";
import DHCS from "../../assets/DHCS-logo.png";

import "./FooterStyles.css";

import { Link as LinkRoll } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="top">
            <div className="logo-footer">
              <img
                src={logo}
                width="140px"
                height="80px"
                alt="Joser Forever Logo"
                loading="lazy"
              />
              {/* <h1>Joser Forever</h1> */}
            </div>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <BsFillArrowUpCircleFill className="footer-icon" />
            </LinkRoll>
          </div>
          <div className="col-container">
            <div className="col">
              <h3>My Account</h3>

              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/mission">
                  <p>Our Mission</p>
                </Link>
              </LinkRoll>

              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/about-us">
                  <p>About Us</p>
                </Link>
              </LinkRoll>

              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/team">
                  <p>Our Team</p>
                </Link>
              </LinkRoll>

            </div>





            <div className="col">
              <h3>Navigation</h3>

              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/">
                  <p>Home</p>
                </Link>
              </LinkRoll>


              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/insurance">
                  <p>Insurance</p>
                </Link>
              </LinkRoll>

              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/contact">
                  <p>Contact</p>
                </Link>
              </LinkRoll>
            </div>




            <div className="col">
              <h3>PROGRAMS</h3>

              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/mental-health">
                  <p>Mental Health Programs</p>
                </Link>
              </LinkRoll>

              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/substance-abuse">
                  <p>Substance Abuse Programs</p>
                </Link>
              </LinkRoll>

              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/jobs">
                  <p>Employment Assistance</p>
                </Link>
              </LinkRoll>
            </div>




            <div className="license col">
              <h3>Licensed by the State Department of Health Care Services</h3>
              <p>License Number: 191114AP <br />Expiration Date: 10 / 31 / 2023
              <br />
              <a href="https://data.chhs.ca.gov/dataset/sud-recovery-treatment-facilities" target="_blank" rel="noreferrer">(View License & Certification Information here )</a>
              </p>
              <div className="license-img">
                  <img src={DHCS} alt="DHCS Logo" loading="lazy"/>
              </div>
            </div>

          </div>

          <p className="copyright">
            <p>&copy; 2023 Joser Forever. All rights reserved</p>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
