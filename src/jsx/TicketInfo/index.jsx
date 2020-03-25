import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { priceTypeMapper, transformMoneyUnit } from '../../js/common';

import './style.css';
import { ActionContext } from '../ReservationContainer';
import FlexContainer from '../FlexContainer';
import Button from '../Button';

const TicketInfo = ({
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
    isCommentExist,
  },
  actions,
}) => {
  const { confirmCancelReservation } = useContext(ActionContext);
  const reservationSummary = priceInfo
    .reduce((accum, current) => {
      return `${accum} ${priceTypeMapper(current.priceTypeName)} ${
        current.count
      } 매,`;
    }, '')
    .slice(0, -1);

  const createButton = (actions) => {
    if (actions.length) {
      const style = {
        fontSize: '16px',
        lineHeight: '20px',
      };
      const notes = [];
      actions.forEach((action) => {
        if (action === 'cancel') {
          notes.push({
            style,
            click: confirmCancelReservation(reservationInfoId),
            children: '취소',
          });
        }
        if (action === 'writeReview' && !isCommentExist) {
          notes.push({
            style,
            click: `/reviewwrite/${productId}`,
            children: '예매자 리뷰 남기기',
          });
        }
      });
      if (notes.length) {
        return (
          <FlexContainer style={{ margin: '0 0 15px 0' }}>
            {notes.map((value, index) => {
              return (
                <Button key={index} style={value.style} click={value.click}>
                  {value.children}
                </Button>
              );
            })}
          </FlexContainer>
        );
      }
      return '';
    }
    return '';
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
    totalPrice: PropTypes.string.isRequired,
    productId: PropTypes.number.isRequired,
    isCommentExist: PropTypes.bool.isRequired,
    priceInfo: PropTypes.arrayOf(
      PropTypes.shape({
        priceTypeName: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
      }).isRequired,
    ).isRequired,
  }),
  actions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TicketInfo;
