import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

import './style.css';

const ReserverInfo = (props) => {
  const {
    name,
    telephone,
    email,
    reservationDate,
    totalTicket,
    dispatch,
    isVerifiedName,
    isVerifiedTel,
    isVerifiedEmail,
  } = props;

  const makeAlert = (id, text) => {
    return (
      <div id={id} className="tableRow" style={{ display: 'none' }}>
        <p />
        <p className="alertMessage">{text}</p>
      </div>
    );
  };
  return (
    <article className="ReserverInfo">
      <div className="reserverHeader">
        <h2>예매자 정보</h2>
        <p>
          <i className="fn fn-check" />
          {' 필수입력'}
        </p>
      </div>
      <div className="tableContainer">
        <div className="tableRow" id="inputReserver">
          <p>
            <i className="fn fn-check" />
            {' 예매자'}
          </p>
          <p>
            <input
              type="text"
              value={name}
              name="reservationName"
              placeholder="홍길동"
              onChange={({ target: { value } }) => {
                dispatch({ type: 'CHANGE_NAME', value });
              }}
              onFocus={() => {
                if ($('#alertWrongName').length) {
                  $('#alertWrongName').hide();
                }
              }}
              onBlur={() => {
                dispatch({ type: 'VERIFY_NAME' });
                dispatch({ type: 'VERIFY_SUBMIT' });
                if ($('#alertWrongName').length) {
                  $('#alertWrongName').slideDown(1000);
                }
              }}
            />
          </p>
        </div>
        {isVerifiedName
          ? ''
          : makeAlert('alertWrongName', '이름에는 공백이 있어서는 안됩니다.')}
        <div className="tableRow" id="inputTel">
          <p>
            <i className="fn fn-check" />
            {' 연락처'}
          </p>
          <p>
            <input
              type="text"
              value={telephone}
              name="reservationTelephone"
              placeholder="010-0000-0000"
              onChange={({ target: { value } }) => {
                dispatch({ type: 'CHANGE_TEL', value });
              }}
              onFocus={() => {
                if ($('#alertWrongTel').length) {
                  $('#alertWrongTel').hide();
                }
              }}
              onBlur={() => {
                dispatch({ type: 'VERIFY_TEL' });
                dispatch({ type: 'VERIFY_SUBMIT' });
                if ($('#alertWrongTel').length) {
                  $('#alertWrongTel').slideDown(1000);
                }
              }}
            />
          </p>
        </div>
        {isVerifiedTel
          ? ''
          : makeAlert('alertWrongTel', '전화번호 형식이 맞지 않습니다')}
        <div className="tableRow" id="inputEmail">
          <p>
            <i className="fn fn-check" />
            {' 이메일'}
          </p>
          <p>
            <input
              type="text"
              value={email}
              name="reservationEmail"
              placeholder="xxxxxx@naver.com"
              onChange={({ target: { value } }) => {
                dispatch({ type: 'CHANGE_EMAIL', value });
              }}
              onFocus={() => {
                if ($('alertWrongEmail').length) {
                  $('#alertWrongEmail').hide();
                }
              }}
              onBlur={() => {
                dispatch({ type: 'VERIFY_EMAIL' });
                dispatch({ type: 'VERIFY_SUBMIT' });
                if ($('#alertWrongEmail').length) {
                  $('#alertWrongEmail').slideDown(1000);
                }
              }}
            />
          </p>
        </div>
        <div className="tableRow" id="overallReservation">
          <p>
            <i className="fn fn-check" style={{ color: 'transparent' }} />
            {' 예매내용'}
          </p>
          <p>{`${reservationDate}, 총 ${totalTicket}매`}</p>
        </div>
        {isVerifiedEmail
          ? ''
          : makeAlert('alertWrongEmail', '이메일 형식이 맞지 않습니다')}
      </div>
    </article>
  );
};

ReserverInfo.propTypes = {
  name: PropTypes.string.isRequired,
  telephone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  reservationDate: PropTypes.string.isRequired,
  totalTicket: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  isVerifiedName: PropTypes.bool.isRequired,
  isVerifiedTel: PropTypes.bool.isRequired,
  isVerifiedEmail: PropTypes.bool.isRequired,
};

export default ReserverInfo;
