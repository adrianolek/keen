import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => (
  <div>
    <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div className="container-fluid">
        <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-left">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/explorer">Explorer</Link></li>
            <li><Link to="/chart">Chart</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Navigation;
