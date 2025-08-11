import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  if (movies.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;

