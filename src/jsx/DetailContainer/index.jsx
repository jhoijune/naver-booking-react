import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import DetailImage from '../DetailImage';
import ProductDesc from '../ProductDesc';
import EventInfo from '../EventInfo';
import ButtonBunch from '../ButtonBunch';
import ReviewContainer from '../ReviewContainer';
import ProductInfo from '../ProductInfo';

const DetailContainer = () => {
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
    <div>
      <DetailImage
        images={productData.productImages}
        title={productData.displayInfo.productDescription}
      />
      <ProductDesc text={productData.displayInfo.productContent} />
      <EventInfo productPrices={productData.productPrices} />
      <ButtonBunch
        notes={[
          {
            fontColor: '#fff',
            backgroundColor: '#1ec800',
            click: `/reserve/${displayInfoId}`,
            children: '<i class="fn fn-nbooking-calender2"></i> 예매하기',
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
        locationImgSrc={productData.displayInfoImage.saveFileName}
      />
    </div>
  );
};

export default DetailContainer;
