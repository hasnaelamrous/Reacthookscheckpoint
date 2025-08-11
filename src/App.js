import React, { useState, useEffect } from "react";
import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";
import film from "./film.jpg";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=c82ab0405fb981cfd52454edfc40eb87";
function App() {
  const [movies, setMovies] = useState([]);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erreur API: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (!data.results) {
          throw new Error("Données API invalides");
        }
        const formattedMovies = data.results.map((m) => ({
          title: m.original_title || "Untitled",
          description: m.overview || "No description available.",
          posterURL: m.poster_path
            ? `https://image.tmdb.org/t/p/w500${m.poster_path}`
            : {film},
          rating: m.vote_average ? m.vote_average / 2 : 0
        }));
        setMovies(formattedMovies);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="text-3xl font-extrabold  mb-4 ">Popular Movies</h1>

     
      <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />

      <MovieList
        movies={movies.filter(
          (m) =>
            m.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
            m.rating >= filterRating
        )}
      />
    </div>
  );
}

export default App;


