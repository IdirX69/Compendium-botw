import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import MonsterCard from "../components/MonsterCard";
import ModalInfo from "../components/ModalInfo";
import List from "../components/List";
import SearchBar from "../components/SearchBar";

const Creatures = () => {
  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters"
      )
      .then((res) => setMonsters(res.data.data));
  }, [search]);

  const handleClick = (monster) => {
    setModalInfo(monster);
    setModal(true);
  };

  return (
    <div className="page-container">
      <h2>Creatures</h2>
      <SearchBar setSearch={setSearch} />
      {modal && <ModalInfo modalInfo={modalInfo} setModal={setModal} />}
      <List handleClick={handleClick} search={search} objects={monsters} />
    </div>
  );
};

export default Creatures;
