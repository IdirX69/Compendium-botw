import React, { useState, useEffect } from "react";

const FavoriteButton = ({ itemId }: { itemId: number }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favoritesString = localStorage.getItem("favorites");
    const favorites = favoritesString ? JSON.parse(favoritesString) : [];
    setIsFavorite(favorites.includes(itemId));
  }, [itemId]);

  const toggleFavorite = (id: number) => {
    const favoritesString = localStorage.getItem("favorites");
    let favorites: number[] = favoritesString
      ? JSON.parse(favoritesString)
      : [];

    if (favorites.includes(id)) {
      favorites = favorites.filter((favoriteId) => favoriteId !== id);
    } else {
      favorites.push(id);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(favorites.includes(id));
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(itemId);
  };

  return (
    <div className="favorite-button-container">
      <button type="button" onClick={handleClick}>
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
