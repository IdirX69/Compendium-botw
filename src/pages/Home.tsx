import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import ModalInfo from "../components/ModalInfo";
import List from "../components/List";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const Home = ({ element }: { element: string }) => {
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [modalId, setModalId] = useState(0);

  const handleClick = (id: number) => {
    // Si la largeur de l'écran est inférieure ou égale à 768px, afficher un message d'alerte
    setModal(true);
    setModalId(id);
    document.body.classList.add("no-scroll");
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
