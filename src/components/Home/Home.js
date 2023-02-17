import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import MovieApi from "../../common/Apis/MovieApi";
import { APIKey } from "../../common/Apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/MovieSlice";
import axios from "axios";
const Home = () => {
  //Movies Api
  // http://www.omdbapi.com/?i=tt3896198&apikey=62fd7a6a

  const dispatch = useDispatch();

  // useEffect(() => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '5f89da6003mshfcbe68a2337b941p1b0148jsncce8564c79b9',
  //       'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
  //     }
  //   };
  //   const fetchMovies =  () => {
  //     fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
  //     .then(response => response.json())
  //     .then(data => {
  //       dispatch(addMovies(data))
  //     })
  //     .catch(err => console.error(err));
  //   }

  //   fetchMovies()
  // }, [])


  //using axios
  const options = {
    method: "GET",
    url: "https://online-movie-database.p.rapidapi.com/auto-complete",
    params: { q: "game of thr" },
    headers: {
      "X-RapidAPI-Key": "5f89da6003mshfcbe68a2337b941p1b0148jsncce8564c79b9",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchMovies = () => {
      axios
        .request(options)
        .then(response => dispatch(addMovies(response.data)))
        .catch(function (error) {
          console.error(error);
        });
    };

    fetchMovies()
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
