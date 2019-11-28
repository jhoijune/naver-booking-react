import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import NavBar from '../NavBar';
import ReserveForm from '../ReserveForm';
import ReserveDesc from '../ReserveDesc';
import MainImage from '../MainImage';

const ReserveContainer = () => {
  const { displayInfoId } = useParams();
  const [productData, setProductData] = useState({});
  const [imageSrc, setImageSrc] = useState('');
  const [date, setDate] = useState({});

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
    const fetchDate = async () => {
      try {
        const { data } = await axios.get('/api/reservations/date');
        setDate(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDate();
  }, []);

  useEffect(() => {
    if (productData.displayInfo) {
      document.title = `예약 ${productData.displayInfo.productDescription}`;
    }
  }, [productData]);

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
      <MainImage src={`/${imageSrc}`} alt="main image" />
      <ReserveDesc
        description={
          productData.displayInfo && productData.displayInfo.productDescription
        }
        place={productData.displayInfo && productData.displayInfo.placeLot}
        startDate={date.startDate}
        endDate={date.endDate}
        productPrices={productData.productPrices}
      />
      <ReserveForm
        productPrices={productData.productPrices}
        displayInfoId={displayInfoId}
        productId={productData.displayInfo && productData.displayInfo.productId}
        reservationDate={date.reservationDate}
      />
    </div>
  );
};

export default ReserveContainer;
