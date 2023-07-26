import { Link, useParams } from "react-router-dom";
import { getMoviesDetails } from 'API/api-service';
import MovieDetailsCard from 'components/MovieDetailsCard/MovieDetailsCard';
import { useState, useEffect } from 'react';
import Button from 'components/Button/Button';

const Movies = () => {
    const { movieId } = useParams();
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMovieDetails = async () => {
            setError('');
            console.log(movieId)

            try {
                const data = await getMoviesDetails(movieId);
                console.log(data);
                setSelectedMovie(data);
            }
            catch (error) {
                // setError(error.message);
                console.error(error.message);
            }
        }
        fetchMovieDetails()
    }, [movieId])

    return (
        <div>
            <Button>Go back</Button>
            <MovieDetailsCard movie={selectedMovie} />

            <div>
                <p>Additional information</p>
                <Link to='/reviews'>Cast</Link>
                <Link to='/cast'>Reviews</Link>
            </div>

            {/* <TrendingMoviesList /> */}
        </div>
    )
}

export default Movies;