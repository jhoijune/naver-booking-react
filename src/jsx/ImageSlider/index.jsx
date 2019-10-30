import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.css';

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
          if (value.productImageUrl) {
            return (
              <li key={index}>
                <Link to={`detail?productId=${value.productId}`}>
                  <img src={value.productImageUrl} alt="promotionImage"/>
                </Link>
              </li>
            )
          }
          return (
            <li key={index}>
              <img src={value.saveFileName} alt="itemImage"/>
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
  images: PropTypes.array.isRequired,
  imageWidth: PropTypes.number.isRequired,
  isPromotion: PropTypes.bool.isRequired,
}

export default ImageSlider;
