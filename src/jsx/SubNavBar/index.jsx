import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

import './style.css';

const SubNavBar = (props) => {
  const { name, style } = props;
  const history = useHistory();
  return (
    <div className="SubNavBar" style={style}>
      <div className="backward">
        <i
          className="fn fn-backward1"
          onClick={() => {
            history.goBack();
          }}
        />
      </div>
      <div className="titleName">
        <h1>{name || '행사 이름'}</h1>
      </div>
      <div className="empty" />
    </div>
  );
};

SubNavBar.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default SubNavBar;
