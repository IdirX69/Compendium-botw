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

  const navigate = useNavigate();

  const handleClick = (id) => {
    if (window.innerWidth < 768) {
      navigate(`/${element}/${id}`);
    } else {
      setModal(true);
    }
  };

  return (
    <div className="page-container">
      <Header />

      <SearchBar setSearch={setSearch} />
      {modal && <ModalInfo category={element} />}
      <List handleClick={handleClick} search={search} element={element} />
    </div>
  );
};

export default Home;
