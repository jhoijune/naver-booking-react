import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const MainImage = (props) => {
  const { src, alt } = props;
  return <img className="MainImage" src={src} alt={alt} />;
};

MainImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default MainImage;
