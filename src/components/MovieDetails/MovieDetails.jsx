import React, { useEffect, useState } from 'react'
import MovieDetailsCard from 'components/MovieDetailsCard/MovieDetailsCard';
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import Loader from 'components/Loader/Loader';
import { getMoviesDetails } from 'API/api-service';
import Button from 'components/Button/Button';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isLoader, setIsLoader] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovieDetails = async () => {
            setIsLoader(true);
            try {
                const data = await getMoviesDetails(movieId);
                setSelectedMovie(data);
            }
            catch (error) {
                console.error(error.message);
            } finally {
                setIsLoader(false);
            }
        }
        fetchMovieDetails()
    }, [movieId])

    return (
        <>
            {isLoader && <Loader />}
            <Button handleClick={() => { navigate(-1) }}>Go back</Button>
            {selectedMovie && <MovieDetailsCard movie={selectedMovie} />}
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