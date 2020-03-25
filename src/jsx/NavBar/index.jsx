import React from 'react';
import PropTypes from 'prop-types';

import MainNavBar from '../MainNavBar';
import SubNavBar from '../SubNavBar';

const NavBar = ({ name, isTransparent, isLogoutable, style }) =>
  name ? (
    <SubNavBar name={name} style={style} />
  ) : (
    <MainNavBar
      isTransparent={isTransparent}
      isLogoutable={isLogoutable}
      style={style}
    />
  );

NavBar.defaultProps = {
  name: '',
  isTransparent: false,
  isLogoutable: false,
  style: {},
};

NavBar.propTypes = {
  name: PropTypes.string,
  isTransparent: PropTypes.bool,
  isLogoutable: PropTypes.bool,
  style: PropTypes.object,
};

export default NavBar;
