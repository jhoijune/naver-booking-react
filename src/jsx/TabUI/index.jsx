import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const TabUI = React.forwardRef((props, ref) => {
  const { labels, selected, handleClick, indicatorStyle } = props;

  return (
    <nav className="TabUI">
      <ul ref={ref}>
        <div className="indicator" style={indicatorStyle} />
        {labels.map((label, index) => {
          return (
            <li
              key={index}
              className={index === selected ? 'active' : ''}
              onClick={handleClick(index)}
            >
              {label}
            </li>
          );
        })}
      </ul>
    </nav>
  );
});

TabUI.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
  selected: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  indicatorStyle: PropTypes.shape({
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }).isRequired,
};

export default TabUI;
