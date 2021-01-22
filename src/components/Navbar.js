import React from 'react';
import { Link } from 'react-router-dom';
import './Navba.css';

function Navbar() {
  return (
    <>
      <nav className="navba">
        <h1>Math Magicians</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/calculator">Calculator</Link></li>
          <li>Quote</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
