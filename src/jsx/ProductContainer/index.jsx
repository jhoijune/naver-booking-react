import React from 'react';
import PropTypes from 'prop-types';

const ProductContainer = (props) => {
  const { className } = props;
  return <div className={className}>{children}</div>;
};

export default ProductContainer;
