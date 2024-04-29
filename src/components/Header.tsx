import React from "react";

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
          <li>Creatures</li>
          <li>Equipment</li>
          <li>Materials</li>
          <li>Monsters</li>
          <li>Treasure</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
