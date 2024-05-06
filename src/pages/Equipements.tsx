import React from "react";

const Equipements = () => {
  return (
    <div>
      <div className="creatures-container">
        <h2>Creatures</h2>
        <input
          type="text"
          placeholder="Type to search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Equipements;
