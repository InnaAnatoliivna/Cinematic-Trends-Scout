import React from 'react'

const MovieDetailsCard = ({ movie }) => {
    return (
        <div>
            <img src='' alt='' />
            <ul>
                <li>
                    <h2>{movie.title} + date</h2>
                    <p>User score: {(movie.vote_average
                        / 10) * 100}%</p>
                </li>
                <li>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                </li>
                <li>
                    <h4>Genres</h4>
                    <p>{movie.genres.map(genre => <span>{genre.name}</span>)}</p>
                </li>
            </ul></div>
    )
}

export default MovieDetailsCard