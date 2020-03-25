import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import TabUI from '../TabUI';
import TabView from '../TabView';

const TabController = ({ labels, views, alarm, top, bottom }) => {
  // top,bottom은 정적으로 보여줄 뷰
  const [selected, setSelected] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
  });
  const [viewStyle, setViewStyle] = useState({
    transitionDuration: '0.5s',
  });
  const [viewHeight, setViewHeight] = useState(0);
  const uiRef = useRef(null);
  const viewRef = useRef(null);
  const selectedRef = useRef(selected);
  selectedRef.current = selected;
  const viewHeightRef = useRef(viewHeight);
  viewHeightRef.current = viewHeight;

  const handleClick = (index) => {
    if (alarm) {
      return () => {
        alarm(index);
        setSelected(index);
      };
    }
    return () => {
      setSelected(index);
    };
  };

  const reviseIndicator = () => {
    const selectedLi = uiRef.current.children[selectedRef.current + 1];
    setIndicatorStyle({
      left: selectedLi.offsetLeft,
      width: selectedLi.offsetWidth,
    });
  };

  const reviseViewWidth = () => {
    const width = viewRef.current.offsetWidth;
    setViewStyle({
      ...viewStyle,
      transitionDuration: '0s',
      transform: `translate(-${width * selectedRef.current}px)`,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', reviseIndicator);
    window.addEventListener('resize', reviseViewWidth);
    const id = setInterval(() => {
      const viewBody =
        viewRef.current.children[0].children[selectedRef.current].children[0]; // section -> ul -> li -> div
      const height = viewBody && viewBody.offsetHeight;
      if (viewHeight.current !== height) {
        setViewHeight(height);
      }
    }, 100);
    return () => {
      window.removeEventListener('resize', reviseIndicator);
      window.removeEventListener('resize', reviseViewWidth);
      clearInterval(id);
    };
  }, []);

  useEffect(reviseIndicator, [selected]);

  useEffect(() => {
    const width = viewRef.current.offsetWidth;
    setViewStyle({
      ...viewStyle,
      transitionDuration: '0.5s',
      transform: `translate(-${width * selected}px)`,
    });
  }, [selected]);

  return (
    <>
      <TabUI
        ref={uiRef}
        labels={labels}
        selected={selected}
        handleClick={handleClick}
        indicatorStyle={indicatorStyle}
      />
      {top}
      <TabView
        ref={viewRef}
        views={views}
        style={{ ...viewStyle, height: viewHeight }}
      />
      {bottom}
    </>
  );
};

TabController.defaultProps = {
  alarm: false,
  top: '',
  bottom: '',
  views: [],
};

TabController.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
  views: PropTypes.arrayOf(PropTypes.node),
  alarm: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  top: PropTypes.node,
  bottom: PropTypes.node,
};

// 알람이 있다면 상위 컴포넌트에 어디에 눌렀는지 변화를 알려줘 동적 뷰변화를 가능케함

export default TabController;
