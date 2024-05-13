import React from "react";

const SearchBar = ({ setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Type to search"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
