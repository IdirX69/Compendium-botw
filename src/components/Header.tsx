import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <ul>
        <li>
          <NavLink to="/creatures">
            <img src="./Creatures.png" alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/equipements">
            <img src="./Equipment.png" alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/materials">
            <img src="./Materials.png" alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/monsters">
            <img src="./Monsters.png" alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/treasure">
            <img src="./Treasure.png" alt="" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
