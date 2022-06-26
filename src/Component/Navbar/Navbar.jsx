import React from 'react';
import Toggle from '../Toggle/Toggle';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="nav-holder">
      <section className="nav-left">
        <div className="nav-name">Mohamed Helles</div>
        <span className='toggle-holder'>
          <Toggle />
        </span>
      </section>
      <section className="nav-right">
        <div className="nav-list">
        
            <div>Home</div>
            <div>Services</div>
            <div>Experince</div>
       
        </div>
        <div className="btn-holder">
          <button className="button nav-btn">Contact Me</button>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
