import React from 'react';
import './services.css';
import HeartEmoji from '../../assets/heartemoji.png';
import Glasses from '../../assets/glassesimoji.png';
import Humple from '../../assets/humble.png';
import Figma from '../../assets/figma.png';
import Card from './Card';
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
        <button className="button services-btn"> Download Cv</button>
        <div
          className="blur services-blur1"
          style={{ background: '#ABF1FF94' }}
        ></div>
      </div>
      <div className="right-services">
        <Card
          emoji={Figma}
          heading={'Design'}
          detail={
            'I design beautiful and functional websites and applications using Figma.'
          }
        />
      </div>
    </div>
  );
};

export default Services;
