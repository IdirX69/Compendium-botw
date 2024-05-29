import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import ModalInfo from "../components/ModalInfo";
import List from "../components/List";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Home = ({ element }) => {
  const [materials, setMaterials] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/${element}/${id}`);
  };

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const res = await axios.get(
          `https://botw-compendium.herokuapp.com/api/v3/compendium/category/${element}`
        );
        setMaterials(res.data.data);
      } catch (error) {
        console.error("Error fetching materials:", error);
      }
    };

    fetchMaterials();
  }, [element]);

  return (
    <div className="page-container">
      <SearchBar setSearch={setSearch} />
      <Header />
      <List handleClick={handleClick} search={search} objects={materials} />
    </div>
  );
};

export default Home;
