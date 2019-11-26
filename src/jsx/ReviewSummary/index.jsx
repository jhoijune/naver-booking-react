import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const ReviewSummary = (props) => {
  const { averageScore, reviewCount, displayStar } = props;
  return (
    <article
      className="ReviewSummary"
      style={{ borderBottom: reviewCount ? '' : 'none' }}
    >
      <h2>예매자 한줄평</h2>
      <div className="summaryContainer">
        <div className="leftContainer">
          {displayStar(averageScore)}
          <span className="averageScore">{averageScore}</span>
          <span className="maxScore">/ 5.0</span>
        </div>
        <div className="rightContainer">
          <span className="commentCount">{`${reviewCount} 건`}</span>
          <span className="enrollText">등록</span>
        </div>
      </div>
    </article>
  );
};

ReviewSummary.propTypes = {
  averageScore: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  displayStar: PropTypes.func.isRequired,
};

export default ReviewSummary;
