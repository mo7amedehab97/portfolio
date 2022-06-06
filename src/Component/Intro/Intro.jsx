import React from 'react';
import Github from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.png';
import Instegram from '../../assets/instagram.png';
import personal from '../../assets/personal.png'

import './intro.css';

const Intro = () => {
  return (
    <section className="intro">
      <article className="intro-left">
        <div className="intro-name">
          <span>Hey I'm </span>
          <span>Mohamed Hells</span>
          <span>
            Fullstack Developer with high level of experince in web designing
            and development producting the quality work
          </span>
        </div>
        <div className="hire-me">
          <button className="button intro-button"> Hire Me</button>
        </div>
        <div className="intro-icons">
          <a href="https://github.com/mo7amedehab97">
            <img src={Github} alt="Github icon" />
          </a>
          <a href="https://www.instagram.com/mo7amed.ehab97/">
            <img src={Instegram} alt="Instagram icon" />
          </a>
          <a href="https://www.linkedin.com/in/mohamed-helles/">
            <img src={Linkedin} alt="Linkedin icon" />
          </a>
        </div>
      </article>
      <article className="intro-right">
        <img src={personal} alt="" />
      </article>
    </section>
  );
};

export default Intro;
