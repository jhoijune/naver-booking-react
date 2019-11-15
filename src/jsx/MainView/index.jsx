import React from 'react';
import PropTypes from 'prop-types';

import ProductContainer from '../ProductContainer';

const MainView = (props) => {
  const { itemCount, left, right } = props;

  const CountText = () => {
    return (
      <article className="totalCount">
        <p>
          바로 예매 가능한 행사가
          <span className="strong">{`${itemCount}개`}</span>
          있습니다
        </p>
      </article>
    );
  };

  return (
    <div className="MainView">
      {CountText()}
      <ProductContainer />
      <ProductContainer />
    </div>
  );
};

export default MainView;
