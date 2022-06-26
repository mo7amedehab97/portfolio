import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import './experience.css';

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience">
      <div className="achievment">
        <div className={darkMode ? 'circle-dark' : 'circle'}>+2</div>
        <span>Years</span>
        <span>of Experience</span>
      </div>
      <div className="achievment">
        <div className={darkMode ? 'circle-dark' : 'circle'}>+27</div>
        <span>Completed</span>
        <span>Project</span>
      </div>
      <div className="achievment">
        <div className={darkMode ? 'circle-dark' : 'circle'}>+2</div>
        <span>Companies</span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
