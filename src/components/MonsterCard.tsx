import React from "react";
import FavoriteButton from "./FavoriteButton";
import { Data } from "../types/types";

const ObjectCard = ({ obj }: { obj: Data }) => {
  return (
    <div className="monster-card-container">
      <div className="monster-card">
        <img src={obj.image} alt="image" />
        <div className="info-object">
          <span>{obj.name}</span>
          <span className="span-id">{obj.id}</span>
          <FavoriteButton itemId={obj.id} />
        </div>
      </div>
    </div>
  );
};

export default ObjectCard;
