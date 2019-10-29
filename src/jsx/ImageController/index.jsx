import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const ImageController = (props) => {
  const { duration,setDegree,resizeEnd } = props; 
  const imageList = useRef(null);
  const [imageWidth, setImageWidth] = useState(0);

  const getImageWidth = () => {
    resizeEnd(() => {
      setImageWidth(imageList.current.firstElementChild.clientWidth);
    });
  };

  useEffect(() => {
    setImageWidth(imageList.current.firstElementChild.clientWidth);
    window.addEventListener('resize', getImageWidth);
    return window.removeEventListener('resize', getImageWidth);
  }, []);

  return isAuto ? (
    <ImageSlider />
  ) : (
    <div>
      <ImageSlider />
      <ImageTitle presentLocation= {degree} imageCount={} title={} leftScroll={leftScroll} rightScroll={rightScroll} />
    </div>
  );
};

ImageController.propTypes = {
  duration: PropTypes.number.isRequired,
};

export default ImageController;
