import axios from "axios";
import React, { useEffect, useState } from "react";

const PopularMovies = () => {
  const [NameData, setNameData] = useState([]);
  useEffect(() => {
    data();
  }, []);
  const data = async () => {
    const { data } = await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=678c9b4411286f011b3e28f4eae6599e&language=en-US&page=1`
    );
    setNameData(data.results);
  };
  return (
    <div>
      <div className="row10">
        <h2>Popular Movies</h2>
        <div className="row11">
          <div className="row12">
            {NameData.map((e, i) => (
              <img
                key={i}
                src={`https://image.tmdb.org/t/p/original${
                  e ? e.poster_path : ""
                }`}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularMovies;
