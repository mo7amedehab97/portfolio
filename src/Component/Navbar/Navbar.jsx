import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="nav-holder">
      <section className="nav-left">
        <div className="nav-name">Mohamed Helles</div>
        <span>toggle</span>
      </section>
      <section className="nav-right">
        <div className="nav-list">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Experince</li>
          </ul>
        </div>
        <button className="button nav-button">Contact Me</button>
      </section>
    </nav>
  );
};

export default Navbar;
