import React from 'react';
import './services.css';

const Card = ({ emoji, heading, detail }) => {
  return (
    <div className="card">
      <img src={emoji} />
      <span>{heading}</span>
      <span>{detail}</span>
    </div>
  );
};

export default Card;
