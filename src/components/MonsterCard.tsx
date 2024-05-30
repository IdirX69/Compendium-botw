import React from "react";

const ObjectCard = ({ obj }) => {
  return (
    <div className="monster-card-container">
      <div className="monster-card">
        <img src={obj.image} alt="image" />
        <div className="info-object">
          <span>{obj.name}</span>
          <span className="span-id">{obj.id}</span>
        </div>
      </div>
    </div>
  );
};

export default ObjectCard;
