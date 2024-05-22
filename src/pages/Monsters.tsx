import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import ModalInfo from "../components/ModalInfo";
import List from "../components/List";

const Monsters = () => {
  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  const handleClick = (material) => {
    setModalInfo(material);
    setModal(true);
  };

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const res = await axios.get(
          "https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters"
        );
        setMonsters(res.data.data);
      } catch (error) {
        console.error("Error fetching materials:", error);
      }
    };

    fetchMaterials();
  }, []);

  return (
    <div className="page-container">
      <h2>Equipment</h2>
      <SearchBar setSearch={setSearch} />
      {modal && <ModalInfo modalInfo={modalInfo} setModal={setModal} />}
      <List handleClick={handleClick} search={search} objects={monsters} />
    </div>
  );
};

export default Monsters;
