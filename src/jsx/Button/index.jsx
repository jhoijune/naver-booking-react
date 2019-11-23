import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.css';

const Button = (props) => {
  const { style, click, children } = props;
  const createStyle = () => {
    return {
      color: '#000',
      backgroundColor: '#f4f4f4',
      ...style,
    };
  };

  return typeof click === 'function' ? (
    <button className="Button" onClick={click} style={createStyle()}>
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
