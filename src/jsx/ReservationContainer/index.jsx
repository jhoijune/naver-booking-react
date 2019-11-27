import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { ModalContext } from '../Layout';
// FIXME: cycle 제거
import Ticket from '../Ticket';
import ReservationCount from '../ReservationCount';

const ActionContext = React.createContext({
  confirmCancelReservation: () => {},
});

const ReservationContainer = (props) => {
  const { emailId } = props;
  const [toUsed, setToUsed] = useState([]);
  const [toUsedLen, setToUsedLen] = useState(0);
  const [canceled, setCanceled] = useState([]);
  const [canceledLen, setCanceledLen] = useState(0);
  const { alertModal, confirmModal } = useContext(ModalContext);
  let used;
  let usedLen;

  useEffect(async () => {
    try {
      const { data } = await axios.get(`/api/reservations/${emailId}`);
      setToUsed(data.toUsed);
      setToUsedLen(data.toUsed.length);
      setCanceled(data.canceled);
      setCanceledLen(data.canceled.length);
      used = data.used;
      usedLen = data.used.length;
    } catch (error) {
      console.error(error);
    }
  }, []);

  const cancelReservation = async (id) => {
    try {
      const { status } = await axios.put(`/api/reservations/${id}`);
      if (status === 201) {
        // 오류나면 배열 복사해야함
        const toDeleteIndex = toUsed.findIndex(
          (value) => value.reservationInfoId === id,
        );
        const canceledItem = toUsed.splice(toDeleteIndex, 1);
        const toInsertIndex = canceled.findIndex(
          (value) => value.reservationInfoId > id,
        );
        if (toInsertIndex === -1) {
          canceled.push(canceledItem);
        } else {
          canceled.splice(toInsertIndex, 0, canceledItem);
        }
        setToUsed(toUsed);
        setToUsedLen(toUsedLen - 1);
        setCanceled(canceled);
        setCanceledLen(canceledLen + 1);
        alertModal('예약이 취소되었습니다');
      }
    } catch (error) {
      const {
        response: { data, status },
      } = error;
      if (status === 400) {
        alertModal('잘못된 요청입니다');
      }
    }
  };

  const confirmCancelReservation = (id) => {
    return () => {
      confirmModal(
        '한번 취소하시면 다시 되돌릴 수 없습니다. 그래도 하시겠습니까?',
        () => {
          cancelReservation(id);
        },
      );
    };
  };

  return (
    <ActionContext.Provider value={{ confirmCancelReservation }}>
      <div className="ReservationContainer">
        <ReservationCount
          toUsedLen={toUsedLen}
          usedLen={usedLen}
          canceledLen={canceledLen}
        />
        <Ticket infos={toUsed} actions="cancel" isGreen>
          예약 확정
        </Ticket>
        <Ticket infos={used} actions="writeReview">
          이용 완료
        </Ticket>
        <Ticket infos={canceled}>취소된 예약</Ticket>
      </div>
    </ActionContext.Provider>
  );
};

ReservationContainer.propTypes = {
  emailId: PropTypes.number.isRequired,
};

export default ReservationContainer;
export { ActionContext };

/*
ReservationContainer → ReservationCount
                                          → Ticket → TicketHead
                                                            → TicketInfoList → TicketInfo
*/
