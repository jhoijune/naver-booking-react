import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const TicketHead = ({ text, isGreen }) => (
  <div className={`TicketHead ${isGreen ? 'green' : 'grey'}`}>
    <div className="ticketLeft" />
    <div className="ticketMiddle">
      <span>
        <i className="spr_book2 ico_check2" />
        {` ${text}`}
      </span>
    </div>
    <div className="ticketRight" />
  </div>
);

TicketHead.propTypes = {
  text: PropTypes.string.isRequired,
  isGreen: PropTypes.bool.isRequired,
};

export default TicketHead;
