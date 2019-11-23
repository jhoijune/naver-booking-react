import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const ImageTitle = (props) => {
  const { degree, imageLen, title, leftScroll, rightScroll } = props;
  return (
    <section className="ImageTitle">
      <div className="top">
        <span className="counting">
          <span className="bright">{degree + 1}</span>
          {` / ${imageLen}`}
        </span>
      </div>
      <div className="middle">
        <div className="left">
          {imageLen > 1 ? (
            <i className="fn fn-backward2" onClick={leftScroll} />
          ) : (
            ''
          )}
        </div>
        <div className="center">
          <h1>{title}</h1>
        </div>
        <div className="right">
          {imageLen > 1 ? (
            <i className="fn fn-forward2" onClick={rightScroll} />
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="bottom" />
    </section>
  );
};

ImageTitle.propTypes = {
  degree: PropTypes.number.isRequired,
  imageLen: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  leftScroll: PropTypes.func,
  rightScroll: PropTypes.func,
};

export default ImageTitle;
