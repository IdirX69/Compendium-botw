import React from "react";

const Equipements = () => {
  const [equipement, setEquipement] = useState([]);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState([]);
  console.log(equipement);

  useEffect(() => {
    axios
      .get(
        "https://botw-compendium.herokuapp.com/api/v3/compendium/category/equipement"
      )
      .then((res) => setEquipement(res.data.data));
  }, [search]);
  return (
    <div>
      <div className="creatures-container">
        <h2>Creatures</h2>
        <input
          type="text"
          placeholder="Type to search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Equipements;
