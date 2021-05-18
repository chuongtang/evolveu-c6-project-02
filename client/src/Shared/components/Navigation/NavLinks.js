import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = () => {
  return <ul className="nav-links">
    <li>
      <NavLink to="/signup" exact>Login/Signup</NavLink>
    </li>
    
  </ul>
};

export default NavLinks;