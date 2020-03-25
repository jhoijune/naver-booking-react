import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import TicketInput from '../TicketInput';

const TicketInputList = ({ productPrices, tickets, dispatch }) => (
  <article className="TicketInputList">
    {productPrices.map((value, index) => {
      return (
        <TicketInput
          key={index}
          productPrice={value}
          count={tickets[index]}
          dispatch={dispatch}
          where={index}
        />
      );
    })}
  </article>
);

TicketInputList.propTypes = {
  productPrices: PropTypes.arrayOf(
    PropTypes.shape({
      priceTypeName: PropTypes.string,
      price: PropTypes.number,
      discountRate: PropTypes.string,
    }),
  ).isRequired,
  tickets: PropTypes.arrayOf(PropTypes.number).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default TicketInputList;
