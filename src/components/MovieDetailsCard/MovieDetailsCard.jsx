import React from 'react';
import { getPosterMovie } from 'API/api-service';

const MovieDetailsCard = ({ movie }) => {

    const getUserScope = movie => Math.floor((movie.vote_average / 10) * 100);
    const getYear = movie => movie.release_date.split('-')[0];
    const getGenres = movie => movie.genres.map(genre => <span>{genre.name}</span>);

    return (
        <div>
            <img
                src={getPosterMovie(movie.poster_path)}
                alt={movie.original_title}
                width={250}
            />
            <h2>{movie.title} ({getYear(movie)})</h2>
            <p>User score: {getUserScope(movie)}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <p>{getGenres(movie)}</p>
        </div>
    )
}

export default MovieDetailsCard;