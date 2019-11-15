import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const TabUI = (props) => {
  const { labels, selected, handleClick } = props;

  return (
    <nav className="TabUI">
      <ul>
        {labels.map((label, index) => {
          return (
            <li
              key={index}
              className={index === selected ? 'selected' : 'unselected'}
              onClick={handleClick(index)}
            >
              {label}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

TabUI.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
  selected: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default TabUI;
