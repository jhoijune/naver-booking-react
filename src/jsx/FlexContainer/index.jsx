import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const FlexContainer = (props) => {
  const { style, children } = props;
  return (
    <div className="FlexContainer" style={style}>
      {children}
    </div>
  );
};

FlexContainer.defaultProps = {
  style: {},
  children: '',
};

FlexContainer.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
};

export default FlexContainer;
