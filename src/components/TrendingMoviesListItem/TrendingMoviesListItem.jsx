import React from 'react';
import { Link } from 'react-router-dom';
import { FcFilmReel } from 'react-icons/fc';
import css from 'components/TrendingMoviesList/TrendingMoviesList.module.css'

const TrendingMoviesListItem = ({ children, movieId }) => {
    return (
        <li key={movieId} className={css.item}>
            <FcFilmReel />
            <Link to={`movies/${movieId}`} className={css.link}>{children}</Link>
        </li>
    )
}

export default TrendingMoviesListItem;