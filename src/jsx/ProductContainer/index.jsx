import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const ProductContainer = ({ className, children }) => (
  <div className={`ProductContainer ${className}`}>{children}</div>
);

ProductContainer.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
};

export default ProductContainer;
