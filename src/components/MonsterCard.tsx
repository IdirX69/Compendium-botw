import React from "react";

const Monster = ({ monster }) => {
  return (
    <div className="monster-card-container">
      <div className="monster-card">
        <img src={monster.image} alt="image" />
        <span>{monster.name}</span>
      </div>
    </div>
  );
};

export default Monster;
