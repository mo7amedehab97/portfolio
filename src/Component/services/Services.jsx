import React from 'react';
import './services.css';
import Figma from '../../assets/figma.png';
import ReactIcon from '../../assets/react.png';
import NodeIcon from '../../assets/node.png';
import Card from './Card';
import Resume from '../../assets/mohamed-helles.pdf';

const Services = () => {
  return (
    <div className="services">
      <div className="left-services">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
          <br />
          Nihil doloremque placeat veniam facilis quia
        </span>
        <a href={Resume} download>
          <button className="button services-btn"> Download Cv</button>
        </a>
      </div>
      <div className="right-services">
        <div>
          <Card
            emoji={Figma}
            heading={'Design'}
            detail={'I design beautiful websites and applications using Figma.'}
          />
        </div>
        <div>
          <Card
            emoji={NodeIcon}
            heading={'Back End'}
            detail={
              'node.js, express.js, postgresql, mongoDB, mongoose, passport, jwt, and more.'
            }
          />
        </div>
        <div>
          <Card
            emoji={ReactIcon}
            heading={'Front End'}
            detail={
              'html, css, javascript, react ,Ant design, matireal-ui, fromik, responsive web design, and more.'
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
