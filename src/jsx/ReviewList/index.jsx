import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import Review from '../Review';
import ReviewEdit from '../ReviewEdit';

const ReviewList = (props) => {
  const {
    reviews,
    isBrief,
    isModifiable,
    editComment,
    confirmDelete,
    confirmEdit,
    confirmCancel,
    exData: { id, score, comment, imageSrc },
  } = props;

  const showReviews = () => {
    const reviewsComp = [];
    [...reviews].reverse().some((value, index) => {
      if (isBrief && index >= 5) {
        return true;
      }
      reviewsComp.push(
        <Review
          key={value.commentId}
          review={value.comment}
          image={
            value.commentImages.length
              ? value.commentImages[0].saveFileName
              : ''
          }
          score={value.score}
          email={value.reservationEmail}
          date={value.reservationDate}
          editComment={editComment(value.commentId)}
          confirmDelete={confirmDelete(value.commentId)}
        />,
      );
    });
    return reviewsComp;
  };

  return (
    <div className="ReviewList">
      {isModifiable ? (
        <ReviewEdit
          commentId={id}
          exScore={score}
          exComment={comment}
          exImageSrc={imageSrc}
          isPost={false}
          confirmEdit={confirmEdit(id)}
          confirmCancel={confirmCancel}
        />
      ) : (
        showReviews()
      )}
    </div>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      commentId: PropTypes.number,
      comment: PropTypes.string,
      score: PropTypes.string,
      email: PropTypes.string,
      date: PropTypes.string,
      commentImages: PropTypes.arrayOf(
        PropTypes.shape({
          saveFileName: PropTypes.string,
        }),
      ),
    }),
  ).isRequired,
  isBrief: PropTypes.bool.isRequired,
  isModifiable: PropTypes.bool.isRequired,
  editComment: PropTypes.func.isRequired,
  confirmDelete: PropTypes.func.isRequired,
  confirmEdit: PropTypes.func.isRequired,
  confirmCancel: PropTypes.func.isRequired,
  exData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    score: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewList;
