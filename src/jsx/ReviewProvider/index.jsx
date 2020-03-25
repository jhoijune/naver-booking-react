import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import NavBar from '../NavBar';
import ReviewContainer from '../ReviewContainer';

const ReviewProvider = () => {
  const { displayInfoId } = useParams();
  const [productData, setProductData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: {
            displayInfo: { productDescription },
            averageScore,
            comments: rawComments,
          },
        } = await axios.get(`/api/products/${displayInfoId}`, {
          headers: { 'X-Requested-With': 'XMLHttpRequest' },
        });
        const comments = rawComments.map((value) => {
          return {
            score: value.score,
            comment: value.comment,
            commentId: value.commentId,
            commentImages: value.commentImages,
            date: value.reservationDate,
            email: `${value.reservationEmail.slice(0, 4)}****`,
            reservationInfoId: value.reservationInfoId,
          };
        });
        setProductData({
          productDescription,
          averageScore,
          comments,
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (productData.productDescription) {
      document.title = `리뷰 : ${productData.productDescription}`;
    }
  }, [productData]);

  return (
    <>
      <NavBar name={productData.productDescription} />
      <ReviewContainer
        displayInfoId={displayInfoId}
        averageScore={productData.averageScore}
        reviews={productData.comments}
        isBrief={false}
      />
    </>
  );
};

export default ReviewProvider;
