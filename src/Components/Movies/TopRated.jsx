import axios from "axios";
import React, { useEffect, useState } from "react";

const TopRated = () => {
  const [TopRated, setTopRated] = useState([]);
  useEffect(() => {
    TopData();
  }, []);

  const TopData = async () => {
    const { data } = await axios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=678c9b4411286f011b3e28f4eae6599e&language=en-US&page=1`
    );
    setTopRated(data.results);
  };
  return (
    <div>
      <div className="row3">
        <h2>TOP RATED</h2>
        <div className="row31">
          <div className="row32">
            {TopRated.map((e, i) => (
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

export default TopRated;
