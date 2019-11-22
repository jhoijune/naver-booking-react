import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const TotalCount = (props) => {
  const { productCount } = props;
  return (
    <article className="TotalCount">
      <p>
        바로 예매 가능한 행사가
        <strong>{` ${productCount}개 `}</strong>
        있습니다
      </p>
    </article>
  );
};

TotalCount.propTypes = {
  productCount: PropTypes.number.isRequired,
};

export default TotalCount;
