import React, { useState, useContext, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './style.css';
import { ModalContext } from '../Layout';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const { alertModal } = useContext(ModalContext);
  const history = useHistory();
  const inputRef = useRef(null);

  useEffect(() => {
    document.title = '네이버 예약 로그인';
  }, []);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const { statusText } = await axios.post(
        '/auth/login',
        { email },
        {
          headers: { 'X-Requested-With': 'XMLHttpRequest' },
        },
      );
      if (statusText === 'OK') {
        history.push('/myreservation');
      }
    } catch (error) {
      const {
        response: { data, status },
      } = error;
      if (status === 400) {
        inputRef.current.blur();
        alertModal(data);
      }
    }
  };

  return (
    <section className="LoginForm">
      <div className="container">
        <div className="headerBox">
          <h1>비회원 예약확인</h1>
        </div>
        <p>예약자 이메일 입력</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            value={email}
            onChange={({ target: { value } }) => {
              setEmail(value);
            }}
            ref={inputRef}
            placeholder="xxxxx@naver.com"
          />
          <input type="submit" value="내 예약 확인" />
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
