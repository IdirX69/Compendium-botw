import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import MonsterCard from "../components/MonsterCard";

const Creatures = () => {
  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState("");
  console.log(monsters);

  useEffect(() => {
    axios
      .get(
        "https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters"
      )
      .then((res) => setMonsters(res.data.data));
  }, [search]);

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
            <MonsterCard monster={monster} />
          ))}
      </div>
    </div>
  );
};

export default Creatures;
