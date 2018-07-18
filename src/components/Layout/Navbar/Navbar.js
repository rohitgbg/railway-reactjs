import React from 'react';
import {Link} from 'react-router-dom';

const navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <Link to='/' className="navbar-brand" >Railway</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav mr-auto">
       
        <li className="nav-item">
          <Link to='/' className="nav-link" >Live status</Link>
        </li>

        <li className="nav-item">
          <Link to='/pnr-status'  className="nav-link">PNR status</Link>
        </li>

        <li className="nav-item">
          <Link to='/contact'  className="nav-link">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default navbar;