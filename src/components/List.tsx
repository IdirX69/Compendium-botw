import React from "react";
import ObjectCard from "./MonsterCard";

const List = ({ objects, handleClick, search }) => {
  return (
    <div className="list-container">
      {objects

        ?.filter((object) => object.name?.includes(search))

        ?.map((obj) => (
          <div
            className="card-container"
            onClick={() => handleClick(obj.id)}
            key={obj.id}
          >
            <ObjectCard obj={obj} />
          </div>
        ))}
    </div>
  );
};

export default List;
