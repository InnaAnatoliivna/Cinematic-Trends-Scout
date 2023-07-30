import React from 'react';
import { getPosterMovie } from 'API/api-service';
import defaultImage from 'defaultImageActor.png';
import css from 'components/MovieDetailsCard/MovieDetailsCard.module.css';

const MovieDetailsCard = ({ movie }) => {

    const getUserScope = movie => Math.floor((movie.vote_average / 10) * 100);
    const getYear = movie => movie.release_date.split('-')[0];
    const getGenres = movie => movie.genres.map(genre => <span key={genre.id}>{genre.name}</span>);

    const posterPath = movie.poster_path ? getPosterMovie(movie.poster_path) : defaultImage;

    return (
        <div className={css.flexWrap}>
            <div>
                <img
                    src={getPosterMovie(posterPath)}
                    alt={movie.original_title}
                    width={250}
                />
            </div>
            <div className={css.wrapper}>
                <h2 className={css.title}>{movie.title} ({getYear(movie)})</h2>
                <p className={css.text}>User score: {getUserScope(movie)}%</p>
                <h3 className={css.title}>Overview</h3>
                <p className={css.text}>{movie.overview}</p>
                <h4 className={css.title}>Genres</h4>
                <p>{getGenres(movie)}</p>
            </div>
        </div>
    )
}

export default MovieDetailsCard;