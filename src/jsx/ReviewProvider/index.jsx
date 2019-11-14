import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import ReviewContainer from '../ReviewContainer';

const ReviewProvider = () => {
  const { displayInfoId } = useParams();
  let productData;

  useEffect(async () => {
    productData = (await axios.get(`/api/products/${displayInfoId}`)).data;
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
