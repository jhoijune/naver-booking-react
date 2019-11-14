import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import PropTypes from 'prop-types';

import './style.css';

/*
재사용성 좋게 쪼개자
*/

const NavBar = (props) => {
  const { isMain, isTransparent, isLogoutable } = props;
  const { pathname } = useLocation();
  return (
    <nav className="NavBar">
      {((main) => {
        if (main) {
          return (
            <div
              className={`container ${
                isTransparent ? 'transparent' : 'fixed'
              }`}
            >
              <Link to="/">
                <img src="/images/icon/icon.png" alt="naver icon" />
              </Link>
              <Link to="/">
                <h2>{isLogoutable ? '로그아웃' : '예약확인'}</h2>
              </Link>
            </div>
          );
        }
        const paths = pathname.split('/');
        const itemId = paths[paths.length - 1];
        return (
          <div className="container">
            <div className="backward">
              <Link to={`/detail/${itemId}`}>
                <i className="fn fn-backward1" />
              </Link>
            </div>
            <div className="titleName">
              <h1>행사 이름</h1>
            </div>
            <div className="empty" />
          </div>
        );
      })(isMain)}
    </nav>
  );
};

NavBar.propTypes = {
  isMain: PropTypes.bool,
  isTransparent: PropTypes.bool,
  isLogoutable: PropTypes.bool,
};

NavBar.defaultProps = {
  isMain: true,
  isTransparent: false,
  isLogoutable: false,
};

export default NavBar;
