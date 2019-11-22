import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const TabView = React.forwardRef((props, ref) => {
  const { views, style } = props;
  return (
    <section ref={ref} className="TabView">
      <ul style={style}>
        {views.map((view, index) => {
          return <li key={index}>{view}</li>;
        })}
      </ul>
    </section>
  );
});

TabView.propTypes = {
  views: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
  style: PropTypes.shape({
    transform: PropTypes.string,
    height: PropTypes.string,
  }).isRequired,
};

export default TabView;
