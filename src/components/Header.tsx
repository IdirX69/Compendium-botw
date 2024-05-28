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
          <li>
            <NavLink to="/materials">Materials</NavLink>
          </li>
          <li>
            <NavLink to="/monsters">Monsters</NavLink>
          </li>
          <li>
            <NavLink to="/treasure">Treasure</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
