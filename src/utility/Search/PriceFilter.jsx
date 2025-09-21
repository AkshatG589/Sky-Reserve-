import React from "react";

const PriceFilter = ({ priceRange, setPriceRange }) => {
  return (
    <div className="mb-6">
      <label className="font-medium mb-2 block">
        Filter by Price: ${priceRange[0]} - ${priceRange[1]}
      </label>
      <input
        type="range"
        min="0"
        max="500"
        step="10"
        value={priceRange[1]}
        onChange={e => setPriceRange([0, Number(e.target.value)])}
        className="w-full"
      />
    </div>
  );
};

export default PriceFilter;