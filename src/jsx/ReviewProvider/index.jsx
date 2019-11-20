import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import ReviewContainer from '../ReviewContainer';

const ReviewProvider = () => {
  const { displayInfoId } = useParams();
  let productData;

  useEffect(async () => {
    try {
      productData = (await axios.get(`/api/products/${displayInfoId}`)).data;
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <ReviewContainer
      displayInfoId={displayInfoId}
      averageScore={productData.averageScore}
      reviews={productData.comments}
      isBrief={false}
    />
  );
};

export default ReviewProvider;
