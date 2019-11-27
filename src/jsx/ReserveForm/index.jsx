// button 부분 buttonbunch로
import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './style.css';
import { ModalContext } from '../Layout';
import InputTicket from '../InputTicket';
import ReserverInfo from '../ReserverInfo';
import TOS from '../TOS';

const initialState = (length) => {
  return {
    tickets: Array(length).fill(0),
    name: '',
    telephone: '',
    email: '',
    isVerifiedName: false,
    isVerifiedTel: false,
    isVerifiedEmail: false,
    isTOSChecked: false,
    submit: false,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'DECREMENT':
      const modifiedDec = { ...state };
      modifiedDec.tickets[action.where] = modifiedDec.tickets[action.where] - 1;
      return modifiedDec;
    case 'INCREMENT':
      const modifiedInc = { ...state };
      modifiedInc.tickets[action.where] = modifiedInc.tickets[action.where] + 1;
      return modifiedInc;
    case 'CHANGE_NAME':
      return { ...state, name: action.value };
    case 'CHANGE_TEL':
      return { ...state, telephone: action.value };
    case 'CHANGE_EMAIL':
      return { ...state, email: action.value };
    case 'CHANGE_TOS':
      return { ...state, isTOSChecked: action.checked };
    case 'VERIFY_NAME':
      const { name } = state;
      if (name.length === 0) {
        return { ...state, isVerifiedName: false };
      }
      if (/\s/.test(name)) {
        return { ...state, isVerifiedName: false };
      }
      return { ...state, isVerifiedName: true };
    case 'VERIFY_TEL':
      const { telephone } = state;
      if (telephone.length === 0) {
        return { ...state, isVerifiedTel: false };
      }
      const telRe = /0\d{2}-[1-9]\d{2,3}-\d{4}/;
      if (telRe.test(telephone)) {
        return { ...state, isVerifiedTel: true };
      }
      return { ...state, isVerifiedTel: false };
    case 'VERIFY_EMAIL':
      const { email } = state;
      if (email.length === 0) {
        return { ...state, isVerifiedEmail: false };
      }
      const emailRe = /[a-zA-Z]\w{2,}@[a-zA-Z]{3,}\.[a-zA-Z]{2,}/;
      if (emailRe.test(email)) {
        return { ...state, isVerifiedEmail: true };
      }
      return { ...state, isVerifiedEmail: false };
    case 'VERIFY_SUBMIT':
      const {
        tickets,
        isVerifiedName,
        isVerifiedTel,
        isVerifiedEmail,
        isTOSChecked,
      } = state;
      if (
        tickets.some((value) => {
          value > 0;
        }) &&
        isVerifiedName &&
        isVerifiedTel &&
        isVerifiedEmail &&
        isTOSChecked
      ) {
        return { ...state, submit: true };
      }
      return { ...state, submit: false };

    default:
      throw new Error('');
  }
};

const ReserveForm = (props) => {
  const { productPrices, displayInfoId, productId, reservationDate } = props;
  const [state, dispatch] = useReducer(
    reducer,
    initialState(productPrices.length),
  );
  const { alertModal, confirmModal } = useContext(ModalContext);
  const history = useHistory();

  const handleSubmit = async () => {
    try {
      const reservationInfo = {
        displayInfoId,
        productId,
        prices: [],
        reservationEmail: state.email,
        reservationName: state.name,
        reservationTelephone: state.telephone,
        reservationYearMonthDay: reservationDate,
      };
      for (let index = 0, len = productPrices.length; index < len; index++) {
        reservationInfo.prices.push({
          count: Number(state.tickets[index]),
          productPriceId: productPrices[index].productPriceID,
        });
      }
      const { status } = await axios.post('/api/reservations', reservationInfo);
      if (status === 201) {
        alertModal('예매가 성공적으로 승인되었습니다');
        history.push(`/detail/${displayInfoId}`);
      }
    } catch (error) {
      const {
        response: { data, status },
      } = error;
      if (status === 400) {
        alertModal(data);
      }
    }
  };

  const confirmSubmit = (event) => {
    event.preventDefault();
    if (state.submit) {
      confirmModal('예약하시겠습니까?', handleSubmit);
    } else {
      alertModal('예약 양식이 충족되지 않았습니다');
    }
  };

  return (
    <section className="ReserveForm">
      <form action="/api/reservations" method="post">
        <InputTicket
          productPrices={productPrices}
          tickets={state.tickets}
          dispatch={dispatch}
        />
        <ReserverInfo
          name={state.name}
          telephone={state.telephone}
          email={state.email}
          reservationDate={reservationDate.split(' ')[0]}
          totalTicket={state.tickets.reduce(
            (accum, current) => accum + current,
          )}
          dispatch={dispatch}
          isVerifiedName={state.isVerifiedName}
          isVerifiedTel={state.isVerifiedTel}
          isVerifiedEmail={state.isVerifiedEmail}
        />
        <TOS isChecked={state.TOS} dispatch={dispatch} />
        <button
          type="submit"
          style={{
            backgroundColor: state.submit ? '#1EC900' : '#D1D1D1',
          }}
          onClick={confirmSubmit}
        >
          <i className="spr_book ico_naver_s" />
          예약하기
        </button>
      </form>
    </section>
  );
};

ReserveForm.defaultProps = {
  productPrices: [],
  productId: 0,
};

ReserveForm.propTypes = {
  productPrices: PropTypes.array,
  displayInfoId: PropTypes.number.isRequred,
  productId: PropTypes.number,
  reservationDate: PropTypes.string.isRequired,
};

export default ReserveForm;
