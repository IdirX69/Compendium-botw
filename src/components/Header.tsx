import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul>
          <img src="./fee.png" alt="" />
          <li>
            <NavLink to="/creatures">Creatures</NavLink>
          </li>
          <li>
            <NavLink to="/equipements">Equipment</NavLink>
          </li>
          <li>Materials</li>
          <li>Monsters</li>
          <li>Treasure</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
