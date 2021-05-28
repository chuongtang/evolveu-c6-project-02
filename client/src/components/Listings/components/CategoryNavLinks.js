import React from "react";
import { NavLink } from "react-router-dom";

import "./CategoryNavLinks.css";
// these will be the categorys of Recycables
const CategoryNavLinks = (props) => {
  return (
    <ul className="category-nav-links">
      <li>
        <NavLink to="/paper">
          <img src="images/paper waste.jpg" alt="paper" />
          paper
        </NavLink>
      </li>
      <li>
        <NavLink to="/plastics">
          <img src="images/plasticswaste.jpg" alt="Plastics" />
          Plastics
        </NavLink>
      </li>
      <li>
        <NavLink to="/Electronics">
          <img src="images/metal.jpg" alt="Electronics" />
          Electronics
        </NavLink>
      </li>

      <li>
        <NavLink to="/Glass">
          <img src="images/glass.jpg" alt="Glass" />
          Glass
        </NavLink>
      </li>
      <li>
        <NavLink to="/Metal">
          <img src="images/metalscrap.jpg" alt="Metal" />
          Metal
        </NavLink>
      </li>
      <li>
        <NavLink to="/Furniture">
          <img src="images/furniture.jpg" alt="Furniture" />
          Furniture
        </NavLink>
      </li>

      <li>
        <NavLink to="/Textiles">
          <img src="images/textile.jpg" alt="Textiles" />
          Textiles
        </NavLink>
      </li>
      <li>
        <NavLink to="/Other">
          <img
            className="li-category-image"
            src="images/battery.jpg"
            alt="Other"
          />
          Other
        </NavLink>
      </li>
      <li>
        <NavLink to="/Recycables">
          <img
            className="li-category-image"
            src="images/plastic.jpg"
            alt="Recycables"
          />
          Recycables
        </NavLink>
      </li>
    </ul>
  );
  // //this dive will be the footer, which should be its own file
  // <div></div>
};

export default CategoryNavLinks;
