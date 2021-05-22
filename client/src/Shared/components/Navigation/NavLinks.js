import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = () => {
  return <ul className="nav-links">
    <li>
      <NavLink to="/signup" exact>Login/Signup</NavLink>
    </li>
    <li>
      <NavLink to="/add_listing" exact>Add Listing</NavLink>
    </li>
    
  </ul>
};

export default NavLinks;