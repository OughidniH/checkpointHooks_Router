import React from "react";
import "./MovieCard.css";
import "./MovieList.css";

import { Rating } from "@mui/material";
const MovieCard = ({ movie }) => {
  return (
    <div className="cards">
      <a className="card" href="https://#" rel="">
        <img src={movie.posterUrl} alt="" className="poster" />
        <div className="rest_card">
          <img src={movie.image} alt="" />
          <div className="cont">
            <h4> {movie.title}</h4>
            <div className="sub">
              <p> {movie.time} </p>
              <Rating name="read-only" value={movie.rating} readOnly />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default MovieCard;
