import React from 'react';
import PropTypes from 'prop-types';

const TabView = (props) => {
  const { views, selected } = props;
  return (
    <div className="TabView">
      {views.find((value, index) => index === selected)}
    </div>
  );
};

TabView.propTypes = {
  views: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
  selected: PropTypes.number.isRequired,
};

export default TabView;
