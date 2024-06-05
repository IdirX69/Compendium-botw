import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import { Data } from "../types/types";

const ModalInfo = ({ category, id, setModal }) => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    document.body.classList.remove("no-scroll");
    setModal(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${id}`
        );
        setData(res.data.data);
        setLoading(false);
      } catch (err) {
        setError("Erreur lors de la récupération des données.");
        setLoading(false);
      }
    };

    fetchData();
  }, [category, id]);

  useEffect(() => {
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const renderHearts = (recovery: number) => {
    const hearts = [];
    const fullHearts = Math.floor(recovery);
    const hasHalfHeart = recovery % 1 !== 0;

    for (let i = 0; i < fullHearts; i++) {
      hearts.push(
        <img
          key={`full-${i}`}
          src="./../heart.png"
          alt="heart"
          style={{ width: "25px", height: "25px" }}
        />
      );
    }

    if (hasHalfHeart) {
      hearts.push(
        <img
          key="half"
          src="./../half-heart.png"
          alt="half heart"
          style={{ width: "25px", height: "25px" }}
        />
      );
    }

    return hearts;
  };

  const renderCategorySpecificInfo = () => {
    if (!data) return null;

    const { drops } = data;

    switch (data.category) {
      case "equipment":
        return (
          <>
            {data?.properties && (
              <div className="properties">
                <h5>Properties</h5>
                <ul>
                  <li>Attack: {data.properties.attack}</li>
                  <li>Defense: {data.properties.defense}</li>
                </ul>
              </div>
            )}
          </>
        );
      case "monsters":
        return (
          <>
            {drops && drops?.length > 0 && (
              <div className="drops">
                <h5>Droppable items</h5>
                <ul>
                  {data.drops?.map((drop, index) => (
                    <li key={index}>{drop}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        );
      case "materials":
        return (
          <div className="materials-info">
            <h5>Effect</h5>
            <ul>{data.cooking_effect && <li> {data.cooking_effect}</li>}</ul>
          </div>
        );
      case "creatures":
        return (
          <>
            {data.edible && (
              <div className="edible">
                <p>This creature is edible.</p>
              </div>
            )}
            {drops && drops?.length > 0 && (
              <div className="drops">
                <h5>Droppable items</h5>
                <ul>
                  {drops.map((drop, index) => (
                    <li key={index}>{drop}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        );
      case "treasures":
        return (
          <div className="treasures-info">
            <p>Category: {data.category}</p>
            {data.value && <p>Value: {data.value} rupees</p>}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="modal">
      <div className="modal-info-container">
        <span onClick={handleClick}>
          <img src="./../../public/back-button.png" alt="" />
        </span>
        <h4>{data && data.name}</h4>
        <div className="info-container">
          <img src={data && data.image} alt="image" />
          {data && data.hearts_recovered > 0 && (
            <div className="hearts-recovered">
              {renderHearts(data.hearts_recovered)}
            </div>
          )}
          <p>{data?.description}</p>
        </div>
        <div className="more-information">
          {renderCategorySpecificInfo()}
          {data?.common_locations && (
            <div className="locations">
              <h5>Locations</h5>
              <ul>
                {data.common_locations.map((location, index) => (
                  <li key={index}>{location}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalInfo;
