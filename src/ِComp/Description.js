import React from "react";
// import video1 from "../video/naya.webm";
import "./Description.css";
import { Link, useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import Button from "@mui/material/Button";
import "./MovieList.css";
import "./AddMovie.css";

import YouTube from "react-youtube";
// import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import StarIcon from '@mui/icons-material/Star';

const Description = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((el) => el.title === title);
  console.log(movie);

  return (
    <>
      <div className="content">
        <h1 id="title">{movie.title}</h1>
        <p>{movie.description}</p>
        <div className="details">
          <h6>{movie.time}</h6>

          <h4>
            <Rating name="read-only" value={movie.rating} readOnly />
          </h4>
        </div>
        <YouTube videoId={movie.trailer} />
        <Link to='/'>
          <button className="custom-btn btn-12">
            <span>Click!</span>
            <span>Go Back Home</span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Description;
