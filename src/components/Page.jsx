import React from 'react';
import PropTypes from 'prop-types';

const Page = ({title}) => (
  <h2>{title}</h2>
);

Page.propTypes = {
  title: PropTypes.string.isRequired
};

export default Page;
