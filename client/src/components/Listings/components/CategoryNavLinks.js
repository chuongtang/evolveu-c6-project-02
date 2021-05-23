import React from "react";
import { NavLink } from "react-router-dom";

import "./CategoryNavLinks.css";
// these will be the categorys of Recycables
const CategoryNavLinks = (props) => {
  return (
    <ul className="category-nav-links">
      <li>
        <img className="li-category-image" src="images/paper waste.jpg" />
        <NavLink to="/paper">paper</NavLink>
      </li>
      <li>
        <img
          className="li-category-image"
          src="images/plasticswaste.jpg"
          alt="Plastics"
        />

        <NavLink className="better-link" to="/plastics">Plastics</NavLink>
      </li>
      <li>
        <img className="li-category-image" src="images/metal.jpg" />
        <NavLink to="/Electronics">Electronics</NavLink>
      </li>

      <li>
        <img className="li-category-image" src="images/glass.jpg" />
        <NavLink to="/Glass">Glass</NavLink>
      </li>
      <li>
        <img className="li-category-image" src="images/metalscrap.jpg" />
        <NavLink to="/Metal">Metal</NavLink>
      </li>
      <li>
        <img className="li-category-image" src="images/furniture.jpg" />
        <NavLink to="/Furniture">Furniture</NavLink>
      </li>

      <li>
        <img className="li-category-image" src="images/textile.jpg" />
        <NavLink to="/Textiles">Textiles</NavLink>
      </li>
      <li>
        <img className="li-category-image" src="images/battery.jpg" />
        <NavLink to="/Other">Other(paint,batteries)</NavLink>
      </li>
      <li>
        <img className="li-category-image" src="images/plastic.jpg" />
        <NavLink to="/Recycables">Recycables</NavLink>
      </li>
    </ul>
  );
  // //this dive will be the footer, which should be its own file
  // <div></div>
};

export default CategoryNavLinks;
