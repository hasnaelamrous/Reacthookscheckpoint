import React from "react";
import film from "../film.jpg";
function MovieCard({ movie, onAdd}) {
  return (
    <div className="cursor-pointer border border-gray-300 rounded-md p-4 m-3 w-60 shadow hover:shadow-lg transition-shadow duration-300">
      <img
        src={movie.posterURL}
        alt={movie.title}
        className="w-full h-56 object-cover rounded-md mb-3"
      />
      <h3 className="text-lg font-semibold  mb-2 ">{movie.title}</h3>
      <p className="text-sm text-gray-600 h-16 overflow-hidden">{movie.description}</p>
      <p className="mt-2 font-semibold text-orange-500"> {movie.rating}</p>
     <button
        onClick={() => onAdd(movie, onAdd)}
        className="cursor-pointer mt-2 w-full bg-orange-500 text-white py-1 rounded hover:bg-green-700"
      >
        Add
      </button>
    </div>
  );
}

export default MovieCard;

