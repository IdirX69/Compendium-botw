import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import ModalInfo from "../components/ModalInfo";
import List from "../components/List";
import Header from "../components/Header";
import FavoritesPage from "./FavoritesPage";

const Home = ({ element }: { element: string }) => {
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [modalId, setModalId] = useState(0);
  const [favorite, setFavorite] = useState(false);

  const handleClick = (id: number) => {
    setModal(true);
    setModalId(id);
    document.body.classList.add("no-scroll");
    event.stopPropagation();
  };

  useEffect(() => {
    if (favorite) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [favorite]);

  return (
    <>
      <div className="page-container">
        <Header />
        <SearchBar setSearch={setSearch} />
        {favorite && <FavoritesPage />}
        {modal && (
          <ModalInfo id={modalId} setModal={setModal} category={element} />
        )}
        <List handleClick={handleClick} search={search} element={element} />
        <button
          onClick={() => setFavorite(!favorite)}
          className="favorite-list-button"
        >
          <img src="../no-heart.png" alt="" />
        </button>
      </div>
    </>
  );
};

export default Home;
