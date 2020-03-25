import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './style.css';
import TicketInfo from '../TicketInfo';
import FlexContainer from '../FlexContainer';
import Button from '../Button';

const TicketInfoList = ({ infos, actions, basisCount }) => {
  const [count, setCount] = useState(0);
  const [height, setHeight] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (infos.length >= basisCount) {
      setCount(basisCount);
    } else {
      setCount(infos.length);
    }
  }, [infos]);

  useEffect(() => {
    const list = containerRef.current.firstElementChild;
    const buttonHeight =
      containerRef.current.childElementCount > 1
        ? containerRef.current.lastElementChild.offsetHeight
        : 0;
    if (list) {
      setHeight(list.offsetHeight + buttonHeight);
    }
  }, [count]);

  const handleOpen = () => {
    if (infos.length >= count + basisCount) {
      setCount(count + basisCount);
    } else {
      setCount(infos.length);
    }
  };

  const handleFold = () => {
    if (count - basisCount > 0) {
      setCount(count - basisCount);
    } else {
      setCount(0);
    }
  };

  const showButton = () => {
    /*
     *  1. 버튼이 없는 상태
     *   2. more 만 있는 상태
     *    3. more,fold만 있는 상태
     *    4. fold만 있는 상태
     *  <Button key={index} style={value.style} click={value.click}>
            {value.children}
     */
    if (infos.length <= basisCount) {
      //1
      return '';
    }
    if (count <= basisCount) {
      // 2 최초 혹은 최대한 줄어든 상태
      return (
        <FlexContainer>
          <Button click={handleOpen}>더보기</Button>
        </FlexContainer>
      );
    }
    if (infos.length > count) {
      // 3 중간 단계
      return (
        <FlexContainer>
          <Button click={handleOpen}>더보기</Button>
          <Button click={handleFold}>접기</Button>
        </FlexContainer>
      );
    }
    if (infos.length === count) {
      // 4 최종 단계
      return (
        <FlexContainer>
          <Button click={handleFold}>접기</Button>
        </FlexContainer>
      );
    }
    return '';
  };

  return (
    <div className="TicketInfoList" ref={containerRef} style={{ height }}>
      <ol>
        {infos.slice(0, count).map((value, index) => {
          return <TicketInfo key={index} info={value} actions={actions} />;
        })}
      </ol>
      {showButton()}
    </div>
  );
};

TicketInfoList.defaultProps = {
  basisCount: 4,
};

TicketInfoList.propTypes = {
  infos: PropTypes.array.isRequired,
  actions: PropTypes.array.isRequired,
  basisCount: PropTypes.number,
};

export default TicketInfoList;
