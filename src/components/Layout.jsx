import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation'

const Layout = ({children}) => (
  <div>
    <Navigation/>
    <div>
      {children}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;

