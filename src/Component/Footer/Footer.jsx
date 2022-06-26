import React from 'react';
import './footer.css';
import Wave from '../../assets/wave.png';

import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Gitub from '@iconscout/react-unicons/icons/uil-github';

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: '100%' }} />
      <div className="f-content">
        <span>mohamed.helles.dev@gmail.com</span>
        <div className="f-icons">
          <Facebook color="#242d49" size={'3rem'} />
          <a
            href="https://github.com/mo7amedehab97"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Gitub color="#242d49" size={'3rem'} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
