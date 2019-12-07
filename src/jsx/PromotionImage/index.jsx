import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import ImageSlider from '../ImageSlider';
import { resizeEnd } from '../../js/common';

// 스크롤 시간(transitionTime) default 1초  위에서 물려받는것
// 상태로 사용하는 스크롤 시간 (transitionDuration)
// 화면 전환 간격 (timeInterval) 2초

const PromotionImage = (props) => {
  const { timeInterval, transitionTime } = props;
  const [degree, setDegree] = useState(0);
  const [scrollable, setScrollable] = useState(true);
  const [transitionDuration, setTransitionDuration] = useState(transitionTime);
  const [images, setImages] = useState([]);
  const [imageWidth, setImageWidth] = useState(0);
  const degreeRef = useRef(degree);
  const scrollableRef = useRef(scrollable);
  const imageList = useRef(null);
  degreeRef.current = degree;
  scrollableRef.current = scrollable;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const {
          data: { items },
        } = await axios.get('/api/promotions', {
          headers: { 'X-Requested-With': 'XMLHttpRequest' },
        });
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
      if (scrollableRef.current) {
        if (degreeRef.current === 0) {
          setTransitionDuration(transitionTime);
        }
        setDegree((prevDegree) => prevDegree + 1);
      }
    }, timeInterval * 1000);
    return () => clearInterval(autoScroll);
  }, [images]);

  const handleTransitionEnd = () => {
    if (degree >= images.length - 1) {
      setDegree(0);
      setTransitionDuration(0);
    }
  };

  const handleMouseOver = () => {
    setScrollable(false);
  };

  const handleMouseOut = () => {
    setScrollable(true);
  };

  const doingResize = () => {
    setScrollable(false);
    setImageWidth(imageList.current.firstElementChild.clientWidth);
    setTransitionDuration(0);
  };

  let doneResize;

  useEffect(() => {
    window.addEventListener('resize', doingResize);
    window.addEventListener(
      'resize',
      (() => {
        doneResize = resizeEnd(() => {
          setScrollable(true);
          setImageWidth(imageList.current.firstElementChild.clientWidth);
          setTransitionDuration(transitionTime);
        });
        return doneResize;
      })(),
    );
    return () => {
      window.removeEventListener('resize', doingResize);
      window.removeEventListener('resize', doneResize);
    };
  }, []);

  useEffect(() => {
    setImageWidth(
      (imageList.current.firstElementChild &&
        imageList.current.firstElementChild.clientWidth) ||
        0,
    );
  }, [images]);

  return (
    <ImageSlider
      ref={imageList}
      degree={degree}
      transitionTime={transitionDuration}
      images={images}
      imageWidth={imageWidth}
      isPromotion
      handleTransitionEnd={handleTransitionEnd}
      handleMouseOver={handleMouseOver}
      handleMouseOut={handleMouseOut}
    />
  );
};

PromotionImage.defaultProps = {
  transitionTime: 1,
  timeInterval: 2,
};

PromotionImage.propTypes = {
  transitionTime: PropTypes.number,
  timeInterval: PropTypes.number,
};

export default PromotionImage;
