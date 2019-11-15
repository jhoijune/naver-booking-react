import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TabUI from '../TabUI';
import TabView from '../TabView';

const TabController = (props) => {
  const { labels, views, alarm } = props;
  const [selected, setSelected] = useState(0);

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

  return (
    <div className="TabController">
      <TabUI labels={labels} selected={selected} handleClick={handleClick} />
      <TabView view={views} selected={selected} />
    </div>
  );
};

TabController.defaultProps = {
  alarm: false,
};

TabController.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
  views: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
  alarm: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

// 알람이 있다면 상위 컴포넌트에 어디에 눌렀는지 변화를 알려줘 동적 뷰변화를 가능케함

export default TabController;
