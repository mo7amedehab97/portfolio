import React, { useRef, useContext } from 'react';

import { themeContext } from '../../Context';
import emailjs from '@emailjs/browser';
import { success, error } from '../Messages/Messages';
import './Contact.css';
import { motion } from 'framer-motion';

const Contact = () => {
  const transition = { duration: 2, type: 'spring' };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const form = useRef();
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
          document.getElementsByClassName('form')[0].reset();
          success('your respoense was sent ');
        },
        (err) => {
          error(err.text);
          console.log(err.text);
        },
      );
  };
  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <motion.div
          className="awesome"
          initial={{ left: '-60%' }}
          whileInView={{ left: '-5%' }}
          transition={transition}
        >
          <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
          <span>Contact me</span>
          <div className="dark"></div>
          <div className="yellow"></div>
        </motion.div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail} className="form">
          <input type="text" name="name" className="user" placeholder="Name" />
          <input
            type="email"
            name="email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
