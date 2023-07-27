import { Routes, Route } from "react-router-dom";
import SharedLayout from 'layout/SharedLayout';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import SearchMovies from "./SearchMovies/SearchMovies";

export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path='movies' element={<SearchMovies />} />
        <Route path='movies/:movieId' element={<Movies />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
