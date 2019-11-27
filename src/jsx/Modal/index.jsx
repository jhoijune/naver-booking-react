import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Modal = (props) => {
  const { children } = props;
  return (
    <div className="Modal">
      <div className="modalContent">{children}</div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
