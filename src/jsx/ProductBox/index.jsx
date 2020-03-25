import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import './style.css';

const ProductBox = ({
  itemInfo: {
    displayInfoId,
    productImageUrl,
    productDescription,
    placeName,
    productContent,
  },
  textLimit,
}) => {
  const [isFold, setIsFold] = useState(true);
  const [isIconShowing, setIsIconShowing] = useState(false);
  const detailText = useRef(null);

  let textObj;
  let trimmedText = productContent.trim();
  trimmedText = trimmedText.replace('\n', '');
  if (trimmedText.length > textLimit) {
    const textSimple = trimmedText.slice(0, textLimit);
    const textDetail = trimmedText.slice(textLimit);
    textObj = { simple: textSimple, detail: textDetail };
  } else {
    textObj = { simple: trimmedText, detail: '' };
  }

  const showAndHide = (event) => {
    event.preventDefault();
    if (isFold) {
      setIsFold(false);
      $(detailText.current).slideDown(100);
    } else {
      setIsFold(true);
      $(detailText.current).slideUp(100);
    }
  };

  return (
    <article className="ProductBox">
      <Link to={`/detail/${displayInfoId}`}>
        <div
          className="photo"
          style={{
            backgroundImage: `url("/${productImageUrl}")`,
          }}
        />
        <div className="head">
          <h1>{productDescription}</h1>
          <h2>{placeName}</h2>
        </div>
        <div
          className="mainText"
          onMouseOver={() => {
            setIsIconShowing(true);
          }}
          onMouseOut={() => {
            setIsIconShowing(false);
          }}>
          {textObj.detail ? (
            <div>
              <p>
                {textObj.simple}
                <span
                  className="dots"
                  style={{ display: isFold ? 'inline' : 'none' }}>
                  ...
                </span>
                <span
                  className="moreDesc"
                  ref={detailText}
                  style={{ display: 'none' }}>
                  {textObj.detail}
                </span>
              </p>
              <div className="helping">
                <i
                  className={`fn ${isFold ? 'fn-dots2' : 'fn-up2'}`}
                  onClick={showAndHide}
                  style={{
                    color: isIconShowing ? '#000' : 'transparent',
                  }}
                />
              </div>
            </div>
          ) : (
            <p>{textObj.simple}</p>
          )}
        </div>
      </Link>
    </article>
  );
};

ProductBox.defaultProps = {
  textLimit: 100,
};

ProductBox.propTypes = {
  itemInfo: PropTypes.shape({
    displayInfoId: PropTypes.number.isRequired,
    productImageUrl: PropTypes.string.isRequired,
    productDescription: PropTypes.string.isRequired,
    placeName: PropTypes.string.isRequired,
    productContent: PropTypes.string.isRequired,
  }).isRequired,
  textLimit: PropTypes.number,
};

export default ProductBox;
