import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { ModalContext } from '../Layout';
// FIXME: cycle 제거
import Ticket from '../Ticket';
import ReservationCount from '../ReservationCount';

const ActionContext = React.createContext({
  confirmCancelReservation: () => {},
});

const ReservationContainer = () => {
  const [toUsed, setToUsed] = useState([]);
  const [toUsedLen, setToUsedLen] = useState(0);
  const [used, setUsed] = useState([]);
  const [usedLen, setUsedLen] = useState(0);
  const [canceled, setCanceled] = useState([]);
  const [canceledLen, setCanceledLen] = useState(0);
  const { alertModal, confirmModal } = useContext(ModalContext);
  const history = useHistory();

  useEffect(() => {
    document.title = '예약 확인';
    const fetchData = async () => {
      try {
        const { data } = await axios.get('/api/reservations');
        setToUsed(data.toUsed);
        setToUsedLen(data.toUsed.length);
        setUsed(data.used);
        setUsedLen(data.used.length);
        setCanceled(data.canceled);
        setCanceledLen(data.canceled.length);
      } catch (error) {
        const {
          response: { status },
        } = error;
        if (status === 400) {
          history.push('/');
        }
      }
    };
    fetchData();
  }, []);

  const cancelReservation = async (id) => {
    try {
      const { status } = await axios.put(`/api/reservations/${id}`);
      if (status === 201) {
        const modifiedToUsed = [...toUsed];
        const modifiedCanceled = [...canceled];
        const toDeleteIndex = modifiedToUsed.findIndex(
          (value) => value.reservationInfoId === id,
        );
        const [canceledItem] = modifiedToUsed.splice(toDeleteIndex, 1);
        const toInsertIndex = modifiedCanceled.findIndex(
          (value) => value.reservationInfoId > id,
        );
        if (toInsertIndex === -1) {
          modifiedCanceled.push(canceledItem);
        } else {
          modifiedCanceled.splice(toInsertIndex, 0, canceledItem);
        }
        setToUsed(modifiedToUsed);
        setToUsedLen(toUsedLen - 1);
        setCanceled(modifiedCanceled);
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
        <Ticket text="예약 확정" infos={toUsed} actions={['cancel']} isGreen />
        <Ticket text="이용 완료" infos={used} actions={['writeReview']} />
        <Ticket text="취소된 예약" infos={canceled} />
      </div>
    </ActionContext.Provider>
  );
};

export default ReservationContainer;
export { ActionContext };

/*
ReservationContainer → ReservationCount
                                          → Ticket → TicketHead
                                                            → TicketInfoList → TicketInfo
*/
