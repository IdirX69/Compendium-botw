import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import ObjectCard from "../components/MonsterCard";

const FavoritesPage = () => {
  const [data, setData] = useState([]);
  const [favoritesList, setFavoritesList] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

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

  const filteredData = data.filter((element) =>
    favoritesList.includes(element.id)
  );

  return (
    <div className="favorite-page-container">
      <h2>Favorties</h2>
      <div>
        {filteredData.map((element) => (
          <ObjectCard obj={element} key={element.id} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
