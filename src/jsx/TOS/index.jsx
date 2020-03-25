import React, { useState } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

import './style.css';

const foldText = (
  <span>
    {' 접기'}
    <i className="fn fn-up2" />
  </span>
);

const showText = (
  <span>
    {' 보기'}
    <i className="fn fn-down2" />
  </span>
);

const TOS = ({ isChecked, dispatch }) => {
  const [isCollectionFold, setIsCollectionFold] = useState(true);
  const [isOfferFold, setIsOfferFold] = useState(true);

  const handleCollectionClick = () => {
    if (isCollectionFold) {
      setIsCollectionFold(false);
      $('.TOS .collectionUseTerm').slideDown();
    } else {
      setIsCollectionFold(true);
      $('.TOS .collectionUseTerm').slideUp();
    }
  };

  const handleOfferClick = () => {
    if (isOfferFold) {
      setIsOfferFold(false);
      $('.TOS .offerTerm').slideDown();
    } else {
      setIsOfferFold(true);
      $('.TOS .offerTerm').slideUp();
    }
  };

  return (
    <aritlce className="TOS">
      <div className="allAgreement">
        <input
          type="checkbox"
          name="TOSCheck"
          id="TOSCheck"
          onChange={({ target: { checked } }) => {
            dispatch({ type: 'CHANGE_TOS', checked });
            dispatch({ type: 'VERIFY_SUBMIT' });
          }}
          checked={isChecked}
        />
        <label htmlFor="TOSCheck">{'  이용자 약관 전체동의'}</label>
        <p>필수 동의</p>
      </div>
      <div className="agreement">
        <p>
          <i className="spr_book ico_arr_ipc2" />
          개인정보 수집 및 이용 동의
        </p>
        <p className="collectionUseAgreement" onClick={handleCollectionClick}>
          {isCollectionFold ? showText : foldText}
        </p>
      </div>
      <p className="collectionUseTerm">
        &lt;개인정보 수집 및 이용 동의&gt;
        <br />
        1. 수집항목 : [필수] 이름, 연락처, [선택] 이메일주소
        <br />
        2. 수집 및 이용목적 : 사업자회원과 예약이용자의 원활한 거래 진행,
        고객상담, 불만처리 등 민원 처리, 분쟁조정 해결을 위한 기록보존, 네이버
        예약 이용 후 리뷰작성에 따른 네이버페이 포인트 지급 및 관련 안내
        <br />
        3. 보관기간
        <br />
        - 회원탈퇴 등 개인정보 이용목적 달성 시까지 보관
        <br />
        - 단, 상법 및 ‘전자상거래 등에서의 소비자 보호에 관한 법률’ 등 관련
        법령에 의하여 일정 기간 보관이 필요한 경우에는 해당 기간 동안 보관함
        <br />
        4. 동의 거부권 등에 대한 고지: 정보주체는 개인정보의 수집 및 이용 동의를
        거부할 권리가 있으나, 이 경우 상품 및 서비스 예약이 제한될 수 있습니다.
        <br />
      </p>
      <div className="agreement">
        <p>
          <i className="spr_book ico_arr_ipc2" />
          개인정보 제3자 제공 동의
        </p>
        <p className="offerAgreement" onClick={handleOfferClick}>
          {isOfferFold ? showText : foldText}
        </p>
      </div>
      <p className="offerTerm">
        &lt;개인정보 제3자 제공 동의&gt;
        <br />
        1. 개인정보를 제공받는 자 : 미디어앤아트
        <br />
        2. 제공하는 개인정보 항목 : [필수] 네이버 아이디, 이름, 연락처 [선택]
        이메일 주소
        <br />
        3. 개인정보를 제공받는 자의 이용목적 : 사업자회원과 예약이용자의 원활한
        거래 진행, 고객상담, 불만처리 등 민원 처리, 서비스 이용에 따른 설문조사
        및 혜택 제공, 분쟁조정 해결을 위한 기록보존
        <br />
        4. 개인정보를 제공받는 자의 개인정보 보유 및 이용기간 : 개인정보
        이용목적 달성 시 까지 보관합니다.
        <br />
        5. 동의 거부권 등에 대한 고지 : 정보주체는 개인정보 제공 동의를 거부할
        권리가 있으나, 이 경우 상품 및 서비스 예약이 제한될 수 있습니다.
        <br />
      </p>
    </aritlce>
  );
};

TOS.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default TOS;
