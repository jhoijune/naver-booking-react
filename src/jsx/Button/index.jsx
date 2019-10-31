import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.css';

const Button = (props) => {
  const { fontColor, backgroundColor, click, text } = props;
  return typeof click === 'function' ? (
    <button
      className="Button"
      onClick={click}
      style={{ backgroundColor, color: fontColor }}
    >
      {text}
    </button>
  ) : (
    <Link
      className="Button"
      to={click}
      style={{ backgroundColor, color: fontColor }}
    >
      {text}
    </Link>
  );
};

Button.defaultProps = {
  fontColor: '#000',
  backgroundColor: '#f4f4f4',
};

Button.propTypes = {
  fontColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  click: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  text: PropTypes.string.isRequired,
};

/*
 * 네이버 배경 초록색: #1ec800 글자색 #fff;
 */
