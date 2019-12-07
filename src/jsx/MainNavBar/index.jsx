import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

import './style.css';
import { ModalContext } from '../Layout';

// TODO: isTransparent가 false일 때 fixed이므로 style객체가 있어야 됨

const MainNavBar = (props) => {
  const { isTransparent, isLogoutable, style } = props;
  const [email, setEmail] = useState('');
  const history = useHistory();
  const { alertModal } = useContext(ModalContext);

  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const { data } = await axios.get('/auth/email', {
          headers: { 'X-Requested-With': 'XMLHttpRequest' },
        });
        if (data) setEmail(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEmail();
  });

  const handleLogout = async () => {
    try {
      const { status } = await axios.get('/auth/logout', {
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
      });
      if (status === 200) {
        alertModal('로그아웃 되었습니다', () => {
          setEmail('');
          history.push('/');
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav
      className={`MainNavBar ${isTransparent ? 'transparent' : 'fixed'}`}
      style={style}
    >
      <Link to="/">
        <img src="/images/icon/icon.png" alt="naver icon" />
      </Link>
      {isLogoutable ? (
        <span onClick={handleLogout}>
          <h2>{email ? '로그아웃' : '예약확인'}</h2>
        </span>
      ) : (
        <Link to={email ? '/myreservation' : '/bookinglogin'}>
          <h2>{email || '예약확인'}</h2>
        </Link>
      )}
    </nav>
  );
};

MainNavBar.propTypes = {
  isTransparent: PropTypes.bool.isRequired,
  isLogoutable: PropTypes.bool.isRequired,
};

export default MainNavBar;
