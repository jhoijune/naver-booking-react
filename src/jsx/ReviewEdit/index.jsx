import React, { useState, useContext, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';
import { validImageType } from '../../js/common';

import './style.css';
import { ModalContext } from '../Layout';
import ButtonBunch from '../ButtonBunch';

const ReviewEdit = (props) => {
  const {
    id,
    thumbnailWidth,
    exScore,
    exComment,
    exImageSrc,
    isPost,
    confirmEdit,
    confirmCancel,
  } = props;
  const [score, setScore] = useState(exScore);
  const [comment, setComment] = useState(exComment);
  const [imageSrc, setImageSrc] = useState(exImageSrc);
  const [thumbnailStyle, setThumbnailStyle] = useState({});
  const { alertModal, confirmModal } = useContext(ModalContext);
  const form = useRef(null);
  const imageRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if (imageSrc) {
      const imageMeasurement = new Image();
      const revisionSrc = exImageSrc === imageSrc ? `/${imageSrc}` : imageSrc;
      imageMeasurement.src = revisionSrc;
      imageMeasurement.onload = function() {
        const ratio = this.height / this.width;
        setThumbnailStyle({
          display: 'flex',
          width: `${thumbnailWidth}px`,
          height: `${thumbnailWidth * ratio}px`,
          backgroundImage: `url(${revisionSrc})`,
        });
      };
    } else {
      setThumbnailStyle({
        display: 'none',
        backgroundImage: '',
      });
    }
  }, [imageSrc]);

  const handleSubmit = async (event) => {
    // return을 좀 정의해서 submit이 됐는가를 알아야함
    try {
      if (score <= 0 || score > 5) {
        alertModal('별점 개수가 올바르지 않습니다');
        return false;
      }
      if (comment.length < 5 || comment.length > 400) {
        alertModal('리뷰 글자수가 맞지 않습니다.');
        return false;
      }
      if (
        imageRef.current.files.length &&
        !validImageType(imageRef.current.files[0].type)
      ) {
        alertModal('이미지는 jpg,jpeg,png 파일만 가능합니다.');
        return false;
      }
      const formObj = new FormData(form.current);
      if (!isPost && exImageSrc && (!imageSrc || exImageSrc !== imageSrc)) {
        formObj.append('exImageSrc', exImageSrc);
      }
      const { status } = await axios({
        method: isPost ? 'POST' : 'PUT',
        url: `/api/reservations/${id}/comments`,
        data: formObj,
      });
      if (status === 201) {
        if (isPost) {
          alertModal('리뷰가 등록되었습니다', () => {
            history.push('/myreservation');
          });
        } else {
          alertModal('리뷰가 수정되었습니다');
          return true;
        }
      }
    } catch (error) {
      const {
        response: { data, status },
      } = error;
      if (status === 400) {
        alertModal(data);
        return false;
      }
    }
  };

  const modifyRating = (value) => {
    return () => {
      setScore(value);
    };
  };

  const uploadImage = ({ target: { files } }) => {
    const tempImage = files[0];
    if (!validImageType(tempImage.type)) {
      alertModal('이미지는 jpg,jpeg,png 파일만 가능합니다');
      imageRef.current.value = '';
      setImageSrc('');
      return;
    }
    setImageSrc(window.URL.createObjectURL(tempImage));
  };

  const cancelImageUpload = () => {
    imageRef.current.value = '';
    setImageSrc('');
    // newImage= -1;
  };

  return (
    <section className="ReviewEdit">
      <form
        encType="multipart/form-data"
        name="reviewForm"
        ref={form}
        onSubmit={handleSubmit}
      >
        <article className="ratingSection">
          <p>별점과 이용 경험을 남겨주세요.</p>
          <div className="ratingStar">
            {_.range(1, 6).map((value) => {
              return (
                <i
                  key={value}
                  className={`fn fn-star2 ${
                    score >= value ? 'getStar' : 'notGetStar'
                  }`}
                  onClick={modifyRating(value)}
                />
              );
            })}
            <input
              type="number"
              name="score"
              value={score}
              readOnly
              style={{
                color: score > 0 ? '#000' : '#ddd',
              }}
            />
          </div>
        </article>
        <article className="writeComment">
          <textarea
            name="comment"
            rows="15"
            minLength="5"
            maxLength="400"
            value={comment}
            onChange={({ target: { value } }) => {
              setComment(value);
            }}
          />
        </article>
        <article className="postImage">
          <div className="imageLetterCount">
            <input
              type="file"
              name="image"
              id="imageUpload"
              ref={imageRef}
              onChange={uploadImage}
            />
            <label htmlFor="imageUpload">
              <i className="fn fn-image1" />
              {' 사진 추가'}
            </label>
            <p className="commentCount">
              {`${comment.length}/400 (최소 5자 이상)`}
            </p>
          </div>
          <div className="thumbnailImage" style={thumbnailStyle}>
            <i className="fn fn-cross1" onClick={cancelImageUpload} />
          </div>
        </article>
        {isPost ? (
          <ButtonBunch
            notes={[
              {
                style: {
                  backgroundColor: '#1EC800',
                  color: '#fff',
                  fontSize: '17px',
                  fontFamily: 'Nanum Gothic Bold',
                },
                click: () => {
                  confirmModal('리뷰를 등록 하시겠습니까?', handleSubmit);
                },
                children: '리뷰 등록',
              },
            ]}
            padding={10}
          />
        ) : (
          <ButtonBunch
            notes={[
              {
                style: {
                  backgroundColor: '#1EC800',
                  color: '#fff',
                  fontSize: '17px',
                  fontFamily: 'Nanum Gothic Bold',
                },
                click: () => {
                  confirmEdit(handleSubmit, score, comment, imageSrc);
                },
                children: '수정',
              },
              {
                style: {
                  backgroundColor: '#D8DBDE',
                  fontSize: '17px',
                  fontFamily: 'Nanum Gothic Bold',
                },
                click: () => {
                  confirmCancel();
                },
                children: '취소',
              },
            ]}
          />
        )}
      </form>
    </section>
  );
};

ReviewEdit.defaultProps = {
  thumbnailWidth: 200,
  exScore: 0,
  exComment: '',
  exImageSrc: '',
  isPost: true,
};

ReviewEdit.propTypes = {
  id: PropTypes.number,
  thumbnailWidth: PropTypes.number,
  exScore: PropTypes.string,
  exComment: PropTypes.string,
  exImageSrc: PropTypes.string,
  isPost: PropTypes.bool,
  confirmEdit: PropTypes.func,
  confirmCancel: PropTypes.func,
};

export default ReviewEdit;
