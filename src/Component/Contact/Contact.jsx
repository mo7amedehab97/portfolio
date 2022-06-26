import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_js6rmfi',
        'template_tf6gob8',
        form.current,
        'GeAZ_cs0-RPwA3uhb',
      )
      .then(
        (result) => {
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          <span>Get in Touch</span>
          <span>Contact me</span>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{done && 'Thanks for Contacting me'}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
