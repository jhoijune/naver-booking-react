import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Review = (props) => {
  const {
    review,
    image,
    score,
    email,
    date,
    editComment,
    confirmDelete,
  } = props;
  // 이미지 보정

  return (
    <article className="Review">
      <div className="top">
        <div className="left">
          <p>{review}</p>
          <div className="right">
            {image ? <img src={image} alt="reviewImage" /> : ''}
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="score">{score}</span>
          <span className="email">{`${email.slice(0, 4)}****`}</span>
          <span className="visitDate">{`${date.slice(0, 10)} 방문`}</span>
        </div>
        <div className="right">
          <span className="edit" onClick={editComment}>
            수정
          </span>
          <span className="delete" onClick={confirmDelete}>
            삭제
          </span>
        </div>
      </div>
    </article>
  );
};

Review.propTypes = {
  review: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  editComment: PropTypes.func.isRequired,
  confirmDelete: PropTypes.func.isRequired,
};

export default Review;
