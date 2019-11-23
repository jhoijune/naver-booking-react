import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { priceTypeMapper } from '../../js/common';
import DetailImage from '../DetailImage';
import ProductDesc from '../ProductDesc';
import EventInfo from '../EventInfo';
import ButtonBunch from '../ButtonBunch';
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
        const { data } = await axios.get(`/api/products/${displayInfoId}`);
        const modifiedImages = data.productImages.filter(
          (value) => value.type !== 'th',
        );
        setProductData({ ...data, productImages: modifiedImages });
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
    <div className="DetailContainer">
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
      <ButtonBunch
        notes={[
          {
            style: {
              color: '#fff',
              backgroundColor: '#1ec800',
              borderTop: 'none',
            },
            click: `/reserve/${displayInfoId}`,
            children: (
              <span>
                <i className="fn fn-nbooking-calender2" />
                {' 예매하기'}
              </span>
            ),
          },
        ]}
      />
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
    </div>
  );
};

export default DetailContainer;
