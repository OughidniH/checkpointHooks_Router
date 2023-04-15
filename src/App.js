import { useState } from "react";
import "./App.css";
import video1 from "./video/naya.webm";
import Description from "./ِComp/Description";
import Filtre from "./ِComp/Filtre";
import MovieList from "./ِComp/MovieList";
import { MovieData } from "./ِComp/movies";
import { Route, Routes } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState(MovieData);
  const [filterTitle, setFilterTitle] = useState("");
  const [rating, setRating] = useState(0);
  console.log(movies);
  return (
    <>
      <header>
        <Filtre
          setFilterTitle={setFilterTitle}
          rating={rating}
          setRating={setRating}
        />
        {/* <Description /> */}
        <Routes>
          <Route
            path="/"
            element={
              <MovieList
                movies={movies}
                filterTitle={filterTitle}
                rating={rating}
                setMovies={setMovies}
              />
            }
          />
          <Route path="/:title" element={<Description movies={movies} />} />
        </Routes>

        <video loop autoPlay muted>
          <source src={video1} type="video/mp4" />
        </video>
      </header>
    </>
  );
}

export default App;
