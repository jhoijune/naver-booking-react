import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const TicketHead = (props) => {
  const { name, isGreen } = props;
  return (
    <div className={`TicketHead ${isGreen ? 'green' : 'grey'}`}>
      <div className="ticketLeft" />
      <div className="ticketMiddle">
        <span>
          <i className="spr_book2 ico_check2" />
          {name}
        </span>
      </div>
      <div className="ticketRight" />
    </div>
  );
};

TicketHead.propTypes = {
  name: PropTypes.string.isRequired,
  isGreen: PropTypes.bool.isRequired,
};

export default TicketHead;