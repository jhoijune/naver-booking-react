import React, { useEffect } from 'react';

import './style.css';
import FlexContainer from '../FlexContainer';
import Button from '../Button';

const NotFound = () => {
  useEffect(() => {
    document.title = 'Page not found';
  });

  return (
    <div className="NotFound">
      <h1>404</h1>
      <h2>PAGE NOT FOUND</h2>
      <FlexContainer>
        <Button style={{ border: 'none' }} click={'/'}>
          메인 페이지로 이동
        </Button>
      </FlexContainer>
    </div>
  );
};

export default NotFound;
