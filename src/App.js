import React, { useState } from "react";
import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";
import AddMovie from "./Components/AddMovie";
import film from "./film.jpg";
import film1 from "./film1.jpg";
import film2 from "./film2.jpg";
import film3 from "./film3.jpg";
import film4 from "./film4.jpg";
import film5 from "./film5.jpg";
import film6 from "./film6.jpg";
import film7 from "./film7.jpg";
import film8 from "./film8.jpg";
function App() {
  const [movies, setMovies] = useState([
       { title: "Inception",
         description: "A skilled thief enters people's dreams.",
         poster: film3,
         rating: 5 },
       { title: "Interstellar",
          description: "Explorers travel through a wormhole in space.",
          poster: film1, 
          rating: 4 },
        { title: "Totoro",
          description: "The film is a celebration of childhood, imagination, and the magic of nature",
          poster: film,
          rating: 4 },
         { title: "Avatar: The Last Airbender",
           description: "Aang, the last Airbender, must master all elements to save the world.",
           poster: film4,
           rating: 5 },
          { title: "V for vendetta",
            description: "In a dystopian future, a masked vigilante fights against a totalitarian regime.",
            poster: film5,
            rating: 4 },
          { title: "Harry Potter and the Sorcerer's Stone",
            description: "A young wizard, Harry Potter, discovers his magical heritage and attends Hogwarts School of Witchcraft and Wizardry.",
            poster: film2,
           rating: 4 },
          { title: "The Matrix",
            description: "A hacker discovers reality is a simulation controlled by machines.",
            poster: film8,
              rating: 4 },
          { title: "The Dark Knight",
            description: "Batman faces the Joker in a battle for Gotham City.",
            poster: film6,
            rating: 4 },
  ]);

  const [cart, setCart] = useState([]);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

 
  const addToCart = (movie) => {
    setCart([...cart, movie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="flex justify-center text-[#803737] font-bold text-3xl items-center mb-10 h-[25px]">
        My Movie App
      </h1>

      <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />
      <AddMovie addMovie={addMovie} />

    
      <MovieList movies={filteredMovies} addToCart={addToCart} />

      <p className="mt-4 font-semibold">Items in cart: {cart.length}</p>
    </div>
  );
}

export default App;







