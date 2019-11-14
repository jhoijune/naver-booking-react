import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const TicketHead = (props) => {
  const { children, isGreen } = props;
  return (
    <div className={`TicketHead ${isGreen ? 'green' : 'grey'}`}>
      <div className="ticketLeft" />
      <div className="ticketMiddle">
        <span>
          <i className="spr_book2 ico_check2" />
          {children}
        </span>
      </div>
      <div className="ticketRight" />
    </div>
  );
};

TicketHead.propTypes = {
  children: PropTypes.node.isRequired,
  isGreen: PropTypes.bool.isRequired,
};

export default TicketHead;
