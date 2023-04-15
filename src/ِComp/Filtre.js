import React from "react";
import "./Filtre.css";
import img1 from "../images/logo.png";
import { Rating } from "@mui/material";

const Filtre = ({ setFilterTitle, rating, setRating }) => {
  return (
    <>
      <div className="mynav">
        <div className="logo_ul">
          <img src={img1} alt="" />
          <h3>Movies App</h3>
        </div>

        <div className="search">
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
          <input
            type="text"
            placeholder="Search..."
            id="search_input"
            onChange={(e) => {
              setFilterTitle(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};
export default Filtre;
