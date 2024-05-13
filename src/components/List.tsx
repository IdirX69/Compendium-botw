import React from "react";
import ObjectCard from "./MonsterCard";

const List = ({ objects, handleClick, search }) => {
  return (
    <div className="monsters-list">
      {objects
        .filter((object) => object.name?.includes(search))
        .map((obj) => (
          <div onClick={() => handleClick(obj)}>
            <ObjectCard obj={obj} />
          </div>
        ))}
    </div>
  );
};

export default List;
