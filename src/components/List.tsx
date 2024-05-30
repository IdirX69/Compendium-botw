import React, { useEffect, useState } from "react";
import ObjectCard from "./MonsterCard";
import { Data } from "../types/types";
import Loading from "./Loading";
import axios from "axios";

const List = ({
  element,
  handleClick,
  search,
}: {
  element: string;
  handleClick: (id: number) => void;
  search: string;
}) => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://botw-compendium.herokuapp.com/api/v3/compendium/category/${element}`
        );
        setData(res.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching materials:", error);
      }
    };

    fetchData();
  }, [element]);

  if (loading) return <Loading />;

  return (
    <div className="list-container">
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
