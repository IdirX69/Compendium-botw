import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import ModalInfo from "../components/ModalInfo";
import List from "../components/List";

const Treasure = () => {
  const [treasure, setTreasure] = useState([]);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  const handleClick = (treasure) => {
    setModalInfo(treasure);
    setModal(true);
  };

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const res = await axios.get(
          "https://botw-compendium.herokuapp.com/api/v3/compendium/category/treasure"
        );
        setTreasure(res.data.data);
      } catch (error) {
        console.error("Error fetching materials:", error);
      }
    };

    fetchMaterials();
  }, []);

  return (
    <div className="page-container">
      <h2>Treasure</h2>
      <SearchBar setSearch={setSearch} />
      {modal && <ModalInfo modalInfo={modalInfo} setModal={setModal} />}
      <List handleClick={handleClick} search={search} objects={treasure} />
    </div>
  );
};

export default Treasure;
