import React from "react";

const ModalInfo = ({ modalInfo, setModal }) => {
  return (
    <div className="modal-info-container">
      <span onClick={() => setModal(false)}>x</span>

      <h4>{modalInfo.name}</h4>
      <div>
        <img src={modalInfo.image} alt="image" />
        <img src="./korogu.png" alt="" className="korogu-img" />
        <p>{modalInfo.description}</p>
      </div>
    </div>
  );
};

export default ModalInfo;
