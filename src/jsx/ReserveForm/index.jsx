import React, { useEffect, useReducer, useContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import cookie from 'cookie';

import './style.css';
import { ModalContext } from '../Layout';
import TicketInputList from '../TicketInputList';
import ReserverInfo from '../ReserverInfo';
import TOS from '../TOS';
import FlexContainer from '../FlexContainer';
import Button from '../Button';

const initialState = {
  tickets: [],
  name: '',
  telephone: '',
  email: '',
  isVerifiedName: false,
  isVerifiedTel: false,
  isVerifiedEmail: false,
  isTOSChecked: false,
  submit: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT_TICKET': {
      const tickets = Array(action.length).fill(0);
      return { ...state, tickets };
    }
    case 'DECREMENT': {
      const modified = { ...state };
      if (modified.tickets[action.where] > 0) {
        modified.tickets[action.where] -= 1;
      }
      return modified;
    }
    case 'INCREMENT': {
      const modified = { ...state };
      modified.tickets[action.where] += 1;
      return modified;
    }
    case 'CHANGE_NAME':
      return { ...state, name: action.value };
    case 'CHANGE_TEL':
      return { ...state, telephone: action.value };
    case 'CHANGE_EMAIL':
      return { ...state, email: action.value };
    case 'CHANGE_TOS':
      return { ...state, isTOSChecked: action.checked };
    case 'VERIFY_NAME': {
      const { name } = state;
      if (name.length === 0) {
        return { ...state, isVerifiedName: false };
      }
      if (/\s/.test(name)) {
        return { ...state, isVerifiedName: false };
      }
      return { ...state, isVerifiedName: true };
    }
    case 'VERIFY_TEL': {
      const { telephone } = state;
      if (telephone.length === 0) {
        return { ...state, isVerifiedTel: false };
      }
      const telRe = /0\d{2}-[1-9]\d{2,3}-\d{4}/;
      if (telRe.test(telephone)) {
        return { ...state, isVerifiedTel: true };
      }
      return { ...state, isVerifiedTel: false };
    }
    case 'VERIFY_EMAIL': {
      const { email } = state;
      if (email.length === 0) {
        return { ...state, isVerifiedEmail: false };
      }
      const emailRe = /[a-zA-Z]\w{2,}@[a-zA-Z]{3,}\.[a-zA-Z]{2,}/;
      if (emailRe.test(email)) {
        return { ...state, isVerifiedEmail: true };
      }
      return { ...state, isVerifiedEmail: false };
    }
    case 'VERIFY_SUBMIT': {
      const {
        tickets,
        isVerifiedName,
        isVerifiedTel,
        isVerifiedEmail,
        isTOSChecked,
      } = state;
      if (
        tickets.some((value) => value > 0) &&
        isVerifiedName &&
        isVerifiedTel &&
        isVerifiedEmail &&
        isTOSChecked
      ) {
        return { ...state, submit: true };
      }
      return { ...state, submit: false };
    }
    default:
      throw new Error('');
  }
};

const ReserveForm = ({
  productPrices,
  displayInfoId,
  productId,
  reservationDate,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { alertModal, confirmModal } = useContext(ModalContext);
  const history = useHistory();

  useEffect(() => {
    const parsed = cookie.parse(document.cookie);
    dispatch({ type: 'CHANGE_NAME', value: parsed.reservationName || '' });
    dispatch({ type: 'VERIFY_NAME' });
    dispatch({ type: 'CHANGE_TEL', value: parsed.reservationTel || '' });
    dispatch({ type: 'VERIFY_TEL' });
    dispatch({ type: 'CHANGE_EMAIL', value: parsed.reservationEmail || '' });
    dispatch({ type: 'VERIFY_EMAIL' });
  }, []);

  useEffect(() => {
    dispatch({ type: 'INIT_TICKET', length: productPrices.length });
  }, [productPrices]);

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
          count: state.tickets[index],
          productPriceId: productPrices[index].productPriceID,
        });
      }
      const { status } = await axios.post(
        '/api/reservations',
        reservationInfo,
        { headers: { 'X-Requested-With': 'XMLHttpRequest' } },
      );
      if (status === 201) {
        alertModal('예매가 성공적으로 승인되었습니다', () => {
          history.push(`/detail/${displayInfoId}`);
        });
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
      <form>
        <TicketInputList
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
            0,
          )}
          dispatch={dispatch}
          isVerifiedName={state.isVerifiedName}
          isVerifiedTel={state.isVerifiedTel}
          isVerifiedEmail={state.isVerifiedEmail}
        />
        <TOS isChecked={state.isTOSChecked} dispatch={dispatch} />
        <FlexContainer
          style={{
            padding: '0 10px 10px 10px',
          }}>
          <Button
            style={{
              backgroundColor: state.submit ? '#1EC900' : '#D1D1D1',
              fontSize: '16px',
              fontFamily: 'Nanum Gothic Bold',
              color: '#fff',
              transition: 'background-color 1s',
            }}
            click={confirmSubmit}>
            <span>
              <i
                className="spr_book ico_naver_s"
                style={{ verticalAlign: 'middle' }}
              />
              {' 예약하기'}
            </span>
          </Button>
        </FlexContainer>
      </form>
    </section>
  );
};

ReserveForm.defaultProps = {
  productPrices: [],
  productId: 0,
  reservationDate: '',
};

ReserveForm.propTypes = {
  productPrices: PropTypes.array,
  displayInfoId: PropTypes.string.isRequired,
  productId: PropTypes.number,
  reservationDate: PropTypes.string,
};

export default ReserveForm;
