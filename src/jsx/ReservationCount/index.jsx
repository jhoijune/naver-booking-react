import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

// 잘잘하게 쪼갤수 있을 것 같음

const ReservationCount = ({ toUsedLen, usedLen, canceledLen, divisions }) => (
  <section className="ReservationCount">
    <div className="container">
      <ul>
        <li>
          <span>
            <i className="spr_book2 ico_book2" />
            {' 전체'}
          </span>
          <h1>{toUsedLen + usedLen + canceledLen}</h1>
        </li>
        <li>
          <a href={`#${divisions[0]}`}>
            <span>
              <i className="spr_book2 ico_book_ss" />
              {' 이용예정'}
            </span>
            <h1>{toUsedLen}</h1>
          </a>
        </li>
        <li>
          <a href={`#${divisions[1]}`}>
            <span>
              <i className="spr_book2 ico_check" />
              {' 이용완료'}
            </span>
            <h1>{usedLen}</h1>
          </a>
        </li>
        <li>
          <a href={`#${divisions[2]}`}>
            <span>
              <i className="spr_book2 ico_back" />
              {' 취소·환불'}
            </span>
            <h1>{canceledLen}</h1>
          </a>
        </li>
      </ul>
    </div>
  </section>
);

ReservationCount.propTypes = {
  toUsedLen: PropTypes.number.isRequired,
  usedLen: PropTypes.number.isRequired,
  canceledLen: PropTypes.number.isRequired,
  divisions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default ReservationCount;
