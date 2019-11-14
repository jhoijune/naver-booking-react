// props 수정

import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import axios from 'axios';

import './style.css';
import ReviewSummary from '../ReviewSummary';
import ReviewList from '../ReviewList';
import { ModalContext } from '../Layout';
import ButtonBunch from '../ButtonBunch';

const ReviewContainer = (props) => {
  // 전체적으로 만들고 다시 검토
  const { isBrief, displayInfoId } = props;
  const [reviews, setReviews] = useState(props.reviews);
  const [averageScore, setAverageScore] = useState(props.averageScore);
  const [isModifiable, setIsModifiable] = useState(false);
  const [exData, setExData] = useState({});
  const { alertModal, confirmModal } = useContext(ModalContext);

  useEffect(() => {
    // reviews가 달라졌을 때 averageScore바꾸는 effect
    const modifiedAverageScore =
      reviews.reduce((accum, current) => {
        accum + Number(current.score);
      }) / reviews.length;
    setAverageScore(modifiedAverageScore);
  }, reviews);

  const displayStar = (score, maxScore = 5) => {
    // averageScore에 맞게 별점을 리턴하는 함수
    const fillCount = Math.floor(score);
    const notFillCount = maxScore - Math.ceil(score);
    const ratioCount = Math.round(score * 10) / 10 - fillCount;
    const stars = [];
    _.times(fillCount, () => {
      stars.push(<i className="fn fn-star2 getStar" />);
    });
    if (ratioCount > Number.EPSILON) {
      const style = {
        ':before': {
          background: `linear-gradient(to Right,#f00 ${Math.round(
            ratioCount * 100,
          )}%,#E6E6E6 ${Math.round((1 - ratioCount) * 100)}%)`,
          content: 'EAA3',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'initial',
        },
      };
      stars.push(<i className="fn fn-star2 ratioStar" style={style} />);
    }
    _.times(notFillCount, () => {
      stars.push(<i className="fn fn-star2 notGetStar" />);
    });
    return <span className="starCount">{stars}</span>;
  };

  const editComment = (commentId) => {
    // 상세정보 창의 리뷰 수정 버튼 눌렀을 때의 행동
    return async () => {
      try {
        const {
          response: { status, statusText },
        } = axios.get(`/auth/edit/comments/${commentId}`);
        if (status === 400) {
          return alertModal(statusText);
        }
        const index = reviews.findIndex((value) => {
          value.commentId === commentId;
        });
        const { score, comment, commentImages } = reviews[index];
        setExData({
          id: commentId,
          score,
          comment,
          imageSrc: commentImages.length ? commentImages[0].saveFileName : '',
        });
        setIsModifiable(true);
      } catch (error) {
        console.error(error);
      }
    };
  };

  const deleteComment = (commentId) => {
    // 상세정보 창의 리뷰 삭제 버튼을 누르고 확인을 눌렀을 시의 행동
    return async () => {
      try {
        const {
          response: { status, statusText },
        } = axios.delete(`/api/reservations/comments/${commentId}`);
        if (status === 400) {
          alertModal(statusText);
        } else if (status === 201) {
          alertModal('리뷰가 삭제되었습니다');
          const modifiedReviews = reviews.filter((value) => {
            value.commentId !== commentId;
          });
          setReviews(modifiedReviews);
        }
      } catch (error) {
        console.error(error);
      }
    };
  };

  const confirmDelete = (commentId) => {
    // 상세정보 창의 리뷰 삭제 버튼을 눌렀을 때의 행동
    confirmModal('리뷰를 삭제하시겠습니까?', deleteComment(commentId));
  };

  const confirmEdit = (id) => {
    // 상세정보 창의 리뷰 수정 버튼을 누르고 수정 버튼을 다시 눌렀을 때의 행동
    return (submit, score, comment, imageSrc) => {
      confirmModal('리뷰를 수정하시겠습니까?', () => {
        const isProcessed = submit();
        if (isProcessed) {
          const index = reviews.findIndex((value) => {
            value.commentId === id;
          });
          const modifiedReviews = [...reviews];
          modifiedReviews[index].comment = comment;
          modifiedReviews[index].score = score;
          if (modifiedReviews[index].commentImages.length) {
            modifiedReviews[index].commentImages[0].saveFileName = imageSrc;
          }
          setReviews(modifiedReviews);
        }
        setExData({});
        setIsModifiable(false);
      });
    };
  };

  const confirmCancel = () => {
    // 상세정보 창의 리뷰 수정 버튼을 누르고 취소를 눌렀을 때의 행동
    confirmModal('리뷰 수정을 취소하시겠습니까?', () => {
      setIsModifiable(false);
    });
  };

  return (
    <section className="CommentContainer">
      <ReviewSummary
        averageScore={averageScore || '0'}
        reviewCount={reviews.length}
        displayStar={displayStar}
      />
      <ReviewList
        reviews={reviews}
        isBrief={isBrief}
        isModifiable={isModifiable}
        exData={exData}
        confirmDelete={confirmDelete}
        confirmCancel={confirmCancel}
        confirmEdit={confirmEdit}
        editComment={editComment}
      />
      <aside>
        <p>
          <i className="fn fn-alarm1" />
          네이버 예약을 통해 실제 방문한 이용자가 남긴 평가입니다.
        </p>
      </aside>
      {isBrief ? (
        <ButtonBunch
          notes={[
            {
              backgroundColor: '#E9ECEF',
              click: `/review/${displayInfoId}`,
              children: (
                <span>
                  예매자 리뷰 더보기
                  <i className="fn fn-forward1" />
                </span>
              ),
            },
          ]}
        />
      ) : (
        ''
      )}
    </section>
  );
};

ReviewContainer.defaultProps = {
  isBrief: true,
};

ReviewContainer.propTypes = {
  displayInfoId: PropTypes.number.isRequired,
  averageScore: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string.isRequired,
      commentId: PropTypes.number.isRequired,
      productId: PropTypes.number.isRequired,
      reservationDate: PropTypes.string.isRequired,
      reservationEmail: PropTypes.string.isRequired,
      reservationInfoId: PropTypes.number.isRequired,
      score: PropTypes.string.isRequired,
      commentImages: PropTypes.arrayOf(
        PropTypes.shape({
          deleteFlag: PropTypes.number.isRequired,
          saveFileName: PropTypes.string.isRequired,
        }).isRequired,
      ),
    }),
  ).isRequired,
  isBrief: PropTypes.bool,
};

export default ReviewContainer;
