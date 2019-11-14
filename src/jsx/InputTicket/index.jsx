import React from 'react';
import PropTypes from 'prop-types';
import { transformMoneyUnit, priceTypeMapper } from '../../js/common';

import './style.css';

const InputTicket = (props) => {
  const { productPrices, tickets, dispatch } = props;
  return (
    <article className="InputTicket">
      {productPrices.map((value, index) => {
        return (
          <div className="eachTicket">
            <div className="leftContainer">
              <h2>
                {priceTypeMapper(value.priceTypeName)}
                <br />
                {`${transformMoneyUnit(value.price)} 원`}
              </h2>
              {(() => {
                if (Number(value.discountRate) > Number.EPSILON) {
                  const originalCost =
                    Math.round(
                      value.price /
                        (1 - Number(value.discountRate) / 100) /
                        100,
                    ) * 100;
                  return (
                    <p>
                      {`${transformMoneyUnit(originalCost)}원 (${Math.round(
                        Number(value.discountRate),
                      )}% 할인가)`}
                    </p>
                  );
                }
              })()}
            </div>
            <div className="rightContainer">
              <div className="adjustTicket">
                <button
                  className={`spr_Book2 ico_minus3 ${
                    tickets[index] ? '' : 'disabled'
                  }`}
                  onClick={() => {
                    dispatch({ type: 'DECREMENT', where: index });
                    dispatch({ type: 'VERIFY_SUBMIT' });
                  }}
                />
                <input
                  type="number"
                  name={`resrvationTicket${index + 1}`}
                  clssName={tickets[index] ? '' : 'disabled'}
                  min="0"
                  value={tickets[index]}
                  readOnly
                />
                <button
                  className="spr_book2 ico_plus3"
                  onClick={() => {
                    dispatch({ type: 'INCREMENT', where: index });
                    dispatch({ type: 'VERIFY_SUBMIT' });
                  }}
                />
              </div>
              <p>{`${transformMoneyUnit(value.price * tickets[index])} 원`}</p>
            </div>
          </div>
        );
      })}
    </article>
  );
};

InputTicket.propTypes = {
  productPrices: PropTypes.arrayOf(
    PropTypes.shape({
      priceTypeName: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      discountRate: PropTypes.string.isRequired,
    }),
  ).isRequired,
  tickets: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default InputTicket;
