import React from "react";
import ObjectCard from "./MonsterCard";

const List = ({ objects, handleClick, search }) => {
  return (
    <div className="list-container">
      {objects

        ?.filter((object) => object.name?.includes(search))

        ?.map((obj) => (
          <div onClick={() => handleClick(obj)} key={obj.id}>
            <ObjectCard obj={obj} />
          </div>
        ))}
    </div>
  );
};

export default List;
