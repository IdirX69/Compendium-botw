import React, { useState } from "react";

const ModalInfo = ({ modalInfo, setModal }) => {
  const [dropModal, setDropModal] = useState(false);
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
          <ul>
            {dropModal && modalInfo.drops?.map((drop) => <li>{drop}</li>)}
          </ul>
        </div>
        <p>{modalInfo.description}</p>
      </div>
    </div>
  );
};

export default ModalInfo;
