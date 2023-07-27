import React from 'react'
import MovieDetailsCard from 'components/MovieDetailsCard/MovieDetailsCard';
import { Link, Outlet } from "react-router-dom";

const MovieDetails = ({ selectedMovie }) => {

    return (
        <>
            <MovieDetailsCard movie={selectedMovie} />
            <div>
                <p>Additional information</p>
                <Link to='cast'>Cast</Link>
                <Link to='reviews'>Reviews</Link>
                <Outlet />
            </div>
        </>
    )
}

export default MovieDetails