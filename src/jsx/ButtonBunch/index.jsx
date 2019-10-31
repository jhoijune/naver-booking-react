import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import Button from '../Button';

const applyStyle = (style) => {
  if (typeof style === 'number') {
    return `${style}px`;
  }
  if (toString.call(style) === '[object Array]' && style.length === 1) {
    const [all] = style;
    return `${all}px`;
  }
  if (toString.call(style) === '[object Array]' && style.length === 2) {
    const [vertical, horizontal] = style;
    return `${vertical}px ${horizontal}px`;
  }
  if (toString.call(style) === '[object Array]' && style.length === 4) {
    const [top, right, down, left] = style;
    return `${top}px ${right}px ${down}px ${left}px`;
  }
  return '0';
};

const ButtonBunch = (props) => {
  const { notes, margin, padding } = props;
  return (
    <div
      className="ButtonBunch"
      style={{ margin: applyStyle(margin), padding: applyStyle(padding) }}
    >
      {notes.map((value, index) => {
        return (
          <Button
            key={index}
            fontColor={value.fontColor}
            backgroundColor={value.backgroundColor}
            click={value.click}
            text={value.text}
          />
        );
      })}
    </div>
  );
};

ButtonBunch.defaultProps = {
  margin: 0,
  padding: 0,
};

ButtonBunch.propTypes = {
  notes: PropTypes.array.isRequired,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
};

export default ButtonBunch;
