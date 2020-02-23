import React from 'react';
import './header.css';
import logo from './logo.png';


const Header = () => {

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt='logo'/>
      </div>
    </div>
  )
}

export default Header;