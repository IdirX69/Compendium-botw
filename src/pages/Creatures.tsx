import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import ModalInfo from "../components/ModalInfo";
import List from "../components/List";
import SearchBar from "../components/SearchBar";

const Creatures = () => {
  const [creatures, setCreatures] = useState([]);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState([]);

  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const res = await axios.get(
          "https://botw-compendium.herokuapp.com/api/v3/compendium/category/creatures"
        );
        setCreatures(res.data.data);
      } catch (error) {
        console.error("Error fetching Monsters:", error);
      }
    };

    fetchMonsters();
  }, []);

  const handleClick = (monster) => {
    setModalInfo(monster);
    setModal(true);
  };

  return (
    <div className="page-container">
      <SearchBar setSearch={setSearch} />
      {modal && <ModalInfo modalInfo={modalInfo} setModal={setModal} />}
      <List handleClick={handleClick} search={search} objects={creatures} />
    </div>
  );
};

export default Creatures;
