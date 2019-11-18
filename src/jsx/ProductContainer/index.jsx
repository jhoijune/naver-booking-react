import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const ProductContainer = (props) => {
  const { className, children } = props;
  return <div className={`ProductContainer ${className}`}>{children}</div>;
};

ProductContainer.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default ProductContainer;
