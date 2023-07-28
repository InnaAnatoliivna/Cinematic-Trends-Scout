import React from 'react'
import { Link } from 'react-router-dom'

const SearchResultsList = ({ arrayResults }) => {

    return (
        <ul>
            {arrayResults.map(movie => {
                return (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default SearchResultsList