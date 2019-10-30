import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { priceTypeMapper, transformMoneyUnit } from '../../js/common';

import './style.css';

const TicketInfo = (props) => {
  const {
    info: {
      reservationInfoId,
      description,
      reservationDate,
      reservationName,
      reservationTel,
      priceInfo,
      placeName,
      totalPrice,
      productId,
    },
    dispatch,
    actionType,
  } = props;
  const reservationSummary = priceInfo
    .reduce((accum, current) => {
      `${accum}    ${priceTypeMapper[current.priceTypeName]} ${
        current.count
      } 매,`;
    }, '')
    .slice(0, -1);
  const functionalButton = (dispatch, actionType) => {
    // 안될것 같음
    const componentArr = [];
    actionType.forEach((action) => {
      switch (action) {
        case 'cancel':
          componentArr.push(
            <button
              onClick={() =>
                // 모달로 취소창을 띄워야 함
                dispatch({ type: 'cancel', id: reservationInfoId })}
            >
              취소
            </button>,
          );
          break;
        case 'writeReview':
          componentArr.push(
            <Link to={`reviewwrite/${productId}`}>예매자 리뷰 남기기</Link>,
          );
          break;
        default:
          break;
      }
    });
    return <div>{componentArr.map((component) => component)}</div>;
  };
  return (
    <li className="TicketInfo">
      <div className="topSection">
        <h2>{`No.${String(reservationInfoId).padStart(8, '0')}`}</h2>
        <h1>{description}</h1>
      </div>
      <div className="middleSection">
        <div className="tableRow">
          <p>일정</p>
          <p>{reservationDate}</p>
        </div>
        <div className="tableRow">
          <p>내역</p>
          <div className="tableRow">
            <p>예매자 이름</p>
            <p>{reservationName}</p>
          </div>
          <div className="tableRow">
            <p>예매자 전화번호</p>
            <p>{reservationTel}</p>
          </div>
          <div className="tableRow">
            <p>예매 매수</p>
            <p className="ticket">{reservationSummary}</p>
          </div>
        </div>
        <div className="tableRow">
          <p>장소</p>
          <p>{placeName}</p>
        </div>
      </div>
      <div className="bottomSection">
        <p>결제 금액</p>
        <p>{`${transformMoneyUnit(totalPrice)} 원`}</p>
      </div>
      {functionalButton(dispatch, actionType)}
    </li>
  );
};

TicketInfo.propTypes = {
  info: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  actionType: PropTypes.array,
};

export default TicketInfo;
