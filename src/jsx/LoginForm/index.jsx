import React, { useState } from 'react';

import './style.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');

  return (
    <section className="LoginForm">
      <div className="container">
        <div className="headerBox">
          <h1>비회원 예약확인</h1>
        </div>
        <p>예약자 이메일 입력</p>
        <form action="auth/login" method="POST">
          <input
            type="text"
            name="email"
            value={email}
            onChange={({ target: { value } }) => {
              setEmail(value);
            }}
            placeHolder="xxxxx@naver.com"
          />
          <input type="submit" value="내 예약 확인" />
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
