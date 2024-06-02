import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import ModalInfo from "../components/ModalInfo";
import List from "../components/List";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const Home = ({ element }: { element: string }) => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/${element}/${id}`);
  };

  return (
    <div className="page-container">
      <Header />
      <SearchBar setSearch={setSearch} />
      <List handleClick={handleClick} search={search} element={element} />
    </div>
  );
};

export default Home;
