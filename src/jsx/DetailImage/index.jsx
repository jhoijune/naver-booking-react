import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ImageController from '../ImageController';

// DetailContainer에서 images와 title을 줘야  하고 images는 필터링을 거쳐놔야 됨
// 스크롤 시간(transitionTime) default 1초
// 화면 전환 간격 (timeInterval) 2초

const DetailImage = (props) => {
  const { images, title, transitionTime } = props;
  const [degree, setDegree] = useState(0);

  const resizeEnd = (func) => {
    let timer;
    return () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(func, 100);
    };
  };

  const leftScroll = () => {
    if (degree === 0) return;
    setDegree(degree - 1);
    /*
    if (degree === 0) return;
    degree -= 1;
    const interval = firstItem.clientWidth;
    imageList.style.transform = `translateX(-${interval * degree}px)`;
    imageCounting.innerText = ` ${degree + 1} `;
    */
  };

  const rightScroll = () => {
    if (degree === images.length - 1) return;
    setDegree((degree + 1) % images.length);
    /*
    imageList.style.transform = `translateX(-${interval * degree}px)`;
    imageCounting.innerText = ` ${degree + 1} `;
    */
  };
  // props 다 넘겨줘야 함
  return (
    <ImageController
      degree={degree}
      transitionTime={transitionTime}
      images={images}
      resizeEnd={resizeEnd}
      title={title}
      leftScroll={leftScroll}
      rightScroll={rightScroll}
    />
  );
};

DetailImage.defaultProps = {
  transitionTime: 0.5,
};

DetailImage.propTypes = {
  images: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  transitionTime: PropTypes.number,
};

export default DetailImage;
