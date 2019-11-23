import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { resizeEnd } from '../../js/common';
import ImageSlider from '../ImageSlider';
import ImageTitle from '../ImageTitle';

// DetailContainer에서 images와 title을 줘야  하고 images는 필터링을 거쳐놔야 됨
// 스크롤 시간(transitionTime) default 1초
// 화면 전환 간격 (timeInterval) 2초

const DetailImage = (props) => {
  const { images, title, transitionTime } = props;
  const [degree, setDegree] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const imageList = useRef(null);

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
    );
    window.addEventListener('resize', getImageWidth());
    return () => window.removeEventListener('resize', getImageWidth());
  }, [images]);

  const leftScroll = () => {
    if (degree !== 0) {
      setDegree(degree - 1);
    }
    /*
    if (degree === 0) return;
    degree -= 1;
    const interval = firstItem.clientWidth;
    imageList.style.transform = `translateX(-${interval * degree}px)`;
    imageCounting.innerText = ` ${degree + 1} `;
    */
  };

  const rightScroll = () => {
    if (degree !== images.length - 1) {
      setDegree((degree + 1) % images.length);
    }
    /*
    imageList.style.transform = `translateX(-${interval * degree}px)`;
    imageCounting.innerText = ` ${degree + 1} `;
    */
  };
  // props 다 넘겨줘야 함
  return (
    <div className="DetailImage">
      <ImageSlider
        ref={imageList}
        degree={degree}
        transitionTime={transitionTime}
        images={images}
        imageWidth={imageWidth}
        isPromotion={false}
      />
      <ImageTitle
        degree={degree}
        imageLen={images.length}
        title={title}
        leftScroll={leftScroll}
        rightScroll={rightScroll}
      />
    </div>
  );
};

DetailImage.defaultProps = {
  images: [],
  title: '',
  transitionTime: 0.5,
};

DetailImage.propTypes = {
  images: PropTypes.array,
  title: PropTypes.string,
  transitionTime: PropTypes.number,
};

export default DetailImage;
