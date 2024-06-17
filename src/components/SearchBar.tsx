import React from "react";

const SearchBar = ({ setSearch }) => {
  return (
    <div className="searchbar-container">
      <input
        className="searchbar-input"
        type="search"
        placeholder="Type to search"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
