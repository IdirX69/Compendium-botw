import React, { useState } from "react";

const ModalInfo = ({ modalInfo, setModal }) => {
  const [dropModal, setDropModal] = useState(false);
  console.log(modalInfo);

  const renderHearts = (recovery) => {
    const hearts = [];
    const fullHearts = Math.floor(recovery);
    const hasHalfHeart = recovery % 1 !== 0;

    for (let i = 0; i < fullHearts; i++) {
      hearts.push(
        <img
          key={`full-${i}`}
          src="./heart.png"
          alt="heart"
          style={{ width: "25px", height: "25px" }}
        />
      );
    }

    if (hasHalfHeart) {
      hearts.push(
        <img
          key="half"
          src="half-heart.png"
          alt="half heart"
          style={{ width: "25px", height: "25px" }}
        />
      );
    }

    return hearts;
  };

  const renderCategorySpecificInfo = () => {
    switch (modalInfo.category) {
      case "equipment":
        return (
          <>
            {modalInfo?.properties && (
              <div className="properties">
                <h5>Properties</h5>
                <ul>
                  <li>Attack: {modalInfo.properties.attack}</li>
                  <li>Defense: {modalInfo.properties.defense}</li>
                </ul>
              </div>
            )}
          </>
        );
      case "monsters":
        return (
          <>
            {modalInfo?.drops?.length > 0 && (
              <div className="drops">
                <h5>Droppable items</h5>
                <ul>
                  {modalInfo.drops?.map((drop, index) => (
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
            <h5>Category: {modalInfo.category}</h5>
            <ul>
              {modalInfo.cooking_effect && (
                <li>Effect: {modalInfo.cooking_effect}</li>
              )}
              {modalInfo.hearts_recovered && (
                <li>Hearts recovered: {modalInfo.hearts_recovered}</li>
              )}
            </ul>
          </div>
        );
      case "creatures":
        return (
          <>
            {modalInfo.edible && (
              <div className="edible">
                <p>This creature is edible.</p>
              </div>
            )}
            {modalInfo.drops?.length > 0 && (
              <div className="drops">
                <h5>Droppable items</h5>
                <ul>
                  {modalInfo.drops.map((drop, index) => (
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
            <p>Category: {modalInfo.category}</p>
            {modalInfo.value && <p>Value: {modalInfo.value} rupees</p>}
          </div>
        );
      default:
        return <p>No additional information available.</p>;
    }
  };

  return (
    <div className="modal-info-container">
      <span onClick={() => setModal(false)}>x</span>
      <h4>{modalInfo.name}</h4>
      <div className="info-container">
        <img src={modalInfo.image} alt="image" />
        <div className="hearts-recovered">
          {modalInfo.hearts_recovered > 0 &&
            renderHearts(modalInfo.hearts_recovered)}
        </div>
        <p>{modalInfo.description}</p>
        <img src="./korogu.png" alt="" className="korogu-img" />
      </div>
      <div className="more-information">
        {renderCategorySpecificInfo()}
        {modalInfo.common_locations && (
          <div className="locations">
            <h5>Locations</h5>
            <ul>
              {modalInfo.common_locations.map((location, index) => (
                <li key={index}>{location}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalInfo;
