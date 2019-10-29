import React from 'react';
import PropTypes from 'prop-types';

const ImageTitle = (props) => {
  const { presentLocation, imageCount, title, leftScroll, rightScroll } = props;
  return (
    <section className="ImageTitle">
      <div className="container">
        <div className="topSection">
          <span className="counting">
            <span className="bright">{presentLocation}</span>
            {` / ${imageCount}`}
          </span>
        </div>
        <div className="middleSection">
          <div className="leftSection">
            {imageCount > 1 ? (
              <i className="fn fn-backward2" onClick={leftScroll} />
            ) : (
              ''
            )}
          </div>
          <div className="centerSection">
            <h1>{title}</h1>
          </div>
          <div className="rightSection">
            {imageCount > 1 ? (
              <i className="fn fn-forward2" onClick={rightScroll} />
            ) : (
              ''
            )}
          </div>
        </div>
        <div className="bottomSection" />
      </div>
    </section>
  );
};

ImageTitle.propTypes = {
  presentLocation: PropTypes.number.isRequired,
  imageCount: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  leftScroll: PropTypes.func.isRequired,
  rightScroll: PropTypes.func.isRequired,
};

export default ImageTitle;