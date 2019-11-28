import React from 'react';
import PropTypes from 'prop-types';

import TicketHead from '../TicketHead';
import TicketInfoList from '../TicketInfoList';

const Ticket = (props) => {
  const { infos, text, actions, isGreen } = props;
  return (
    <article className="Ticket">
      <TicketHead text={text} isGreen={isGreen} />
      <TicketInfoList infos={infos} actions={actions} />
    </article>
  );
};

Ticket.defaultProps = {
  isGreen: false,
  actions: [],
};

Ticket.propTypes = {
  infos: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
  actions: PropTypes.array,
  isGreen: PropTypes.bool,
};

export default Ticket;
