import React, { useState } from "react";

const ModalInfo = ({ modalInfo, setModal }) => {
  const [dropModal, setDropModal] = useState(false);
  console.log(modalInfo);

  const renderCategorySpecificInfo = () => {
    switch (modalInfo.category) {
      case "equipment":
        return (
          <ul className="properties">
            <li>Attack: {modalInfo.properties.attack}</li>
            <li>Defense: {modalInfo.properties.defense}</li>
          </ul>
        );
      case "monsters":
        return (
          <>
            {modalInfo.drops && (
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
      case "materials":
        return (
          <div className="materials-info">
            <p>Category: {modalInfo.category}</p>

            {modalInfo.cooking_effect && (
              <p>Effect: {modalInfo.cooking_effect}</p>
            )}
            {modalInfo.hearts_recovered && (
              <p>Hearts recovered: {modalInfo.hearts_recovered}</p>
            )}
          </div>
        );
      case "creatures":
        return (
          <>
            {modalInfo.edible && <p>This creature is edible.</p>}
            {modalInfo.drops && (
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
        <img src="./korogu.png" alt="" className="korogu-img" />
        <div className="icon-container">
          <img src="./heart.png" alt="" className="heart-img" />
          {modalInfo.drops && (
            <img
              src="./treasure.png"
              alt=""
              className="heart-img"
              onClick={() => setDropModal(!dropModal)}
            />
          )}
        </div>
        <p>{modalInfo.description}</p>
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
