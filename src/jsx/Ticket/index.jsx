import React from 'react';
import PropTypes from 'prop-types';

import TicketHead from '../TicketHead';
import TicketInfoList from '../TicketInfoList';

const Ticket = (props) => {
  const { infos, children, actions, isGreen } = props;
  return (
    <article className="Ticket">
      <TicketHead isGreen={isGreen}>{children}</TicketHead>
      <TicketInfoList infos={infos} actions={actions} />
    </article>
  );
};

Ticket.defaultProps = {
  isGreen: false,
};

Ticket.propTypes = {
  infos: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
  actions: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  isGreen: PropTypes.bool,
};

export default Ticket;
