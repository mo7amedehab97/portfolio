import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import './services.css';
import Figma from '../../assets/figma.png';
import ReactIcon from '../../assets/react.png';
import NodeIcon from '../../assets/node.png';
import Card from './Card';
import Resume from '../../assets/mohamed-helles.pdf';
import { motion } from 'framer-motion';

const Services = () => {
  const transition = { duration: 2, type: 'spring' };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services">
      <motion.div
        className="left-services"
        initial={{ right: '30%' }}
        whileInView={{ left: '0%' }}
        transition={transition}
      >
        <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
          <br />
          Nihil doloremque placeat veniam facilis quia
        </span>
        <a href={Resume} download>
          <button className="button services-btn"> Download Cv</button>
        </a>
      </motion.div>
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
