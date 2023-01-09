import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleMovies = () => {
  const { id } = useParams();
  const [state, setstate] = useState();
  useEffect(() => {
    myData();
  }, []);

  const myData = async () => {
    const { data } = await axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=678c9b4411286f011b3e28f4eae6599e&language=en-US&page=1`
    );
    console.log(data);
    setstate(data);
  };
  return (
    <div>
      <div className="singleMovies">
        <img
          src={` https://image.tmdb.org/t/p/w500${
            state?.backdrop_path || "/csU9xxVn8tVyhwx4rw96zse1xrU.jpg"
          }`}
          alt=""
        />
      </div>
      <div className="MoviePic">
        <img
          src={` https://image.tmdb.org/t/p/w500${
            state?.poster_path ||
            state?.backdrop_path ||
            state?.profile_path ||
            "/csU9xxVn8tVyhwx4rw96zse1xrU.jpg"
          }`}
          alt=""
        />
      </div>
      <h1 className="title">{state?.title}</h1>
      <h2 className="title2">{state?.overview}</h2>
      <h2 className="title3">releasing date : {state?.release_date}</h2>
      <h2 className="title4">popularity : {state?.popularity}</h2>

    </div>
  );
};

export default SingleMovies;
