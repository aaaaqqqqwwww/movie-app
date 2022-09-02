import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./Movie";

export default function List() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(`  https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=ko-KR&page=1`).then((res) => {
      console.log(res.data);
      setMovies(res.data.results);
    });
  }, []);

  return (
    <>
      <div className="container">
        <h2 className="title">
          <strong>Popolar</strong> movie
        </h2>
        <ul className="movieList">
          {movies.map((item, idx) => {
            // return <Movie imgSrc={item.poster_path} point={item.vote_average} />;
            return <Movie movieInfo={item} key={idx} />;
          })}
        </ul>
      </div>
    </>
  );
}
