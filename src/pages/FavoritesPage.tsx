import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import List from "../components/List";
import ModalInfo from "../components/ModalInfo";
import Loading from "../components/Loading";

const FavoritesPage = () => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
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
        setLoading(true);
      } catch (error) {
        console.error("Error fetching materials:", error);
      }
    };
    fetchData();
  }, [favoritesList]);

  if (!loading) return <Loading />;

  return (
    <div className="favorite-page-container">
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
