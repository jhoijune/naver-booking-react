import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import ImageController from '../ImageController';

// 스크롤 속도 (delay: 이름 바꿔야 할듯) 1초
// 화면 전환 간격 (setInterval) 2초

const PromotionImage = (props) => {
  const { delay, timeInterval, duration } = props;
  const [degree, setDegree] = useState(0);
  const [images, setImages] = useState([]);
  const [scrollable, setScrollable] = useState(true);
  const [scrollDuration, setScrollDuration] = useState(delay);

  useEffect(async () => {
    const {
      data: { items },
    } = await axios.get('/api/promotions');
    items.push(items[0]); // 처음과 마지막을 동일한 이미지를 두어서 스크롤을 매끄럽게 함
    setImages(items);
  }, []);

  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (scrollable) {
        // 아마 고쳐야 될꺼임
        if (degree === images.length - 1) {
          setScrollDuration(0);
          setDegree(0);
          setScrollDuration(delay);
        }
        setDegree(degree + 1);
      }
    }, 2000);
    return clearInterval(autoScroll);
  }, []);

  const resizeEnd = (func) => {
    let timer;
    return () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(func, 100);
    };
  };

  const pauseScroll = () => {
    setScrollable(false);
    resizeEnd(() => {
      setScrollable(true);
    });
  };

  useEffect(() => {
    window.addEventListener('resize', pauseScroll);
    return window.removeEventListener('resize', pauseScroll);
  }, []);

  // props와 state 다 물려줘야 함
  return <ImageController props />;
};

export default PromotionImage;
