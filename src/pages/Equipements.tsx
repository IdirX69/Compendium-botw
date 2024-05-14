import axios from "axios";
import React, { useEffect, useState } from "react";
import MonsterCard from "../components/MonsterCard";
import ModalInfo from "../components/ModalInfo";
import SearchBar from "../components/SearchBar";
import List from "../components/List";

const Equipments = () => {
  const [equipments, setEquipments] = useState([]);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState([]);

  console.log(equipments);

  const handleClick = (equpment) => {
    setModalInfo(equpment);
    setModal(true);
  };

  useEffect(() => {
    axios
      .get(
        "https://botw-compendium.herokuapp.com/api/v3/compendium/category/equipment"
      )
      .then((res) => setEquipments(res.data.data));
  }, [search]);
  return (
    <div className="page-container">
      <h2>Equipment</h2>
      <SearchBar setSearch={setSearch} />
      {modal && <ModalInfo modalInfo={modalInfo} setModal={setModal} />}
      <List handleClick={handleClick} search={search} objects={equipments} />
    </div>
  );
};

export default Equipments;
