import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import ModalInfo from "../components/ModalInfo";
import List from "../components/List";
import Header from "../components/Header";
import FavoritesPage from "./FavoritesPage";
import { Data } from "../types/types";

const Page = ({ element }: { element: string }) => {
  const [search, setSearch] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);
  const [modalId, setModalId] = useState<number>(0);
  const [favorite, setFavorite] = useState<boolean>(false);

  const handleClick = (id: number) => {
    setModal(true);
    setModalId(id);
    document.body.classList.add("no-scroll");
    event.stopPropagation();
  };

  const [data, setData] = useState<Data[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://botw-compendium.herokuapp.com/api/v3/compendium/category/${element}`
        );
        setData(res.data.data);
      } catch (error) {
        console.error("Error fetching materials:", error);
      }
    };

    fetchData();
  }, [element]);

  useEffect(() => {
    if (favorite) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [favorite]);

  return (
    <>
      <div className="page-container">
        <Header />
        <SearchBar setSearch={setSearch} />
        {modal && (
          <ModalInfo id={modalId} setModal={setModal} category={element} />
        )}
        <List
          handleClick={handleClick}
          search={search}
          element={element}
          data={data}
        />
        {favorite && <FavoritesPage setFavorite={setFavorite} />}
        <button
          onClick={() => setFavorite(!favorite)}
          className="favorite-list-button"
        >
          <img src="../no-heart.png" alt="" />
        </button>
      </div>
    </>
  );
};

export default Page;
