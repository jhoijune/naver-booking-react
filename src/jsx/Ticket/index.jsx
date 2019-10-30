import React from 'react';
import PropTypes from 'prop-types';

import TicketHead from '../TicketHead';
import TicketInfo from '../TicketInfoList';

const Ticket = (props) => {
  const { infos, dispatch, name, actionType, isGreen } = props;
  return (
    <article className="Ticket">
      <TicketHead name={name} isGreen={isGreen} />
      <TicketInfoList
        infos={infos}
        dispatch={dispatch}
        actionType={actionType}
      />
    </article>
  );
};

Ticket.defaultProps = {
  isGreen: false,
};

Ticket.propTypes = {
  infos: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  actionType: PropTypes.array,
  isGreen: PropTypes.bool,
};

export default Ticket;
