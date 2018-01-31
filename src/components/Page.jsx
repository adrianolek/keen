import React from 'react';
import PropTypes from 'prop-types';

const Page = ({title}) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-12">
        <h2>{title}</h2>
      </div>
    </div>
  </div>
);

Page.propTypes = {
  title: PropTypes.string.isRequired
};

export default Page;
