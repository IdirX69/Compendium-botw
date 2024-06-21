import React, { useEffect, useState } from "react";
import ObjectCard from "./MonsterCard";
import { Data } from "../types/types";
import Loading from "./Loading";
import axios from "axios";

const List = ({
  element,
  handleClick,
  search,
  data,
}: {
  element: string;
  handleClick: (id: number) => void;
  search?: string | null;
  data: Data[];
}) => {
  return (
    <div className="list-container">
      <h2>{element}</h2>
      {data
        .sort((a, b) => b.name.localeCompare(a.name))

        ?.filter((object: Data) => object.name?.includes(search))

        ?.map((obj: Data) => (
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
