import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.css';

// isTransparent가 false일 때 fixed이므로 style객체가 있어야 됨

const MainNavBar = (props) => {
  const { isTransparent, isLogoutable } = props;
  return (
    <nav className="MainNavBar">
      <div className={`MainNavBar ${isTransparent ? 'transparent' : 'fixed'}`}>
        <Link to="/">
          <img src="/images/icon/icon.png" alt="naver icon" />
        </Link>
        <Link to="/">
          <h2>{isLogoutable ? '로그아웃' : '예약확인'}</h2>
        </Link>
      </div>
    </nav>
  );
};

MainNavBar.propTypes = {
  isTransparent: PropTypes.bool.isRequired,
  isLogoutable: PropTypes.bool.isRequired,
};

export default MainNavBar;
