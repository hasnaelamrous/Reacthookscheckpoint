import React from "react";
import film from "../film.jpg";
function MovieCard({ movie }) {
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
    </div>
  );
}

export default MovieCard;

