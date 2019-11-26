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
        const { data } = await axios.get(`/api/products/${displayInfoId}`);
        setProductData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (productData.displayInfo) {
      document.title = `리뷰 : ${productData.displayInfo.productDescription}`;
    }
  }, [productData]);

  return (
    <div className="ReviewProvider">
      <NavBar
        name={
          productData.displayInfo && productData.displayInfo.productDescription
        }
      />
      <ReviewContainer
        displayInfoId={displayInfoId}
        averageScore={productData.averageScore}
        reviews={productData.comments}
        isBrief={false}
      />
    </div>
  );
};

export default ReviewProvider;
