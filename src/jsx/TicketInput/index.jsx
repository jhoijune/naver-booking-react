import React from 'react';
import PropTypes from 'prop-types';

import { transformMoneyUnit, priceTypeMapper } from '../../js/common';
import './style.css';

const TicketInput = ({
  productPrice: { priceTypeName, price, discountRate },
  count,
  dispatch,
  where,
}) => (
  <div className="TicketInput">
    <div className="left">
      <h2>
        {priceTypeMapper(priceTypeName)}
        <br />
        {`${transformMoneyUnit(price)} 원`}
      </h2>
      {(() => {
        if (Number(discountRate) > Number.EPSILON) {
          const originalCost =
            Math.round(price / (1 - Number(discountRate) / 100) / 100) * 100;
          return (
            <p>
              {`${transformMoneyUnit(originalCost)}원 (${Math.round(
                Number(discountRate),
              )}% 할인가)`}
            </p>
          );
        }
      })()}
    </div>
    <div className="right">
      <div className="adjustTicket">
        <button
          className={`spr_book2 ico_minus3 ${count ? '' : 'disabled'}`}
          type="button"
          onClick={() => {
            dispatch({ type: 'DECREMENT', where });
            dispatch({ type: 'VERIFY_SUBMIT' });
          }}
        />
        <span className={`count ${count ? '' : 'disabled'}`}>{count}</span>
        <button
          className="spr_book2 ico_plus3"
          type="button"
          onClick={() => {
            dispatch({ type: 'INCREMENT', where });
            dispatch({ type: 'VERIFY_SUBMIT' });
          }}
        />
      </div>
      <p>{`${transformMoneyUnit(price * count)} 원`}</p>
    </div>
  </div>
);

TicketInput.defaultProps = {
  count: 0,
};

TicketInput.propTypes = {
  productPrice: PropTypes.shape({
    priceTypeName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discountRate: PropTypes.string.isRequired,
  }).isRequired,
  count: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
  where: PropTypes.number.isRequired,
};

export default TicketInput;
