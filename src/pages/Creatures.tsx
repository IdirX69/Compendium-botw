import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import MonsterCard from "../components/MonsterCard";
import ModalInfo from "../components/ModalInfo";

const Creatures = () => {
  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  console.log(monsters);

  useEffect(() => {
    axios
      .get(
        "https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters"
      )
      .then((res) => setMonsters(res.data.data));
  }, [search]);

  const handleClick = (monster) => {
    setModal(true);
    console.log(monster);
  };

  return (
    <div className="creatures-container">
      <h2>Creatures</h2>
      <input
        type="text"
        placeholder="Type to search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="monsters-list">
        {monsters
          .filter((monstr) => monstr.name.includes(search))
          .map((monster) => (
            <div onClick={() => handleClick(monster)}>
              <MonsterCard monster={monster} />
            </div>
          ))}
        {modal && <ModalInfo />}
      </div>
    </div>
  );
};

export default Creatures;
