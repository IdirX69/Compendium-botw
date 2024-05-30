import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <img src="./logo.png" alt="" />
      <div>
        <NavLink to="/creatures">
          <img src="./Creatures.png" alt="" />
        </NavLink>

        <NavLink to="/equipements">
          <img src="./Equipment.png" alt="" />
        </NavLink>

        <NavLink to="/materials">
          <img src="./Materials.png" alt="" />
        </NavLink>

        <NavLink to="/monsters">
          <img src="./Monsters.png" alt="" />
        </NavLink>

        <NavLink to="/treasure">
          <img src="./Treasure.png" alt="" />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
