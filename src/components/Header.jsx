import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="robot-logo">🤖</span>
          <h2>Portfolio Maker</h2>
        </div>
        <nav className="nav">
          <Link to="/home">Home</Link>
          <Link to="/templates">Templates</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio-bot">Create Portfolio</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;