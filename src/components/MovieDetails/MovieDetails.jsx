import React, { useEffect, useState } from 'react'
import MovieDetailsCard from 'components/MovieDetailsCard/MovieDetailsCard';
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Loader from 'components/Loader/Loader';
import { getMoviesDetails } from 'API/api-service';
import Button from 'components/Button/Button';
import css from 'components/MovieDetails/MovieDetails.module.css';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isLoader, setIsLoader] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

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
            <Button
                handleClick={() => { navigate(location) }}>
                Go back
            </Button>
            {selectedMovie && <MovieDetailsCard movie={selectedMovie} />}
            <div className={css.wrapper}>
                <p className={css.text}>Additional information</p>
                <Link to='cast' className={css.link}>Cast</Link>
                <Link to='reviews' className={css.link}>Reviews</Link>
                <Outlet />
            </div>
        </>
    )
}

export default MovieDetails