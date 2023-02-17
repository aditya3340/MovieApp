import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/MovieSlice";
import MovieCard from "../MovieCard/MovieCard"

const MovieListing = () => {
  const movies = useSelector(getAllMovies);

 

  // const renderMovies =
  //   movies.v === 1 ? (
  //     movies.d.map(movie => {
  //       <h1>{movie}</h1>
  //     })
  //   ) : (
  //     <div>
  //       <h1>Error</h1>
  //     </div>
  //   );

  // movies.d.map(movie => console.log(movie))
  

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {/* {renderMovies} */}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
