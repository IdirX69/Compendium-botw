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
    const fetchEquipments = async () => {
      try {
        const res = await axios.get(
          "https://botw-compendium.herokuapp.com/api/v3/compendium/category/equipment"
        );
        setEquipments(res.data.data);
      } catch (error) {
        console.error("Error fetching Equipments:", error);
      }
    };

    fetchEquipments();
  }, []);
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
