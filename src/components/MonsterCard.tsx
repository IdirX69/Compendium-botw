import React from "react";

const ObjectCard = ({ obj }) => {
  return (
    <div className="monster-card-container">
      <div className="monster-card">
        <img src={obj.image} alt="image" />
        <span>{obj.name}</span>
      </div>
    </div>
  );
};

export default ObjectCard;
