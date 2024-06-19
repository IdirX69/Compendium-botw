import React, { useEffect, useState } from "react";
import axios from "axios";
import ObjectCard from "../components/MonsterCard";

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

  useEffect(() => {
    const handleFavoritesUpdate = (event) => {
      setFavoritesList(event.detail);
    };

    window.addEventListener("favoritesUpdated", handleFavoritesUpdate);

    return () => {
      window.removeEventListener("favoritesUpdated", handleFavoritesUpdate);
    };
  }, []);

  return (
    <div className="favorite-page-container">
      <h2>Favorites</h2>
      <div>
        {filteredData.map((element) => (
          <ObjectCard obj={element} key={element.id} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
