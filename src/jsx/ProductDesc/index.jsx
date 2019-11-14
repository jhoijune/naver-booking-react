import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

import './style.css';
import ButtonBunch from '../ButtonBunch';

const ProductDesc = (props) => {
  const { text, limit } = props;
  const [isFold, setIsFold] = useState(true);

  let textObj;
  useEffect(() => {
    let trimmedText = text.trim();
    trimmedText = trimmedText.replace('\n', '');
    if (trimmedText.length > limit) {
      const textSimple = trimmedText.slice(0, limit);
      const textDetail = trimmedText.slice(limit);
      textObj = { simple: textSimple, detail: textDetail };
    } else {
      textObj = { simple: text, detail: '' };
    }
  }, []);

  const showMoreDesc = () => {
    if (isFold) {
      $('.ProductDesc .moreDesc').slideDown();
      setIsFold(false);
    } else {
      $('.productDesc .moreDesc').slideUp();
      setIsFold(true);
    }
  };

  const openText = '펼쳐보기 <i class="fn fn-down2"></i>';
  const foldText = '접기 <i class="fn fn-up2"></i>';

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
        <ButtonBunch
          notes={[
            {
              backgroundColor: '#f3f5f6',
              click: showMoreDesc,
              children: isFold ? openText : foldText,
            },
          ]}
        />
      ) : (
        ''
      )}
    </section>
  );
};

ProductDesc.defaultProps = {
  limit: 100,
};

ProductDesc.propTypes = {
  text: PropTypes.string.isRequired,
  limit: PropTypes.number,
};

export default ProductDesc;
