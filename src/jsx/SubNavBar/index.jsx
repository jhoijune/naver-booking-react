import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import PropTypes from 'prop-types';

import './style.css';

const SubNavBar = (props) => {
  const { name } = props;
  const { pathname } = useLocation();
  const paths = pathname.split('/');
  const itemId = paths[paths.length - 1];
  return (
    <div className="SubNavBar">
      <div className="backward">
        <Link to={`/detail/${itemId}`}>
          <i className="fn fn-backward1" />
        </Link>
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
};

export default SubNavBar;
