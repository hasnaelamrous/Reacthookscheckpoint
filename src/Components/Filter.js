import React from "react";

function Filter({ setFilterTitle, setFilterRating }) {
  return (
  <div className="flex justify-center items-center mt-2 h-[25px]">
    <div className="flex flex-wrap gap-3 items-center justify-center border border-[#803737] rounded-xl shadow-lg p-4 bg-white">
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => setFilterTitle(e.target.value)}
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#803737] w-40"
      />
      <input
        type="number"
        placeholder="Minimum rating"
        min="0"
        max="5"
        onChange={(e) => setFilterRating(Number(e.target.value))}
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#803737] w-24"
      />
    </div>
  </div>
);


}

export default Filter;




