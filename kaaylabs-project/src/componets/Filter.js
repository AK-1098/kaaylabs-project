import React, { useState } from "react";

const Filter = ({ onFilter }) => {
  const [brewedBefore, setBrewedBefore] = useState("");
  const [brewedAfter, setBrewedAfter] = useState("");

  const handleFilter = () => {
    onFilter(brewedBefore, brewedAfter);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Brewed Before"
        value={brewedBefore}
        onChange={(e) => setBrewedBefore(e.target.value)}
      />
      <input
        type="text"
        placeholder="Brewed After"
        value={brewedAfter}
        onChange={(e) => setBrewedAfter(e.target.value)}
      />
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default Filter;
