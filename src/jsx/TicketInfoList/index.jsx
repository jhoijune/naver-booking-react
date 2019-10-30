import React from 'react';
import PropTypes from 'prop-types';

import TicketInfo from '../TicketInfo';

const TicketInfoList = (props) => {
  const { infos, dispatch, actionType } = props;
  return (
    <ol className="TicketInfoList">
      {infos.map((value, index) => {
        return (
          <TicketInfo
            key={index}
            info={value}
            dispatch={dispatch}
            actionType={actionType}
          />
        );
      })}
    </ol>
  );
};

TicketInfoList.propTypes = {
  infos: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  actionType: PropTypes.array,
};

export default TicketInfoList;
