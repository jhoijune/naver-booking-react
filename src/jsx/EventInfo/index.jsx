import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const EventInfo = (props) => {
  const { discountInfo } = props;

  return (
    <section className="EventInfo">
      <h2>
        <i className="spr_book ico_evt" />
        {' 이벤트정보'}
      </h2>
      <p>
        [네이버예약 특별할인]
        <br />
        {`${discountInfo.join(', ')} 할인`}
      </p>
    </section>
  );
};

EventInfo.propTypes = {
  discountInfo: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default EventInfo;
