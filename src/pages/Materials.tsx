import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import ModalInfo from "../components/ModalInfo";
import List from "../components/List";

const Materials = () => {
  const [materials, setMaterials] = useState([]);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState([]);

  const handleClick = (material) => {
    setModalInfo(material);
    setModal(true);
  };

  useEffect(() => {
    axios
      .get(
        "https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials"
      )
      .then((res) => setMaterials(res.data.data));
  }, [search]);
  return (
    <div className="page-container">
      <h2>Equipment</h2>
      <SearchBar setSearch={setSearch} />
      {modal && <ModalInfo modalInfo={modalInfo} setModal={setModal} />}
      <List handleClick={handleClick} search={search} objects={materials} />
    </div>
  );
};

export default Materials;
