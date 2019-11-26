import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './style.css';
import TabController from '../TabController';
import ButtonBunch from '../ButtonBunch';

const ProductInfo = (props) => {
  const {
    displayInfo,
    displayInfo: {
      productContent,
      productDescription,
      placeLot,
      placeStreet,
      placeName,
      telephone,
    },
    locationImgSrc,
  } = props;
  const [views, setViews] = useState(Array(2).fill(null));
  const labels = ['상세정보', '오시는길'];

  useEffect(() => {
    if (Object.keys(displayInfo).length !== 0) {
      setViews([
        <article className="productDetail">
          <h2>[소개]</h2>
          <p>{productContent}</p>
          <h2>[공지사항]</h2>
        </article>,
        <article className="directions">
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
        </article>,
      ]);
    }
  }, [displayInfo]);

  return (
    <section className="ProductInfo">
      <TabController labels={labels} views={views} />
    </section>
  );
};

ProductInfo.defaultProps = {
  displayInfo: {},
  locationImgSrc: '',
};

ProductInfo.propTypes = {
  displayInfo: PropTypes.shape({
    productContent: PropTypes.string,
    productDescription: PropTypes.string,
    placeLot: PropTypes.string,
    placeStreet: PropTypes.string,
    placeName: PropTypes.string,
    telephone: PropTypes.string,
  }),
  locationImgSrc: PropTypes.string,
};

export default ProductInfo;
