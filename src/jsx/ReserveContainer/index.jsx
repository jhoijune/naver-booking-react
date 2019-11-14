import React, { useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useParams } from 'react-router-dom';

import ReserveForm from '../ReserveForm';
import ReserveDesc from '../ReserveDesc';
import MainImage from '../MainImage';

const ReserveContainer = () => {
  const { displayInfoId } = useParams();
  let productData;
  let reservationDate;
  let startDate;
  let endDate;
  let imageSrc;

  useEffect(async () => {
    productData = (await axios.get(`/api/products/${displayInfoId}`)).data;
  }, []);

  useEffect(() => {
    const diffDays = { reserve: Math.floor(Math.random() * 5 + 1) };
    diffDays.start = diffDays.reserve - Math.floor(Math.random() * 5 + 1);
    diffDays.end = diffDays.reserve + Math.floor(Math.random() * 5 + 1);
    reservationDate = moment()
      .tz('Asia/Seoul')
      .add(diffDays.reserve, 'days')
      .format('YYYY.MM.DD HH:mm:ss');
    startDate = moment()
      .tz('Asia/Seoul')
      .add(diffDays.start, 'days')
      .format('YYYY.MM.DD.(ddd)');
    endDate = moment()
      .tz('Asia/Seoul')
      .add(diffDays.end, 'days')
      .format('YYYY.MM.DD.(ddd)');
  }, []);

  useEffect(() => {
    productData.productImages.some((value) => {
      if (value.type === 'ma') {
        imageSrc = value.saveFileName;
        return true;
      }
      return false;
    });
  }, []);

  return (
    <div className="ReserveContainer">
      <MainImage src={imageSrc} alt="main image" />
      <ReserveDesc
        description={productData.displayInfo.productDescription}
        place={productData.displayInfo.placeLot}
        startDate={startDate}
        endDate={endDate}
        productPrices={productData.productPrices}
      />
      <ReserveForm
        productPrices={productData.productPrices}
        displayInfoId={displayInfoId}
        productId={productData.displayInfo.productId}
        reservationDate={reservationDate}
      />
    </div>
  );
};

export default ReserveContainer;
