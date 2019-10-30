import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const ReservationCount = (props) => {
  const { toUsedLen, usedLen, canceledLen } = props;
  return (
    <section className="ReservationCount">
      <div className="container">
        <ul>
          <li>
            <span>
              <i className="spr_book2 ico_book2" />
              전체
            </span>
            <h1>{toUsedLen + usedLen + canceledLen}</h1>
          </li>
          <li>
            <span>
              <i className="spr_book2 ico_book_ss" />
              이용예정
            </span>
            <h1>{toUsedLen}</h1>
          </li>
          <li>
            <span>
              <i className="spr_book2 ico_check" />
              이용완료
            </span>
            <h1>{usedLen}</h1>
          </li>
          <li>
            <span>
              <i className="spr_book2 ico_back" />
              취소·환불
            </span>
            <h1>{canceledLen}</h1>
          </li>
        </ul>
      </div>
    </section>
  );
};

ReservationCount.propTypes = {
  toUsedLen: PropTypes.number.isRequired,
  usedLen: PropTypes.number.isRequired,
  canceledLen: PropTypes.number.isRequired,
};

export default ReservationCount;
