import React from 'react'
import { Link } from 'react-router-dom'

const TrendingMoviesListItem = ({ children, movieId }) => {
    return (
        <li key={movieId}>
            <Link to={`movies/${movieId}`}>{children}</Link>
        </li>
    )
}

export default TrendingMoviesListItem