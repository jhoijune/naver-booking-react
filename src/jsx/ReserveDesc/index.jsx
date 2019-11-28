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
        <p>{priceText()}</p>
      </div>
    </section>
  );
};

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
