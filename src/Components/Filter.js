import React from "react";

function Filter({ setFilterTitle, setFilterRating }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 my-6">
      <input  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Search by title..."
        onChange={(e) => setFilterTitle(e.target.value)}
      />
      <input
      className="px-4 py-2 border border-gray-300 rounded-md w-24 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="number"
        placeholder="Min rating"
        min="0"
        max="5"
        onChange={(e) => setFilterRating(Number(e.target.value))}
      />
    </div>
  );
}

export default Filter;

