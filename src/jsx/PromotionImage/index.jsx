import React, { useState, useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import ImageController from '../ImageController';

// 스크롤 시간(transitionTime) default 1초  위에서 물려받는것
// 상태로 사용하는 스크롤 시간 (transitionDuration)
// 화면 전환 간격 (timeInterval) 2초

const PromotionImage = (props) => {
  const { timeInterval, transitionTime } = props;
  const [degree, setDegree] = useState(0);
  const [scrollable, setScrollable] = useState(true);
  const [transitionDuration, setTransitionDuration] = useState(transitionTime);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const {
          data: { items },
        } = await axios.get('/api/promotions');
        items.push(items[0]); // 처음과 마지막을 동일한 이미지를 두어서 스크롤을 매끄럽게 함
        setImages(items);
      } catch (error) {
        console.error(error);
      }
    };
    fetchImages();
  }, []);

  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (scrollable) {
        // 아마 고쳐야 될꺼임
        if (degree === images.length - 1) {
          setTransitionDuration(0);
          setDegree(0);
          setTransitionDuration(transitionTime);
        }
        setDegree(degree + 1);
      }
    }, timeInterval);
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

  useLayoutEffect(() => {
    window.addEventListener('resize', pauseScroll);
    return window.removeEventListener('resize', pauseScroll);
  }, []);

  return (
    <ImageController
      degree={degree}
      transitionTime={transitionDuration}
      images={images}
      resizeEnd={resizeEnd}
    />
  );
};

PromotionImage.defaultProps = {
  transitionTime: 2,
  timeInterval: 1,
};

PromotionImage.propTypes = {
  transitionTime: PropTypes.number,
  timeInterval: PropTypes.number,
};

export default PromotionImage;
