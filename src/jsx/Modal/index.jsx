import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Modal = (props) => {
  const { text, children } = props;
  return (
    <div className="Modal">
      <h1>{text}</h1>
      {children}
    </div>
  );
};

Modal.propTypes = {
  text: PropTypes.string.isRequired,
  childern: PropTypes.object,
};

export default Modal;
