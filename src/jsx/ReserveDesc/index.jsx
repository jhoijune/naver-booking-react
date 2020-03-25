import React from 'react';
import PropTypes from 'prop-types';
import { priceTypeMapper, transformMoneyUnit } from '../../js/common';

import './style.css';

const convertPriceText = (prices) => {
  const priceList = prices.map((value) => {
    return `${priceTypeMapper(value.priceTypeName)} ${transformMoneyUnit(
      value.price,
    )}원`;
  });
  return priceList.join(' / ');
};

const ReserveDesc = ({
  description,
  place,
  startDate,
  endDate,
  productPrices,
}) => (
  <section className="ReserveDesc">
    <div className="descriptionText">
      <h2>{description}</h2>
      <p>
        {place}
        <br />
        {`${startDate} ~ ${endDate}`}
      </p>
    </div>
    <div className="chargeText">
      <h2>요금</h2>
      <p>{convertPriceText(productPrices)}</p>
    </div>
  </section>
);

ReserveDesc.defaultProps = {
  description: '',
  place: '',
  productPrices: [],
  startDate: '',
  endDate: '',
};

ReserveDesc.propTypes = {
  description: PropTypes.string,
  place: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  productPrices: PropTypes.arrayOf(
    PropTypes.shape({
      priceTypeName: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ),
};

export default ReserveDesc;
