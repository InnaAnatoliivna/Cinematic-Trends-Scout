import { Routes, Route } from "react-router-dom";
import SharedLayout from 'layout/SharedLayout';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
import MovieDetails from "./MovieDetails/MovieDetails";
// import ErrorPage from "pages/ErrorPage/ErrorPage";
// import SearchMovies from "./SearchMovies/SearchMovies";
// import React, { useState } from 'react';
// import { getSearchMovies } from 'API/api-service';


export const App = () => {

  // const [searchQuery, setSearchQuery] = useState('');

  // const onSearchSubmit = (query) => {
  //   setSearchQuery(query);
  //   console.log(query)
  // };

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        {/* <Route path='movies' element={<SearchMovies onSearchSubmit={onSearchSubmit} />} /> */}
        <Route path='movies' element={<Movies />} />
        {/* <Route path='movies/:query' element={<Movies />} /> */}
        <Route path='movies/:movieId' element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Route>
    </Routes>
  );
};
