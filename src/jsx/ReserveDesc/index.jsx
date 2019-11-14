import React from 'react';
import PropTypes from 'prop-types';
import { priceTypeMapper, transformMoneyUnit } from '../../js/common';

import './style.css';

const ReserveDesc = (props) => {
  const { description, place, startDate, endDate, productPrices } = props;

  const priceText = () => {
    const priceList = productPrices.map((value) => {
      return `${priceTypeMapper(value.priceTypeName)} ${transformMoneyUnit(
        value.price,
      )}원`;
    });
    return priceList.join(' / ');
  };

  return (
    <section className="ReserveDesc">
      <h2>{description}</h2>
      <p>
        {place}
        <br />
        {`${startDate} ~ ${endDate}`}
      </p>
      <h2>요금</h2>
      <p>{priceText()}</p>
    </section>
  );
};

ReserveDesc.propTypes = {
  description: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  productPrices: PropTypes.arrayOf(
    PropTypes.shape({
      priceTypeName: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ReserveDesc;
