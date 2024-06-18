import React, { useState, useEffect } from "react";

const FavoriteButton = ({ itemId }) => {
  // State to track if the item is in favorites
  const [isFavorite, setIsFavorite] = useState(false);

  // Initialize the state based on localStorage
  useEffect(() => {
    let favorites = localStorage.getItem("favorites");
    if (favorites) {
      favorites = JSON.parse(favorites);
      setIsFavorite(favorites.includes(itemId));
    }
  }, [itemId]);

  // Function to add/remove favorites
  const addToFavorites = (id) => {
    let favorites = localStorage.getItem("favorites");
    if (favorites) {
      favorites = JSON.parse(favorites);
    } else {
      favorites = [];
    }

    if (favorites.includes(id)) {
      favorites = favorites.filter((favoriteId) => favoriteId !== id);
    } else {
      favorites.push(id);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(favorites.includes(id)); // Update the state
  };

  // Handle click with event propagation stopped
  const handleClick = (e) => {
    e.stopPropagation();
    addToFavorites(itemId);
    console.log(`Toggled item with id ${itemId} in favorites`);
  };

  return (
    <div className="favorite-button-container">
      <button onClick={handleClick}>
        {isFavorite ? (
          <img src="../favorite.png" alt="Favorite" />
        ) : (
          <img src="../no-heart.png" alt="Not Favorite" />
        )}
      </button>
    </div>
  );
};

export default FavoriteButton;
