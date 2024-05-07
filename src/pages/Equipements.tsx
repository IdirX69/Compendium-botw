import axios from "axios";
import React, { useEffect, useState } from "react";
import MonsterCard from "../components/MonsterCard";

const Equipments = () => {
  const [equipments, setEquipments] = useState([]);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://botw-compendium.herokuapp.com/api/v3/compendium/category/equipment"
      )
      .then((res) => setEquipments(res.data.data));
  }, [search]);
  return (
    <div>
      <div className="creatures-container">
        <h2>Equipment</h2>
        <input
          type="text"
          placeholder="Type to search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="monsters-list">
          {equipments.map((object) => (
            <MonsterCard monster={object} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equipments;
