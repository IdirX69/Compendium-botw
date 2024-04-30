import React from "react";

const ModalInfo = ({ modalInfo }) => {
  return (
    <div className="modal-info-container">
      <span>x</span>

      <h4>{modalInfo.name}</h4>
      <div>
        <img src={modalInfo.image} alt="image" />
        <p>{modalInfo.description}</p>
      </div>
    </div>
  );
};

export default ModalInfo;
