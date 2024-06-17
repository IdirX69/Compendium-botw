import React, { useState } from "react";

const FavoriteButton = () => {
  const [favorite, setFavorite] = useState(false);
  return (
    <div className="favorite-button-container">
      <button onClick={() => setFavorite(true)}>
        <img src="../no-heart.png" alt="" />
        <img src="../favorite.png" alt="" />
      </button>
    </div>
  );
};

export default FavoriteButton;
