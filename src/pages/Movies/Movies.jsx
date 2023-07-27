import { useParams, useNavigate } from "react-router-dom";
import { getMoviesDetails } from 'API/api-service';
import { useState, useEffect } from 'react';
import Button from 'components/Button/Button';
import MovieDetails from "components/MovieDetails/MovieDetails";

const Movies = () => {
    const { movieId } = useParams();
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [Error, setError] = useState('');

    useEffect(() => {
        const fetchMovieDetails = async () => {
            setError('');
            // console.log(movieId)
            try {
                const data = await getMoviesDetails(movieId);
                // console.log(data);
                setSelectedMovie(data);
            }
            catch (error) {
                setError(error.message);
                console.log(Error)
                // console.error(error.message);
            }
        }
        fetchMovieDetails()
    }, [movieId, Error])

    const navigate = useNavigate();

    // const onGoBack = () => {
    //     navigate(-1)
    // }

    return (
        <div>
            <Button handleClick={() => { navigate(-1) }}>Go back</Button>
            {selectedMovie &&
                <MovieDetails selectedMovie={selectedMovie} />}
        </div>
    )
}

export default Movies;