import React, { useState, useEffect, useRef } from 'react';

const DetailImage = (props) => {
  const [degree, setDegree] = useState(0);

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
    if (degree === items.length - 1) return;
    setDegree((degree + 1) % items.length);
    /*
    imageList.style.transform = `translateX(-${interval * degree}px)`;
    imageCounting.innerText = ` ${degree + 1} `;
    */
  };
  // props 다 넘겨줘야 함
  return <ImageController />;
};

export default DetailImage;
