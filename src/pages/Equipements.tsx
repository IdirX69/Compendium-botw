import axios from "axios";
import React, { useEffect, useState } from "react";

const Equipments = () => {
  const [equipment, setEquipment] = useState([]);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState([]);
  console.log(equipment);

  useEffect(() => {
    axios
      .get(
        "https://botw-compendium.herokuapp.com/api/v3/compendium/category/equipment"
      )
      .then((res) => setEquipment(res.data.data));
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
      </div>
    </div>
  );
};

export default Equipments;
