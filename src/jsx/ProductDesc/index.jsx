/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

import './style.css';
import FlexContainer from '../FlexContainer';
import Button from '../Button';

const ProductDesc = (props) => {
  const { text, limit } = props;
  const [isFold, setIsFold] = useState(true);
  const [textObj, setTextObj] = useState({ simple: '', detail: '' });

  useEffect(() => {
    let trimmedText = text.trim();
    trimmedText = trimmedText.replace('\n', '');
    if (trimmedText.length > limit) {
      const textSimple = trimmedText.slice(0, limit);
      const textDetail = trimmedText.slice(limit);
      setTextObj({ simple: textSimple, detail: textDetail });
    } else {
      setTextObj({ simple: trimmedText, detail: '' });
    }
  }, [text]);

  const showMoreDesc = () => {
    if (isFold) {
      $('.ProductDesc .moreDesc').slideDown();
      setIsFold(false);
    } else {
      $('.ProductDesc .moreDesc').slideUp();
      setIsFold(true);
    }
  };

  const openText = (
    <span>
      {'펼쳐보기 '}
      <i className="fn fn-down2" />
    </span>
  );
  const foldText = (
    <span>
      {'접기 '}
      <i className="fn fn-up2" />
    </span>
  );

  return (
    <section className="ProductDesc">
      {textObj.detail ? (
        <p>
          {textObj.simple}
          <span
            className="dots"
            style={{ display: isFold ? 'inline' : 'none' }}
          >
            ...
          </span>
          <span className="moreDesc">{textObj.detail}</span>
        </p>
      ) : (
        <p>{textObj.simple}</p>
      )}
      {textObj.detail ? (
        <FlexContainer>
          <Button
            style={{
              backgroundColor: '#f3f5f6',
              borderLeft: 'none',
              borderRight: 'none',
            }}
            click={showMoreDesc}
          >
            {isFold ? openText : foldText}
          </Button>
        </FlexContainer>
      ) : (
        ''
      )}
    </section>
  );
};

ProductDesc.defaultProps = {
  text: '',
  limit: 100,
};

ProductDesc.propTypes = {
  text: PropTypes.string,
  limit: PropTypes.number,
};

export default ProductDesc;
