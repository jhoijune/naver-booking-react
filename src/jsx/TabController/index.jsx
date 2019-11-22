import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import TabUI from '../TabUI';
import TabView from '../TabView';

const TabController = (props) => {
  const { labels, views, alarm, top, bottom } = props;
  // top,bottom은 정적으로 보여줄 뷰
  const [selected, setSelected] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
  });
  const [viewStyle, setViewStyle] = useState({});
  const uiRef = useRef(null);
  const viewRef = useRef(null);

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

  useEffect(() => {
    // resize시 깨짐 처리
    const selectedLi = uiRef.current.children[selected + 1];
    setIndicatorStyle({
      left: selectedLi.offsetLeft,
      width: selectedLi.offsetWidth,
    });
  }, [selected]);

  useEffect(() => {
    const width = viewRef.current.offsetWidth;
    const degree = views.slice(0, selected + 1).filter((value) => value).length;
    setViewStyle({
      ...viewStyle,
      transform: `translate(-${width * degree}px)`,
    });
  }, [selected]);

  useEffect(() => {
    const viewBody = viewRef.current.children[0].children[selected].children[0]; // section -> ul -> li -> div
    const height = viewBody && viewBody.offsetHeight;
    setViewStyle({
      ...viewStyle,
      height: height || '',
    });
  }, [views]);

  return (
    <div className="TabController">
      <TabUI
        ref={uiRef}
        labels={labels}
        selected={selected}
        handleClick={handleClick}
        indicatorStyle={indicatorStyle}
      />
      {top}
      <TabView ref={viewRef} views={views} style={viewStyle} />
      {bottom}
    </div>
  );
};

TabController.defaultProps = {
  alarm: false,
  top: '',
  bottom: '',
};

TabController.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
  views: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
  alarm: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  top: PropTypes.node,
  bottom: PropTypes.node,
};

// 알람이 있다면 상위 컴포넌트에 어디에 눌렀는지 변화를 알려줘 동적 뷰변화를 가능케함

export default TabController;
