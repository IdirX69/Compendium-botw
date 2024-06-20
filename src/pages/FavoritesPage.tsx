import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import ObjectCard from "../components/MonsterCard";
import List from "../components/List";

const FavoritesPage = () => {
  const [data, setData] = useState([]);
  const [favoritesList, setFavoritesList] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const filteredData = data.filter((element) =>
    favoritesList.includes(element.id)
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://botw-compendium.herokuapp.com/api/v3/compendium/all`
        );
        setData(res.data.data);
      } catch (error) {
        console.error("Error fetching materials:", error);
      }
    };
    fetchData();
  }, []);
  console.log(filteredData);

  return (
    <div className="page-container">
      <List
        element={"Favorites"}
        handleClick={undefined}
        search=""
        data={filteredData}
      />
    </div>
  );
};

export default FavoritesPage;
