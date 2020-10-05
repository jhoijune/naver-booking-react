import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { priceTypeMapper } from '../../js/common';
import DetailImage from '../DetailImage';
import ProductDesc from '../ProductDesc';
import EventInfo from '../EventInfo';
import Button from '../Button';
import FlexContainer from '../FlexContainer';
import ReviewContainer from '../ReviewContainer';
import ProductInfo from '../ProductInfo';

const DetailContainer = () => {
  const [productData, setProductData] = useState({});
  const [discountInfo, setDiscountInfo] = useState([]);
  const { displayInfoId } = useParams();

  useEffect(() => {
    if (productData.displayInfo) {
      document.title = productData.displayInfo.productDescription;
    }
  }, [productData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/products/${displayInfoId}`, {
          headers: { 'X-Requested-With': 'XMLHttpRequest' },
        });
        const modifiedImages = data.productImages.filter(
          (value) => value.type !== 'th',
        );
        const comments = data.comments.map((value) => {
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
        setProductData({ ...data, comments, productImages: modifiedImages });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (productData.productPrices) {
      const info = [];
      productData.productPrices.forEach((value) => {
        if (value.discountRate && Number(value.discountRate) > Number.EPSILON) {
          info.push(
            `${priceTypeMapper(value.priceTypeName)} ${Math.round(
              value.discountRate,
            )}%`,
          );
        }
      });
      setDiscountInfo(info);
    }
  }, [productData]);

  return (
    <>
      <DetailImage
        images={productData.productImages}
        title={
          productData.displayInfo && productData.displayInfo.productDescription
        }
      />
      <ProductDesc
        text={productData.displayInfo && productData.displayInfo.productContent}
      />
      {discountInfo.length ? <EventInfo discountInfo={discountInfo} /> : ''}
      <FlexContainer>
        <Button
          style={{
            color: '#fff',
            backgroundColor: '#1ec800',
            borderTop: 'none',
          }}
          click={`/reserve/${displayInfoId}`}>
          <span>
            <i className="fn fn-nbooking-calender2" />
            {' 예매하기'}
          </span>
        </Button>
      </FlexContainer>
      <ReviewContainer
        displayInfoId={displayInfoId}
        reviews={productData.comments}
        averageScore={productData.averageScore}
      />
      <ProductInfo
        displayInfo={productData.displayInfo}
        locationImgSrc={
          productData.displayInfoImage &&
          productData.displayInfoImage.saveFileName
        }
      />
    </>
  );
};

export default DetailContainer;
