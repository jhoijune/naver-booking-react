import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import ImageSlider from '../ImageSlider';
import ImageTitle from '../ImageTitle';

const ImageController = (props) => {
  const {
    degree,
    transitionTime,
    images,
    resizeEnd,
    title,
    leftScroll,
    rightScroll,
  } = props;
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

  return title ? (
    <div>
      <ImageSlider
        ref={imageList}
        degree={degree}
        transitionTime={transitionTime}
        images={images}
        imageWidth={imageWidth}
        isPromotion={false}
      />
      <ImageTitle
        degree={degree}
        imageLen={images.length}
        title={title}
        leftScroll={leftScroll}
        rightScroll={rightScroll}
      />
    </div>
  ) : (
    <ImageSlider
      ref={imageList}
      degree={degree}
      transitionTime={transitionTime}
      images={images}
      imageWidth={imageWidth}
      isPromotion
    />
  );
};

ImageController.propTypes = {
  degree: PropTypes.number.isRequired,
  transitionTime: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  resizeEnd: PropTypes.func.isRequired,
  title: PropTypes.string,
  leftScroll: PropTypes.func,
  rightScroll: PropTypes.func,
};

export default ImageController;
