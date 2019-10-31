import React, { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

import { ModalContext } from '../Layout';
import ReservationBreakdown from '../ReservationBreakdown';
import ReservationCount from '../ReservationCount';

const initialState = {
  toUsed: [],
  toUsedLen: 0,
  used: [],
  usedLen: 0,
  canceled: [],
  canceledLen: 0,
};

const reservationReducer = (state, action) => {
  switch (action.type) {
    case 'initialiaztion':
      return {
        toUsed: action.data.toUsed,
        toUsedLen: action.data.toUsed.length,
        used: action.data.used,
        usedLen: action.data.used.length,
        canceled: action.data.canceled.length,
        canceledLen: action.data.canceled.length,
      };
    case 'confirmCancel':
      return;
    case 'cancel':
      axios.put(`/api/reservations/${id}`).then(({ status }) => {
        if (status === 400) {
          alert('잘못된 요청입니다'); // 모달로
        } else if (status === 201) {
          alert('예약이 취소되었습니다'); // 모달로 확인 버튼누르면 작동하게 비동기로
          const { toUsed, canceled } = state; // 오류나면 배열 복사해야 됨
          const toDeleteIndex = toUsed.findIndex(
            (value) => value.reservationInfoId === action.id,
          );
          const canceledItem = toUsed.splice(toDeleteIndex, 1);
          const toInsertIndex = canceled.findIndex(
            (value) => value.reservationInfoId > action.id,
          );
          if (toInsertIndex === -1) {
            canceled.push(canceledItem);
          } else {
            canceled.splice(toInsertIndex, 0, canceledItem);
          }
          return {
            toUsedLen: state.toUsedLen - 1,
            canceledLen: state.canceledLen + 1,
            toUsed,
            canceled,
          };
        }
      });
    default:
      throw new Error('Undefined action was used');
  }
};

const ReservationContainer = (props) => {
  const { emailId } = props;
  const [state, dispatch] = useReducer(reservationReducer, initialState);
  /*
  const [toUsed, setToUsed] = useState([]);
  const [toUsedLen, setToUsedLen] = useState(0);
  const [used, setUsed] = useState([]);
  const [usedLen, setUsedLen] = useState(0);
  const [canceled, setCanceled] = useState([]);
  const [canceledLen, setCanceledLen] = useState(0);
  */

  useEffect(async () => {
    try {
      const { data } = await axios.get(`/api/reservations/${emailId}`);
      dispatch({ type: 'initialization', data });
    } catch (error) {
      console.error(error);
    }
  }, []);
  const { toUsedLen, usedLen, canceledLen } = state;
  return (
    <div className="ReservationContainer">
      <ReservationCount
        toUsedLen={toUsedLen}
        usedLen={usedLen}
        canceledLen={canceledLen}
      />
      <ReservationBreakdown state={state} dispatch={dispatch} />
    </div>
  );
};

ReservationContainer.propTypes = {
  emailId: PropTypes.number.isRequired,
};

export default ReservationContainer;

/*
ReservationContainer → ReservationCount
                                          → ReservationBreakdown → Ticket → TicketHead
                                                                                                              → TicketInfoList → TicketInfo
*/
