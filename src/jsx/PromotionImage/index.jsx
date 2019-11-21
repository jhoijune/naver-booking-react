import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import ImageSlider from '../ImageSlider';
import ImageController from '../ImageController';

// 스크롤 시간(transitionTime) default 1초  위에서 물려받는것
// 상태로 사용하는 스크롤 시간 (transitionDuration)
// 화면 전환 간격 (timeInterval) 2초

const PromotionImage = (props) => {
  // 리사이즈시 width가 안바뀜
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
    if (degree === images.length - 1) {
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

  const resizeEnd = (func) => {
    let timer;
    return (event) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(func, 100, event);
    };
  };

  const startScroll = () => {
    return resizeEnd(() => {
      setScrollable(true);
    });
  };

  const pauseScroll = () => {
    setScrollable(false);
  };

  useEffect(() => {
    window.addEventListener('resize', pauseScroll);
    window.addEventListener('resize', startScroll());
    return () => {
      window.removeEventListener('resize', pauseScroll);
      window.removeEventListener('resize', startScroll());
    };
  }, []);

  const getImageWidth = () => {
    return resizeEnd(() => {
      setImageWidth(imageList.current.firstElementChild.clientWidth);
    });
  };

  useEffect(() => {
    setImageWidth(
      (imageList.current.firstElementChild &&
        imageList.current.firstElementChild.clientWidth) ||
        0,
    ); // 처음엔 0으로 됨
    window.addEventListener('resize', getImageWidth());
    return () => window.removeEventListener('resize', getImageWidth());
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

/*
function debounce(func) {
  let timer;
  return function(event) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, 100, event);
    setTimeout()
  };
}

window.addEventListener(
  'resize',
  debounce(event => {
    // resize 끝났을 때
    scrollAble = true;
  }),
);
*/
