import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Modal = (props) => {
  const { children } = props;
  return <div className="Modal">{children}</div>;
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
