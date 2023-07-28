import { lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import SharedLayout from 'layout/SharedLayout';
//react-lazy>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
const MovieDetails = lazy(() => import("./MovieDetails/MovieDetails"));
const ErrorPage = lazy(() => import("pages/ErrorPage/ErrorPage"));
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path='movies' element={<Movies />} />
        <Route path='movies/:movieId' element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};


// import Home from 'pages/Home/Home';
// import Movies from 'pages/Movies/Movies';
// import Cast from "./Cast/Cast";
// import Reviews from "./Reviews/Reviews";
// import MovieDetails from "./MovieDetails/MovieDetails";
// import ErrorPage from "pages/ErrorPage/ErrorPage";