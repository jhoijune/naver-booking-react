import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TabUI from '../TabUI';

const ProductInfo = (props) => {
  const {
    displayInfo: {
      productDescription,
      placeLot,
      placeStreet,
      placeName,
      telephone,
    },
    locationImgSrc,
  } = props;
  const [infoActive, setInfoActive] = useState([true, false]);

  return (
    <section className="ProductInfo">
      <TabUI />
      {infoActive[0] ? (
        <article>
          <h2>[소개]</h2>
          <p>{productContent}</p>
          <h2>[공지사항]</h2>
        </article>
      ) : (
        ''
      )}
      {infoActive[1] ? (
        <article>
          <img src={`/${locationImgSrc}`} alt="location" />
          <h2>{productDescription}</h2>
          <div className="locText">
            <div className="tableRow">
              <p className="icon">
                <i className="fn fn-pin4" />
              </p>
              <p className="text">{placeLot}</p>
            </div>
            <div className="tableRow">
              <p className="icon" />
              <p className="text">
                <span className="greyText">지번</span>
                {placeStreet}
              </p>
            </div>
            <div className="tableRow">
              <p className="icon" />
              <p className="text">
                <span className="greyText">{placeName}</span>
              </p>
            </div>
            <div className="tableRow">
              <p className="icon">
                <i className="fn fn-call2" />
              </p>
              <p className="text">{telephone}</p>
            </div>
            <div className="buttonContainer">
              <button className="findRoad">
                <i className="fn fn-path-find2" />
                길찾기
              </button>
              <button className="navigation">
                <i className="fn fn-car-find2" />
                내비게이션
              </button>
            </div>
          </div>
        </article>
      ) : (
        ''
      )}
    </section>
  );
};

ProductInfo.propTypes = {
  displayInfo: PropTypes.shape({
    productDescription: PropTypes.string.isRequired,
    placeLot: PropTypes.string.isRequired,
    placeStreet: PropTypes.string.isRequired,
    placeName: PropTypes.string.isRequired,
    telephone: PropTypes.string.isRequired,
  }).isRequired,
  locationImgSrc: PropTypes.string.isRequired,
};

export default ProductInfo;
