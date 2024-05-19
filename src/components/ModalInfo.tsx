import React, { useState } from "react";

const ModalInfo = ({ modalInfo, setModal }) => {
  const [dropModal, setDropModal] = useState(false);
  console.log(modalInfo);

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
        {modalInfo.drops?.length > 0 && (
          <ul>
            Droppable items
            {modalInfo.drops?.map((drop) => (
              <li>{drop}</li>
            ))}
          </ul>
        )}
        {modalInfo.common_locations?.length > 0 && (
          <ul>
            Locations
            {modalInfo.common_locations?.map((location) => (
              <li>{location}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ModalInfo;
