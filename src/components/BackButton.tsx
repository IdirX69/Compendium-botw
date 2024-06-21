import React from "react";

const BackButton = ({ handleClick }) => {
  return (
    <span className="back-button-container">
      <img src="./../../public/back-button.png" alt="" onClick={handleClick} />
    </span>
  );
};

export default BackButton;
