import React, { useContext } from 'react';
import './toggle.css';
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';
import { themeContext } from '../../Context';
const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    theme.dispatch({ type: 'toggle' });
  };
  return (
    <div className="toggle">
      <Moon />
      <Sun />
      <div
        className="toggle-btn"
        onClick={handleClick}
        style={darkMode ? { left: '2px' } : { right: '2px' }}
      ></div>
    </div>
  );
};

export default Toggle;
