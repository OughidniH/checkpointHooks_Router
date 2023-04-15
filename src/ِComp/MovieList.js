import React from "react";
import "./MovieList.css";
import "./MovieCard.css";
import MovieCard from "./MovieCard";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddMovie from "./AddMovie";
import { Link } from "react-router-dom";

const MovieList = ({ movies, filterTitle, rating, setMovies }) => {
  const styleCevronLeft = {
    position: "absolute",
    top: "50%",
    left: "3%",
    width: 25,
    height: 25,
    background: "gray",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    fontSize: 12,
    cursor: "pointer",
    transition: ".3s linear",
    zIndex: "999999999",
  };
  const styleCevronRight = {
    position: "absolute",
    top: "50%",
    width: 25,
    height: 25,
    background: "gray",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    fontSize: 12,
    cursor: "pointer",
    transition: ".3s linear",
    zIndex: "999999999",
    left: "unset",
    right: "3%",
  };
  // const handleLeft = () => {
    
  // }
  return (
    <section>
      <ChevronLeftIcon style={styleCevronLeft} />
      <ChevronRightIcon style={styleCevronRight} />

      <AddMovie setMovies={setMovies} movies={movies} />
      <div className="cards">
        {movies
          .filter(
            (movie) =>
              movie.title
                .toLowerCase()
                .trim()
                .includes(filterTitle.toLowerCase().trim()) &&
              movie.rating >= rating
          )
          .map((movie) => {
            return (
              
                <Link to={`${movie.title}`} className="cards" >
                  <MovieCard key={movie.id} movie={movie} />
                </Link>
            
            );
          })}
      </div>
    </section>
  );
};

export default MovieList;
