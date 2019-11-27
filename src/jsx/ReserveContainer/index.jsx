import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment-timezone';
import { useParams } from 'react-router-dom';

import NavBar from '../NavBar';
import ReserveForm from '../ReserveForm';
import ReserveDesc from '../ReserveDesc';
import MainImage from '../MainImage';

const ReserveContainer = () => {
  const { displayInfoId } = useParams();
  const [productData, setProductData] = useState({});
  const [imageSrc, setImageSrc] = useState('');

  const diffDays = { reserve: Math.floor(Math.random() * 5 + 1) };
  diffDays.start = diffDays.reserve - Math.floor(Math.random() * 5 + 1);
  diffDays.end = diffDays.reserve + Math.floor(Math.random() * 5 + 1);
  const reservationDate = moment()
    .tz('Asia/Seoul')
    .add(diffDays.reserve, 'days')
    .format('YYYY.MM.DD HH:mm:ss');
  const startDate = moment()
    .tz('Asia/Seoul')
    .add(diffDays.start, 'days')
    .format('YYYY.MM.DD.(ddd)');
  const endDate = moment()
    .tz('Asia/Seoul')
    .add(diffDays.end, 'days')
    .format('YYYY.MM.DD.(ddd)');

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
    if (productData.productImages) {
      productData.productImages.some((value) => {
        if (value.type === 'ma') {
          setImageSrc(value.saveFileName);
          return true;
        }
        return false;
      });
    }
  }, [productData]);

  return (
    <div className="ReserveContainer">
      <NavBar
        name={
          productData.displayInfo && productData.displayInfo.productDescription
        }
      />
      <MainImage src={imageSrc} alt="main image" />
      <ReserveDesc
        description={
          productData.displayInfo && productData.displayInfo.productDescription
        }
        place={productData.displayInfo && productData.displayInfo.placeLot}
        startDate={startDate}
        endDate={endDate}
        productPrices={productData.productPrices}
      />
      <ReserveForm
        productPrices={productData.productPrices}
        displayInfoId={displayInfoId}
        productId={productData.displayInfo && productData.displayInfo.productId}
        reservationDate={reservationDate}
      />
    </div>
  );
};

export default ReserveContainer;
