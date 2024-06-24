import axios from "axios";
import React, { useEffect, useState } from "react";
import List from "../components/List";
import ModalInfo from "../components/ModalInfo";
import Loading from "../components/Loading";
import BackButton from "../components/BackButton";
import { Data } from "../types/types";

const FavoritesPage: React.FC<{ setFavorite: (value: boolean) => void }> = ({
  setFavorite,
}) => {
  const [data, setData] = useState<Data[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [modalId, setModalId] = useState<number>(0);

  const [favoritesList, setFavoritesList] = useState<number[]>(() => {
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
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://botw-compendium.herokuapp.com/api/v3/compendium/all`
        );
        setData(res.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching materials:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleFavoritesUpdate: EventListener = (event: Event) => {
      const customEvent = event as CustomEvent;
      setFavoritesList(customEvent.detail);
    };

    window.addEventListener("favoritesUpdated", handleFavoritesUpdate);

    return () => {
      window.removeEventListener("favoritesUpdated", handleFavoritesUpdate);
    };
  }, []);

  const handleModalClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains("modal")) {
      setFavorite(false);
      document.body.classList.remove("no-scroll");
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="modal" onClick={handleModalClick}>
      <div className="favorite-page-container">
        {modal && (
          <ModalInfo id={modalId} setModal={setModal} category={"Favorites"} />
        )}
        <BackButton handleClick={() => setFavorite(false)} />
        <List
          element={"Favorites"}
          handleClick={handleClick}
          search=""
          data={filteredData}
        />
      </div>
    </div>
  );
};

export default FavoritesPage;
