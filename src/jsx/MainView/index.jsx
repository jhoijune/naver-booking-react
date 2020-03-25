import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import ProductContainer from '../ProductContainer';

const MainView = ({ products }) => {
  const leftProducts = products.filter((v, index) => index % 2 === 0);
  const rightProducts = products.filter((v, index) => index % 2 === 1);

  return products.length ? (
    <div className="MainView">
      <ProductContainer className="left">{leftProducts}</ProductContainer>
      <ProductContainer className="right">{rightProducts}</ProductContainer>
    </div>
  ) : (
    <div className="MainView" />
  );
};

MainView.defaultProps = {
  products: [],
};

MainView.propTypes = {
  products: PropTypes.arrayOf(PropTypes.element),
};

export default MainView;
