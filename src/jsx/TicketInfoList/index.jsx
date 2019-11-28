import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import TicketInfo from '../TicketInfo';

const TicketInfoList = (props) => {
  const { infos, actions } = props;
  return (
    <ol className="TicketInfoList">
      {infos.map((value, index) => {
        return <TicketInfo key={index} info={value} actions={actions} />;
      })}
    </ol>
  );
};

TicketInfoList.propTypes = {
  infos: PropTypes.array.isRequired,
  actions: PropTypes.array.isRequired,
};

export default TicketInfoList;
