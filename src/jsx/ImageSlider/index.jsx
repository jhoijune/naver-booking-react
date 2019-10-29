import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ImageSlider = (props) => {
  return (
    <section className="ImageSlider">
    <div className="container">
      <ul 
      ref={imageList}
      style={
        {transform: `translateX(-${imageWidth * degree})`, transitionDuration: `${scrollDuration}s`}
      }>
      {
        images.map((value,index) => {
          <li key={index}>
            <Link to={`detail?productID=${value.productID}`}>
            <img src={value.prodcutImageUrl} alt=""/>
            </Link>
          </li>
        });
      }
      </ul>
    </div>
  </section>
  );
};

ImageSlider.propTypes = {
  isAuto: PropTypes.bool.isRequired,
};

export default ImageSlider;
