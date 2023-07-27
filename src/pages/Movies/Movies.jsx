import { useParams, useNavigate } from "react-router-dom";
import { getMoviesDetails, getSearchMovies } from 'API/api-service';
import { useState, useEffect } from 'react';
import Button from 'components/Button/Button';
import MovieDetails from "components/MovieDetails/MovieDetails";
import SearchMovies from "components/SearchMovies/SearchMovies";

const Movies = () => {
    const { movieId } = useParams();
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [Error, setError] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState(null);

    const navigate = useNavigate();

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

    const onSearchSubmit = (query) => {
        setSearchQuery(query);
    };

    useEffect(() => {
        const fetchSearchMovies = async () => {
            setError('');
            // console.log(movieId)
            try {
                const data = await getSearchMovies(searchQuery);
                console.log(data);
                // setSelectedMovie(data);
            }
            catch (error) {
                setError(error.message);
                console.log(Error)
                // console.error(error.message);
            }
        }
        fetchSearchMovies()
    }, [Error, searchQuery])


    return (
        <div>
            <Button handleClick={() => { navigate(-1) }}>Go back</Button>
            {/* {selectedMovie ?
                (<MovieDetails selectedMovie={selectedMovie} />)
                : (<SearchMovies onSearchSubmit={onSearchSubmit} />)
            } */}
            {selectedMovie && (<MovieDetails selectedMovie={selectedMovie} />)}
            <SearchMovies onSearchSubmit={onSearchSubmit} />

        </div>
    )
}

export default Movies;