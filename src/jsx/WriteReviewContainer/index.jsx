import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

import { ModalContext } from '../Layout';
import NavBar from '../NavBar';
import ReviewEdit from '../ReviewEdit';
import Footer from '../Footer';

const WriteReviewContainer = () => {
  const [info, setInfo] = useState({});
  const { productId } = useParams();
  const history = useHistory();
  const { alertModal } = useContext(ModalContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, status } = await axios.get(
          `/auth/writereview/${productId}`,
        );
        if (status === 200) {
          setInfo(data);
        }
      } catch (error) {
        const {
          response: { status, data },
        } = error;
        if (status === 400) {
          if (data === '로그인 하지 않았습니다') {
            alertModal(data, () => {
              history.push('/');
            });
          } else if (data === '예약이 존재하지 않습니다') {
            alertModal(data, () => {
              history.push('/myreservation');
            });
          } else if (data === '예약 작성기간이 아닙니다') {
            alertModal(data, () => {
              history.push('/myreservation');
            });
          }
        }
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (info.description) {
      document.title = `${info.description} 리뷰 남기기`;
    }
  }, [info]);

  return Object.keys(info).length ? (
    <div className="WriteReviewContainer">
      <NavBar name={info.description} />
      <ReviewEdit id={info.reservationInfoId} />
      <Footer />
    </div>
  ) : (
    ''
  );
};

export default WriteReviewContainer;
