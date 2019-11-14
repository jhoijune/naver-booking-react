import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.css';
import MainImage from '../MainImage';

const ImageSlider = React.forwardRef((props,ref) => {
  const {degree,transitionTime,images,imageWidth,isPromotion} = props;
  return (
    <section className="ImageSlider">
    <div className={`container ${isPromotion ? 'promotion' : 'detail'}`}>
      <ul 
      ref={ref}
      style={{transform: `translateX(-${imageWidth * degree}px)`, transitionDuration: `${transitionTime}s`}}>
      {
        images.map((value,index) => {
          if (isPromotion) {
            return (
              <li key={index}>
                <Link to={`detail?productId=${value.productId}`}>
                  <MainImage src={value.saveFileName} alt="promotionImage"/>
                </Link>
              </li>
            )
          }
          return (
            <li key={index}>
              <MainImage src={value.saveFileName} alt="itemImage"/>
            </li>
          )
        });
      }
      </ul>
    </div>
  </section>
  );
}); 

ImageSlider.propTypes = {
  degree: PropTypes.number.isRequired,
  transitionTime: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    saveFileName: PropTypes.string.isRequired,
    productId: PropTypes.number,
  })).isRequired,
  imageWidth: PropTypes.number.isRequired,
  isPromotion: PropTypes.bool.isRequired,
}

export default ImageSlider;
