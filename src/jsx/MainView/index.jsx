import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import ProductContainer from '../ProductContainer';

const MainView = (props) => {
  const { productCount, products } = props;
  const leftProducts = products.filter((value, index) => index % 2 === 0);
  const rightProducts = products.filter((value, index) => index % 2 === 1);

  const CountText = () => {
    return (
      <article className="totalCount">
        <p>
          바로 예매 가능한 행사가
          <span className="strong">{`${productCount}개`}</span>
          있습니다
        </p>
      </article>
    );
  };

  return (
    // productContainer 좌우로 나누는 로직이 있어야됨
    <div className="MainView">
      {CountText()}
      <ProductContainer className="left">{leftProducts}</ProductContainer>
      <ProductContainer className="right">{rightProducts}</ProductContainer>
    </div>
  );
};

MainView.propTypes = {
  productCount: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default MainView;
