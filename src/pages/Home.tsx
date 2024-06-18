import axios from "axios";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import ModalInfo from "../components/ModalInfo";
import List from "../components/List";
import Header from "../components/Header";
import FavoritesPage from "./FavoritesPage";

const Home = ({ element }: { element: string }) => {
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [modalId, setModalId] = useState(0);

  const handleClick = (id: number) => {
    setModal(true);
    setModalId(id);
    document.body.classList.add("no-scroll");
    event.stopPropagation();
  };

  return (
    <div className="page-container">
      <Header />

      <SearchBar setSearch={setSearch} />
      {modal && (
        <ModalInfo id={modalId} setModal={setModal} category={element} />
      )}
      <List handleClick={handleClick} search={search} element={element} />
    </div>
  );
};

export default Home;
