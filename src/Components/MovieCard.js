import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClapperboard } from "@fortawesome/free-solid-svg-icons";

function MovieCard({ movie, addToCart }) {
  return (
    <div className="border border-[#803737] rounded-xl shadow-lg p-4 w-64 h-[450px] flex flex-col justify-between bg-white">
     
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-70 object-cover rounded-lg mb-3"
      />

      
      <div className="flex-1 overflow-hidden">
        <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
          <FontAwesomeIcon icon={faClapperboard} className="text-[#803737]" />
          {movie.title}
        </h3>
        <p className="text-sm text-gray-700 line-clamp-4">{movie.description}</p>
      </div>

     
      <div className="flex items-center justify-between mt-3">
        <p className="text-yellow-500 font-semibold flex items-center gap-1">
          <FontAwesomeIcon icon={faStar} />
          {movie.rating}
        </p>
        <button
          onClick={() => addToCart(movie)}
          className="bg-[#803737] text-white font-semibold py-1 px-3 rounded hover:bg-[#672a2a] transition text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default MovieCard;






