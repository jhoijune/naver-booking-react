import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.css';
import MainImage from '../MainImage';

const ImageSlider = React.forwardRef(
  (
    {
      degree,
      transitionTime,
      images,
      imageWidth,
      isPromotion,
      handleTransitionEnd,
      handleMouseOver,
      handleMouseOut,
    },
    ref,
  ) => (
    <section
      className={`ImageSlider ${isPromotion ? 'promotion' : 'detail'}`}
      onTransitionEnd={handleTransitionEnd}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
      <ul
        ref={ref}
        style={{
          transform: `translateX(-${imageWidth * degree}px)`,
          transitionDuration: `${transitionTime}s`,
        }}>
        {images.map((value, index) => {
          if (value && isPromotion) {
            return (
              <li key={index}>
                <Link to={`detail/${value.displayInfoId}`}>
                  <MainImage src={value.saveFileName} alt="promotionImage" />
                </Link>
              </li>
            );
          }
          if (value) {
            return (
              <li key={index}>
                <MainImage src={`/${value.saveFileName}`} alt="itemImage" />
              </li>
            );
          }
        })}
      </ul>
    </section>
  ),
);

ImageSlider.defaultProps = {
  handleTransitionEnd: () => {},
  handleMouseOver: () => {},
  handleMouseOut: () => {},
};

ImageSlider.propTypes = {
  degree: PropTypes.number.isRequired,
  transitionTime: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      saveFileName: PropTypes.string.isRequired,
      displayInfoId: PropTypes.number,
    }),
  ).isRequired,
  imageWidth: PropTypes.number.isRequired,
  isPromotion: PropTypes.bool.isRequired,
  handleTransitionEnd: PropTypes.func,
  handleMouseOver: PropTypes.func,
  handleMouseOut: PropTypes.func,
};

export default ImageSlider;
