import React from 'react';
import PropTypes from 'prop-types';
import { priceTypeMapper } from '../../js/common';

import './style.css';

const EventInfo = (props) => {
  const { productPrices } = props;

  const showDiscountInfo = () => {
    const discountInfo = [];
    productPrices.forEach((value) => {
      if (Number(value.discountRate) > Number.EPSILON) {
        discountInfo.push(
          `${priceTypeMapper(value.priceTypeName)} ${Math.round(
            value.discountRate,
          )}%`,
        );
      }
    });
    if (discountInfo.length === 0) {
    } else {
      const discountText = `${discountInfo.join(', ')} 할인`;
      return (
        <p>
          [네이버예약 특별할인]
          <br />
          {discountText}
        </p>
      );
    }
  };

  return (
    <section className="EventInfo">
      <h2>
        <i className="spr_book ico_evt" />
        이벤트정보
      </h2>
      {showDiscountInfo()}
    </section>
  );
};

EventInfo.propTypes = {
  productPrices: PropTypes.arrayOf(
    PropTypes.shape({
      discountRate: PropTypes.string.isRequired,
      priceTypeName: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default EventInfo;
