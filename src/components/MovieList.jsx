import React from "react";
import { movies } from "../Movies";
import MovieCard from "./MovieCard";
import { useState } from "react";
import AddNewBtn from "./AddNewBtn";
import AddMovie from "./AddMovie";

const MovieList = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className="flex flex-wrap  max-md:justify-center gap-4 p-4">
      <AddNewBtn handleClickOpen={handleClickOpen} />
      {movies.map((item) => (
        <MovieCard
          key={item.id}
          Title={item.Title}
          Description={item.Description}
          PosterURL={item.PosterURL}
          Rating={item.Rating}
        />
      ))}
      <AddMovie handleClickOpen={open} handleClose={handleClose} />
    </section>
  );
};

export default MovieList;
