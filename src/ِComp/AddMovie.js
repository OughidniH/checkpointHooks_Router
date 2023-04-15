import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Rating, TextareaAutosize } from "@mui/material";
import "./MovieList.css";
import "./AddMovie.css";

// import { TextField } from "@mui/material";
const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#fff",
  border: "2px solid blue",

  p: 4,
  opacity: ".7",
  textAlign: "center",
  borderRadius: 5,
};
const styInput = {
  width: "100%",
  height: 20,
  background: "#e0dede",
  justifyContent: " center",
  display: " flex",
  margin: "20px auto",
  padding: "20px",
  border: "none",
  outline: " none",
  borderRadius: 5,
  opacity: 1,
};
const styInputArea = {
  width: "100%",
  height: 60,
  background: "#e0dede",
  justifyContent: " center",
  display: " flex",
  margin: "5px auto",
  padding: "20px",
  border: "none",
  outline: " none",
  borderRadius: 5,
  opacity: 1,
};
const styBtn = {
  width: "100%",
  height: 50,
  margin: " 10px auto",
  justifyContent: "center",
  display: "block",
  color: "#fff",
  background: "#00bdff",
  fontSize: "1em",
  fontWeight: "bold",
  marginTop: 20,
  outline: "none",
  border: "none",
  borderRadius: 5,
  transition: " 0.2s ease-in",
  cursor: "pointer",
  animation: "button 1s linear infinite",
};

export default function AddMovie({ setMovies, movies }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [AddTitle, setAddTitle] = useState("");
  const [AddDescription, setAddDescription] = useState("");
  const [AddTime, setAddTime] = useState("");
  const [AddPosterUrl, setAddPosterUrl] = useState("");
  const [AddImage, setAddImage] = useState("");
  const [Addrating, setAddRating] = useState("");
const [Addtrailer,setAddTrailer] = useState("");
  const handelAdd = () => {
    setMovies([
      ...movies,
      {
        id: Math.random(),
        title: AddTitle,
        description: AddDescription,
        time: AddTime,
        posterUrl: AddPosterUrl,
        image: AddImage,
        rating: Addrating,
        trailer:Addtrailer,
      },
    ]);
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen} className="add-btn">
        Add Movie
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h1 className="stylabel">Add a new Movie</h1>
          </Typography>
          <input
            style={styInput}
            type="text"
            name="txt"
            placeholder="Title"
            required=""
            onChange={(e) => {
              setAddTitle(e.target.value);
            }}
          />
          <input
            style={styInput}
            type="text"
            name="txt"
            placeholder="Time"
            required=""
            onChange={(e) => {
              setAddTime(e.target.value);
            }}
          />
          <input
            style={styInput}
            type="text"
            name="txt"
            placeholder="PosterUrl"
            required=""
            onChange={(e) => {
              setAddPosterUrl(e.target.value);
            }}
          />
          <input
            style={styInput}
            type="text"
            name="txt"
            placeholder="Image"
            required=""
            onChange={(e) => {
              setAddImage(e.target.value);
            }}
          />
          <input
            style={styInput}
            type="text"
            name="txt"
            placeholder="Trailer"
            required=""
            onChange={(e) => {
              setAddTrailer(e.target.value);
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: " center",
              alignItems: "center",
              marginTop: "2px",
            }}
          >
            <Rating
              name="no-value"
              value={Addrating}
              onChange={(e, newValue) => {
                setAddRating(newValue);
              }}
            />

            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="Description"
              style={styInputArea}
              onChange={(e) => {
                setAddDescription(e.target.value);
              }}
            />
          </div>
          <button style={styBtn} onClick={handelAdd}>
           Add Movie
          </button>
        </Box>
      </Modal>
    </div>
  );
}
