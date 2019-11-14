import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { priceTypeMapper, transformMoneyUnit } from '../../js/common';

import './style.css';
import { ActionContext } from '../ReservationContainer';
import ButtonBunch from '../ButtonBunch';

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
    actions,
  } = props;
  const { confirmCancelReservation } = useContext(ActionContext);
  const reservationSummary = priceInfo
    .reduce((accum, current) => {
      `${accum}    ${priceTypeMapper[current.priceTypeName]} ${
        current.count
      } 매,`;
    }, '')
    .slice(0, -1);

  const createButton = (actions) => {
    const notes = actions.map((value) => {
      if (value === 'cancel') {
        return { click: confirmCancelReservation(productId), children: '취소' };
      }
      if (value === 'reviewWrite') {
        return {
          click: `/reviewwrite/${productId}`,
          children: '예매자 리뷰 남기기',
        };
      }
    });
    return <ButtonBunch notes={notes} />;
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
      {createButton(actions)}
    </li>
  );
};

TicketInfo.propTypes = {
  info: PropTypes.shape({
    reservationInfoId: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    reservationDate: PropTypes.string.isRequired,
    reservationName: PropTypes.string.isRequired,
    reservationTel: PropTypes.string.isRequired,
    placeName: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
    productId: PropTypes.number.isRequired,
    priceInfo: PropTypes.shape({
      priceTypeName: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    }),
  }).isRequired,
  actions: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default TicketInfo;
