import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
  return (
    <header className="Header">
      <div className="container">
        <Link to="/" className="spr_bi txt_logo" />
      </div>
    </header>
  );
};

export default Header;
