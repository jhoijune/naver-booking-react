import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Footer = props => {
  const { top } = props;
  return (
    <footer className="Footer">
      <div className="container">
        {(isTopNeed => {
          if (isTopNeed) {
            return (
              <a href="#">
                <i className="fn fn-up1" />
                TOP
              </a>
            );
          }
        })(top)}
        <p className="caution">
          네이버(주)는 통신판매의 당사자가 아니며, 상품의정보, 거래조건, 이용 및
          환불 등과 관련한 의무와 책임은 각 회원에게 있습니다.
        </p>
        <span className="copyright">© NAVER Corp.</span>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  top: true,
};

Footer.propTypes = {
  top: PropTypes.bool,
};

export default Footer;
