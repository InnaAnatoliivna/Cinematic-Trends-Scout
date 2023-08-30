import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import css from './searchResultsList.module.css'
import { FcFilmReel } from 'react-icons/fc';

const SearchResultsList = ({ arrayResults }) => {
    const location = useLocation();

    return (
        <ul className={css.list}>
            {arrayResults.map(movie => {
                return (
                    <li key={movie.id} className={css.item}>
                        <FcFilmReel />
                        <Link
                            to={`/movies/${movie.id}`}
                            state={{ from: location }}
                            className={css.link}
                        >
                            {movie.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default SearchResultsList