import React from 'react';
import PropTypes from 'prop-types';

import MainNavBar from '../MainNavBar';
import SubNavBar from '../SubNavBar';

const NavBar = (props) => {
  const { name, isTransparent, isLogoutable } = props;
  return (
    <nav className="NavBar">
      {name ? (
        <SubNavBar name={name} />
      ) : (
        <MainNavBar isTransparent={isTransparent} isLogoutable={isLogoutable} />
      )}
    </nav>
  );
};

NavBar.defaultProps = {
  name: '',
  isTransparent: false,
  isLogoutable: false,
};

NavBar.propTypes = {
  name: PropTypes.string,
  isTransparent: PropTypes.bool,
  isLogoutable: PropTypes.bool,
};

export default NavBar;
