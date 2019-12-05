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
    [...reviews].reverse().some((review, index) => {
      if (isBrief && index >= 5) {
        return true;
      }
      let revisionImageSrc = '';
      if (review.commentImages.length) {
        revisionImageSrc = review.commentImages[0].saveFileName;
        revisionImageSrc = revisionImageSrc.slice(0, 4).includes('blob')
          ? revisionImageSrc
          : `/${revisionImageSrc}`;
      }
      reviewsComp.push(
        <Review
          key={review.commentId}
          review={review.comment}
          imageSrc={revisionImageSrc}
          score={review.score}
          email={review.reservationEmail}
          date={review.reservationDate}
          editComment={editComment(review.reservationInfoId)}
          confirmDelete={confirmDelete(review.reservationInfoId)}
        />,
      );
    });
    return reviewsComp;
  };

  return (
    <div className="ReviewList">
      {isModifiable ? (
        <ReviewEdit
          id={id}
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
    id: PropTypes.number,
    score: PropTypes.string,
    comment: PropTypes.string,
    imageSrc: PropTypes.string,
  }).isRequired,
};

export default ReviewList;
