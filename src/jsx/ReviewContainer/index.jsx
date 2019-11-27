import React, { useState, useEffect, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import axios from 'axios';

import './style.css';
import ReviewSummary from '../ReviewSummary';
import ReviewList from '../ReviewList';
import { ModalContext } from '../Layout';
import ButtonBunch from '../ButtonBunch';

/*
displayInfoId={displayInfoId}
reviews={productData.comments}
averageScore={productData.averageScore}
*/

const ReviewContainer = (props) => {
  // 전체적으로 만들고 다시 검토
  const {
    isBrief,
    displayInfoId,
    reviews: exReviews,
    averageScore: exAverageScore,
  } = props;
  const [reviews, setReviews] = useState([]);
  const [averageScore, setAverageScore] = useState(0);
  const [isModifiable, setIsModifiable] = useState(false);
  const [exData, setExData] = useState({});
  const { alertModal, confirmModal } = useContext(ModalContext);
  const styleRef = useRef(null);

  useEffect(() => {
    return () => {
      if (styleRef.current) {
        document.head.removeChild(styleRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setReviews(exReviews);
    setAverageScore(exAverageScore || 0);
  }, [exReviews]);

  useEffect(() => {
    // reviews가 달라졌을 때 averageScore바꾸는 effect
    if (reviews.length !== 0) {
      let modifiedAverageScore =
        reviews.reduce((accum, current) => accum + Number(current.score), 0) /
        reviews.length;
      modifiedAverageScore = Math.round(modifiedAverageScore * 10) / 10;
      setAverageScore(modifiedAverageScore);
    }
  }, [reviews]);

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
      if (styleRef.current) {
        styleRef.current.innerText = `.ReviewContainer .ReviewSummary .ratioStar:before { 
          background: linear-gradient(to Right,#f00 ${Math.round(
            ratioCount * 100,
          )}%,#E6E6E6 ${Math.round((1 - ratioCount) * 100)}%);
          -webkit-background-clip: text;
        }`;
      } else {
        styleRef.current = document.createElement('style');
        styleRef.current.innerText = `.ReviewContainer .ReviewSummary .ratioStar:before { 
          background: linear-gradient(to Right,#f00 ${Math.round(
            ratioCount * 100,
          )}%,#E6E6E6 ${Math.round((1 - ratioCount) * 100)}%);
          -webkit-background-clip: text;
        }`;
        document.head.appendChild(styleRef.current);
      }
      stars.push(<i className="fn fn-star2 ratioStar" />);
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
        axios.get(`/auth/edit/comments/${commentId}`);
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
        const {
          response: { data, status },
        } = error;
        if (status === 400) {
          alertModal(data);
        }
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
        if (status === 201) {
          alertModal('리뷰가 삭제되었습니다');
          const modifiedReviews = reviews.filter((value) => {
            value.commentId !== commentId;
          });
          setReviews(modifiedReviews);
        }
      } catch (error) {
        const {
          response: { data, status },
        } = error;
        if (status === 400) {
          alertModal(data);
        }
      }
    };
  };

  const confirmDelete = (commentId) => {
    // 상세정보 창의 리뷰 삭제 버튼을 눌렀을 때의 행동
    return () =>
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
    <section className="ReviewContainer">
      <ReviewSummary
        averageScore={averageScore}
        reviewCount={reviews.length}
        displayStar={displayStar}
      />
      {reviews.length ? (
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
      ) : (
        ''
      )}
      {reviews.length ? (
        <aside>
          <p>
            <i className="fn fn-alarm1" />
            네이버 예약을 통해 실제 방문한 이용자가 남긴 평가입니다.
          </p>
        </aside>
      ) : (
        ''
      )}
      {isBrief && reviews.length > 5 ? (
        <ButtonBunch
          notes={[
            {
              style: {
                color: '#000',
                backgroundColor: '#F3F5F6',
                border: 'none',
                borderTop: '1px solid #c0c0c0',
              },
              click: `/review/${displayInfoId}`,
              children: (
                <span>
                  {'예매자 리뷰 더보기 '}
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
  reviews: [],
  averageScore: '',
};

ReviewContainer.propTypes = {
  displayInfoId: PropTypes.string.isRequired,
  averageScore: PropTypes.string,
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string,
      commentId: PropTypes.number,
      productId: PropTypes.number,
      reservationDate: PropTypes.string,
      reservationEmail: PropTypes.string,
      reservationInfoId: PropTypes.number,
      score: PropTypes.string,
      commentImages: PropTypes.arrayOf(
        PropTypes.shape({
          deleteFlag: PropTypes.number,
          saveFileName: PropTypes.string,
        }),
      ),
    }),
  ),
  isBrief: PropTypes.bool,
};

export default ReviewContainer;
