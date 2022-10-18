import React, {useRef} from "react";
import './ContactStyles.css';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

// Popup message after send button is clicked
    const feedbackEl = document.querySelector(".feedback");
    feedbackEl.setAttribute("class", "feedback");
  setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 4000);


                  //    Service Id        Template Id                 Public Key (Account Tab) 
   emailjs.sendForm('service_9v2gipl', 'template_rxc8sbg', form.current, 'jysvNywN0d2HeSXN1')
     .then((result) => {
         console.log(result.text);
     }, (error) => {
         console.log(error.text);
     });

     e.target.reset()
 };

    return (
      <>
<div className='contact'>
      <div className="container contact-container">
          <form ref={form} onSubmit={sendEmail}>
            <h1>SEND A MESSAGE</h1>
            <input className="user-input" type="text" name='name' placeholder='Name' required />
            <input className="user-input" type="text" name='email' placeholder='Email' required />
            <textarea className="user-input email-input" name="message" rows="4" placeholder="Message" required ></textarea>
            <div className="submit-btn">
                <button type='submit' className="btn-modal btn btn-primary">Send</button>
            </div>
          </form>
      </div>
</div>
      </>
    )
}



export default Contact