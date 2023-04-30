import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w9xldym', 'template_clndznm', form.current, 'QVDgnEzDtIWEWRueD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };

  return (
   <section id='contact'>
    <h5>Get in touch with me </h5>
    <h2> My contacts</h2>
    
    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>johnsonvictory911@gmail.com</h5> 
          <a href='mailto:johnsonvictory911@gmail.com' target="_blank">Send a Message</a>
        </article>

        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>V's code works</h5> 
          <a href='https://api.whatsapp.com/send?phone+2349064286189' target="_blank">Send a Message</a>
        </article>

        <article className="contact__option">
          <BsLinkedin className='contact__option-icon'/>
          <h4>LinkedIn</h4>
          <h5>V's code works</h5> 
          <a href='https://www.linkedin.com/in/johnson-victory-1b19591b1/' target="_blank">Send a Message</a>
        </article>
      </div>
      {/* END OF CONTACT OPTIONS */}

      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='your full name ' required/>
        <input type='email' name='email' placeholder='your email' required />
        <textarea name='message' rows='7' placeholder='Your message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
   </section>
  )
}

export default Contact