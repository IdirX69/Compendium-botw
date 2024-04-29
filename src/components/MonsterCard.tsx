import React from "react";

const Monster = ({ monster }) => {
  return (
    <div>
      <>
        <img src={monster.image} alt="" />
        <span>{monster.name}</span>
      </>
    </div>
  );
};

export default Monster;
