import React, { useState, useEffect } from 'react';

import './style.css';
import { clearInterval } from 'timers';

const Footer = () => {
  const [isRiseable, setIsRiseable] = useState(false);

  useEffect(() => {
    const changeRiseable = setInterval(() => {
      if (document.body.scrollHeight > window.innerHeight) {
        setIsRiseable(true);
      } else {
        setIsRiseable(false);
      }
    }, 1000);
    return () => clearInterval(changeRiseable);
  }, []);

  return (
    <footer className="Footer">
      {isRiseable ? (
        <a href="#">
          <i className="fn fn-up1" />
          {' TOP'}
        </a>
      ) : (
        ''
      )}
      <p className="caution">
        네이버(주)는 통신판매의 당사자가 아니며, 상품의정보, 거래조건, 이용 및
        환불 등과 관련한 의무와 책임은 각 회원에게 있습니다.
      </p>
      <span className="copyright">© NAVER Corp.</span>
    </footer>
  );
};

export default Footer;
