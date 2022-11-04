import React, {useRef} from "react";
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import './AboutStyles.css'

import { BsFillPinMapFill } from 'react-icons/bs';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';


import emailjs from 'emailjs-com'


const About = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
                    //    Service Id        Template Id                 Public Key (Account Tab) 
     emailjs.sendForm('service_9v2gipl', 'template_rxc8sbg', form.current, 'Rj5e7bWJla-kOEL0H')
       .then((result) => {
           console.log(result.text);
       }, (error) => {
           console.log(error.text);
       });
  
       e.target.reset()
   };
  



    return (

        <>
        <div className='about'>
            <div className="container">
                <div className="content">
                    <Fade right>
                    <h1>About Us</h1>
                    </Fade>
                    <Fade left>
                    <p>
                    In many cases, medically supervised Rehab near Los Angeles is the right starting point for overcoming addiction to alcohol or dependence of prescription drugs or narcotics. Joser Forever strives to make this step less stressful by focusing on your comfort and safety first. Our compassionate staff utilizes established medical treatments to decrease withdrawal effects in an empathetic environment. In the meantime, you’ll receive behavioral health care from experienced counselors to boost your chances for an effective recovery. Detoxing by yourself or going abruptly is often dangerous. Joser Forever lets you taper in a safe, structured manner. We use evidence-based medical practices for controlling withdrawal symptoms and watch over you on a 24-7 basis. Our nursing team is adept at administering medications for gradual tapering. And whenever you feel up to it, you also have the chance to participate in therapy and peer support groups to explore the underlying triggers of addiction and associated mental health disorders. 
                    </p>
                    </Fade>
                <div>
                <Link to="/contact">
                    <button>Contact Us</button>
                </Link>
                </div>
                </div>
            </div>
        </div>




        <div className='about-section1'>


        <div className='contact'>
          <div className="map">

                <div className="location">
                  <h1 className="location-header">Get In Touch</h1><br/>
                  <p><AiOutlinePhone /> +1 123 456 7890  </p><br/>
                  <p><AiOutlineMail /> info@joserforever.com  </p><br/>
                  <p><BsFillPinMapFill /> 7235 Santa Monica Blvd West Hollywood CA 90046  </p><br/>
                  <p className="admission">Please call our admission department or fill out the form if you have any questions.</p>
                </div>

                <div>
                <iframe title="map" width="600" height="250" id="gmap_canvas" src="https://maps.google.com/maps?q=1800%20Vine%20Street%20Los%20Angle&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
          </div>

          <div className="container contact-container">
              <form ref={form} onSubmit={sendEmail}>
              <h1>SEND A MESSAGE</h1>
              <input className="user-input" type="text" name='name' placeholder='Name' required />
              <input className="user-input" type="text" name='email' placeholder='Email' required />
              <input className="user-input" type="text" name='email' placeholder='Subject' required />

              <textarea className="user-input email-input" name="message" rows="4" placeholder="How can we help?" required ></textarea>
              <div className="submit-btn">
              <button type='submit' className="btn-modal btn btn-primary">Send</button>
              </div>
              </form>
          </div>
</div>





        </div>


        </>
    )
}

export default About
