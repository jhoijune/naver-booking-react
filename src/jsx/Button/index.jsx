import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.css';

const Button = (props) => {
  const { style, click, children } = props;

  return typeof click === 'function' ? (
    <button className="Button" type="button" onClick={click} style={style}>
      {children}
    </button>
  ) : (
    <Link className="Button" to={click} style={style}>
      {children}
    </Link>
  );
};

Button.defaultProps = {
  style: {},
};

Button.propTypes = {
  style: PropTypes.object,
  click: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
/*
 * 네이버 배경 초록색: #1ec800 글자색 #fff;
 */
