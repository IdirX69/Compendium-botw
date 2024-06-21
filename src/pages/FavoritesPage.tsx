import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import ObjectCard from "../components/MonsterCard";
import List from "../components/List";
import ModalInfo from "../components/ModalInfo";

const FavoritesPage = () => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalId, setModalId] = useState(0);

  const [favoritesList, setFavoritesList] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const filteredData = data.filter((element) =>
    favoritesList.includes(element.id)
  );

  const handleClick = (id: number) => {
    setModal(true);
    setModalId(id);
    document.body.classList.add("no-scroll");
    event.stopPropagation();
  };

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
      {modal && (
        <ModalInfo id={modalId} setModal={setModal} category={"Favorites"} />
      )}
      <List
        element={"Favorites"}
        handleClick={handleClick}
        search=""
        data={filteredData}
      />
    </div>
  );
};

export default FavoritesPage;
