import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies, addToCart }) { 
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default MovieList;






