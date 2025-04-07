import React from "react";

const SearchBar = ({ setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search notes..."
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full text-black max-w-md p-2 border border-gray-300 rounded mb-4 "
    />
  );
};

export default SearchBar;
