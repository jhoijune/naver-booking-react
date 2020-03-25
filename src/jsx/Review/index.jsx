import React, { useRef, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { ModalContext } from '../Layout';
import './style.css';

const Review = ({
  comment,
  imageSrc,
  score,
  email,
  date,
  editComment,
  confirmDelete,
}) => {
  const [imgStyle, setImgStyle] = useState({});
  const { imageModal } = useContext(ModalContext);
  const reviewRef = useRef(null);

  const handleClick = () => {
    imageModal(imageSrc);
  };

  useEffect(() => {
    if (imageSrc) {
      const paragraph = reviewRef.current.querySelector('.top .left p');
      const topHeight = paragraph.offsetHeight;
      setImgStyle({
        display: 'inline',
        height: `${topHeight}px`,
      });
    }
  }, [imageSrc]);

  return (
    <article className="Review" ref={reviewRef}>
      <div className="top">
        <div className="left">
          <p>{comment}</p>
        </div>
        <div className="right">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt="reviewImage"
              style={imgStyle}
              onClick={handleClick}
            />
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="score">{score}</span>
          <span className="email">{email}</span>
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
  comment: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  editComment: PropTypes.func.isRequired,
  confirmDelete: PropTypes.func.isRequired,
};

export default Review;
