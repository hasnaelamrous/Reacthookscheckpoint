import React, { useState } from "react";

function AddMovie({ addMovie }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie({ title, description, poster, rating });
    setTitle("");
    setDescription("");
    setPoster("");
    setRating(0);
  };

  return (
<div className="flex justify-center items-center  h-[250px]">
  <div className="border border-[#803737] rounded-xl shadow-lg p-6 w-auto bg-white">
    <h2 className="text-2xl font-bold text-[#803737] text-center mb-5">Add Movie</h2>
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap gap-3 items-center justify-center"
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#803737] w-40"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#803737] w-40"
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={poster}
        onChange={(e) => setPoster(e.target.value)}
        required
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#803737] w-40"
      />
      <input
        type="number"
        placeholder="Rating"
        min="0"
        max="5"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        required
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#803737] w-20"
      />
      <button
        type="submit"
        className="bg-[#803737] text-white font-semibold py-2 px-4 rounded hover:bg-[#672a2a] transition"
      >
        Add Movie
      </button>
    </form>
  </div>
</div>

  );
}

export default AddMovie;


