import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import Ticket from '../Ticket';

const ReservationBreakdown = (props) => {
  const { state, dispatch } = props;
  return (
    <div className="ReservationBreakdown">
      <Ticket
        infos={state.toUsed}
        dispatch={dispatch}
        name="예약 확정"
        actionType={['cancel']}
        isGreen
      />
      <Ticket
        infos={state.used}
        dispatch={dispatch}
        actionType={['writeReview']}
        name="이용 완료"
      />
      <Ticket infos={state.canceled} dispatch={dispatch} name="취소된 예약" />
    </div>
  );
};

ReservationBreakdown.propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};
