import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PopularMovies from "../Movies/PopularMovies";
import Footer from "../Footer/Footer";
import TopRated from "./TopRated";
import NavDisplay from "../NavBar/NavDisplay";
import XO from "./XO.gif";

const Movies = () => {
  const Navigate = useNavigate();
  const [Loader, setLoader] = useState(true);
  const [Movies, setMovies] = useState([]);

  const MovieData = async () => {
    setLoader(true);
    const { data } = await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=678c9b4411286f011b3e28f4eae6599e&language=en-US&page=1`
    );
    setMovies(data.results);
    console.log(data.results);
    setLoader(false);
  };
  useEffect(() => {
    MovieData();
  }, []);
  return (
    <div>
      <NavDisplay />
      <div className="row">
        <h2>NETFLIX ORIGINALS</h2>
        <div className="row1">
          <div className="row2">
            {Loader ? (
              <div className="Loader">
                <img src={XO} alt="" />
              </div>
            ) : (
              Movies.map((e, i) => (
                <img
                  key={i}
                  onClick={() => Navigate(`/SingleMovie/${e.id}`)}
                  src={` https://image.tmdb.org/t/p/w500${
                    e.poster_path ||
                    e.backdrop_path ||
                    e.profile_path ||
                    "/csU9xxVn8tVyhwx4rw96zse1xrU.jpg"
                  }`}
                  alt=""
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
